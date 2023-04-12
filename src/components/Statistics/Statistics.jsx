import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip
} from "recharts";

const Statistics = () => {
	const marks = [
		{
			name: "Assignment-1",
			id: 1,
			marks: 57,
		},
		{
			name: "Assignment-2",
			id: 2,
			marks: 50,
		},
		{
			name: "Assignment-3",
			id: 3,
			marks: 30,
		},
		{
			name: "Assignment-4",
			id: 4,
			marks: 55,
		},
		{
			name: "Assignment-5",
			id: 5,
			marks: 60,
		},
		{
			name: "Assignment-6",
			id: 6,
			marks: 58,
		},
		{
			name: "Assignment-7",
			id: 7,
			marks: 30,
		},
		{
			name: "Assignment-8",
			id: 8,
			marks: 60,
		},
	];
	return (
		<div>
			<h2 className='text-3xl font-semibold mb-16 text-center p-5 md:mx-48 mx-4 bg-violet-300 rounded-md'>
				Assignment Marks Area Chart
			</h2>
			<div className="mb-20">
				<AreaChart
					width={1200}
					height={400}
					data={marks}
					margin={{
						top: 10,
						right: 30,
						left: 30,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Area type='monotone' dataKey='marks' stroke='#8884d8' fill='#8884d8' />
				</AreaChart>
			</div>
		</div>
	);
};

export default Statistics;
