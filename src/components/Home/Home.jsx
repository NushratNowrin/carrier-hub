import React from "react";
import banner from "../../assets/All Images/P3OLGJ1 copy 1.png";
import './Home.css'

const Home = () => {
	return (
		<div className='banner bg-stone-50 md:grid grid-cols-2 gap-16 justify-between items-center md:px-48 px-4'>
			<div className="mr-32">
                <h2 className="text-4xl font-bold pr-8">One Step Closer To Your <span className="gradient-heading">Dream Job</span></h2>
                <p className="banner-para py-3">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div>
                    <button className='banner-button px-5 py-3 rounded-md text-white font-semibold'>Get Started</button>
                </div>
            </div>
			<div className="">
				<img src={banner} alt='' />
			</div>
		</div>
	);
};

export default Home;
