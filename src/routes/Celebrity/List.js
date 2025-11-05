import React from 'react'
import { Link } from 'react-router-dom'

const CelebrityList = () => {
	const celebrities = [
		{
			id: 1,
			name: 'Dan Stevens',
			profession: 'actor',
			country: 'usa',
			image: 'images/uploads/ceblist1.jpg',
			bio: 'Dan Stevens was born at Croydon in Surrey on 10th October 1982. His parents are teachers. He was educated at Tonbridge School and trained in acting at the National Youth Theatre of Great Britain...',
		},
		{
			id: 2,
			name: 'Luke Evans',
			profession: 'actor',
			country: 'mexico',
			image: 'images/uploads/ceblist2.jpg',
			bio: 'Luke George Evans was born in Pontypool, Wales, and grew up in Aberbargoed, in the south of Wales. He is the son of Yvonne (Lewis) and David Evans. He moved to Cardiff at the age 17...',
		},
		{
			id: 3,
			name: 'Scarlett Johansson',
			profession: 'actress',
			country: 'france',
			image: 'images/uploads/ceblist3.jpg',
			bio: 'Scarlett Ingrid Johansson was born in New York City. Her mother, Melanie Sloan, is from a Jewish family from the Bronx, and her father, Karsten Johansson, is a Danish-born architect, from Copenhagen...',
		},
		{
			id: 4,
			name: 'Emma Watson',
			profession: 'actress',
			country: 'uk',
			image: 'images/uploads/ceblist4.jpg',
			bio: 'Emma Charlotte Duerre Watson was born in Paris, France, to English parents, Jacqueline Luesby and Chris Watson, both lawyers. She moved to Oxfordshire when she was five...',
		},
		{
			id: 5,
			name: 'Tom Hardy',
			profession: 'actor',
			country: 'italy',
			image: 'images/uploads/ceblist5.jpg',
			bio: 'Joan Crawford was born Lucille Fay LeSueur on March 23, 1905, in San Antonio, Texas, to Anna Belle (Johnson) and Thomas E. LeSueur, a laundry laborer. By the time she was born her parents had separated....',
		},
	]

	return (
		<>
			<div className="hero common-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>celebrity listing - list</h1>
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
								<p className="pad-change">
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
									<i className="ion-ios-list-outline active"></i>
								</Link>
								<Link to="/celebrities/grid" className="grid">
									<i className="ion-grid "></i>
								</Link>
							</div>
							<div className="row">
								{celebrities.map((celebrity) => (
									<div key={celebrity.id} className="col-md-12">
										<div className="ceb-item-style-2">
											<img src={celebrity.image} alt={celebrity.name} />
											<div className="ceb-infor">
												<h2>
													<Link to={`/celebrities/${celebrity.id}`}>{celebrity.name}</Link>
												</h2>
												<span>
													{celebrity.profession}, {celebrity.country}
												</span>
												<p>{celebrity.bio}</p>
											</div>
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

export default CelebrityList
