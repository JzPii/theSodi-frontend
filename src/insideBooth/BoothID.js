import React, { Component } from 'react'
import Chatroom from './Chatroom.js'
import './booth.css';

export default class BoothID extends Component {
  render() {
    return (
      <div className="chatApp row">
        <div className="col-6">
        <h3> Inside a booth </h3>
        </div>


        <Chatroom className="col-6"></Chatroom>
      </div>
    )
  }
}

