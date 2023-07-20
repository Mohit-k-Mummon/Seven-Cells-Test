import React from 'react';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

// Manipulate this data
const employeeData = [
	{ id: 'e1', name: 'John Smith', position: 'Frontend Developer', salary: 47000 },
	{ id: 'e2', name: 'Maria Gonzalez', position: 'UI/UX Designer', salary: 47000 },
];

const Employees = () => {
	return (
		<div className='bg-slate-600 w-[600px] mt-10 rounded-sm p-10 flex flex-col gap-2'>
			<Employee />
			<Employee />
			<Employee />
			<AddEmployee />
		</div>
	);
};

export default Employees;
