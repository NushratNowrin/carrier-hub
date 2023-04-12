import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const JobData = useLoaderData();
    console.log(JobData)
    return (
        <div>
            
            <h2>{JobData.location}</h2>
        </div>
    );
};

export default JobDetails;