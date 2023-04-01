import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import './Contact.css'
import { Button } from 'react-bootstrap';
function Contact() {
    return (
        <div className='contact d-flex justify-content-center'>
            <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
                <h2>Contact us</h2>

                <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

                <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

                <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

                <MDBTextArea wrapperClass='mb-4' label='Message' />

                <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

                <Button className='my-4 btn btn-outline-dark'>
                    Send
                </Button>
            </form>
        </div>
    );
}
export default Contact