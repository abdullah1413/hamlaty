import React, { Component } from 'react';
import qrtest from './images/qrcodeImg.png';
import axios from 'axios';
import signup from './images/print.jpg';

export default class QR extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    }
  }

  // handleSubmit = (e) => {
  //   axios.get('')
  //     .then(res => {
  //       // handle success
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       // handle error
  //       console.log(error);
  //     })
  // }
  render() {
    return (
      <div className="QR-container qr-height backgroundImage">
        <div className="QR">
          <img src={qrtest} alt=""/>
          <img onClick={this.handleSumbit} className="QR-img" src={signup} alt="" />
        </div>
      </div>

    )
  }
}