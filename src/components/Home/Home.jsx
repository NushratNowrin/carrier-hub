import React, { useEffect, useState } from "react";
import banner from "../../assets/All Images/P3OLGJ1 copy 1.png";
import "./Home.css";
import Category from "../Category/Category";

const Home = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("categories.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div>
			{/* Banner */}
			<div className='banner bg-stone-50 md:grid grid-cols-2 gap-16 justify-between items-center md:px-48 px-4'>
				<div className='mr-32'>
					<h2 className='text-4xl font-bold pr-8'>
						One Step Closer To Your{" "}
						<span className='gradient-heading'>Dream Job</span>
					</h2>
					<p className='banner-para py-3'>
						Explore thousands of job opportunities with all the information you
						need. Its your future. Come find it. Manage all your job application
						from start to finish.
					</p>
					<div>
						<button className='banner-button px-5 py-3 rounded-md text-white font-semibold'>
							Get Started
						</button>
					</div>
				</div>
				<div className=''>
					<img src={banner} alt='' />
				</div>
			</div>

			{/* Category Section */}
			<div className='md:px-48 px-4 my-20'>
				<div className="text-center ">
					<h2 className='text-2xl font-bold'>Job Category List</h2>
					<p className="banner-para py-6">
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className='flex justify-between my-5'>
					{categories.map((category) => (
						<Category key={category.id} category={category}></Category>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
