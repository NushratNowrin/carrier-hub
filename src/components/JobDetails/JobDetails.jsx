import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bg1 from "../../assets/All Images/Vector.png";
import bg2 from "../../assets/All Images/Vector-1.png";
import dollar from "../../assets/Icons/Frame.png";
import job from "../../assets/Icons/Frame-1.png";
import phoneIcon from "../../assets/Icons/Frame-2.png"
import emailIcon from "../../assets/Icons/Frame-3.png"
import addressIcon from "../../assets/Icons/Frame-4.png"
import { addToDb } from "../../assets/utilities/fakedb";



const JobDetails = () => {

	const jobData = useLoaderData();
	const { id } = useParams();
	const idAsNumber = parseInt(id);
	// console.log(idAsNumber);
	const result = jobData.find((job) => job.id === idAsNumber);
	const {
		jobTitle,
		salary,
		jobDescription,
		jobResponsibility,
		educationalRequirements,
		experiences,
		contactInfo,
	} = result;

	const applyNow = (id) =>{
		addToDb(id)
	}

	const { phone, email, address } = contactInfo;
	return (
		<div>
			<div className='grid grid-cols-3 justify-between bg-stone-50'>
				<div>
					<img src={bg1} alt='' className='h-40' />
				</div>
				<div className='mt-5 text-center text-2xl font-bold'>Job Details</div>

				<div>
					<img src={bg2} alt='' className='absolute top-0 right-0 h-40' />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-10 py-20 px-28 text-sm'>
				<div className='col-span-2'>
					<div className='mb-5 leading-6'>
						<span className='font-bold'>Job Description: </span>
						<span className='text-slate-600'>{jobDescription}</span>
					</div>
					<div className='mb-5 leading-6'>
						<span className='font-bold'>Job Responsibility: </span>
						<span className='text-slate-600'>{jobResponsibility}</span>
					</div>
					<div className='mb-5 leading-6'>
						<div className='font-bold mb-4'>Educational Requirements: </div>
						<span className='text-slate-600'>{educationalRequirements}</span>
					</div>
					<div className='mb-5 leading-6'>
						<div className='font-bold mb-4'>Experiences: </div>
						<span className='text-slate-600'>
							{experiences} Years in this field.
						</span>
					</div>
				</div>
				<div>
					<div className=' bg-indigo-100 rounded-md p-5 mb-5'>
                        <h3 className="font-bold pb-4 border border-b-indigo-300">Job Details</h3>
                        <div className="flex items-center pt-3">
                            <img src={dollar} alt="" className="h-4 mr-2"/>
                            <p>
                                <span className="font-bold"> Salary : </span>
                                <span className="text-slate-600"> {salary} (Per Month) </span>
                            </p>
                        </div>
                        <div className="flex items-center pt-3 pb-5">
                            <img src={job} alt="" className="h-4 mr-2"/>
                            <p>
                                <span className="font-bold"> Job Title : </span>
                                <span className="text-slate-600"> {jobTitle} </span>
                            </p>
                        </div>
                        <h2 className="font-bold pb-4 border border-b-indigo-300">Contact Information</h2>
                        <div className="flex items-center pt-3">
                            <img src={phoneIcon} alt="" className="h-4 mr-2"/>
                            <p>
                                <span className="font-bold"> Phone : </span>
                                <span className="text-slate-600"> {phone} </span>
                            </p>
                        </div>
                        <div className="flex items-center pt-3">
                            <img src={emailIcon} alt="" className="h-4 mr-2"/>
                            <p>
                                <span className="font-bold"> Email : </span>
                                <span className="text-slate-600"> {email} </span>
                            </p>
                        </div>
                        <div className="flex pt-3 ">
                            <img src={addressIcon} alt="" className="h-4 mr-2 items-baseline"/>
                            <p className="grid grid-cols-4">
                                <div className="font-bold"> Address : </div>
                                <div className="text-slate-600 col-span-3"> {address} </div>
                            </p>
                        </div>

                    </div>
                    <div>
                    <button className='banner-button w-full py-3 rounded-md text-white font-semibold' onClick={()=>applyNow(id)}>
							Apply Now
						</button>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
