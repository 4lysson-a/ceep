import React, { Component } from "react";
import Delete from "../../img/delete.svg";
class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <h4 className="categoria">{this.props.categoria}</h4>
        <img
          className="delete-icon"
          src={Delete}
          onClick={this.apagar.bind(this)}
        />
        <header>
          <h3>{this.props.titulo}</h3>
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
