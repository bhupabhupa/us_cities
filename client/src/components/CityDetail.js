import React, { Component } from 'react';


class CityDetail extends Component {
    render() {
        return(
            <div className="col s12 m7" >
                <h2 className="header">{this.props.city.name }</h2>
				<div className="card horizontal">
					<div className="card-image">
						<img src={this.props.city.imageURL} alt={this.props.city.name}/>
					</div>
					<div className="card-stacked">
						<div className="card-content">
							<p>{this.props.city.details}</p>
						</div>
					</div>
                </div>
            </div>
        )
    }
}

export default CityDetail;