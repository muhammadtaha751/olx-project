import React from 'react';
import {Navbar,Footer,DetailCard, AdDetailCarousel} from '../components'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function AdDetail() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <ul className="ul">
                    <div className="categories">
                        <a href="#"><li>All categories</li></a>
                    </div>
                    <a href="#"><li>Mobile Phones</li></a>
                    <a href="#"><li>Cars</li></a>
                    <a href="#"><li>Motorcycles</li></a>
                    <a href="#"><li>House</li></a>
                    <a href="#"><li>TV-Video-Audio</li></a>
                    <a href="#"><li>Tablets</li></a>
                    <a href="#"><li>Land & Plots</li></a>
                </ul>
            </div>

            <div className='AdDetail'>
                <div>
                    <div className='sliderCarousel'>
                        <AdDetailCarousel />
                    </div>
                    <div className='priceDetail'>
                        <h2>Rs 4,980,000</h2>
                        <h5>HONDA BRV S-IVTEC TOP OF THE LINE MODEL AUTOMATIC</h5>
                    </div>
                    <div className='Details'>
                        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                            <h2>Details</h2>
                            <section className=''>
                                <MDBContainer className='text-center text-md-start mt-5'>
                                    <MDBRow className='mt-3'>
                                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>

                                            <p>
                                                Make
                                            </p>
                                            <p>
                                                Price
                                            </p>
                                            <p>
                                                KMs driven
                                            </p>
                                            <p>
                                                Fuel
                                            </p>
                                            <p>
                                                Cars documents
                                            </p>
                                            <p>
                                                Transmission
                                            </p>

                                        </MDBCol>

                                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                            <p>
                                                Honda
                                            </p>
                                            <p>

                                                4,980,000
                                            </p>
                                            <p>

                                                53,000
                                            </p>
                                            <p>

                                                Petrol
                                            </p>
                                            <p>

                                                Original
                                            </p>
                                            <p>
                                                Automatic
                                            </p>
                                        </MDBCol>

                                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                            <p>
                                                Model
                                            </p>
                                            <p>

                                                Year
                                            </p>
                                            <p>

                                                Price
                                            </p>
                                            <p>
                                                Registration city
                                            </p>
                                            <p>

                                                Assembly
                                            </p>
                                            <p>

                                                Condition
                                            </p>
                                        </MDBCol>

                                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>

                                            <p>

                                                BR-V
                                            </p>
                                            <p>

                                                2020
                                            </p>
                                            <p>

                                                4,980,000
                                            </p>
                                            <p>

                                                Lahore
                                            </p>
                                            <p>

                                                Local
                                            </p>
                                            <p>

                                                Used
                                            </p>
                                        </MDBCol>

                                    </MDBRow>
                                </MDBContainer>
                            </section>
                        </MDBFooter>
                    </div>

                    <div className='description'>
                        <h3>Description</h3>
                        <p>BUMPER TO BUMPER GENUINE 100%
                            AUTOMATIC TRANSMISSION
                            please serious buyer call me
                            Neat & Clean interior & exterior
                            Address:   Barkat Market, Near Kalma Chowk Garden Town Lahore</p>
                    </div>

                    <div className='feature'>
                        <h3>Features</h3>
                        <div className='featurebutton'>
                            <button>ABS</button> <button>Air Bags</button> <button>Air Conditioning</button> <button>Alloy rims</button> <button>AM/FM Radio</button>
                        </div>
                    </div>

                    <div>
                        <h3>Related ads</h3>
                        <div className='relatedCard'>
                            <DetailCard />
                            <DetailCard />
                            <DetailCard />
                        </div>
                    </div>
                </div>
                <div className='persondetail'>
                    <div className='rightSecOne'>
                    <div>
                        <div className='logo'>
                            <img src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png' />
                        </div>
                        <div>
                            <h5>Muhammad talha</h5>
                            <p>Member sice 2017</p>
                            <h6>see profile</h6>
                        </div>
                    </div>
                    <div>
                        <button className='showNum'>Show phone number</button>
                    </div>
                    <div>
                        <button className='chatBtn'>Chat</button>
                    </div>
                    </div>

                    <div className='location'>
                    <h2>Location</h2>
                    <h6>Kalma Chowk, Lahore</h6>
                </div>
                </div>
                
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}