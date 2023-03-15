// this for house info display in dashboard

import React from 'react'
import HouseDetails from '../basecomponents/HouseDetails'
import HouseSlice from '../basecomponents/HouseSlice'

function HouseInfo() {
    return (
        <div>
            <h3>House info</h3>
            <HouseSlice />
            <HouseDetails />
        </div>
    )
}

export default HouseInfo