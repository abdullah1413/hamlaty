import React, { Component, Fragment } from 'react';

export default class Login extends Component {
 render() {
  return (
   <Fragment>
    <form>
     <div className="Login-center">Login</div>
     <div className="form-group">
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
     </div>
     <div className="form-group">
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
     </div>
     <button type="submit" className=" Center-button btn btn-primary">Login</button>
    </form>
   </Fragment>
  )
 }
}