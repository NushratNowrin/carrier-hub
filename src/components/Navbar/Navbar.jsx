import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <div>
            <div className='header flex justify-between items-center mx-48 my-12'>
				<h2 className='brand-name text-3xl font-bold'>
					<a href="/">CareerFolk</a>
				</h2>
				<div className='menu'>
					<ul className='flex gap-10 font-medium'>
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
				</div>
                <div>
                    <button className='nav-button px-5 py-3 rounded-md text-white font-semibold'>Star Applying</button>
                </div>
			</div>
        </div>
    );
};

export default Navbar;