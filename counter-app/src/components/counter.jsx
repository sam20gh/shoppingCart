import React, { Component } from 'react';

class Counter extends Component {
	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no Tags</p>;
		return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
	}
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-primary btn-sm m-2"
				>
					Increase
				</button>
				<button onClick={() => this.props.onDecrease(this.props.counter)} className="btn btn-danger btn-sm m-2">
					Decrease
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm">
					Delete
				</button>
				{this.props.counter.tags.length === 0 && 'Please create a new tag'}
				{this.renderTags()}
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;
