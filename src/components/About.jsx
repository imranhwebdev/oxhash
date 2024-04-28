import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutLeftImg from '../assets/img/aboutLeftImg.png';
import aboutLeftImgShap from '../assets/img/aboutLeftImgShap.png';
import ecosystemImgLargeShap from "../assets/img/ecosystemImgLargeShap.png";
export default function About(){
    const aboutLists = [
        {
            list: "Opportunities for Growth",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60279 18.3972H19.4039C19.5439 18.3972 19.6575 18.5108 19.6575 18.6508V19.7464C19.6575 19.8864 19.5439 20 19.4039 20H0.253599C0.1136 20 0 19.8864 0 19.7464V6.50085C0 6.36086 0.1136 6.24726 0.253599 6.24726H1.34919C1.48919 6.24726 1.60279 6.36086 1.60279 6.50085V18.3972ZM2.99799 13.5768C2.85799 13.5768 2.74439 13.6904 2.74439 13.8304V17.2C2.74439 17.34 2.85799 17.4536 2.99799 17.4536H5.34798C5.48798 17.4536 5.60158 17.34 5.60158 17.2V13.83C5.60158 13.69 5.48798 13.5764 5.34798 13.5764H2.99799V13.5768ZM19.6571 10.51V7.16485C19.6571 7.02485 19.5435 6.91125 19.4035 6.91125H17.0535C16.9135 6.91125 16.7999 7.02485 16.7999 7.16485V17.2C16.7999 17.34 16.9135 17.4536 17.0535 17.4536H19.4035C19.5435 17.4536 19.6571 17.34 19.6571 17.2V10.51ZM12.3688 9.22404C12.2288 9.22404 12.1152 9.33764 12.1152 9.47764V17.2C12.1152 17.34 12.2288 17.4536 12.3688 17.4536H14.7187C14.8587 17.4536 14.9723 17.34 14.9723 17.2V9.47724C14.9723 9.33724 14.8587 9.22364 14.7187 9.22364H12.3688V9.22404ZM7.68357 11.5024C7.54357 11.5024 7.42997 11.616 7.42997 11.756V17.2C7.42997 17.34 7.54357 17.4536 7.68357 17.4536H10.0336C10.1736 17.4536 10.2872 17.34 10.2872 17.2V11.756C10.2872 11.616 10.1736 11.5024 10.0336 11.5024H7.68357ZM17.8803 3.26207L18.5295 3.84127L18.5299 3.84087C18.5619 3.86927 18.6015 3.89007 18.6467 3.89967C18.7835 3.92807 18.9171 3.84047 18.9455 3.70367L19.6483 0.320079C19.6611 0.27368 19.6607 0.22328 19.6447 0.17408C19.6011 0.0412806 19.4579 -0.0311191 19.3251 0.0128807L16.0287 1.10088C15.9875 1.11448 15.9495 1.13848 15.9187 1.17288C15.8259 1.27728 15.8351 1.43727 15.9395 1.53007L16.5411 2.06687C14.7851 3.94166 12.8355 5.47446 10.6372 6.70285C8.36357 7.97285 5.82118 8.91924 2.94839 9.58284C2.81279 9.61044 2.72439 9.74204 2.75039 9.87804L3.00679 11.2152H3.00719L3.00959 11.2272C3.04239 11.3628 3.17879 11.446 3.31439 11.4132C6.33757 10.674 9.07676 9.61044 11.5328 8.22205C13.9171 6.87445 16.0331 5.22086 17.8803 3.26207Z" fill="#7AF0FF"/>
          </svg>
        },
        {
            list: "Flexibility and Accessibility",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2902 15.2758C14.175 15.2758 13.6157 16.6267 14.4041 17.4151C14.5494 17.5604 14.5494 17.7959 14.4041 17.9412L13.6034 18.7419C13.4581 18.8872 13.2226 18.8872 13.0773 18.7419C12.2889 17.9535 10.938 18.5128 10.938 19.628C10.938 19.8334 10.7713 20 10.5659 20H9.43361C9.22822 20 9.06158 19.8336 9.06158 19.628C9.06158 18.5117 7.7118 17.9524 6.92226 18.7419C6.77698 18.8872 6.54142 18.8872 6.39614 18.7419L5.59546 17.9412C5.45018 17.7959 5.45018 17.5604 5.59546 17.4151C6.38384 16.6267 5.82429 15.2758 4.70938 15.2758C4.50399 15.2758 4.33735 15.1091 4.33735 14.9037V13.7714C4.33735 13.566 4.50375 13.3994 4.70938 13.3994C5.82452 13.3994 6.38384 12.0485 5.59546 11.2601C5.45018 11.1148 5.45018 10.8792 5.59546 10.734L6.39614 9.93328C6.54142 9.788 6.77698 9.788 6.92226 9.93328C7.71064 10.7217 9.06158 10.1621 9.06158 9.04719C9.06158 8.8418 9.22822 8.67517 9.43361 8.67517H10.5659C10.7713 8.67517 10.938 8.84157 10.938 9.04719C10.938 10.1623 12.2889 10.7217 13.0773 9.93328C13.2226 9.788 13.4581 9.788 13.6034 9.93328L14.4041 10.734C14.5494 10.8792 14.5494 11.1148 14.4041 11.2601C13.6157 12.0485 14.175 13.3994 15.2902 13.3994C15.4955 13.3994 15.6622 13.566 15.6622 13.7714V14.9037C15.6622 15.1091 15.4955 15.2758 15.2902 15.2758ZM11.2715 2.49115V8.40317C11.0967 8.21194 10.8454 8.09195 10.5662 8.09195C10.1888 8.09195 9.8112 8.09195 9.43384 8.09195C9.15465 8.09195 8.9033 8.21194 8.72855 8.40317V2.49115H7.39316L9.99988 0L12.6068 2.49115H11.2715ZM14.4626 9.96763C15.1409 8.9669 16.2886 8.37114 17.4984 8.39296V9.75736L19.9998 7.13972L17.4982 4.52209V5.8482C15.0189 5.82104 12.7589 7.29824 11.7885 9.5833C12.0371 9.76734 12.4068 9.77871 12.6649 9.52064C13.0378 9.14769 13.6431 9.14769 14.0158 9.52064L14.4626 9.96763ZM5.53721 9.96763L5.98396 9.52087C6.35692 9.14792 6.96195 9.14792 7.3349 9.52087C7.59298 9.77894 7.96268 9.76757 8.21124 9.58353C7.24091 7.29847 4.98068 5.82128 2.5016 5.84843V4.52232L0 7.13996L2.50136 9.75759V8.39319C3.7112 8.37114 4.85884 8.96713 5.53721 9.96763ZM9.99988 11.5706C8.47163 11.5706 7.23279 12.8095 7.23279 14.3377C7.23279 15.866 8.47163 17.1048 9.99988 17.1048C11.5281 17.1048 12.767 15.866 12.767 14.3377C12.767 12.8095 11.5281 11.5706 9.99988 11.5706Z" fill="#7AF0FF"/>
          </svg>
        },
        {
            list: "Empowerment, Control and Reliability",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6.23399 13.7687L13.168 14.4182C13.559 14.4545 13.841 14.1417 13.996 13.7048C14.1809 13.1873 14.1892 12.5157 14.0089 11.9941C13.8483 11.5287 13.5328 11.1869 13.0494 11.2196L6.30068 11.6772C5.4801 11.7333 5.48699 13.6983 6.23399 13.7687ZM12.1676 1.29982C12.1713 0.687136 11.5641 0.315479 11.0177 0.481069C10.8102 0.542245 10.6198 0.682996 10.4924 0.911142L10.405 2.88534C10.3958 3.26205 10.474 3.53988 10.5954 3.73168C10.7362 3.95707 10.9317 4.06148 11.0963 4.0693C11.5646 4.09138 11.8121 3.527 11.9413 3.16178L12.1676 1.29982ZM13.9633 1.9194C13.9463 1.68987 13.8539 1.50726 13.7182 1.37847C13.3948 1.07351 12.864 1.08225 12.5264 1.39917L12.2932 3.31449C12.2959 3.60151 12.3792 3.90371 12.5903 4.1084C12.8939 4.40416 13.2775 4.30941 13.5172 3.96765C13.7637 3.61807 13.95 2.39271 13.9633 1.9194ZM8.02649 3.01321L7.88298 0.844906C7.79053 0.0588156 6.79699 -0.239706 6.24917 0.319619C6.09508 0.477389 6.01044 0.680696 6.03666 0.898723L6.31448 3.32507C6.75927 3.12682 7.39173 3.02103 8.02649 3.01321ZM10.101 3.48928C10.049 3.28459 10.0292 3.06795 10.0384 2.8674L10.1272 0.859625C10.1023 0.104813 9.12858 -0.290302 8.52464 0.250623C8.36043 0.397814 8.25464 0.598821 8.24958 0.816388L8.39447 3.02103C8.55086 3.02885 8.70495 3.04173 8.85352 3.06289C9.26382 3.119 9.76196 3.23997 10.101 3.48928ZM13.8525 10.0554C13.6349 10.4385 13.4509 10.6198 13.3884 10.8783C13.5356 10.9109 13.6685 10.9707 13.7863 11.053C14.3534 11.1966 14.8893 11.3723 15.3768 11.5825C16.8607 12.2186 17.7774 13.116 17.7774 14.1224C17.7774 15.1353 16.754 16.1095 15.162 16.816C14.329 17.1863 13.3378 17.4862 12.2568 17.6831C13.588 17.5892 15.059 17.3284 16.3405 16.9269C17.2259 16.6504 19.5612 15.8032 19.5612 14.6335C19.5612 13.2646 18.4844 12.0167 16.742 11.1041C15.881 10.6524 14.8994 10.3033 13.8525 10.0554ZM6.25607 10.9408C6.14521 10.6814 5.98468 10.3709 5.80345 10.0333C4.71976 10.2821 3.70553 10.6395 2.81916 11.1036C1.07725 12.0162 0 13.2641 0 14.633C0 16.6748 2.33665 16.7282 3.89181 16.5299C2.87206 16.0437 1.78239 15.2351 1.78239 14.1215C1.78239 13.1151 2.70049 12.2177 4.18298 11.5815C4.80762 11.3138 5.50907 11.1 6.25607 10.9408ZM13.0176 10.8534C13.1285 10.2265 13.6161 10.1727 14.0204 8.60048C14.2448 7.72837 14.6671 5.693 14.6018 4.59091C14.5664 3.98467 14.3488 3.53758 14.1611 3.20732C14.0894 3.65073 13.9615 4.1107 13.6409 4.39266C13.2472 4.7381 12.7113 4.73948 12.3346 4.37196C12.203 4.24409 12.0894 4.07206 12.0163 3.85956C11.8116 4.18798 11.4869 4.45522 11.0789 4.4359C10.8857 4.4267 10.6709 4.34345 10.4869 4.17234C10.4827 5.23257 9.18838 5.55455 8.36687 5.69668C9.18838 6.03292 9.96527 6.6249 10.1479 7.59774C10.1934 7.83646 9.83234 7.9027 9.78818 7.66536C9.57844 6.54809 8.39309 6.0159 7.53525 5.81535C7.34114 5.76982 7.34896 5.48693 7.55088 5.45428C8.47681 5.30708 9.98781 5.16725 10.1157 4.23397C10.2436 3.30161 7.23028 3.11394 6.24733 3.77354C5.45986 4.31585 4.70734 5.56513 4.71424 6.52187C4.72344 7.76977 6.51227 10.1989 6.75605 11.2784L13.0176 10.8534ZM8.51452 17.8188L7.61344 19.9963C10.3696 20.0473 13.4965 19.5763 15.8708 18.5648C17.4237 17.9038 18.6495 17.0133 19.2245 15.8906C18.5819 16.454 17.587 16.9218 16.4499 17.2778C14.4288 17.9103 11.9413 18.201 10.2242 18.0469C10.1097 18.0363 10.0324 17.9232 10.0651 17.8137L10.8774 15.0116C10.2896 15.1785 9.66215 15.3791 9.01037 15.5865C6.09876 16.5134 2.70601 17.5934 0.738714 16.529C1.2824 17.1444 2.08965 17.5658 3.04777 17.8017C4.57073 18.1762 6.46765 18.0832 8.3011 17.5593C8.45427 17.5161 8.5849 17.6775 8.51452 17.8188Z" fill="#7AF0FF"/>
          </svg>
        }
    ];
    const desc = "<p> <strong>At OxHash,</strong> we take pride in offering a comprehensive asset ecosystem that empowers users to diversify and optimize their portfolios effortlessly. </p>";
    return(
        <div className="about">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className="aboutLeft">
                            <img className='ecoshap' src={ecosystemImgLargeShap} alt="" />
                            <img className='aboutLeftImgShap' src={aboutLeftImgShap} alt="" />
                            <img src={aboutLeftImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="about-content">
                            <span className='subtitle'>About OxHash</span>
                            <h2>Empowering your <span className='d-block'>portfolio with OxHash</span></h2>
                            <p dangerouslySetInnerHTML={{ __html: desc }} />
                            <ul>
                                {aboutLists.map((item, index)=>(
                                <li key={index}> {item.icon} {item.list}</li>
                                ))}
                            </ul>
                            <div className="buttons">
                                <a href="#" className='boxed-btn'>Build on OxHash</a>
                                <a href="#" className='boxed-btn transparent'>Build on OxHash</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
