import React from 'react'
import { Link } from 'react-router-dom'

const UserRate = () => {
	const ratedMovies = [
		{
			id: 1,
			title: 'Oblivion',
			year: 2012,
			image: 'images/uploads/mv1.jpg',
			rating: 9.0,
			reviewTitle: 'Best Marvel movie in my opinion',
			reviewDate: '02 April 2017',
			review:
				'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting...',
		},
		{
			id: 2,
			title: 'Into the Wild',
			year: 2014,
			image: 'images/uploads/mv2.jpg',
			rating: 7.0,
		},
		{
			id: 3,
			title: 'Blade Runner',
			year: 2015,
			image: 'images/uploads/mv3.jpg',
			rating: 10.0,
			reviewTitle: 'A masterpiece!',
			reviewDate: '01 February 2017',
			review:
				"To put it simply, the movie is fascinating, exciting and fantastic. The dialog, the fight choreography, the way the story moves, the characters charisma, all and much more are combined together to deliver this masterpiece...",
		},
	]

	return (
		<>
			<div className="hero user-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>Edward kennedy's profile</h1>
								<ul className="breadcumb">
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li>
										<span className="ion-ios-arrow-right"></span>Rated movies
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="page-single">
				<div className="container">
					<div className="row ipad-width2">
						<div className="col-md-3 col-sm-12 col-xs-12">
							<div className="user-information">
								<div className="user-img">
									<a href="#">
										<img src="images/uploads/user-img.png" alt="" />
										<br />
									</a>
									<a href="#" className="redbtn">
										Change avatar
									</a>
								</div>
								<div className="user-fav">
									<p>Account Details</p>
									<ul>
										<li>
											<Link to="/user/profile">Profile</Link>
										</li>
										<li>
											<Link to="/user/favorites/list">Favorite movies</Link>
										</li>
										<li className="active">
											<Link to="/user/rate">Rated movies</Link>
										</li>
									</ul>
								</div>
								<div className="user-fav">
									<p>Others</p>
									<ul>
										<li>
											<a href="#">Change password</a>
										</li>
										<li>
											<a href="#">Log out</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-9 col-sm-12 col-xs-12">
							<div className="topbar-filter">
								<p>
									Found <span>{ratedMovies.length} rates</span> in total
								</p>
								<label>Sort by:</label>
								<select>
									<option value="range">-- Choose option --</option>
									<option value="saab">-- Choose option 2--</option>
								</select>
							</div>
							{ratedMovies.map((movie, index) => (
								<div
									key={movie.id}
									className={`movie-item-style-2 userrate${
										index === ratedMovies.length - 1 ? ' last' : ''
									}`}
								>
									<img src={movie.image} alt={movie.title} />
									<div className="mv-item-infor">
										<h6>
											<Link to={`/movies/${movie.id}`}>
												{movie.title} <span>({movie.year})</span>
											</Link>
										</h6>
										<p className="time sm-text">your rate:</p>
										<p className="rate">
											<i className="ion-android-star"></i>
											<span>{movie.rating}</span> /10
										</p>
										{movie.reviewTitle && (
											<>
												<p className="time sm-text">your reviews:</p>
												<h6>{movie.reviewTitle}</h6>
												<p className="time sm">{movie.reviewDate}</p>
												<p>"{movie.review}"</p>
											</>
										)}
									</div>
								</div>
							))}
							<div className="topbar-filter">
								<label>Movies per page:</label>
								<select>
									<option value="range">20 Movies</option>
									<option value="saab">10 Movies</option>
								</select>
								<div className="pagination2">
									<span>Page 1 of 1:</span>
									<a className="active" href="#">
										1
									</a>
									<a href="#">
										<i className="ion-arrow-right-b"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserRate
