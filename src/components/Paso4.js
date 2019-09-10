import React, { Component } from 'react';
import './Paso4.css';
import { Link } from 'react-router-dom';

class Paso4 extends Component{
  
    render() {
      return ( 
        <div className="paso4">
          <img className="regreso4" src="https://user-images.githubusercontent.com/45088762/64511550-2e071480-d2aa-11e9-94cd-1e643b316b9a.png" alt="back"/>
          <p className="paso-4">PASO 2 DE 4</p>
          <p>Tus asegurados</p>
          <p>presentanos a quienes vamos a proteger</p>
          <hr/>
          <div>
            <p>{this.props.name}</p>
            <label>DNI {this.props.dni}</label>
            <label>F.N {this.props.birthdate}</label>
            <button>Editar</button>
            <button>Eliminar</button>
          </div>
          <hr/>
          <div>
            <p>{this.props.nameInsured}</p>
            <label>DNI {this.props.dniInsured}</label>
            <label>F.N {this.props.birthdateInsured}</label>
            <button>Editar</button>
            <button>Eliminar</button>
          </div>
          <hr/>
          <p>Quiero asegurar a alguien más</p>
          <Link to={{pathname: "/pasocinco"}}><button className="next">Continuar</button></Link>
        </div>
      ); 
    }
  }
  
  export default Paso4;