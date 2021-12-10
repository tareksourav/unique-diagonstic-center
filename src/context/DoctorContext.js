import React, { createContext } from 'react';
import useDoctors from '../hooks/useDoctors';

export const DoctorDataContext = createContext();

const DoctorContext = ({ children }) => {
    const allContext = useDoctors();
    // console.log(allContext);
    // const allDocotorContext = 
    return (
        <DoctorDataContext.Provider value={allContext}>
            {children}
        </DoctorDataContext.Provider>
    );
};

export default DoctorContext;