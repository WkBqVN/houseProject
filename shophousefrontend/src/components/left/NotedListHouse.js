import React, { useState, useEffect } from 'react'
import HouseCard from '../basecomponents/HouseCard'
import apiWorker from '../../lib/apiFactory'
import ReactDOM from "react-dom/client";


const MAX_DISPLAY_NOTED_HOUSE = 5
const MAX_STORED_NOTED_HOUSE = 20
let gStartIndex = 0
function NotedListHouse() {
    const [houseList, setHouseList] = useState({});
    apiWorker.SetAPIResource("localhost:6060", "/house/houses", "GET", {}, "", {})
    apiWorker.WithHandleResponse((data) => {
        console.log("Setting houseList state:", data)
        setHouseList(data)
    })
    useEffect(() => {
        console.log("useEffect called")
        apiWorker.SendRequest()
    }, [name])
    console.log("houseList state:" + houseList)// this is null
    return generateList(apiWorker.response)
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

export default NotedListHouse
