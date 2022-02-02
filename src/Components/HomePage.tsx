import { Container, Row, Col, Form } from 'react-bootstrap'
import { SongList } from './SongList'
import { useState } from 'react'

export const HomePage = () => {
const [songs, setSong]= useState([])


    return (
        <Container>
            <Row>
                <Col><h1>Easy Music Search Engine</h1></Col>
                <Col>
                <Form.Group>
  <Form.Control size="lg" type="text" placeholder="Search" /></Form.Group>
  </Col>
                <Col><SongList /></Col>
            </Row>
        </Container>


    )
}