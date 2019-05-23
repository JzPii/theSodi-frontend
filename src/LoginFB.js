import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import React, { Component } from 'react'

export default class LoginFB extends Component {
state = {
    isLoginFB: false

}

    render() {
const responseFacebook = response => {
console.log(response);
if (response) {
    this.setState({
    isLoginFB: true
    }, () => {console.log(response.picture.data.url);
        localStorage.setItem("username", response.name);
        localStorage.setItem("profilepic", response.picture.data.url);    
        this.props.handleLogin(true)} );
}

};
return (
    <div>
         <FacebookLogin
            className="form-popup"
            appId="313212689242996" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={responseFacebook}
            render={renderProps => (
                <i className=" btn btn-primary fab fa-facebook-f" onClick={renderProps.onClick}><span className="font-extra">Login with Facebook</span></i>
            )}
        /> 
    </div>
)
    }
}
