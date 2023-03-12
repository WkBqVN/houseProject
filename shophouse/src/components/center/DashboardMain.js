import React from 'react'
import HouseCard from '../basecomponents/HouseCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import HouseInfo from './HouseInfo';
import HouseLiveChat from './HouseLiveChat';
import HouseNoted from './HouseNoted';

// this class will use at main screen

function DashboardMain() {
    return (
        <div className="dashboard-main" style={{ width: "100%-200px" }}>
            <Row>
                <Col sm={6} className="house-info">
                    <HouseInfo />
                </Col>
                <Col sm={6} className="house-plugins">
                    <Row className="house-noted">
                        <HouseNoted />
                    </Row>
                    <Row className="house-live-chat">
                        <HouseLiveChat />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardMain
