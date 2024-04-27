import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ecoImg from "../assets/img/ecoImg.png";
import ecosystemImgLargeShap from "../assets/img/ecosystemImgLargeShap.png";
export default function Ecosystem() {
    const ecoServices =[
        {
            count: "2M+",
            title: "Player wallets created",
            desc: "Gaining access to OxHash ecosystem of games and digital assets",
        },
        {
            count: "Thousands",
            title: "Developers",
            desc: "Gets your games to market faster without the need for teams of blockchain engineers",
        },
        {
            count: "10x",
            title: "Speed to Launch",
            desc: "High transaction per second gasless mint, burn and transfer to launch your NFT collections & tokens",
        },
        {
            count: "96%",
            title: "Development Cost",
            desc: "Save time and money with OxHash developer-first suite of SDKs and UI tools",
        },
    ]
  return (
    <div className='ecosystem'>
        <Container>
            <Row className="align-items-lg-center">
                <Col lg={7}>
                    <div className="section-title">
                        <span className='subtitle'>Accelerate Your Journey</span>
                        <h2>Join the fastest <span className='d-block'>growing ecosystem</span></h2>
                    </div>

                    <div className="eco-services">
                        {ecoServices.map((item, index)=>(
                            <div className="eco-service-item" key={index}>
                                <span>{item.count}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}                        
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='eco-right'>
                        <img className='ecoshap' src={ecosystemImgLargeShap} alt="" />
                        <img className='ecoImg' src={ecoImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
