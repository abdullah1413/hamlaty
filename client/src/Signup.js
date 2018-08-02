import React, { Component, Fragment } from 'react';
import { Calendar } from 'primereact/calendar';

export default class Signup extends Component {
 constructor(props) {
  super(props);

  this.state = {
   firstName: '',
   lastName: '',
   dob: '',
   nationality: '',
   id: '',
   hajjNo: '',
   email: '',
   password: '',
   username: '',
   groupName: ''
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
  // const d = [
  //  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  // ]
  // const
  const { firstName, lastName, dob, nationality, mobile } = this.state;
  return (
   <Fragment>
    <form onSubmit={this.handleSumbit}>
     <div className="Login-center">تسجيل الدخول</div>
     <div className="form-group">
      <input value={firstName} onChange={this.fillValue.bind(this, 'firstName')} type="text" className="form-control" placeholder="الاسم الاول" />
     </div>
     <div className="form-group">
      <input value={lastName} onChange={this.fillValue.bind(this, 'lastName')} type="text" className="form-control" placeholder="اسم العائلة" />
     </div>
     {/* <div className="form-group">
      <div className="content-section implementation">
       <div className="ui-g ui-fluid">
        <div className="ui-g-12 ui-md-4">
        </div> */}
        {/* <Calendar value={dob} onChange={this.fillValue.bind(this, 'dob')} format='DD/MM/YYYY' date='4-12-2014' /> */}
        {/* <Calendar value={dob} onChange={this.fillValue.bind(this, 'dob')}></Calendar> */}
        {/* <input value={dob} onChange={this.fillValue.bind(this, 'dob')} type="text" className="form-control" placeholder="تاريخ الميلاد" /> */}
       {/* </div> */}
       <div className="form-group">
        <input value={nationality} onChange={this.fillValue.bind(this, 'nationality')} type="text" className="form-control" placeholder="جنسية" />
       </div>
       <div className="form-group">
        <input value={nationality} onChange={this.fillValue.bind(this, 'id')} type="text" className="form-control" placeholder="رقم الهويه/ الاقامه" />
       </div>
       <div className="form-group">
        <input value={nationality} onChange={this.fillValue.bind(this, 'hajjNo')} type="text" className="form-control" placeholder=" رقم تصريح الحج" />
       </div>
       <div className="form-group">
        <input value={nationality} onChange={this.fillValue.bind(this, 'username')} type="text" className="form-control" placeholder="اسم المستخدم" />
       </div>
       <div className="form-group">
        <div className="form-group">
         <input value={mobile} onChange={this.fillValue.bind(this, 'email')} type="text" className="form-control" placeholder="البريد الإلكتروني" />
        </div>
        <input value={nationality} onChange={this.fillValue.bind(this, 'password')} type="text" className="form-control" placeholder="كلمه السر" />
       </div>
       <div className="dropdown">
        <button className="btn" type="button" data-toggle="dropdown">اسم الحمله
    <span className="caret"></span></button>
        <ul className="dropdown-menu">
         <li><a href="#">HTML</a></li>
         <li><a href="#">CSS</a></li>
         <li><a href="#">JavaScript</a></li>
        </ul>
       </div>
       {/* <input value={mobile} onChange={this.fillValue.bind(this, 'groupName')} type="text" className="form-control" placeholder="اسم الحمله" /> */}
       <button type="submit" className=" Center-button btn btn-primary">Signup</button>
    </form>
   </Fragment>
     )
    }
}