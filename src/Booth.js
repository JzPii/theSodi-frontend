import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import BoothID from './insideBooth/BoothID';

export default class Booth extends Component {
  render() {
    return (
<div className="col-lg-4 col-md-4 col-sm-12">
    <div className="card" style={{marginBottom:20}}>
        {/* <img className="card-img-top" alt="img" style={{}} src={'http://image.tmdb.org/t/p/w500/' + this.props.poster_path} /> */}
        <div className="container card-body">
            <h2 className="font-weight-bold text-center" style={{fontFamily: 'fantasy', color: '#c0c0c0'}}>{this.props.boothName}booth Name</h2>
            <p className="text-right font-italic text-muted">Occupied: {this.props.vote_average}/4 </p>
            
            <div className="row">
                <div className="col-6">
                    <p className="text-right" style={{}}>{this.props.userInterest}userInterest </p>
                </div>
                <div className="col-6">
                    <p className="text-left" style={{}}>{this.props.boothLookingfor}boothLookingfor</p>
                </div>
            </div>

            <div className="d-flex justify-content-around mb-3">
                <Link to="/boothid" component={BoothID} className="btn btn-warning rounded-2 col-8" style={{backgroundColor: 'none'}}>Join</Link>

            </div>
        </div>
    </div>
</div>
      
    )
  }
}
