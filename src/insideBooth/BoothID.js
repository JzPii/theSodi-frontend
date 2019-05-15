import React, { Component } from 'react'
import Chatroom from './Chatroom.js'
import './booth.css';

export default class BoothID extends Component {
  render() {
    return (
      <div className="chatApp">
        <h3>Inside a Booth</h3>
        <Chatroom></Chatroom>
      </div>
    )
  }
}

