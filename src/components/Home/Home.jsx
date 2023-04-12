import React, { useEffect, useState } from "react";
import banner from "../../assets/All Images/P3OLGJ1 copy 1.png";
import "./Home.css";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const [categories, setCategories] = useState([]);
	// const [features, setFeatures] = useState([]);
	useEffect(() => {
		fetch("categories.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	// useEffect(() => {
	// 	fetch("feature.json")
	// 		.then((res) => res.json())
	// 		.then((data) => setFeatures(data));
	// }, []);
	const features = useLoaderData()

	return (
		<div>
			{/* Banner */}
			<div className='banner bg-stone-50 md:grid grid-cols-2 gap-16 justify-between items-center md:px-48 px-4 flex flex-col-reverse md:py-0 pb-10'>
				<div className='md:mr-32 md:text-left text-center'>
					<h2 className='md:text-4xl text-3xl font-bold md-pr-8'>
						One Step Closer To Your{" "}
						<span className='gradient-heading'>Dream Job</span>
					</h2>
					<p className='banner-para py-3'>
						Explore thousands of job opportunities with all the information you
						need. Its your future. Come find it. Manage all your job application
						from start to finish.
					</p>
					<div>
						<button className='banner-button px-5 py-3 rounded-md text-white font-semibold '>
							Get Started
						</button>
					</div>
				</div>
				<div className=''>
					<img src={banner} alt='' />
				</div>
			</div>

			{/* Category Section */}
			<div className='md:px-48 px-4 md:my-20 my-12'>
				<div className='text-center '>
					<h2 className='text-2xl font-bold'>Job Category List</h2>
					<p className='banner-para py-6'>
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className='md:flex justify-between my-5'>
					{categories.map((category) => (
						<Category key={category.id} category={category}></Category>
					))}
				</div>
			</div>

			{/* Featured job section */}
			<div className='md:px-48 px-4 md:my-20 my-12'>
				<div className='text-center '>
					<h2 className='text-2xl font-bold'>Featured Jobs</h2>
					<p className='banner-para py-6'>
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className='md:grid grid-cols-2 justify-between gap-4'>
					{features.map((feature) => (
						<Feature key={feature.id} feature={feature}></Feature>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
