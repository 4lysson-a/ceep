import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import Titulo from "./components/Titulo";
import FormularioCad from "./components/FormularioCad";

import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section>
        <Titulo />
        <FormularioCad criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
