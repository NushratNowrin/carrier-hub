import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../assets/utilities/fakedb";
import SingleJob from "../SingleJob/SingleJob";
import bg1 from "../../assets/All Images/Vector.png";
import bg2 from "../../assets/All Images/Vector-1.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
    const [open, setOpen] = useState(false);
	const jobs = useLoaderData();
	// console.log(jobs);
	const storedJobs = getShoppingCart();
	// console.log(storedJobs);
	const savedJob = [];
	// console.log(storedData)
	for (const id in storedJobs) {
		const intId = parseInt(id);
		// console.log(intId)
		const addedJob = jobs.find((job) => job.id === intId);
		// console.log(addedJob)
		if (addedJob) {
			const totalQuantity = storedJobs[id];
			// console.log(id, storedJobs);
			// console.log(addedProduct.quantity);
			addedJob.quantity = totalQuantity;

			savedJob.push(addedJob);
		}
		console.log(savedJob);
	}
	return (
		<div>
			<div className='grid grid-cols-3 justify-between bg-stone-50'>
				<div>
					<img src={bg1} alt='' className='h-40' />
				</div>
				<div className='mt-5 text-center text-2xl font-bold'>Applied Jobs</div>

				<div>
					<img src={bg2} alt='' className='absolute top-0 right-0 h-40' />
				</div>
			</div>
			
				<div className='text-right my-20 mx-32'>
					<button className='py-3 px-5 bg-gray-200 rounded-md'>
						<span onClick={() => setOpen(!open)} className='flex'>
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
					<div className={`${open ? "" : "hidden"}`}>
						<ul>
							<li>
								<button className="hover:bg-slate-200 px-5 py-2 mt-2  rounded-md">Onsite</button>
							</li>
							<li>
                            <button className="hover:bg-slate-200 px-5 py-2 mt-2 rounded-md">Remote</button>
							</li>
						</ul>
					</div>
				</div>
                <div className='my-20 mx-32'>
            <div>
				{savedJob.map((singleJob) => (
					<SingleJob key={singleJob.id} job={singleJob}></SingleJob>
				))}
			</div>
            </div>
		</div>
	);
};

export default AppliedJobs;
