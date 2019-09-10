import React, { useState } from 'react';
import './IntroductionPage2.css';
import { Link } from 'react-router-dom';

const IntroductionPage2 = () => {

    const[ dni, setDni ] = useState('');
    const[ name, setName] = useState('');
    
    const data = {
        "name": name.split(" ")[0],
        "lastName": name.split(" ")[1],
        "dni": dni,

	}

      return ( 
        <div className="section-white">
            <form>
                <p className="title2">Protégelos ahora</p>
                <p className="subtitle2">Ingresa los datos del titular</p>
                <div>
                    <select className="selec-dni">
                        <option>DNI</option>
                    </select>
                    <input 
                        onChange={e => setDni(e.currentTarget.value)}
                        className="dni" 
                        id="dni" 
                        type="number" 
                        placeholder="Nro de Documento"
                        required 
                    />
                </div>
                <div>
                    <input
                        onChange={e => setName(e.currentTarget.value)}
                        className="name" 
                        id="name" 
                        type="text" 
                        placeholder="Nombre" 
                        required 
                    />
                </div>
                <div className="check">
                    <input 
                        id="accept"
                        type="checkbox" 
                        className="check-input"
                        // onChange={this.onChange.bind(this)}
                    />
                    <label className="text-accept">
                        Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.
                    </label>
                </div>
                <div className="check">
                    <input 
                        id="accept2"
                        type="checkbox" 
                        className="check-input2"
                        // onChange={this.onChange.bind(this)}
                    />
                    <label className="text-accept2">
                        Acepto la Política de Envío de Comunicaciones Comerciales.
                    </label>
                </div>
                <Link to={{pathname: "/pasouno", state: {data: data}}}><button className="btn-start">COMENZAMOS</button></Link>
            </form>
        </div>
      ); 
    }
  
  export default IntroductionPage2;