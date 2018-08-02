import React, { Component, Fragment } from 'react';
import homeIcone from './images/icons/homeIcone.jpg';
import infoIcon from './images/icons/infoIcon.jpg';
import loginIcon from './images/icons/loginIcon.jpg';
import lostIcon from './images/icons/lostIcon.jpg';
import qrCodeIcon from './images/icons/qrCodeIcon.jpg';
import callusIcon from './images/icons/callusIcon.jpg';
import whoareWeIcon from './images/icons/whoareWeIcon.jpg';
import login from './images/login.jpg';

export default class Home extends Component {
 render() {
  return (
   <Fragment>
    <div class="homepage">
     <div className="btnhome">
      <img src={login} className="" alt="Cinque Terre" />
     </div>
    </div>
    <div class="icons">
     <img src={qrCodeIcon} className="Home-img" alt="Cinque Terre" />
     <img src={lostIcon} className="Home-img" alt="Cinque Terre" />
     <img src={loginIcon} className="Home-img" alt="Cinque Terre" />

    </div>
    <div class="icons">
     <img src={callusIcon} className="Home-img" alt="Cinque Terre" />
     <img src={whoareWeIcon} className="Home-img" alt="Cinque Terre" />
     <img src={infoIcon} className="Home-img" alt="Cinque Terre" />

    </div>
   </Fragment>
  )
 }
}