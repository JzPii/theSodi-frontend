import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import logo from './logo1.png';
import Slide from 'react-reveal/Slide';

export default class Header extends Component {
  render() {
    return (
<div className="theHeader text-center" >
    <div className="row">
      <div className="col-lg-6 col-12" style={{paddingLeft: '75px'}}>
      <Slide left>
        <h1 className="headerclass" >What is Sodi?</h1>
        

        <h2 className="headerclass">
          <ReactTypingEffect
            speed = {50}
            eraseDelay = {3000}
            staticText = "It's a"
            text = {[ "matchmaker app...", "dating app...", "Oh I know lots of apps that do the same" ]}
          />
        </h2>
        <h2 className="headerclass">But actually</h2>
        <h2 className="headerclass">It simply is an app that you thought </h2>
        <h2 className="headerclass">you've never ever experienced in your life before</h2>
      </Slide>
     

      </div>

      <div className="col-lg-6 col-12">
      <Slide right>
       <img src={logo} alt="logo" height="470"/>
      </Slide>
      </div>


      
        {/* <h1 >Save the date</h1>
        <h2 >May 23, 2019</h2> 
        <ReactTypingEffect
          text="Hello." //text=["Hello.", "World!"]
          />
        <div style={{paddingTop: '200px'}}>
            <h4>Can't wait to see me?</h4>
            <a id="btndarkmode" className=" btn btn-sm btn-outline-warning" href="https://run-runaway.netlify.com/game.html">Try my game</a>
        </div> */}
    </div>
</div>
    )
  }
}
