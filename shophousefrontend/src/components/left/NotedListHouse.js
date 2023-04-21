import React, { useState, useEffect } from 'react'
import HouseCard from '../basecomponents/HouseCard'
import apiWorker from '../../lib/apiFactory'


const MAX_DISPLAY_NOTED_HOUSE = 5
const MAX_STORED_NOTED_HOUSE = 20
let gStartIndex = 0
function NotedListHouse() {
    // houseIndex is set default by useState(0 -> house index array start from 0)
    // useState is not execute immediately
    const [houseList, setHouseList] = useState({});
    // with handle response is not work at first its will wait send request to work
    // -> send request is async so mean the code is not set up late
    // but its still resposne is receive right? so why this not work
    apiWorker.SetAPIResource("localhost:6060", "/house/houses", "GET", {}, "", {})
    apiWorker.WithHandleResponse((data) => {
        console.log("Setting houseList state:", data)
        setHouseList(data)
    })
    useEffect(() => {
        apiWorker.SendRequest()
    }, [houseList])
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
