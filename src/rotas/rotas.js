import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../paginas/Login/login'
import Cadastro_Usuario from '../paginas/Cadastro_Usuario/cadastro_usuario'
import Cadastro_Empresa from '../paginas/Cadastro_Empresa/cadastro_empresa'
import Home from '../paginas/Home/home'
import PrivateRoute from './privateRotas'
import Sistema from '../paginas/Sistema/sistema'
import PerfilU from '../paginas/Perfil_Usuario/perfil_usuario'
import PerfilE from '../paginas/Perfil_Empresa/perfil_empresa'
import Resultados from '../paginas/Resultados/resultados'
import Empresa from '../paginas/Empresa/empresa'
import Sistema_Empresa from '../paginas/Sistema-Empresa/Sistema-Empresa'

const Rotas = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro/usuario' element={<Cadastro_Usuario/>} />
        <Route path='/cadastro/empresa' element={<Cadastro_Empresa/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sistema/usuario' element={<Sistema/>}/>
          <Route path='/perfil/usuario' element={<PerfilU/>}/>
          <Route path='/perfil/empresa' element={<PerfilE/>}/>
          <Route path='/resultados' element={<Resultados/>}/>
          <Route path='/empresa/:id' element={<Empresa/>}/>
          <Route path='/sistema/empresa' element={<Sistema_Empresa/>}/>
        </Route>
    </Routes>
  )
}

export default Rotas