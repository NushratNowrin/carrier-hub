import React from 'react';

const Category = ({category}) => {
    const {logo, name, jobs} = category;
    return (
        <div className='bg-stone-50 p-8 rounded-lg'>
            <img className='bg-stone-200 p-3 rounded-md' src={logo} alt="" />
            <h3 className='pt-5 pb-2 font-semibold'>{name}</h3>
            <p className='text-stone-400 text-xs font-medium'>{jobs}</p>
            
        </div>
    );
};

export default Category;