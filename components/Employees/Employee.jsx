import React from 'react';
import CheckmarkSVG from '@/public/icons/CheckmarkSVG';

const Employee = () => {
	return (
		<form className='flex w-full justify-between gap-3'>
			<ul className='bg-slate-300 rounded flex justify-between gap-3 py-3 px-4 relative w-full'>
				<li className='block whitespace-nowrap'>John Smith</li>
				<li className='block whitespace-nowrap'>Frontend Developer</li>
				<li className='whitespace-nowrap cursor-pointer'>$47,000</li>

				{/* Use this input for the editable field on salary click */}
				{/* <input className='w-full max-w-[142px] rounded px-1 flex-shrink' type='text' /> */}
			</ul>
			<button
				disabled={false}
				type='submit'
				className='h-full w-7 bg-slate-500 top-0 -right-8 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-400 transition-all duration-300'
			>
				<span className='flex justify-center items-center h-full'>
					<CheckmarkSVG className='h-5 w-5' />
				</span>
			</button>
		</form>
	);
};

export default Employee;
