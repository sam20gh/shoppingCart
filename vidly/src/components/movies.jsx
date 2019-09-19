import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from '../components/common/like';

class Movies extends Component {
	state = {
		movies: getMovies()
	};
	handleDelete = (movie) => {
		const movies = this.state.movies.filter((m) => m._id !== movie._id);
		this.setState({ movies });
	};
	handleLike = (movie) => {
		const movies = [ ...this.state.movies ];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};
	render() {
		const { length: count } = this.state.movies;

		if (count === 0)
			return (
				<div class="alert alert-primary" role="alert">
					{' '}
					There are no Movies in this database{' '}
				</div>
			);

		return (
			<React.Fragment>
				<p> Showing {count} mpovies in the database</p>
				<table className="table">
					<thead>
						<tr>
							<td>Title</td>
							<td>Genre</td>
							<td>Stock</td>
							<td>Rate</td>
							<td>Liked</td>
							<td />
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td> {movie.numberInStock}</td>
								<td> {movie.dailyRentalRate}</td>
								<td>
									<Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
								</td>
								<td>
									<button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default Movies;
