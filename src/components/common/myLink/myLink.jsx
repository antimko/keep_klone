import React, { Component } from 'react';
import links from "./myLink.module.css"

class  MyLink  extends Component {
    state = {  }
    render() { 
        return ( 
            <a className={links.link} href="/">
               <i className={`fa fa-${this.props.icon}`}></i>
               {this.props.children}
            </a>
         );
    }
}
 
export default MyLink;