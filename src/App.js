import React from 'react';
import './App.css';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const op = ['/', '*', '-', '+', '='];

class App extends React.Component {
	state = {
		lastPressed: undefined,
		currentNumber: '0',
		calc: undefined,
		operation: undefined,
	};

	handleClick = (e) => {
		const { calc, currentNumber } = this.state;
		const { innerText } = e.target;

		this.setState({
			calc: currentNumber + innerText,
			currentNumber: currentNumber + innerText,
			lastPressed: innerText,
		});

		switch (innerText) {
			case 'AC': {
				this.setState({
					currentNumber: '0',
					calc: undefined,
				});
				return;
			}
			case '=': {
				const evaluated = eval(calc);
				this.setState({
					currentNumber: evaluated,
					calc: evaluated,
				});
			}
		}

		// const { currentNumber, calc, operation, lastPressed } = this.state;
		// const { innerText } = e.target;
		// this.setState({
		// 	lastPressed: innerText,
		// });
		// if (!Number.isNaN(Number(innerText))) {
		// 	if (currentNumber === '0') {
		// 		this.setState({
		// 			currentNumber: innerText,
		// 		});
		// 	} else if (openSync.includes(lastPressed)) {
		// 		this.setState({
		// 			currentNumber: innerText,
		// 		});
		// 	} else {
		// 		this.setState({
		// 			currentNumber: currentNumber + innerText,
		// 		});
		// 	}
		// 	return;
		// }
		// switch (innerText) {
		// 	case 'AC': {
		// 		this.setState({
		// 			currentNumber: '0',
		// 			calc: undefined,
		// 			operation: undefined,
		// 		});
		// 		break;
		// 	}
		// 	case '.': {
		// 		if (!currentNumber.includes('.')) {
		// 			this.setState({
		// 				currentNumber: currentNumber + innerText,
		// 			});
		// 		}
		// 		break;
		// 	}
		// 	default: {
		// 		if (!operation) {
		// 			this.setState({
		// 				operation: innerText,
		// 				calc: currentNumber,
		// 				currentNumber: '',
		// 			});
		// 		} else if (innerText === '=') {
		// 			const evaluated = eval(`${calc} ${operation} ${currentNumber}`);
		// 			this.setState({
		// 				operation: undefined,
		// 				calc: evaluated,
		// 				currentNumber: evaluated,
		// 			});
		// 		} else {
		// 			const evaluated = eval(`${calc} ${operation} ${currentNumber}`);
		// 			this.setState({
		// 				operation: innerText,
		// 				calc: evaluated,
		// 				currentNumber: evaluated,
		// 			});
		// 		}
		// 	}
		// }
	};

	render() {
		const { currentNumber, calc } = this.state;
		return (
			<div className='calculator'>
				<p style={{ position: 'absolute', top: 0 }}>
					{JSON.stringify(this.state, null, 2)}
				</p>
				<div id='display' className='display'>
					<small>{calc}</small>
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
