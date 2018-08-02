import React, { Component } from 'react';
import background from './images/background.jpg';
import QRImg from './images/QR.jpg';
import lostImg from './images/lost.jpg';
import infoImg from './images/info.jpg';

export default class SelectOptions extends Component {
 render() {
  return (
   <div className="SelectOptions-container">
    <button type="button" className="btn"><img className="btn-img" src={QRImg} alt="" /></button>
    <button type="button" className="btn"><img className="btn-img" src={lostImg} alt="" /></button>
    <button type="button" className="btn"><img className="btn-img" src={infoImg} alt="" /></button>
   </div>
  )
 }
}