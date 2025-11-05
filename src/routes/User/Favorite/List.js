import React from 'react'
import { Link } from 'react-router-dom'

const UserFavoriteList = () => {
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
			<div className="page-single userfav_list">
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
									<i className="ion-ios-list-outline active"></i>
								</Link>
								<Link to="/user/favorites/grid" className="grid">
									<i className="ion-grid "></i>
								</Link>
							</div>
							<div className="flex-wrap-movielist user-fav-list">
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
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserFavoriteList
