import React, { Component } from 'react';
import Counter from '../components/counter';

class Counters extends Component {
	state = {
		counters: [ { id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 14, value: 0 } ]
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
	};
	handleDecrease = (counter) => {
		const counters = [ ...this.state.counters ];
	};

	render() {
		return (
			<React.Fragment>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						counter={counter}
						onIncrease={this.handleIncrement}
						onDecrease={this.handleDecrease}
					/>
				))}
			</React.Fragment>
		);
	}
}

export default Counters;
