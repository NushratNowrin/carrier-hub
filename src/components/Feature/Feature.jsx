import React from 'react';
import './Feature.css'

const Feature = ({feature}) => {
    const {logo, jobTitle, companyName, jobStatus, fullTime, location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInfo, } = feature;
    const {phone, email, address} = contactInfo
    return (
        <div>
            <img className='feature-logo' src={logo} alt="" />
        </div>
    );
};

export default Feature;