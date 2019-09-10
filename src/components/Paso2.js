import React from 'react';
import './Paso2.css';
import { Link } from 'react-router-dom';

const Paso2 = (props) => {
      console.log(props)
      const datosCorreo = props.location.state.data;
      console.log(datosCorreo)

      return ( 
        <div className="paso2">
          <img className="regreso2" src="https://user-images.githubusercontent.com/45088762/64511550-2e071480-d2aa-11e9-94cd-1e643b316b9a.png" alt="back"/>
          <p className="paso-2">PASO 2 DE 4</p>
          <p className="titulo">Tus asegurados</p>
          <p className="subtitulo">presentanos a quienes vamos a proteger</p>
          <hr/>
          <div>
            <p className="nombre">{datosCorreo.name} {datosCorreo.lastName}</p>
            <label className="dni-fn">DNI {datosCorreo.dni} F.N</label>
            <button className="btn-edit">Editar</button>
            <button className="btn-eliminar">Eliminar</button>
          </div>
          <hr/>
          <Link to={{pathname: "/pasotres"}}><button className="otro-asegurado">Quiero asegurar a alguien más</button></Link>
          <Link to={{pathname: "/pasocuatro"}}><button className="next">Continuar</button></Link>
        </div>
      ); 
    }
  
  export default Paso2;