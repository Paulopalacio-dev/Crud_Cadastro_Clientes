import { Component } from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../service/api';


export default class Home extends Component {

    state = {
        registros: [],
    };

    componentDidMount = async () => {

        const response = await api.get(`/clientes`);

        response.data.map(res => {
            const { registros } = this.state;

            this.setState({
                registros: [...registros, res],
            });
        })

        console.log(this.state.registros);

    }

    deleteCliente = async (id) => {


        console.log(id);

        await api.delete(`/cliente/${id}`);

        alert('Usuário deletado com sucesso.');

    }

    render() {

        const { registros } = this.state;

        return (

            <div className="content">
                <header>
                    <h1>  LISTA DE CLIENTES  </h1>
                </header>
                <div className="caixa">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>email</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {registros.map(registro => (
                                <tr key={registro.id}>
                                    <td data-label="Id" >{registro.id}</td>
                                    <td data-label="Nome" >{registro.nome}</td>
                                    <td data-label="Idade" >{registro.idade}</td>
                                    <td data-label="Endereco">{registro.email}</td>
                                    <td>

                                        <Link to={`/edit/${encodeURIComponent(registro.id)}`}><button><FaEdit /></button></Link>
                                        <button onClick={() => this.deleteCliente(registro.id)}><FaTrash /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='adiciona'>
                        <Link to='/add' className='link'>Cadastrar Novo Cliente</Link>
                    </div>

                </div>
            </div >
        );
    }
}