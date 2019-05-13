import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="theHeader d-flex justify-content-center text-center">
            <div style={{maxWidth:'600px'}}>
                <h1 >Save the date</h1>
                <h2 >May 23, 2019</h2> 
                <div style={{paddingTop: '200px'}}>
                    <h4>Can't wait to see me?</h4>
                    <a id="btndarkmode" className=" btn btn-sm btn-outline-warning" href="https://run-runaway.netlify.com/game.html">Try my game</a>
                </div>
            </div>
        </div>
    )
  }
}
