import React, { useContext } from 'react';
import DoctorContext, { DoctorDataContext } from '../context/DoctorContext';

const useDoctorContext = () => {
    const useDocotorsData = useContext(DoctorDataContext);
    return useDocotorsData;
};

export default useDoctorContext;