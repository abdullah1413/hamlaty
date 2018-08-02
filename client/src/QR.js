import React, { Component } from 'react';
import background from './images/background.jpg';
// import background from './images/background.jpg';
import axios from 'axios';

export default class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    }
  }

  fillValue = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('====================================');
    console.log(this.state.firstName);
    console.log('====================================');
    axios.get('')
      .then(res => {
        // handle success
        console.log(res);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }
  render() {
    const { firstName } = this.state;
    return (
      <div className="qr-height">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input value={firstName} onChange={this.fillValue.bind(this, 'firstName')} type="text" className="form-control" placeholder="الاسم الاول" />
          </div>
        </form>
      </div>

    )
  }
}