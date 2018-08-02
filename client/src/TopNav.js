import React, { Component } from 'react';
import topNavBar from './images/top_nav_bar.jpg';

export default class TopNav extends Component {
 render() {
  const style = {
   background: `url(${topNavBar})`
  }
  return (
   <img className="TopNav-img img-responsive" src={topNavBar} alt=""/>
  )
 }
}