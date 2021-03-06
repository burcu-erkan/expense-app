import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Header from './components/header/index';
import Footer from './components/footer/index';

import './App.css';
import AddExpense from './pages/add-expense/index';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' exact element={<Home/>} />
				<Route path='/add-expense' element={<AddExpense/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
