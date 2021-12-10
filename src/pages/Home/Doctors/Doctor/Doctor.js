import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { id, name, designation, description, img, qualifications, speciality, contact } = doctor;

    return (
        <Col>
            <Card>
                {/* <></> */}
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{qualifications}</Card.Text>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <Card.Text className='text-warning'>Desig:{designation}</Card.Text>
                        <Card.Text className='text-warning'>Speciality:{speciality}</Card.Text>
                    </div>

                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-muted'>Contact: {contact}</Card.Text>
                    <div className='d-flex justify-content-center'>
                        <Button variant="outline-danger" className=''>Doctor Detail</Button>
                    </div>

                </Card.Body>
                {/* </> */}

            </Card>
        </Col>







    );
};

export default Doctor;