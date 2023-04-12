import React from "react";

const Blogs = () => {
	return (
		<div className='bg-indigo-600 p-10'>
			<h2 className='text-3xl font-semibold text-white text-center'>
				Some Important Questions
			</h2>
			<div className='bg-indigo-300 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-indigo-700 p-6'>
					1. When should you use Context API?
				</h3>
				<p className='text-base font-medium p-6'>
					Context is primarily used when some data needs to be accessible by
					many components at different nesting levels. Apply it sparingly
					because it makes component reuse more difficult.<br></br>
					When it's good to use Context?
					<ul className='list-disc list-inside'>
						<li>
							You want to share data with many components at different nesting
							levels. (Like a theme, for example, when you change from white to
							black, all components need to switch their colors, icon, and so
							on)
						</li>
						<li>
							When the same prop (data) is passed through several components as
							an intermediate.
						</li>
						<li>
							When the state is changed by many components, in this case, it's
							complicated for each change to deliver the new data to other
							components manually. Making them connected to the same global
							state (one source of truth) will make the code cleaner and easy to
							maintain and debug.
						</li>
					</ul>
				</p>
			</div>
			<div className='bg-indigo-300 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-indigo-700 p-6'>
					2. What is Custom Hook?
				</h3>
				<p className='text-base font-medium p-6'>
					A custom Hook is a JavaScript function whose name starts with ”use”
					and that may call other Hooks. Hooks are reusable functions. When you
					have component logic that needs to be used by multiple components, we
					can extract that logic to a custom Hook. Custom Hooks start with
					"use". Example: useFetch
				</p>
			</div>
			<div className='bg-indigo-300 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-indigo-700 p-6'>
					3. What is useRef?
				</h3>
				<p className='text-base font-medium p-6'>
					The useRef Hook allows you to persist values between renders. It can
					be used to store a mutable value that does not cause a re-render when
					updated. It can be used to access a DOM element directly.
				</p>
			</div>
			<div className='bg-indigo-300 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-indigo-700 p-6'>
					4. What is useMemo?
				</h3>
				<p className='text-base font-medium p-6'>
					The useMemo is a hook used in the functional component of react that
					returns a memoized value. <br></br>
                    Syntax: <br></br>
                    const memoizedValue =
					useMemo(functionThatReturnsValue, arrayDependencies)
				</p>
			</div>
		</div>
	);
};

export default Blogs;
