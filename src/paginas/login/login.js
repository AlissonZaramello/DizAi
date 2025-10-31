import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/img/LogoSistema Fundo_Transparenrte.png'

const login = () => {
  return (
    <div className='login_container'>
      <div className='banner_login'>
        <div className='logo_container'>
          <img className='logo_dizai' src={logo} alt="Logo" width={350} height={350}/>
        </div>
        <h1>
          Login
        </h1>
      </div>
      <div className='area_login'>
        <div className='login_dados'>
            <div className='login-item'>
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
            <div className='login-item'>
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
            <div className='login-botao-area'>
              <button className='login-botao' type="submit">
                  Login
              </button>
              <div className='n-tem-cadastro'>
                  Caso Não tenha uma Conta.
                  <Link className='cadastro-link' to='/cadastro'>
                      Cadastre Aqui.
                  </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default login