import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CityList from './CityList';
import CityDetail from './CityDetail';

class Landing extends Component {

    render() {
        return(
            <div>
                <CityList />
                {
                    this.props.city && this.props.city.name && <CityDetail city={this.props.city}/>
                }
            </div>
        )
    }
}

function mapStateToProps({cities, city}) {
    return { cities, city } ;
}

export default connect(mapStateToProps, actions)(Landing);