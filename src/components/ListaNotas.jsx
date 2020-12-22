import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

import "./CardNota/StyleCardNota.css";

class ListaNotas extends Component {
  render() {
    return (
      <section className="card-container"> 
        <ul>
          {Array.of("Trabalho", "Trabalho", "Estudos").map(
            (categoria, index) => {
              return (
                <li key={index}>
                  <p> </p>
                  <CardNota />
                </li>
              );
            }
          )}
        </ul>
      </section>
    );
  }
}

export default ListaNotas;
