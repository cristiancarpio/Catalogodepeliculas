import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import PortadaPeliculas from './PortadaPeliculas';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ListaPeliculas = ()=> {

        const url = 'http://localhost:3004/Peliculas'

        const traerPelicula = ()=>{
            const respuesta = axios.get(url);
            return respuesta;
        }

        const[lista, setLista]=useState([])
        const [updateList, setUpdateList] = useState(false);





        /* MODAL BOOTSTRAP*/
        const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({}) /**/

    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}

    const editarDatos = ({target}) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const respuesta = await axios.put(`${url}/${dataModal.id}`, dataModal)
        if (respuesta.status === 200) {
            Swal.fire(
                'Guardado!',
                `El registro ${respuesta.data.nombre} ha sido actualizado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el registro!',
                'error'
            )
        }
    }
        /*FIN MODAL */

        useEffect(()=>{
            traerPelicula().then((respuesta)=>{
                setLista(respuesta.data)
            })
        },[updateList]);

        console.log(lista)

        return (
            <Container className="mb-5">
                <Row>
                        {
                        lista.map((pelicula, index)=>(
                            
                            <PortadaPeliculas
                            key={index}
                            pelicula= {pelicula}
                            setUpdateList={setUpdateList}
                            updateList={updateList}
                            handleCloseModal= {handleCloseModal}
                            handleOpenModal = {handleOpenModal}
                            setDataModal= {setDataModal}
                            
                            />
                        ))
                        }
                </Row>


               

                <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Actualizar Datos</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit = {handleSubmit}
                >
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>nombre</Form.Label>
                            <Form.Control 
                                type="text"
                                name="nombre"
                                placeholder="nombre de la pelicula"
                                value={dataModal.nombre}
                                onChange={editarDatos}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control 
                                type="text"
                                name="genero"
                                placeholder="genero"
                                value={dataModal.genero}
                                onChange={editarDatos}
                                required
                            />
                        </Form.Group>
                       
                        <Form.Group className="mb-3">
                            <Form.Control 
                                type="text"
                                name="imagen"
                                placeholder="URL de la imagen"
                                value={dataModal.imagen}
                                onChange={editarDatos}
                                required
                            />
                        </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                            Cancelar
                        </button>
                        <button className="btn btn-success" type="submit">
                            Guardar
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

            </Container>)
}
 export default ListaPeliculas