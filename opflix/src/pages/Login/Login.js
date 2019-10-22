import React,{Component} from 'react';

import logo from '../../assets/img/imagem-opflix.png';

import Axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    atualizaEstadoEmail = (event) =>{
        this.setState({emial: event.target.value});
    }

    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value});
    }

    efetuarLogin = (event) =>{
        event.preventDefault();

        Axios.post("http://localhost:5000/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => {
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push('/');
                }else{
                    console.log('Algo deu errado');
                }
            })
            .catch(erro => {
                this.setItem({ erro: "Usuário ou senha estão inválidos"});
                console.log(erro);
            });
    }

    render(){
        return(
        <section className="login-usuario">

            <div className="item__login">
                <div className="row">
                <div className="item">
                    <img id="opfliximg" src={logo} />
                </div>
                <div className="item" id="item__title">
                    <p className="text__login" id="item__description">
                    Bem-vindo! Faça login para acessar sua conta.
                    </p>
                </div>
                <form onSubmit={this.efetuarLogin}>
                    <div className="item">
                    <input
                        className="input__login"
                        placeholder="username"
                        onInput={this.atualizaEstadoEmail}
                        type="text"
                        name="username"
                        id="login__email"
                    />
                    <p 
                        className="text__login"
                        style={{color: "red", textAlign: "center"}}
                    >
                        {this.state.erro}
                    </p>
                    </div>
                    <div className="item">
                    <input
                        className="input__login"
                        onInput={this.atualizaEstadoSenha}
                        placeholder="password"
                        type="password"
                        name="password"
                        id="login__password"
                    />
                    </div>
                    <div className="item">
                    <button className="btn btn__login" id="btn__login">
                        Login
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </section>
        );
    }

}

export default Login;