import { Container, Row, Col, Form } from 'react-bootstrap'
import  SongList  from './SongList'
import { useState } from 'react'


export const HomePage = () => {
    
    const [search, setSearch] = useState('')

    return (
        <Container>
            <Row>
                <Col><h1>Easy Music Search Engine</h1></Col>
                <Col>
                    <Form.Group>
                        <Form.Control 
                            size="lg" 
                            type="text" 
                            placeholder="Search"
                            value={search} 
                            onChange={(e)=>{setSearch(e.target.value)}}/>
                    </Form.Group>

                </Col>
                <Col><SongList search={search} /></Col>
            </Row>
        </Container>


    )
}