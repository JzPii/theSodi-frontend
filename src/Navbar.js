import React, { Component } from 'react';
import LoginFB from './LoginFB';

export default class Navbar extends Component {

state = {
isLogin: localStorage.getItem('username') ?  true : false,
username: localStorage.getItem('username'),
profilepic: localStorage.getItem('profilepic') 
}

LogOut = () => {
    localStorage.clear()
    this.setState ({
        isLogin: false,
        username: '',
        profilepic: ''
    })
    this.props.appLogout(false)
}

handleLogin = (isLogin) => {
    this.setState({
        isLogin: isLogin,
        username: localStorage.getItem('username'),
        profilepic: localStorage.getItem('profilepic') 

    })
    this.props.appLogin(true)
}
  render() {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    
    <a href="/"><img  className="logo" src="/Flatlogo.png" alt="logo" height="50"></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{fontSize:'14px'}}>
        <li className="nav-item">
            <a className="btn btn-outline-light" style={{border: 'none'}}  href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        {/* <li className="nav-item">
            <a className="nav-link" href="#trailer">something 1</a>
        </li> */}
        <li className="nav-item">
            <a className="btn btn-outline-light" style={{border: 'none'}}  href="http://janyzupi.wix.com/PhongVuCV">About me</a>
        </li>
        
        <li className="nav-item">
            <button className="btn btn-outline-light" style={{border: 'none'}} onClick={() => this.props.handleClick()}  type="button" name="dark_light" >🌝🌓</button>
        </li>


        </ul>

        {/* <button type="button " className="btn btn-danger my-2 my-sm-0">Join Us</button> */}
        {!this.state.isLogin ?
            (<LoginFB handleLogin={this.handleLogin}></LoginFB>):
            (
            <div>
                <img  src={this.state.profilepic} style={{marginRight: '10px'}}/> 
                <button  className="btn btn-danger" onClick={this.LogOut}>Logout</button>
            </div>
            )
        }
    </div>
</nav>

</div>
    )
  }
}
