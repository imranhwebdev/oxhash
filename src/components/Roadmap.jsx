import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Roadmap() {
    const roadmapItems = [
        {
            count: "PHASE 01",
            title: "Start Mint Blockchain",
            desc: "NFTScan Labs and MintCore jointly launched the L2, Mint Blockchain",
        },
        {
            count: "PHASE 02",
            title: "Launch MintPass",
            desc: "Mint will issue MintPass in Q1 for early-stage Mint Blockchain advocates, everyone is welcome to mint a MintPass",
        },
        {
            count: "PHASE 03",
            title: "Launch NIP Platform",
            desc: "NIP (NFT Improvement Proposal) is an innovative NFT asset protocol on Mint blockchain",
        },
        {
            count: "PHASE 04",
            title: "Launch Testnet",
            desc: "Mint will be open to all developers deploying smart contracts",
        },
        {
            count: "PHASE 01",
            title: "Start Mint Blockchain",
            desc: "NFTScan Labs and MintCore jointly launched the L2, Mint Blockchain",
        },
        {
            count: "PHASE 02",
            title: "Launch MintPass",
            desc: "Mint will issue MintPass in Q1 for early-stage Mint Blockchain advocates, everyone is welcome to mint a MintPass",
        },
        {
            count: "PHASE 03",
            title: "Launch NIP Platform",
            desc: "NIP (NFT Improvement Proposal) is an innovative NFT asset protocol on Mint blockchain",
        },
        {
            count: "PHASE 04",
            title: "Launch Testnet",
            desc: "Mint will be open to all developers deploying smart contracts",
        },
    ]
  return (
    <div className='roadmap'>
        <Container>
            <Row>
                <Col>
                    <div className="section-title">
                        <h2>Plan Your <span>Journey</span></h2>
                        <p>Chart your course for success with our concise, actionable roadmap.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                        clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {roadmapItems.map((item, index)=>(
                            <SwiperSlide key={index}  className="roadmap-sinlge-item">
                                <h5>{item.count}</h5>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
