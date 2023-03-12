// this class for house card to use in dashboard

import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import testImg from '../../data/dummydata/house1.jpeg'

export default function HouseCard(houseDataObj) {
    return (
        <div className="noted-house-card-class">
            <li key={houseDataObj.houseId}>
                <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title className="fixed-card-title">{houseDataObj.houseName}</Card.Title>
                        <Card.Text className="break-word-content">{houseDataObj.housePrice}</Card.Text>
                        {generateBtns()}
                    </Card.Body>
                </Card>
            </li>
        </div>
    )
}

let generateBtns = () => {
    return (
        <div>
            <Row className="btn-card-row">
                <Button className="btn-card-actions" variant="primary">+</Button>
                <Button className="btn-card-actions" variant="primary">+</Button>
                <Button className="btn-card-actions" variant="primary">+</Button>
                <Button className="btn-card-actions" variant="primary">-</Button>
            </Row>
        </div >
    )
}
