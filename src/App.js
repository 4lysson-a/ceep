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

  deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    console.log("deletar");
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section>
        <Titulo />
        <FormularioCad criarNota={this.criarNota.bind(this)} />
        <ListaNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
