import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Booth from './Booth'
import CreateNewBooth from './CreateNewBooth';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      darkmode: false,
      boothLists: [],

    }
  }
changeMode() {
  this.setState({darkmode: !this.state.darkmode})
  
}

getList = async () => {
  const url = `./testdb.jason`;
  let results = await fetch(url);
  let data = await results.json(); 
  this.setState({
    boothLists: data.results
  })
}


render () {
  let mode
  if (this.state.darkmode) {
    mode='dark-mode'
  }
  else {
    mode = "light-mode"
  }

  return (
<div className={mode}>
    <Navbar handleClick={() => this.changeMode()} />
    <Header></Header>
    <div className="container" style={{marginTop: '100px'}}>
      <div className="d-flex justify-content-center my-4" style={{width: '100%'}}>
        <CreateNewBooth></CreateNewBooth>            
        <input className="form-control " style={{maxWidth: '300px', marginBottom:'30px'}} type="text" placeholder="Search for it" />  
      </div>
      </div>
      
      <div className="row">
        <Booth className={mode}></Booth>
        <Booth className={mode}></Booth>
        <Booth className={mode}></Booth>
      </div>
    
    
</div>
  );
}
  
}

export default App;
