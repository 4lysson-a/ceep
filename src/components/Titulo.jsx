import React, { Component } from "react";
import "../app.css";

class Titulo extends Component {
  render() {
    return (
      <section>
        <h1 className="app-title">
          <span className="c">C</span>
          <span className="e">e</span>
          <span className="e2">e</span>
          <span className="p">p</span>
        </h1>
        <p className="slogan">Anotações Simplificadas :)</p>
      </section>
    );
  }
}

export default Titulo;
