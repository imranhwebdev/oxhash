import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import subtitleImg from '../assets/img/subtitleImg.png'
import btnLogo from '../assets/img/btnLogo.svg'
export default function Banner(){
    return(
        <div className="banner">
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8} md={10}>
                        <div className="banner-content text-center">
                            <span className='subtitle'><img src={subtitleImg} alt="" /> BUILD ON 0XHASH LAYER 2 </span>
                            <h1>OxHash is a better way to <span>build products</span></h1>
                            <p>DAO Managed by 0XETH DAO LLC Builds a Tokenized Layer 2 Native Restacking Integration, AA Wallets, World Class Payment System Powers the Next 1 Million DAOs World Wide!</p>
                            <a href="#" className="boxed-btn">Launch the app <img src={btnLogo} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
