import React, { Component } from 'react';
import TopNav from './TopNav';
// import footer from './images/footer.jpg'; 

export default class Layout extends Component {
 render() {
  return (
   <div>
    <TopNav/>
    {this.props.children}
   </div>
  )
 }
}