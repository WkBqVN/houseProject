// this for house info display in dashboard

import React from 'react'
import HouseDetails from '../basecomponents/HouseDetails'
import HouseSlide from '../basecomponents/HouseSlice'

function HouseInfo() {
    return (
        <div>
            <h3>House info</h3>
            <HouseSlide />
            <HouseDetails />
        </div>
    )
}

export default HouseInfo