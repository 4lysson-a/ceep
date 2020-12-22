import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import Titulo from "./components/Titulo";
import FormularioCad from "./components/FormularioCad";

import './app.css'

class App extends Component {
  render() {
    return (
      <section>
        <Titulo/>
        <FormularioCad />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
