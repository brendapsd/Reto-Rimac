import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IntroductionPage from './components/IntroductionPage';
import IntroductionPage2 from './components/IntroductionPage2'; 
import RedStrip from './components/RedStrip';
import Paso1 from './components/Paso1';
import Paso2 from './components/Paso2'; 
// import Paso3 from './components/Paso3';
// import Paso4 from './components/Paso4';
import './App.css';

const App = () => {
    
    // fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona')
    // .then(response => {
    //   console.log(response)
    //   return response.json();
    // })
    // .then(myJson => {
    //   console.log(myJson);
    // });


    return (
      <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={IntroductionPage} />
      <Route path="/" exact component={IntroductionPage2} />
      <Route path="/pasouno" exact component={RedStrip} />
      <Route path="/pasouno" exact component={Paso1} />
      <Route path="/pasodos" exact component={RedStrip} />
      <Route path="/pasodos" exact render={Paso2} />
      <Route path="/pasotres" exact component={RedStrip} />
      {/* <Route path="/pasotres" exact render={Paso3} />
      <Route path="/pasocuatro" exact component={RedStrip} />
      <Route path="/pasocuatro" exact render={Paso4} />
      <Route path="/pasocinco" exact component={RedStrip} /> */}
    </Router>
    );
}

export default App;
