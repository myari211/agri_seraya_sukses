import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBadge,
    MDBFooter
} from 'mdb-react-ui-kit';

import About from './About';
import Premium from '../image/premium.png';

import image from '../image/banner.jpg';
import Coconut from '../image/coconut.jpg';
import Rice from '../image/ricefield.png';

import Petani1 from '../image/petani.jpg';
import Petani2 from '../image/petani2.jpg';
import Petani3 from '../image/petani3.jpg';



const Homepage = () => {
    const key = [
        {
            "icon": "people-carry",
            "title": "Integrity",
            "description": "For us, integrity is the quality of having a strong ethical principle, which followed at all times. Honesty and trust are at the core of integrity"
        },
        {
            "icon": "praying-hands",
            "title": "Commitment",
            "description": "Commitment is our firm promise or decision to do our business, where we will continue to help improve the welfare of farmers."
        },
        {
            "icon": "certificate",
            "title": "Quality",
            "description": "In our mutual thoughts, quality is not just about offering a product or service that exceeds the standard, but it’s also about the reputation."
        },
        {
            "icon": "chart-bar",
            "title": "Innovation",
            "description": "Innovation means the creation, development and implementation of new products, processes or services with the aim of increasing efficiency"
        }
    ];

    const product = [
        {
            "image": Coconut,
            "title": "Coconut",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        },
        {
            "image": Coconut,
            "title": "Briquette",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        }
    ];

    const team = [
        {
            "image": image,
            "name": "Mohamad Dahlan",
            "position": "Founder",
            "socmed": {
                "instagram": "@ari_pratama04",
                "facebook": "Ari Pratama Putra",
                "linkedin": "Ari Pratama Putra"
            }
        },
        {
            "image": image,
            "name": "Ade Kafka Rauf",
            "position": "CO-Founder",
            "socmed": {
                "instagram": "@ari_pratama04",
                "facebook": "Ari Pratama Putra",
                "linkedin": "Ari Pratama Putra"
            }
        },
        {
            "image": image,
            "name": "Nico Pundarika",
            "position": "Business Development",
            "socmed": {
                "instagram": "@ari_pratama04",
                "facebook": "Ari Pratama Putra",
                "linkedin": "Ari Pratama Putra"
            }
        }
    ]
    

    return(
        <>
            <div className="blur alt">
                <img src={Coconut} className="w-100" style={{ height: "100vh", backgroundAttachment: "fixed" }}/>
                <span className="blurry"></span>
                <div className="overlay">
                    <div className="flex">
                        <span style={{ backgroundImage: `url(${Coconut})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: 60, fontWeight: 900 }}>AGRI SERAYA SUKSES</span>
                        <p>Quality lawn care reliable services</p>
                        <MDBRow className="mt-5">
                            <MDBCol>
                                <MDBBtn className="text-capitalize btn-lg d-flex align-items-center" color="warning">
                                    <span style={{ marginRight: "30px;"}}>Look More&nbsp;&nbsp;&nbsp;</span>
                                    <MDBIcon icon="fas fa-arrow-right" />
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
            <MDBContainer>
                <MDBRow className="mt-4">
                    <MDBCol size="4">
                        <MDBRow>
                            <MDBCol size="12" className="d-flex justify-content-center">
                                <img src={Premium} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol size="8" className="d-flex align-items-center">
                        <div className="w-100">
                            <MDBRow>
                                <MDBCol size="12">
                                    <span style={{ fontSize: 20, fontWeight: 600}} className="text-warning">A little About Us</span>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-3">
                                <MDBCol size="12">
                                    <span>
                                        We Provide products with the best quality to meet your needs. So, we make sure to provide only the best quality products. 
                                        We are commited to long term and sustainable business with all of our partners, including customers, suppliers, farmers, and the environment.
                                    </span>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <ParallaxProvider>
                <ParallaxBanner style={{ height: "40vh" }}
                    layers={[
                        { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg', speed: -60 },
                        { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png', speed: -30 },
                    ]}
                    className="aspect-[2/1] d-flex justify-content-center align-items-center"
                    >
                    <div className="inset-0 d-flex align-items-center justify-content-center border" style={{ position: "absolute", width: "60vw", padding: "80px"}}>
                        <h1 className="text-white text-center">To become a well-known multinational company with the best quality at local and foreign levels</h1>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
            <MDBContainer>
                <MDBRow className="mt-4">
                    <MDBCol size="12" className="d-flex justify-content-center">
                        <h3 className='text-warning'>Our Key Future</h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-4 mb-5">
                    {key.map(data => (
                        <MDBCol size="3">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol size="12" className="d-flex justify-content-center">
                                            <MDBIcon fas icon={data.icon} style={{ fontSize: 100 }} className="text-muted" />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="mt-4">
                                        <MDBCol size="12" className="d-flex justify-content-center">
                                            <span style={{fontSize: 25, fontWeight: 600}} className="text-warning">{data.title}</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="mt-4">
                                        <MDBCol size="12" className="d-flex justify-content-center">
                                            <span style={{fontSize: 15 }} className="text-muted text-center">{data.description}</span>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
                <MDBRow style={{ marginTop: "200px", marginBottom: "150px"}}>
                    <MDBCol size="6" className="h-100 d-flex align-items-center">
                        <MDBRow>
                            <MDBCol size="12" className="d-flex justify-content-center align-items-center">
                                <div>
                                    <span style={{ fontSize: 40 }} className="me-2">
                                        <span className="text-warning">Produce</span> with the best quality
                                    </span>
                                    <span style={{ fontSize: 20 }} className="me-2">
                                        <span className="text-warning">Maintain</span> customer satisfaction
                                    </span>
                                    <span style={{ fontSize: 60 }} className="me-2">
                                        <span className="text-warning">Affordable</span> price with quality
                                    </span>
                                    <span style={{ fontSize: 30 }} className="me-2">
                                        <span className="text-warning">Always</span> ensure the availability of our products
                                    </span>
                                    <span style={{ fontSize: 40 }}>
                                        <span className="text-warning">Providing</span> products with high standards
                                    </span>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBRow>
                            <MDBCol size="12" className="d-flex justify-content-center">
                                <img src={Petani1} className="rounded-circle" style={{ width: "250px", height: "250px" }}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="6" className="d-flex justify-content-end">
                                <img src={Petani2} className="rounded-circle" style={{ width: "250px", height: "250px" }}/>
                            </MDBCol>
                            <MDBCol size="6">
                                <img src={Petani3} className="rounded-circle" style={{ width: "250px", height: "250px" }}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <ParallaxProvider style={{ marginTop: "250px"}}>
                <ParallaxBanner style={{ height: "40vh" }}
                    layers={[
                        { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg', speed: -60 },
                        { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png', speed: -30 },
                    ]}
                    className="aspect-[2/1] d-flex justify-content-center align-items-center"
                    >
                    <div className="inset-0 d-flex align-items-center justify-content-center border" style={{ position: "absolute", width: "60vw", padding: "50px"}}>
                        <h1 className="text-white text-center">Our Products</h1>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
            <MDBContainer>
                <MDBRow className="d-flex justify-content-center mb-5" style={{ marginTop: "-70px"}}>
                    {product.map(data => (
                        <MDBCol size="4">
                            <MDBCard>
                                <MDBCardImage src={data.image} />
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol size="12" className="d-flex justify-content-between align-items-center">
                                            <h4 className="text-warning">{data.title}</h4>
                                            <MDBBadge className="ms-2" style={{ fontSize: 15 }} color="warning">
                                                <MDBIcon fas icon="certificate" className="me-2"/>
                                                High Quality
                                            </MDBBadge>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="12">
                                            <span style={{ fontSize: 12 }} className="text-muted">{data.description}</span>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
                <MDBRow className="mt-5">
                    <MDBCol size="12" className="d-flex justify-content-center">
                        <h3 className="text-warning">Meets Our Team</h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-5">
                    {team.map(data => (
                        <MDBCol size="4">
                            <MDBRow>
                                <MDBCol size="12 d-flex justify-content-center">
                                    <img src={data.image} style={{ width: "250px", height: "250px", objectFit: "cover"}} className="rounded-circle" />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-4">
                                <MDBCol size="12 d-flex justify-content-center">
                                    <span style={{ fontSize: 20 }}>{data.name}</span>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-1">
                                <MDBCol size="12 d-flex justify-content-center">
                                    <span style={{ fontSize: 20, fontWeight: 600 }} className="text-warning">{data.position}</span>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-4 d-flex justify-content-center">
                                <MDBCol size="2">
                                    <div>
                                        <MDBBtn color="danger" className="p-2 d-flex align-items-center rounded-circle">
                                            <MDBIcon fab icon="instagram" className="me-0" style={{ fontSize: 25 }}/>
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                                <MDBCol size="2">
                                    <div>
                                        <MDBBtn color="primary" className="p-2 d-flex align-items-center rounded-circle">
                                            <MDBIcon fab icon="linkedin" className="me-0" style={{ fontSize: 25}}/>
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                                <MDBCol size="2">
                                    <div>
                                        <MDBBtn color="primary" className="p-2 d-flex align-items-center rounded-circle">
                                            <MDBIcon fab icon="facebook" className="me-0" style={{ fontSize: 25}} />
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </>
    );
}



export default Homepage