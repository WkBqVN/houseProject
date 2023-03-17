import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import testImg from '../../data/dummydata/house1.jpeg'
import Container from 'react-bootstrap/Container';
import houseData from '../../data/dummydata/dummydata.json'
import HouseCard from '../basecomponents/HouseCard'

const MAX_DISPLAY_NOTED_HOUSE = 5
const MAX_STORED_NOTED_HOUSE = 20
let gStartIndex = 0
function NotedListHouse() {
    // houseIndex is set default by useState(0 -> house index array start from 0)
    const [houseIndex, setHouse] = useState(0);
    const [startHouseNotedIndex, setStartHouseNotedIndex] = useState(0);
    let houseData = getDataFromAPI()
    return (
        generateList(houseData)
    )
}

function generateList(data) {
    let listHouse = data.houses.map(houseObj => {
        return (
            HouseCard(houseObj)
        )
    })
    return (
        <ul id="noted-house-card-list">
            <div>
                {listHouse}
            </div>
        </ul>
    )
}

function getDataFromAPI() {
    var dataNotedHouse = require('../../data/dummydata/dummydata.json')
    return dataNotedHouse
}

export default NotedListHouse
