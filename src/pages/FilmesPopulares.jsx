import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ApiFilmes } from '../services/apiFilmes';

 const FilmesPopulares = () => {
    const [filmes, setFilmes] = useState([]);


    useEffect(() => {

        ApiFilmes.get('movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])


    return (
        
        <div>
            <h1>Filmes Populares </h1>

            <Row>
                {filmes.map((item) => (
                    <Col md={4} className="mb-3">

                        <Card style={{ height: "18rem", width: "18rem" }}>
                            <Card.img variant="top" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    ({item.original_title})
                                </Card.Text>
                                <Card.Text>
                                    Popularidade
                                    ({item.popularity})
                                </Card.Text>
                                <Button variant="danger" className="center">Ver Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
         </div>  

        );
};

export default FilmesPopulares;
