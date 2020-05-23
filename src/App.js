import React from 'react';
import './App.css';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const op = ['/', '×', '-', '+', '='];

class App extends React.Component {
	render() {
		return (
			<div className='calculator'>
				<div id='display' className='display'>
					1500
				</div>
				<div className='nums-container'>
					<button className='big-h light-grey ac'>AC</button>
					{nums.map((num) => (
						<button className={`dark-grey ${num === 0 && 'big-h'}`} key={num}>
							{num}
						</button>
					))}
					<button className='light-grey'>.</button>
				</div>
				<div className='ops-container'>
					{op.map((op) => (
						<button className='orange' key={op}>
							{op}
						</button>
					))}
				</div>
			</div>
		);
	}
}

export default App;
