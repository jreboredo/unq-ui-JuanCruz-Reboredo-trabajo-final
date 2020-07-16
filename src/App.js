import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Home";
import Competencia from "./Compentencia";
import Reglas from "./Reglas";



function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route  exact path ="/" component ={Home}/>
            <Route  exact path ="/competencia/:seleccion" component ={Competencia}/>
            <Route  exact path ="/reglas" component ={Reglas}/>
            <Route path ="*" render ={() => <h1>404 - Not Found </h1>}/>
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
