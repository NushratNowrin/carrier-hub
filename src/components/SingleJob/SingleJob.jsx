import React, { useState } from "react";
import locationIcon from "../../assets/Icons/Frame-4.png";
import dollarIcon from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";


const SingleJob = ({job}) => {
	// const [open, setOpen] = useState(false);
   
	const {
		id,
		logo,
		jobTitle,
		companyName,
		jobStatus,
		fullTime,
		location,
		salary,
	} = job;
   

	return (
		<div>
			{/* <div className='text-right'>
				<button className='py-3 px-5 bg-gray-200 rounded-md'>
					<span onClick={() => setOpen(!open)} className="flex">
						<p>Filter By</p>
						<span>
							{open === true ? (
								<ChevronUpIcon className='text-right  h-6 w-6 ' />
							) : (
								<ChevronDownIcon className='h-6 w-6 ' />
							)}
						</span>
					</span>
				</button>
                {/* dropdown menu */}
                {/* <div className={`${
									open ? "" : "hidden"
								}`}>
							<ul>
								<li >
									<ActiveLink to='/onsite'>Onsite</ActiveLink>
								</li>
								<li>
									<ActiveLink to='/onsite'>Remote</ActiveLink>
								</li>
                            </ul>
                            </div> */}
			{/* </div> */} 
			<div className='grid grid-cols-5 gap-8 items-center p-3 border border-gray-200 rounded-md my-5 '>
				<div className='bg-gray-200 rounded-md h-44 flex items-center justify-center'>
					<img src={logo} alt='' />
				</div>
				<div className='col-span-3'>
					<h2 className='text-md font-medium'>{jobTitle}</h2>
					<p className='text-gray-600 text-sm py-2'>{companyName}</p>
					<div className='flex gap-3 py-1 text-sm'>
						<button className='px-3 py-1 rounded-md border border-indigo-600 text-indigo-600'>
							{jobStatus}
						</button>
						<button className='px-3 py-1 rounded-md border border-indigo-600 text-indigo-600'>
							{fullTime}
						</button>
					</div>
					<div className='flex gap-6 py-3 mb-5'>
						<div className='flex gap-2 text-sm'>
							<img src={locationIcon} alt='' />
							<p>{location}</p>
						</div>
						<div className='flex gap-2 text-sm'>
							<img src={dollarIcon} alt='' />
							<p>Salary: {salary}</p>
						</div>
					</div>
				</div>
				<div>
					<Link
						to={`/JobDetails/${id}`}
						className='view-details-button px-5 py-3 rounded-md text-white font-semibold'>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleJob;
