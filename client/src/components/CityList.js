import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CityList extends Component {

    state = {
        active: ""
    }

    setActive(abb) {
        this.setState({
            active : abb
        })
    }

    getCityDetails(abb) {
        this.props.getCity(abb);
    }

    clearCity() {
        this.setState({
            active : ""
        })
        this.props.clearCity();
    }

    componentDidMount() {
        this.props.getAllCities();
    }

    render() {
        return(
            <div>
                <ul className="collection" style={{maxHeight: "180px", "overflowY": "auto", cursor: "pointer" }}>
                    {
                        this.props.cities && this.props.cities.map((city) => {
                            return (<li className="collection-item" style={ this.state.active === city.abbreviation ? {backgroundColor: '#827f81', color: '#FFFFFF'} : {}} onClick={() => this.setActive(city.abbreviation)} key={city.abbreviation}>{city.name}</li>)
                        })            
                    }
                </ul>
                <div className="center">
                    <a className="waves-effect waves-light btn" disabled={this.state.active.length === 0} onClick={() => this.getCityDetails(this.state.active)}>Details</a>
                    &nbsp;
                    <a className="waves-effect waves-light btn" disabled={!(this.props.city.name && this.props.city.name !== undefined)} onClick={() => this.clearCity()}>Clear</a>
                </div>
            </div>
        )
    }
}

function mapStateToProps({cities, city}) {
    return { cities, city }
}

export default connect(mapStateToProps, actions)(CityList);