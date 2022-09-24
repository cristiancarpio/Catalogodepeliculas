import axios from 'axios'
import React, {useState} from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Nuevapeli = () => {

  

    const [data, setData] = useState({nombre: "", genero: "", imagen:""})
    
    const captarFormulario = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:3004/Peliculas"
    
    let navigate = useNavigate();

    const enviarFormulario = async (e) => {
        e.preventDefault();
        
        const respuesta = await axios.post(URL,data);
        if (respuesta.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${respuesta.data.nombre} ha sido guardado exitosamente!`,
                'success'
            )
            navigate('../')
        }
        
        else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }}

        return (
          <Container>
              <h1 className="text-center">Nueva pelicula</h1>
              <Form
                  onSubmit={enviarFormulario}
              >
                  <Form.Group className="mb-3">
                      <Form.Control 
                          type="text"
                          name="nombre"
                          placeholder="nombre de pelicula"
                          value={data.nombre}
                          onChange={captarFormulario}
                          required
                      />
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Control 
                          type="text"
                          name="genero"
                          placeholder="genero"
                          value={data.genero}
                          onChange={captarFormulario}
                          required
                      />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                      <Form.Control 
                          type="text"
                          name="imagen"
                          placeholder="URL de la imagen"
                          value={data.imagen}
                          onChange={captarFormulario}
                          required
                      />
                  </Form.Group>
                  
                  <button className="btn btn-success">Guardar</button>
              </Form>
          </Container>
      )
  }

export default Nuevapeli;