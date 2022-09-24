import React from 'react';
import {Container} from 'react-bootstrap'
import ListaPeliculas from '../components/ListaPeliculas'

const App = () => {
  return (
    <Container fluid>
      <h1 className="text-center">Listado de peliculas</h1>

      <ListaPeliculas/>
      
    </Container>
  )
}

export default App