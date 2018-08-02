import React, { Component, Fragment } from 'react';

export default class Signup extends Component {
 constructor(props) {
  super(props);

  this.state = {
   firstName: '',
   lastName: '',
   dob: '',
   nationality: '',
   mobile: '',
  }
 }
 render() {
  return (
   <Fragment>
    <form>
     <div className="Login-center">Signup</div>
     <div className="form-group">
      <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="First name" />
     </div>
     <div className="form-group">
      <input type="text" className="form-control" placeholder="Last name" />
     </div>
     <div className="form-group">
      <input type="text" className="form-control" placeholder="date of birth" />
     </div>
     <div className="form-group">
      <input type="text" className="form-control" placeholder="Nationality" />
     </div>
     <div className="form-group">
      <input type="text" className="form-control" placeholder="Phone number" />
     </div>
     <button type="submit" className=" Center-button btn btn-primary">Signup</button>
    </form>
   </Fragment>
  )
 }
}