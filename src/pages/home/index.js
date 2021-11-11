import React from 'react';
import './home.css';
import Tophold from '../../components/top-fold';
import ExpenseList from '../../components/expense-list';

const Home = () => {
	return (
		<div className='home'>
			<Tophold />
			<ExpenseList />
		</div>
	);
};

export default Home;
