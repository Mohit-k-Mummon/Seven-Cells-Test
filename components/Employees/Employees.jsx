import React from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

const Employees = () => {
	return (
		<div className='bg-slate-600 w-[600px] rounded-sm p-10 flex flex-col gap-2'>
			<Employee />
			<Employee />
			<Employee />
			<AddEmployee />
		</div>
	);
};

export default Employees;
