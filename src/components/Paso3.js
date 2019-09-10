import React, { useState } from 'react';
import './Paso3.css';
import { Link } from 'react-router-dom';

const Paso3 = () => {
    const [ dni2, setDni2 ] = useState('');
    const [ name2, setName2 ] = useState('');
    const [ lastName2, setLastName2] = useState('');
    const [ lastName3, setLastName3 ] = useState('');
    const [ fn, setFN ] = useState('');

    const nuevoAsegurado = {
        dni2, name2, lastName2, lastName3, fn, "id": dni2
    };

      return ( 
        <div className="paso3">
          <img className="regreso3" src="https://user-images.githubusercontent.com/45088762/64511550-2e071480-d2aa-11e9-94cd-1e643b316b9a.png" alt="back"/>
          <p className="paso-3">PASO 2 DE 4</p>
          <p>Tus asegurados</p>
          <p>presentanos a quienes vamos a proteger</p>
          <hr/>
          <div>
            <label>ASEGURADOS(01)</label>
            <button>VER TODOS</button>
          </div>
          <hr/>
          <form>
          <p>Datos del asegurado Nº2</p>
          <div>
                <select className="selec-dni-insured">
                    <option>DNI</option>
                </select>
                <input 
                    onChange={e => setDni2(e.currentTarget.value)}
                    className="dni-insured" 
                    id="dni-insured" 
                    type="number" 
                    placeholder="Nro de Documento"
                    required 
                />
            </div>
            <div>
                <input 
                    onChange={e => setName2(e.currentTarget.value)}
                    className="name-insured" 
                    id="name-insured" 
                    type="text" 
                    placeholder="Nombres" 
                    required 
                />
            </div>
            <div>
                <input 
                    onChange={e => setLastName2(e.currentTarget.value)}
                    className="last-name" 
                    id="last-name" 
                    type="text" 
                    placeholder="Apellido Paterno" 
                    required 
                />
            </div>
            <div>
                <input 
                    onChange={e => setLastName3(e.currentTarget.value)}
                    className="last-name2" 
                    id="last-name2" 
                    type="text" 
                    placeholder="Apellido Materno" 
                    required 
                />
            </div>
            <div>
                <input 
                    onChange={e => setFN(e.currentTarget.value)}
                    className="birthdate" 
                    id="birthdate" 
                    type="date" 
                    placeholder="Fecha de nacimiento" 
                    required 
                />
            </div>
            <p className="genero">GÉNERO</p>
            <input className="male" type="radio" name="gender" value="male"/><label htmlFor="si">Masculino</label>
            <input className="female" type="radio" name="gender" value="female"/><label htmlFor="no">Femenino</label>
            <div>
                <button>Cancelar</button>
                <Link to={{pathname: "/pasocuatro", state: {data: nuevoAsegurado }}}><button className="next">Continuar</button></Link>
            </div>
          </form>
        </div>
      ); 
    }
  
  export default Paso3;