import React, { Component, Fragment } from 'react';
import { Calendar } from 'primereact/calendar';
import signup from './images/signup.jpg';

import './Signup.css';

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
        this.props.history.push('/');
    }
    render() {
        const { firstName, lastName, dob, nationality, mobile } = this.state;
        return (
            <Fragment>
                <div className="backgroundImage">
                    <form onSubmit={this.handleSumbit} className="Signup-container">
                        <br />
                        <div className="form-group">
                            <input value={firstName} onChange={this.fillValue.bind(this, 'firstName')} type="text" className="form-control Signup-input" placeholder="الاسم الاول" />
                        </div>
                        <div className="form-group">
                            <input value={lastName} onChange={this.fillValue.bind(this, 'lastName')} type="text" className="form-control Signup-input" placeholder="اسم العائلة" />
                        </div>
                        <div className="form-group">
                            <input value={nationality} onChange={this.fillValue.bind(this, 'nationality')} type="text" className="form-control Signup-input" placeholder="جنسية" />
                        </div>
                        <div className="form-group">
                            <input value={nationality} onChange={this.fillValue.bind(this, 'id')} type="text" className="form-control Signup-input" placeholder="رقم الهويه/ الاقامه" />
                        </div>
                        <div className="form-group">
                            <input value={nationality} onChange={this.fillValue.bind(this, 'hajjNo')} type="text" className="form-control Signup-input" placeholder=" رقم تصريح الحج" />
                        </div>
                        <div className="form-group">
                            <input value={nationality} onChange={this.fillValue.bind(this, 'username')} type="text" className="form-control Signup-input" placeholder="اسم المستخدم" />
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <input value={mobile} onChange={this.fillValue.bind(this, 'email')} type="text" className="form-control Signup-input" placeholder="البريد الإلكتروني" />
                            </div>
                            <input value={nationality} onChange={this.fillValue.bind(this, 'password')} type="text" className="form-control Signup-input" placeholder="كلمه السر" />
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                اسم الحمله
                            </button>
                            <ul className="dropdown-menu">
                                <li><a>تفويض</a></li>
                                <li><a>بشائر</a></li>
                                <li><a>الاحسان</a></li>
                            </ul>
                            <img onClick={this.handleSumbit} className="Signup-img" src={signup} alt="" />
                        </div>
                        <br />

                        <br />
                    </form>
                </div>
            </Fragment>
        )
    }
}