import React from 'react'
import { Link } from 'react-router-dom'

const CelebrityGrid = () => {
	const celebrities = [
		{
			id: 1,
			name: 'Tom Hardy',
			profession: 'actor',
			country: 'usa',
			image: 'images/uploads/ceb1.jpg',
		},
		{
			id: 2,
			name: 'Leonardo DiCaprio',
			profession: 'actor',
			country: 'mexico',
			image: 'images/uploads/ceb2.jpg',
		},
		{
			id: 3,
			name: 'Emma Stone',
			profession: 'Actress',
			country: 'usa',
			image: 'images/uploads/ceb3.jpg',
		},
		{
			id: 4,
			name: 'Olga Kurylenko',
			profession: 'Actress',
			country: 'sweden',
			image: 'images/uploads/ceb4.jpg',
		},
		{
			id: 5,
			name: 'Micheal Bay',
			profession: 'Director',
			country: 'france',
			image: 'images/uploads/ceb5.jpg',
		},
		{
			id: 6,
			name: 'Martin Scorsese',
			profession: 'Director',
			country: 'italy',
			image: 'images/uploads/ceb6.jpg',
		},
	]

	return (
		<>
			<div className="hero common-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>celebrity listing - grid</h1>
								<ul className="breadcumb">
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li>
										<span className="ion-ios-arrow-right"></span> celebrity listing
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
						<div className="col-md-9 col-sm-12 col-xs-12">
							<div className="topbar-filter">
								<p>
									Found <span>{celebrities.length} celebrities</span> in total
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
								<Link to="/celebrities/list" className="list">
									<i className="ion-ios-list-outline "></i>
								</Link>
								<Link to="/celebrities/grid" className="grid">
									<i className="ion-grid active"></i>
								</Link>
							</div>
							<div className="celebrity-items">
								{celebrities.map((celebrity) => (
									<div key={celebrity.id} className="ceb-item">
										<Link to={`/celebrities/${celebrity.id}`}>
											<img src={celebrity.image} alt={celebrity.name} />
										</Link>
										<div className="ceb-infor">
											<h2>
												<Link to={`/celebrities/${celebrity.id}`}>{celebrity.name}</Link>
											</h2>
											<span>
												{celebrity.profession}, {celebrity.country}
											</span>
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

export default CelebrityGrid
