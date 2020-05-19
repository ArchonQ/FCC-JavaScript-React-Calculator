import React from 'react';
import './App.css';

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const op = ['/', '*', '-', '+', '='];

function App() {
	return (
		<div className='calculator'>
			<div id='display' className='display'></div>
		</div>
	);
}

export default App;
