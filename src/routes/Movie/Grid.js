import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MovieGrid = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedGenres, setSelectedGenres] = useState([])
	const [ratingRange, setRatingRange] = useState('')
	const [yearFrom, setYearFrom] = useState('')
	const [yearTo, setYearTo] = useState('')

	const movies = [
		{
			id: 1,
			title: 'Oblivion',
			rating: 8.1,
			image: 'images/uploads/mv1.jpg',
		},
		{
			id: 2,
			title: 'Into the Wild',
			rating: 7.8,
			image: 'images/uploads/mv2.jpg',
		},
		{
			id: 3,
			title: 'Die Hard',
			rating: 7.4,
			image: 'images/uploads/mv-item3.jpg',
		},
		{
			id: 4,
			title: 'The Walk',
			rating: 7.4,
			image: 'images/uploads/mv-item4.jpg',
		},
		{
			id: 5,
			title: 'Blade Runner',
			rating: 7.3,
			image: 'images/uploads/mv3.jpg',
		},
		{
			id: 6,
			title: 'Mulholland Pride',
			rating: 7.2,
			image: 'images/uploads/mv4.jpg',
		},
	]

	return (
		<>
			<div className="hero common-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>movie listing - grid</h1>
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
			<div className="page-single">
				<div className="container">
					<div className="row ipad-width">
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
									<i className="ion-ios-list-outline "></i>
								</Link>
								<Link to="/movies/grid" className="grid">
									<i className="ion-grid active"></i>
								</Link>
							</div>
							<div className="flex-wrap-movielist">
								{movies.map((movie) => (
									<div key={movie.id} className="movie-item-style-2 movie-item-style-1">
										<img src={movie.image} alt={movie.title} />
										<div className="hvr-inner">
											<Link to={`/movies/${movie.id}`}>
												Read more <i className="ion-android-arrow-dropright"></i>
											</Link>
										</div>
										<div className="mv-item-infor">
											<h6>
												<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
											</h6>
											<p className="rate">
												<i className="ion-android-star"></i>
												<span>{movie.rating}</span> /10
											</p>
										</div>
									</div>
								))}
							</div>
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

export default MovieGrid
