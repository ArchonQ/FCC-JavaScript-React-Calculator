import React from 'react';
import './App.css';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const op = ['/', '×', '-', '+', '='];

class App extends React.Component {
	state = {
		lastPressed: undefined,
		currentNumber: '0',
		prevNumber: undefined,
		operation: undefined,
	};

	handleClick = (e) => {
		const { currentNumber, prevNumber, operation } = this.state;
		const { innerText } = e.target;

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
			return;
		}

		switch (innerText) {
			case 'AC': {
				this.setState({
					currentNumber: '0',
					prevNumber: undefined,
					operation: undefined,
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
			default: {
				if (!operation) {
					this.setState({
						operation: innerText,
						prevNumber: currentNumber,
						currentNumber: '',
					});
				} else {
					const evalued = eval(`${prevNumber} ${operation} ${currentNumber}`);
					this.setState({
						operation: innerText,
						prevNumber: evalued,
						currentNumber: innerText === '=' ? evalued : '0',
					});
				}
			}
		}
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
