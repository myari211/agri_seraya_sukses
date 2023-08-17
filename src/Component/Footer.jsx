import React from 'react';
import {
    MDBContainer,
    MDBFooter,
    MDBIcon,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

const Footer = () => {
    return(
    <>
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted mt-5'>
            <section className='d-flex justify-content-center justify-content-lg-end p-1'>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                        Brand LOGO
                    </h6>
                    <p>
                        PT Agri Seraya Sukses
                    </p>
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase text-warning mb-4'>Pages</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                            Home
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            About Us
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Product
                        </a>
                    </p>
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase text-warning mb-4'>Document</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                            English Document
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            Incoterms Rules
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                            L/C or T/T Payment Terms
                        </a>
                    </p>
                    </MDBCol>

                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase text-warning mb-4'>Contact</h6>
                    <p>
                        <MDBIcon icon="home" className="me-2" />
                        Jakarta, Indonesia
                    </p>
                    <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        agriserayasukses@gmail.com
                    </p>
                    <p>
                        <MDBIcon icon="phone" className="me-3" /> +62 123 456 78
                    </p>
                    <p>
                        <MDBIcon icon="print" className="me-3" /> +62 123 456 78
                    </p>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                2023 &copy; PT Agri Seraya Sukses | All Rights Reserved
            </div>
        </MDBFooter>
    </>
    );
}



export default Footer;