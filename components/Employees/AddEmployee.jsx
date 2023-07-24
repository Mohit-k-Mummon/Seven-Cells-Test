import React from 'react';
import UserPlus from '@/public/icons/UserPlus';

const AddEmployee = () => {
	return (
		<form className='flex w-full justify-between gap-3'>
			<div className='bg-slate-300 rounded flex gap-3 justify-between py-3 px-4 w-full'>
				<input type='text' className='w-full rounded px-1' placeholder='Name' />
				<input type='text' className='w-full rounded px-1' placeholder='Position' />
				<input type='text' className='w-full rounded px-1' placeholder='Salary' />
			</div>
			<button
				disabled={false}
				type='submit'
				className='h-full w-7 bg-slate-500 top-0 -right-8 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-400'
			>
				<span className='flex justify-center items-center h-full'>
					<UserPlus className='h-[18px] w-[18px]' />
				</span>
			</button>
		</form>
	);
};

export default AddEmployee;
