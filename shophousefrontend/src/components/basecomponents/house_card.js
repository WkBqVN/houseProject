// this class for house card to use in dashboard

import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import testImg from '../../data/dummydata/house1.jpeg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faShareNodes, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faShareNodes, faPlus, faStar);

export default function HouseCard(houseDataObj) {
    return (
        <div className="noted-house-card-class" key={`${houseDataObj.houseId}-house-div`}>
            <li key={houseDataObj.houseId}>
                <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title className="fixed-card-title">{houseDataObj.houseName}</Card.Title>
                        <Card.Text className="house-content">{houseDataObj.housePrice}</Card.Text>
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
            <Row className="btn-card-row" style={{ marginRight: "-2px", marginLeft: "2px" }}>
                {/* display more info */}
                <Button className="btns-card-action" variant="primary" onClick={handleShowInfoClick}>
                    <FontAwesomeIcon icon="plus" style={{ marginBottom: "30px" }} /></Button>
                {/* show owner info */}
                <Button className="btns-card-action" variant="primary" onClick={handleOwnerClick}>
                    <FontAwesomeIcon icon="user" style={{ marginBottom: "30px" }} /></Button>
                {/* share to chat */}
                <Button className="btns-card-action" variant="primary" onClick={handleShareClick}>
                    <FontAwesomeIcon icon="share-nodes" style={{ marginBottom: "30px" }} /></Button>
                {/* ignore(delete out) to list */}
                <Button className="btns-card-action" variant="primary" onClick={handleDeleteClick}>
                    <FontAwesomeIcon icon="star" style={{ marginBottom: "30px" }} /></Button>
            </Row>
        </div>
    )
}

const handleShowInfoClick = () => {
    console.log("Show Info Clicked")
}

const handleOwnerClick = () => {
    console.log("Show Info Clicked")
}
const handleShareClick = () => {
    console.log("Show Info Clicked")
}
const handleDeleteClick = () => {
    console.log("Show Info Clicked")
}
