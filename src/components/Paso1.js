import React, { useState } from 'react';
import './Paso1.css';
import { Link } from 'react-router-dom';

const Paso1 = (props) => {

      const [ mail, setMail ] = useState('');

      const datosRegistrados = props.location.state.data;
      // console.log(datosRegistrados)

      const datosCorreo = {'mail': mail, ...props.location.state.data};

      return ( 
        <div className="paso1">
          <img className="regreso" src="https://user-images.githubusercontent.com/45088762/64511550-2e071480-d2aa-11e9-94cd-1e643b316b9a.png" alt="back"/>
          <p className="paso">PASO 1 DE 4</p>
          <p className="title3">Hola {datosRegistrados.name}, cuéntanos sobre ti</p>
          <p className="subtitle3">Podrás protegerlos por solo S/20 al mes por asegurado</p>
          <p className="form-title">Datos del titular</p>
            <select className="selec-dni2" disabled>
              <option >DNI</option>
            </select>
            <input 
              className="dni2" 
              type="number" 
              value={datosRegistrados.dni} 
              required 
              disabled 
              id="dni"/>
            <input 
              className="email" 
              type="email" 
              placeholder="Correo"
              onChange={e => setMail(e.currentTarget.value)}
              required 
            />
            <p className="seleccionar">¿ESTE SEGURO ES PARA TI?</p>
            <input 
              className="selec" 
              type="radio" 
              name="gender" 
              value="si" 
            />
            <label 
              className="label1" 
              htmlFor="si"
            >
              Sí
            </label>
            <input 
              className="selec2" 
              type="radio" 
              name="gender" 
              value="no"
            />
            <label 
              className="label2" 
              htmlFor="no"
            >
              No
            </label>
            <p 
              className="modificar"
            >
              Modificar DNI
            </p>
            <Link to={{pathname: "/pasodos", state: {data: datosCorreo}}}><button className="btn-continuar">Continuar</button></Link>
        </div>
      ); 
    }

  
  export default Paso1;