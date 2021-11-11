import React from 'react';
import Tophold from '../../components/top-fold/index';
import './addexpense.css';
import AddForm from '../../components/add-form'

const AddExpense = () => {
	return (
		<div className='add-expense'>
			<AddForm />
			<Tophold />
		</div>
	);
};

export default AddExpense;
