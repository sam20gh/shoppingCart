import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 1,
		tags: [ 'tag1', 'tag2' ]
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};
	handleDecrease = () => {
		this.setState({ count: this.state.count - 1 });
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no Tags</p>;
		return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
	}
	render() {
		return (
			<React.Fragment>
				<span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button onClick={this.handleIncrement} className="btn btn-primary btn-sm m-2">
					Increment
				</button>
				<button onClick={this.handleDecrease} className="btn btn-danger btn-sm m-2">
					Increment
				</button>
				{this.state.tags.length === 0 && 'Please create a new tag'}
				{this.renderTags()}
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
