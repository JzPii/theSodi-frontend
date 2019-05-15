import React, { Component } from 'react';
import logo from './FlatLogo.png';

export default class Navbar extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    
    <img className="logo" src={logo} alt="logo" height="50"/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{fontSize:'14px'}}>
        <li className="nav-item">
            <a className="nav-link" href="#poster">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#trailer">something 1</a>
        </li>
        
        
        <li className="nav-item">
            <a className="nav-link" href="#news">something 2</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="Aboutus.html">something 3</a>
        </li>
        
        </ul>

        <button onClick={() => this.props.handleClick()} className="btn btn-outline-light" type="button" name="dark_light"  style={{marginRight:'10px'}}>Toggle 🌛</button>
        <button type="button " className="btn btn-danger my-2 my-sm-0">Join Us</button>
        <button className="btn btn-outline-warning" style={{borderRadius:'40px', marginLeft:'5px'}}>J</button>
    </div>
</nav>

</div>
    )
  }
}
