import React from 'react';
import './App.css';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const op = ['/', '×', '-', '+', '='];

class App extends React.Component {
	state = {
		lastPressed: undefined,
		currentNumber: '0',
		prevNumber: undefined,
	};

	handleClick = (e) => {
		const { innerText } = e.target;
		const { lastPressed, currentNumber, prevNumber } = this.state;

		if (!Number.isNaN(Number(innerText))) {
			if (currentNumber === '0') {
				this.setState({
					currentNumber: innerText,
				});
			} else {
				this.setState({
					currentNumber: currentNumber + innerText,
				});
			}
		}

		switch (innerText) {
			case 'AC': {
				this.setState({
					currentNumber: '0',
					prevNumber: undefined,
				});
				break;
			}
			case '.': {
				if (!currentNumber.includes('.')) {
					this.setState({
						currentNumber: currentNumber + innerText,
					});
				}
				break;
			}
		}

		this.setState({
			lastPressed: innerText,
		});
	};

	render() {
		const { currentNumber } = this.state;
		return (
			<div className='calculator'>
				<div id='display' className='display'>
					{currentNumber}
				</div>
				<div className='nums-container'>
					<button className='big-h light-grey ac' onClick={this.handleClick}>
						AC
					</button>
					{nums.map((num) => (
						<button
							className={`dark-grey ${num === 0 && 'big-h'}`}
							key={num}
							onClick={this.handleClick}
						>
							{num}
						</button>
					))}
					<button className='light-grey' onClick={this.handleClick}>
						.
					</button>
				</div>
				<div className='ops-container'>
					{op.map((op) => (
						<button className='orange' key={op} onClick={this.handleClick}>
							{op}
						</button>
					))}
				</div>
			</div>
		);
	}
}

export default App;
