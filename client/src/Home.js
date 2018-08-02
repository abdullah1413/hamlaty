import React, { Component, Fragment } from 'react';
import homeIcone from './images/icons/homeIcone.jpg';
import infoIcon from './images/icons/infoIcon.png';
import loginIcon from './images/icons/loginIcon.png';
import lostIcon from './images/icons/lostIcon.png';
import qrCodeIcon from './images/icons/qrCodeIcon.png';
import contactusIcon from './images/icons/contactusIcon.png';
import whoareWeIcon from './images/icons/whoareWeIcon.png';
import signup from './images/signup.jpg';

export default class Home extends Component {
 handleClickSignup = () => {
  this.props.history.push('/signup');
 }

 handleClickQrCode = () => {
  this.props.history.push('/qr');
 }
 render() {
  return (
   <Fragment>
    <div class="homepage">
     <div className="btnhome">
      <img onClick={this.handleClickSignup} src={signup} className="" alt="Cinque Terre" />
     </div>
    </div>
    <div class="icons">
     <img onClick={this.handleClickQrCode} src={qrCodeIcon} className="Home-img" alt="Cinque Terre" />
     <img src={lostIcon} className="Home-img" alt="Cinque Terre" />
     <img src={loginIcon} className="Home-img" alt="Cinque Terre" />

    </div>
    <div class="icons">
     <img src={contactusIcon} className="Home-img" alt="Cinque Terre" />
     <img src={whoareWeIcon} className="Home-img" alt="Cinque Terre" />
     <img src={infoIcon} className="Home-img" alt="Cinque Terre" />
    </div>
   </Fragment>
  )
 }
}