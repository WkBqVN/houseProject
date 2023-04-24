import React, { useState, useEffect } from 'react'
import HouseCard from '../basecomponents/house_card'
import apiWorker from '../../lib/apiFactory'

function NotedListHouse() {
    const [houseList, setHouseList] = useState(null);
    apiWorker.SetAPIResource("/house/houses", "GET", {}, "", {})
    apiWorker.SetHost("http", "localhost", "6060")
    useEffect(() => {
        apiWorker.SendRequest().WithHandleResponse((responseData) => {
            apiWorker.handleData(responseData.data, setHouseList)
        })
    }, [])
    if (houseList !== null) {
        return generateList(houseList)
    } else {
        console.log("loading")
    }
}

function generateList(inputData) {
    let listHouse = inputData.houses.map(houseObj => {
        return (
            HouseCard(houseObj)
        )
    })
    console.log(listHouse)
    return (
        <ul id="noted-house-card-list">
            <div>
                {listHouse}
            </div>
        </ul>
    )
}

export default NotedListHouse
