import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useDoctorContext from '../../../hooks/useDoctorContext';
import Doctor from './Doctor/Doctor';


const Doctors = () => {
    const doctorsdata = useDoctorContext();
    console.log(doctorsdata);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-5 px-5">
            {/* {Array.from({ length: doctors.length }).map((_, idx) => ( */}

            <>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </>



            {/* ))} */}
        </Row >
    );
};

export default Doctors;