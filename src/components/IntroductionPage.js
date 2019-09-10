import React, { Component } from 'react';
import './IntroductionPage.css';

class IntroductionPage extends Component{
  
    render() {
      return ( 
        <div className="section-red">
            <img className="logo-rimac" src="https://user-images.githubusercontent.com/45088762/64461870-1f5f0880-d0c4-11e9-99fe-236ee8ee7c2d.png" alt="Logo Rimac"/> 
            <hr/>
            <p className="title">Seguro de accidentes para <strong>Niños y Jóvenes</strong></p>
            <p className="subtitle">En accidentes los cubrimos al 100% para que se recuperen por completo.</p>
            <ul>
              <li>Atención médica y medicinas</li>
              <li>Examenes de laboratorio</li>
              <li>Hospitalización y rehabilitación</li>
              <li>Cirugías y operaciones</li>
            </ul>
            <p className="credits">© 2018 RIMAC Seguros y Reaseguros.</p>
            <img width="236" alt="Illustration" src="https://user-images.githubusercontent.com/45088762/64495663-43585080-d262-11e9-9d77-3671243f1b74.png"/>
        </div>
      ); 
    }
  }
  
  export default IntroductionPage;