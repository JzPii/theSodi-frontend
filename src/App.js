import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Booth from './Booth'

class App extends Component {
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

getMovies = async () => {
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
                  {/* <!-- Button trigger modal --> */}
            <button className="btn btn-outline-warning mx-4" style={{maxHeight: '38px'}} type="button"  data-toggle="modal" data-target="#exampleModal">
              Create a Booth
            </button>

            {/* <!-- Modal --> */}
            
            <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
                <div className="modalBlur">
                </div>
              <div className="modal-dialog" role="document">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Setup a new Booth</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Booth name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example: All about the space, the classique La liga"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Booth description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Example: All about the space, the classique La liga"></textarea>
                      </div>
                  </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline-warning"> Create new Booth</button>
                  </div>
                </div>
              </div>
            </div>
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
