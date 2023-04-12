import React from "react";
import "./Feature.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
	const {
		logo,
		jobTitle,
		companyName,
		jobStatus,
		fullTime,
		location,
		salary,
		jobDescription,
		jobResponsibility,
		educationalRequirements,
		experiences,
		contactInfo,
	} = feature;
	const { phone, email, address } = contactInfo;
	return (
		<div className='border border-gray-200 gap-5 rounded-md p-10 '>
			<img className='feature-logo py-3' src={logo} alt='' />
			<h2 className='text-xl font-medium'>{jobTitle}</h2>
			<p className='text-gray-600 text-sm py-2'>{companyName}</p>
			<div className='flex gap-3 py-1'>
				<button className='px-5 py-1 rounded-md border border-indigo-600 text-indigo-600'>
					{jobStatus}
				</button>
				<button className='px-5 py-1 rounded-md border border-indigo-600 text-indigo-600'>
					{fullTime}
				</button>
			</div>
			<div className='flex gap-6 py-3'>
				<div className="flex gap-2 text-sm">
					<MapPinIcon className='h-6 w-6 text-gray-400' />
					<p >{location}</p>
				</div>
                <div className="flex gap-2 text-sm">
                    <CurrencyDollarIcon className='h-6 w-6 text-gray-400' />
                    <p >Salary: {salary}</p>
                </div>
			</div>
		</div>
	);
};

export default Feature;
