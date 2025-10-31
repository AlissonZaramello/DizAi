import React, { Fragment, useState } from 'react'
import "./sistema.css"
import ImgWomen from '../../assets/img/image 1.png'

const sistema = () => {
  return (
    <Fragment>
        <div className='Avaliacao_Pagina'>
          <div className='Tabela_Avaliacao'>
            <h1 className='Text_1'>Desejar Avaliar o Serviço?</h1>
            <h2 className='Text_2'><b>Comente Aqui</b></h2>
              <div className='Tabela_Dados'>
                <div className='Dados_1'>
                  <div className='Dados_Avaliacao'>
                      <label htmlFor="empresa">
                          Empresa
                      </label>
                      <input 
                          required 
                          type="empresa"
                          id="empresa"
                          name="empresa"
                          />
                  </div>
                  <div className='Dados_Avaliacao'>
                      <label htmlFor="razao">
                          Titulo/Razão
                      </label>
                      <input
                      required 
                      type="razao"
                      id="razao"
                      name="razao"
                      />
                  </div>
                </div>
                <div className='Dados_2'>
                  <div className='Dados_Avaliacao'>
                    <label htmlFor="descricao">
                        Descricao
                    </label>
                    <textarea
                      required
                      id="descricao"
                      name="descricao"
                      rows="6" // número de linhas visíveis
                      cols="50" // opcional: largura do textarea
                    />
                  </div>
                </div>
              </div>
          <div className='Container_Button'>
            <button className='Enviar' type="submit">
                Enviar
            </button>
          </div>
          </div>
          <div className='Banner_imgWomen'>
            <img src={ImgWomen} className='Imagen_Women'/>
          </div>
        </div>
    </Fragment>
  )
}

export default sistema