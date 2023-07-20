import React from 'react';
import MainNavigation from './MainNavigation';

const Layout = props => {
	return (
		<>
			<MainNavigation />
			<main className='w-full bg-slate-100 flex justify-center'>{props.children}</main>
		</>
	);
};

export default Layout;
