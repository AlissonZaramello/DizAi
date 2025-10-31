import React from 'react'
import { Link } from 'react-router-dom';
import './cadastro_Usuario.css';
import logo from '../../assets/img/LogoSistema Fundo_Transparenrte.png'

const cadastro = () => {
  return (
    <div className='cadastro_container'>
        <div className='area_cadastro'>
            <div className='cadastro_dados'>
                <div className='cadastro-item'>
                <label htmlFor="nome_usuario">
                    Nome Do Usuario
                </label>
                <input 
                    required 
                    type="name"
                    id="name"
                    name="name"
                />
                </div>
                <div className='cadastro-item'>
                <label htmlFor="email">
                    Email
                </label>
                <input 
                    required 
                    type="email"
                    id="email"
                    name="email"
                    />
                </div>
                <div className='cadastro-item'>
                <label htmlFor="senha">
                    Senha
                </label>
                <input 
                    required 
                    type="password"
                    id="senha"
                    name="senha"
                />
                </div>
                <div className='cadastro-item'>
                    <label htmlFor='confirmarSenha'>
                        Confirmar Senha
                    </label>
                    <input 
                        required
                        type='password' 
                        id='confirmarSenha'
                        name='confirmarSenha'
                        />
                </div>
                <div className='cadastro-botao-area'>
                <button className='cadastro-botao' type="submit">
                    Cadastrar
                </button>
                <div className='tem-cadastro'>
                    Queira Ter Uma Conta Da Empresa.
                    <Link className='login-link' to='/cadastro_empresa'>
                        Faça o Cadastro Aqui.
                    </Link>
                </div>
                <div className='tem-cadastro'>
                    Caso tenha uma Conta.
                    <Link className='login-link' to='/'>
                        Faz o Login Aqui.
                    </Link>
                </div>
                </div>
            </div>
        </div>
        <div className='banner_cadastro'>
            <div className='logo_container'>
            <img className='logo_dizai' src={logo} alt="Logo" width={350} height={350}/>
            </div>
            <h1>
            Cadastro <br/>Usuario
            </h1>
        </div>
    </div>
  )
}

export default cadastro