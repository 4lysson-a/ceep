import React, { Component } from "react";
import "./StyleForm.css";

export default class FormularioCad extends Component {
  render() {
    return (
      <div className="form-container">
        <form action="">
          <input className="nota-titulo" placeholder="Título" type="text" />
          <textarea
            placeholder="Escreva sua nota aqui ..."
            name="description"
            id="description"
            cols="40"
            rows="10"
          ></textarea>
        </form>
        <button className="b-criar-nota">Criar Nota</button>
      </div>
    );
  }
}
