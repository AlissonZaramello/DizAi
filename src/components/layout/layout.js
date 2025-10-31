import React, { Fragment } from 'react'
import Cabecalho from './header/header.js'

const layout = ({children}) => {
  return (
    <Fragment>
      
      <Cabecalho/>

      <main>
        {children}
      </main>
    
    </Fragment>
  )
}

export default layout