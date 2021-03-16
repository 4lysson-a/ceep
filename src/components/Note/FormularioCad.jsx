import React, { Component } from "react";
import "./StyleForm.css";

class FormularioCad extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault(); // prevenir o comportamento padrão
    evento.stopPropagation(); // pare sua propagação
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this._criarNota.bind(this)}>
          <input
            className="nota-titulo"
            placeholder="Título"
            type="text"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
          <select
            onChange={this._handleMudancaCategoria.bind(this)}
            placeholder="Categorias"
          >
            <option value="Sem Categoria">
              Sem categoria
            </option>

            {this.props.categorias.map((categoria, index) => {
              return <option key={index}>{categoria}</option>;
            })}
          </select>

          <textarea
            placeholder="Escreva sua nota aqui ..."
            name="description"
            id="description"
            cols="40"
            rows="10"
            onChange={this._handleMudancaTexto.bind(this)}
          ></textarea>
          <button className="b-criar-nota">Criar Nota</button>
        </form>
      </div>
    );
  }
}

export default FormularioCad;
