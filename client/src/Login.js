import React, { Component, Fragment } from 'react';
import signin from './images/login.jpg';
import signup from './images/signup.jpg';

import './Login.css';

export default class Login extends Component {
 handlelogin = (e) => {
  this.props.history.push('/');

 }

 handleSignup = (e) => {

 }
 render() {
  return (
   <Fragment>
    <div className="login-height backgroundImage">
     <form className="Login-form">
      <div className="form-group">
       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="اسم المستخدم" />
      </div>
      <div className="form-group">
       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="كلم المرور" />
      </div>
      <div className="">
       <img onClick={this.handlelogin} src={signin} className="Login-img" alt="" />
      </div>
     </form>
    </div>
   </Fragment>
  )
 }
}