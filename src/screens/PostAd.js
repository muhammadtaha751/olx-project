import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { post } from '../config/firebase';

function PostAd() {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [file, setFile] = useState()

  const navigate = useNavigate()

  function addData(){
    post(title,description,price,file[0])
    navigate('/dashboard')
  }
  return (
    <div>
<div className='postNav'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" class="e3ad8938"><path d="M512 124.16v54.83L209.7 473.17l676.96.05L925.48 512l-38.82 38.78H209.75L512 845.01v54.87h-56.32L85.33 539.43v-54.86l370.35-360.4H512z"></path></svg>
<svg height="20" viewBox="0 0 36.289 20.768" alt="Logo"><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path></svg>

</div>
   
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>

          <h1 class="text-info mb-4">Post Your Ad</h1>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Ad Title</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput value={title} onChange={(e) => setTitle(e.target.value)} size='lg' id='form1' type='text'/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

            

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea value={description} onChange={(e) => setDescription(e.target.value)} id='textAreaExample' rows={3} />
                </MDBCol>

              </MDBRow>
              

              <hr className="mx-n3" />
              <MDBRow className='align-items-center pt-4 pb-3'>

<MDBCol md='3' className='ps-5'>
  <h6 className="mb-0">Price</h6>
</MDBCol>

<MDBCol md='9' className='pe-5'>
  <MDBInput value={price} onChange={(e) => setPrice(e.target.value)} size='lg' id='form1' type='text'/>
</MDBCol>

</MDBRow>
<hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">UPLOAD UP TO 20 PHOTOS</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile onChange={(e) => setFile(e.target.files)} size='lg' id='customFile' />
                  <div className="small text-muted mt-2">For the cover picture we recommend using the landscape mode.</div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn onClick={addData} className='my-4' size='lg'>Post now</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default PostAd;