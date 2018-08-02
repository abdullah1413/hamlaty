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

 fillValue = (field, e) => {
  this.setState({
   [field]: e.target.value
  })
 }

 handleSumbit = (e) => {
  e.preventDefault();
  console.log('====================================');
  console.log(this.state.firstName);
  console.log('====================================');
 }
 render() {
  const { firstName, lastName, dob, nationality, mobile } = this.state;
  return (
   <Fragment>
    <form onSubmit={this.handleSumbit}>
     <div className="Login-center">Signup</div>
     <div className="form-group">
      <input value={firstName} onChange={this.fillValue.bind(this, 'firstName')} type="text" className="form-control" aria-describedby="emailHelp" placeholder="First name" />
     </div>
     <div className="form-group">
      <input value={lastName} onChange={this.fillValue.bind(this, 'lastName')} type="text" className="form-control" placeholder="Last name" />
     </div>
     <div className="form-group">
      <input value={dob} onChange={this.fillValue.bind(this, 'dob')} type="text" className="form-control" placeholder="date of birth" />
     </div>
     <div className="form-group">
      <input value={nationality} onChange={this.fillValue.bind(this, 'nationality')} type="text" className="form-control" placeholder="Nationality" />
     </div>
     <div className="form-group">
      <input value={mobile} onChange={this.fillValue.bind(this, 'mobile')} type="text" className="form-control" placeholder="Phone number" />
     </div>
     <button type="submit" className=" Center-button btn btn-primary">Signup</button>
    </form>
   </Fragment>
  )
 }
}