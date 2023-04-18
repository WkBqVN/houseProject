import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import testImg from '../../data/dummydata/house1.jpeg'
import Container from 'react-bootstrap/Container';
import houseData from '../../data/dummydata/dummydata.json'
import HouseCard from '../basecomponents/HouseCard'
import fetchSomething from '../../lib/apiFactory'


const MAX_DISPLAY_NOTED_HOUSE = 5
const MAX_STORED_NOTED_HOUSE = 20
let gStartIndex = 0
function NotedListHouse() {
    // houseIndex is set default by useState(0 -> house index array start from 0)
    let data = getDataFromAPI()
    const [houseList, setHouseList] = useState(data);
    const [startHouseNotedIndex, setStartHouseNotedIndex] = useState(0);
    return (
        generateList(houseList)
    )
}

function generateList(data) {
    console.log(data)
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
    // this can't fetch from localhost
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }).then(data => { return data })
}

export default NotedListHouse
