import React from 'react';

const Error = () => {
    return (
        <div className='mx-32 my-10 bg-yellow-300 p-32 text-center rounded-xl'>
            <h2 className='text-4xl font-bold p-2'>404</h2>
            <h2 className="text-3xl font-semibold p-2">Ooppss!!!</h2>
            <p className="text-xl font-semibold p-2">Page not found.</p>
        </div>
    );
};

export default Error;