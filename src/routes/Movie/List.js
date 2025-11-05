import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MovieList = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedGenres, setSelectedGenres] = useState([])
	const [ratingRange, setRatingRange] = useState('')
	const [yearFrom, setYearFrom] = useState('')
	const [yearTo, setYearTo] = useState('')

	const movies = [
		{
			id: 1,
			title: 'Oblivion',
			year: 2012,
			rating: 8.1,
			image: 'images/uploads/mv1.jpg',
			description:
				"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
			runtime: '2h21\'',
			mpaa: 'PG-13',
			release: '1 May 2015',
			director: 'Joss Whedon',
			stars: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth'],
		},
		{
			id: 2,
			title: 'Into the Wild',
			year: 2014,
			rating: 7.8,
			image: 'images/uploads/mv2.jpg',
			description:
				'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...',
			runtime: '2h21\'',
			mpaa: 'PG-13',
			release: '1 May 2015',
			director: 'Anthony Russo, Joe Russo',
			stars: ['Chris Evans', 'Samuel L. Jackson', 'Scarlett Johansson'],
		},
		{
			id: 3,
			title: 'Blade Runner',
			year: 2015,
			rating: 7.3,
			image: 'images/uploads/mv3.jpg',
			description:
				'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...',
			runtime: '2h21\'',
			mpaa: 'PG-13',
			release: '1 May 2015',
			director: 'Peyton Reed',
			stars: ['Paul Rudd', 'Michael Douglas'],
		},
		{
			id: 4,
			title: 'Mulholland Pride',
			year: 2013,
			rating: 7.2,
			image: 'images/uploads/mv4.jpg',
			description:
				"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
			runtime: '2h21\'',
			mpaa: 'PG-13',
			release: '1 May 2015',
			director: 'Shane Black',
			stars: ['Robert Downey Jr.', 'Guy Pearce', 'Don Cheadle'],
		},
		{
			id: 5,
			title: 'Skyfall: Evil of Boss',
			year: 2013,
			rating: 7.0,
			image: 'images/uploads/mv5.jpg',
			description:
				"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
			runtime: '2h21\'',
			mpaa: 'PG-13',
			release: '1 May 2015',
			director: 'Alan Taylor',
			stars: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston'],
		},
	]

	return (
		<>
			<div className="hero common-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>movie listing - list</h1>
								<ul className="breadcumb">
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li>
										<span className="ion-ios-arrow-right"></span> movie listing
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="page-single movie_list">
				<div className="container">
					<div className="row ipad-width2">
						<div className="col-md-8 col-sm-12 col-xs-12">
							<div className="topbar-filter">
								<p>
									Found <span>{movies.length} movies</span> in total
								</p>
								<label>Sort by:</label>
								<select>
									<option value="popularity">Popularity Descending</option>
									<option value="popularity">Popularity Ascending</option>
									<option value="rating">Rating Descending</option>
									<option value="rating">Rating Ascending</option>
									<option value="date">Release date Descending</option>
									<option value="date">Release date Ascending</option>
								</select>
								<Link to="/movies/list" className="list">
									<i className="ion-ios-list-outline active"></i>
								</Link>
								<Link to="/movies/grid" className="grid">
									<i className="ion-grid"></i>
								</Link>
							</div>
							{movies.map((movie) => (
								<div key={movie.id} className="movie-item-style-2">
									<img src={movie.image} alt={movie.title} />
									<div className="mv-item-infor">
										<h6>
											<Link to={`/movies/${movie.id}`}>
												{movie.title} <span>({movie.year})</span>
											</Link>
										</h6>
										<p className="rate">
											<i className="ion-android-star"></i>
											<span>{movie.rating}</span> /10
										</p>
										<p className="describe">{movie.description}</p>
										<p className="run-time">
											Run Time: {movie.runtime} . <span>MMPA: {movie.mpaa}</span> .{' '}
											<span>Release: {movie.release}</span>
										</p>
										<p>
											Director: <a href="#">{movie.director}</a>
										</p>
										<p>
											Stars:{' '}
											{movie.stars.map((star, index) => (
												<span key={index}>
													<a href="#">{star}</a>
													{index < movie.stars.length - 1 && ', '}
												</span>
											))}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12">
							<div className="sidebar">
								<div className="searh-form">
									<h4 className="sb-title">Search for movie</h4>
									<form className="form-style-1" action="#">
										<div className="row">
											<div className="col-md-12 form-it">
												<label>Movie name</label>
												<input
													type="text"
													placeholder="Enter keywords"
													value={searchTerm}
													onChange={(e) => setSearchTerm(e.target.value)}
												/>
											</div>
											<div className="col-md-12 form-it">
												<label>Genres & Subgenres</label>
												<div className="group-ip">
													<select
														name="genres"
														multiple
														className="ui fluid dropdown"
														value={selectedGenres}
														onChange={(e) =>
															setSelectedGenres(
																Array.from(e.target.selectedOptions, (option) => option.value)
															)
														}
													>
														<option value="Action">Action</option>
														<option value="Adventure">Adventure</option>
														<option value="Animation">Animation</option>
														<option value="Biography">Biography</option>
														<option value="Comedy">Comedy</option>
														<option value="Crime">Crime</option>
														<option value="Documentary">Documentary</option>
														<option value="Drama">Drama</option>
														<option value="Family">Family</option>
														<option value="Fantasy">Fantasy</option>
														<option value="History">History</option>
														<option value="Horror">Horror</option>
														<option value="Music">Music</option>
														<option value="Mystery">Mystery</option>
														<option value="Romance">Romance</option>
														<option value="Sci-Fi">Sci-Fi</option>
														<option value="Thriller">Thriller</option>
														<option value="War">War</option>
														<option value="Western">Western</option>
													</select>
												</div>
											</div>
											<div className="col-md-12 form-it">
												<label>Rating Range</label>
												<select
													value={ratingRange}
													onChange={(e) => setRatingRange(e.target.value)}
												>
													<option value="">-- Select the rating range below --</option>
													<option value="9-10">9.0 - 10.0</option>
													<option value="7-9">7.0 - 9.0</option>
													<option value="5-7">5.0 - 7.0</option>
													<option value="0-5">0.0 - 5.0</option>
												</select>
											</div>
											<div className="col-md-12 form-it">
												<label>Release Year</label>
												<div className="row">
													<div className="col-md-6">
														<input
															type="number"
															placeholder="From"
															value={yearFrom}
															onChange={(e) => setYearFrom(e.target.value)}
															min="1900"
															max="2030"
														/>
													</div>
													<div className="col-md-6">
														<input
															type="number"
															placeholder="To"
															value={yearTo}
															onChange={(e) => setYearTo(e.target.value)}
															min="1900"
															max="2030"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-12 ">
												<input className="submit" type="submit" value="submit" />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovieList
