import React, { Component } from "react";
import ReactModal from "react-modal";

import "./style.css";

class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      console.log(e.key);
      const valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="categoria-container">
        <button className="adicionar-button" onClick={this.handleOpenModal}>
          Adicionar Categoria
        </button>

        <section className="modal-container">
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="modal"
          >
            <input
              className="input-categoria"
              placeholder="Adicionar categoria"
              type="text"
              onKeyUp={this._handleEventoInput.bind(this)}
            />
            <ul className="lista-container">
              {this.props.categorias.map((categoria, index) => {
                return (
                  <li className="lista-elemento" key={index}>
                    {categoria}
                  </li>
                );
              })}
            </ul>

            <button className="close-button" onClick={this.handleCloseModal}>
              X
            </button>
          </ReactModal>
        </section>
      </section>
    );
  }
}

export default ListaCategorias;
