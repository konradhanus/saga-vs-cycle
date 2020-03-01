import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './containers/Cart';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>React <img src={logo} className="App-logo" alt="logo" />Travel Agency</h1>
				<Cart />
			</header>
		</div>
	);
}

export default App;
