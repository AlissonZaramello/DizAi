import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Logo from '../../../assets/img/LogoSistema Fundo_Transparenrte.png'

const header = () => {
    return (
        <Fragment>
            <header className='area-header'>
                <div className='header-container'>
                    <div className='area'>
                        <img className='logo_header' src={Logo}/>
                        <Link className='Button_Op' to="/home">
                            Home
                        </Link>
                        <Link className='Button_Op' to="/sistema">
                            Reclame Aqui
                        </Link>
                        <Link className='Button_Op' to="/perfil">
                            Perfil
                        </Link>
                        <Link className='Button_Op' to="/">
                            Sair
                        </Link>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default header