import { Component } from "react";
import api from '../../service/api';

export default class CadastroCliente extends Component {

  state = {
    cad_nome: '',
    cad_idade: '',
    cad_email: '',
  };


  handleNomeChange = e => {
    this.setState({ cad_nome: e.target.value });
  };

  handleIdadeChange = e => {
    this.setState({ cad_idade: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ cad_email: e.target.value });
  };

  handleOnSubmit = async e => {
    const { cad_nome, cad_idade, cad_email } = this.state;
    e.preventDefault();

    const Cliente = { 'nome': cad_nome, 'idade': cad_idade, 'email': cad_email }

    await api.post(`/cliente`, Cliente)
      .then(console.log(Cliente))

    alert('usuário adicionado com sucesso.');

  }


  render() {

    const { cad_nome, cad_idade, cad_email } = this.state;

    return (

      <div className="container" >
        <div className="content">
          <header>
            <h1>  CADASTRO  </h1>
          </header>
          <div className="caixa1">

            <div id="cadastro">
              <form onSubmit={this.handleOnSubmit}>


                <div class="input-field">
                  <input required="required" type="text" placeholder="Digite seu nome"
                    value={cad_nome} onChange={this.handleNomeChange} />
                  <div class="underline"></div>
                </div>

                <div class="input-field">
                  <input required="required" type="text" placeholder="Digite seu email" autocomplete="off"
                    value={cad_idade} onChange={this.handleIdadeChange} />
                  <div class="underline"></div>
                </div>

                <div class="input-field">
                  <input required="required" type="text" placeholder="Digite sua idade"
                    value={cad_email} onChange={this.handleEmailChange} />
                  <div class="underline"></div>
                </div>

                <p>
                  <input type="submit" value="Cadastrar" />
                </p>
              </form>
            </div>
          </div>
        </div>
      // </div>

    )
  }
}