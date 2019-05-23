import React, { Component } from 'react'
import Chatroom from './Chatroom.js'
import './booth.css';
import Navbar from '../Navbar'

export default class BoothID extends Component {
  constructor () {
    super ();
    this.state = {
      darkmode: true,
      boothLists: [],

    }
  }

  changeMode() {
    this.setState({darkmode: !this.state.darkmode})
  }

  render() {
  let mode
  if (this.state.darkmode) {
    mode='dark-mode'
  }
  else {
    mode = ""
  }
  
    return (

<div className={mode}>
      <Navbar handleClick={() => this.changeMode()}></Navbar>

      <div className="chatApp row" style={{paddingTop: '70px'}}>
        <div className="col-6">
        <h3> Inside a booth </h3>
        </div>


        <Chatroom className="col-6"></Chatroom>
      </div>
</div>
    )
  }
}

