import React, { Component } from "react";
import ListaNotas from "./components/Note/ListaNotas";
import Titulo from "./components/Note/Titulo";
import FormularioCad from "./components/Note/FormularioCad";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";

import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
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

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategoria };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section>
        <ListaCategorias
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}
        />
        <Titulo />
        <FormularioCad
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <ListaNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
