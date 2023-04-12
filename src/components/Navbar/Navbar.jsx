import React, { useState } from "react";
import "./Navbar.css";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className='header flex justify-between md:items-center md:mx-48 mx-4 md:py-12 py-4'>
				<h2 className='brand-name text-2xl font-bold'>
					<a href='/'>CareerFolk</a>
				</h2>
				<div>
					<div className='menu'>
						{/* hambarger */}
						<div onClick={() => setOpen(!open)} className='md:hidden'>
							<span>
								{open === true ? (
									<XMarkIcon className='text-right absolute right-3 h-6 w-6 text-blue-500' />
								) : (
									<Bars3Icon className='h-6 w-6 text-blue-500' />
								)}
							</span>
						</div>

						{/* desktop icon */}
						<div className={`md:flex justify-between items-center ${
									open ? "" : "hidden"
								}`}>
							<ul
								className="nav-ul md:flex gap-10">
								<li>
									<ActiveLink to='/statistics'>Statistics</ActiveLink>
								</li>
								<li>
									<ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
								</li>
								<li>
									<ActiveLink to='/blog'>Blog</ActiveLink>
								</li>
							</ul>
							<div>
								<button className='nav-button px-5 py-3 rounded-md text-white font-semibold'>
									Star Applying
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
