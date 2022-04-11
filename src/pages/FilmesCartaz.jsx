import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { apiFilmes } from '../services/apiFilmes';

const FilmesCartaz = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/now_playing?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    return (
        <div>
            <h1>Filmes Em Cartaz</h1>

            <Row>
                {filmes.map(item => (
                    <Col md={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title} ({item.id})</Card.Title>
                                <Card.Text>{item.original_title}</Card.Text>
                                <Card.Text>Popularidade: {item.popularity}</Card.Text>

                                <Link className="btn btn-danger" to={'/filmes/' + item.id}>
                                    Ver Detalhes
                                </Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FilmesCartaz;