import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Booth from './Booth'
import CreateNewBooth from './CreateNewBooth';
import Loader from 'react-loader-spinner'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      isLogin: localStorage.getItem('username') ?  true : false,
      darkmode: true,
      boothLists: [],
    }
  }
changeMode() {
  this.setState({darkmode: !this.state.darkmode})
  
}

getList = async () => {
  const url = `https://sodi-backend.herokuapp.com/booths`;
  let results = await fetch(url);
  let data = await results.json(); 
  this.setState({
    boothLists: data.booths
  })
}

appLogin = (isLogin) => {
  this.setState({
    isLogin: isLogin })
}

appLogout = () => {
  this.setState({
    isLogin: false })
}

componentDidMount() {
  this.getList()
}

render () {
  let mode
  if (this.state.darkmode) {
    mode='dark-mode'
  }
  else {
    mode = "light-mode"
  }
console.log(this.props)
  return (
<div className={mode}>
    <Navbar handleClick={() => this.changeMode()} appLogin = {this.appLogin} appLogout={this.appLogout}/>

  { this.state.isLogin ? (
        <div>
 
        <div className="container" style={{paddingTop: '100px'}}>
          <div className="d-flex justify-content-center my-4" style={{width: '100%'}}>
            <CreateNewBooth></CreateNewBooth>            
            <input className="form-control " style={{maxWidth: '300px', marginBottom:'30px', opacity: '0.8'}} type="text" placeholder="Search for it" />  
          </div>
          </div>
          
          
          <div className="row">
            {this.state.boothLists ? 
            this.state.boothLists.map( booth => <Booth className={mode} booth={booth}></Booth>):
            <Loader 
            type="Mutating-Dots"
            color="#d3933a"
            height="100"	
            width="100"
         /> 
            }
           </div>
  
      </div>
  ) : (
    <div>
      <Header></Header>
    </div>
  ) }

    
    
</div>
  );
}
  
}

export default App;
