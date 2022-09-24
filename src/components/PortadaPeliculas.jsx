import axios from 'axios'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Swal from 'sweetalert2'
import './style/style.css'
import ListaPeliculas from './ListaPeliculas'

 const PortadaPeliculas =({pelicula, setUpdateList,updateList ,handleCloseModal, handleOpenModal, setDataModal})=> {

    const URL = "http://localhost:3004/Peliculas"

    const handleDelete = async () => {

        Swal.fire({
            title: `Estás seguro de eliminar ${pelicula.nombre} ?`,
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                axios.delete(`${URL}/${pelicula.id}`).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `Se eliminó con éxito el registro ${pelicula.nombre}!`,
                            'success'
                        )
                            setUpdateList(!updateList)
                        }
                        
                        else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al elminar el registro!',
                            'error'
                        )
                    }
                })
            }
          })
    }

    /*EDITA LA PORTADA*/
    const handleEdit = () => {
        handleOpenModal();
        setDataModal(pelicula)
    }


  return (
    <div className="col-4 mb-3">
    <Card>
        <Card.Title className="text-center">{pelicula.nombre}</Card.Title>
        <img src={pelicula.imagen} alt={pelicula.nombre} className="card-img-top image-card" />
        <Card.Body>
            <ListGroup className="mb-2">
                <ListGroupItem><strong>NOMBRE: </strong>{pelicula.nombre}</ListGroupItem>
                <ListGroupItem><strong>PRECIO: </strong>{pelicula.genero}</ListGroupItem>
            </ListGroup>
            <button className="btn btn-danger me-2" onClick={handleDelete} >Eliminar</button>
            <button className="btn btn-primary me-2" onClick={handleEdit}>Editar</button>
        </Card.Body>
    </Card>
</div>
  )
}

export default PortadaPeliculas