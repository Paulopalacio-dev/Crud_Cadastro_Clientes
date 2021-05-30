import { Component } from "react";
import api from '../../service/api';

export default class EditCliente extends Component {

  state = {
    id: this.props.match.params.id,
    cad_nome: '',
    cad_idade: '',
    cad_email: '',
  };

  componentDidMount = async e => {

    const response = await api.get(`/cliente/${this.state.id}`)

    this.setState({
      cad_nome: response.data.nome,
      cad_idade: response.data.idade,
      cad_email: response.data.email,
    });

    console.log(response);

  }

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
    const { id, cad_nome, cad_idade, cad_email } = this.state;
    e.preventDefault();

    const Cliente = { 'id': id, 'nome': cad_nome, 'idade': cad_idade, 'email': cad_email }

    await api.put(`/cliente`, Cliente)
      .then(console.log(Cliente))

    alert('usuário alterado com sucesso.');

  }

  render() {

    const { id, cad_nome, cad_idade, cad_email } = this.state;

    return (

      // <div className="container" >
      <div className="content">

        <header>
          <h1>  ALTERAR CADASTRO  </h1>
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
                <input required="required" type="text" placeholder="Digite sua idade"
                  value={cad_idade} onChange={this.handleIdadeChange} />
                <div class="underline"></div>
              </div>

              <div class="input-field">
                <input required="required" type="text" placeholder="Digite seu email"
                  value={cad_email} onChange={this.handleEmailChange} />
                <div class="underline"></div>
              </div>

              <p>
                <input type="submit" value="Alterar" />
              </p>
            </form>
          </div>
        </div>
      </div>
      // </div >

    )
  }
}