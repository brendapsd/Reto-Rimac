import React, { Component } from 'react';
import './RedStrip.css';

class RedStrip extends Component{
  
    render() {
      return ( 
        <div className="red-strip">
            <img className="logo-rimac" src="https://user-images.githubusercontent.com/45088762/64461870-1f5f0880-d0c4-11e9-99fe-236ee8ee7c2d.png" alt="Logo Rimac"/> 
            <hr/>
            <img className="girl-surprised" width="360" alt="Illustration2" src="https://user-images.githubusercontent.com/45088762/64508028-df557c80-d2a1-11e9-9c33-a394a3976d34.png"></img>
        </div>
      ); 
    }
  }
  
  export default RedStrip;