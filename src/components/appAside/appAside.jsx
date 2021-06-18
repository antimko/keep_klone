import React, { Component } from 'react';

class AppAside extends Component {
    state = {  }
    render() { 
        return ( 
            <div classname="aside">
                <h2>Aside</h2>
                <myLink href="/" icon="fa fa-pencil">Home</myLink>
            </div>
         );
    }
}
 
export default AppAside;