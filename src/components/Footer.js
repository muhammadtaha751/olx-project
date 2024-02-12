import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className='footer'>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  POPULAR CATEGORIES
                </h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Cars
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Flats For Rent
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Mobile Phones
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Jobs
                  </a>
                </p>

              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>TRENDING SEARCHES</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Bikes
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Watches
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Books
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Dogs
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>ABOUT US</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    About Dubizzle Group
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    OLX Blog
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    OLX For Businesses
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>OLX</h6>
                <p>
                  Help
                </p>
                <p>
                  Sitemap
                </p>
                <p>
                  Terms of Use
                </p>
                <p>
                  Privacy Policy
                </p>
              </MDBCol>
              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Follow us</h6>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                  <div>
                    <a href='' className='me-4 text-reset'>
                      <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                      <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                      <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                  </div>
                </section>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: '#002f34' }}>
          © 2021 Copyright:
          <a className='text-reset fw-bold'>
            Free Classifieds in Pakistan . © 2006-2023 OLX
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}