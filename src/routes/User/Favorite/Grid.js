import React from 'react'
import { Link } from 'react-router-dom'

const UserFavoriteGrid = () => {
	const movies = [
		{ id: 1, title: 'Oblivion', rating: 8.1, image: 'images/uploads/mv1.jpg' },
		{ id: 2, title: 'Into the Wild', rating: 7.8, image: 'images/uploads/mv2.jpg' },
		{ id: 3, title: 'Die Hard', rating: 7.4, image: 'images/uploads/mv-item3.jpg' },
		{ id: 4, title: 'The Walk', rating: 7.4, image: 'images/uploads/mv-item4.jpg' },
		{ id: 5, title: 'Blade Runner', rating: 7.3, image: 'images/uploads/mv3.jpg' },
		{ id: 6, title: 'Mulholland Pride', rating: 7.2, image: 'images/uploads/mv4.jpg' },
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
										<span className="ion-ios-arrow-right"></span>Favorite movies
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
										<li className="active">
											<Link to="/user/favorites/list">Favorite movies</Link>
										</li>
										<li>
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
							<div className="topbar-filter user">
								<p>
									Found <span>{movies.length} movies</span> in total
								</p>
								<label>Sort by:</label>
								<select>
									<option value="range">-- Choose option --</option>
									<option value="saab">-- Choose option 2--</option>
								</select>
								<Link to="/user/favorites/list" className="list">
									<i className="ion-ios-list-outline "></i>
								</Link>
								<Link to="/user/favorites/grid" className="grid">
									<i className="ion-grid active"></i>
								</Link>
							</div>
							<div className="flex-wrap-movielist grid-fav">
								{movies.map((movie) => (
									<div
										key={movie.id}
										className="movie-item-style-2 movie-item-style-1 style-3"
									>
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
					</div>
				</div>
			</div>
		</>
	)
}

export default UserFavoriteGrid
