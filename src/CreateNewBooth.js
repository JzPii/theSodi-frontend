import React, { Component } from 'react'

export default class CreateNewBooth extends Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }
  // postnewBooth() {
  //   fetch(url, {
  //     headers: {'Content-Type': 'application/json'},
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data) // Prints result from `response.json()` in getRequest
  //     })
  //     .catch(error => console.error(error))
  // }
  // handleClick() {
  //   const data = { 'name': , ''}
  //   postnewBooth(data)
  // }
  render() {
    return (
      <div>
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
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Booth name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Example: All about the space, the classique La liga, ..."/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Booth description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Example: Let's talk about the universe and human being, ..."></textarea>
                      </div>
                  </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                    <button type="button" 
                    className="btn btn-outline-warning"
                    // onClick={this.handleClick}
                    >
                       Create new Booth
                       </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
  }
}
