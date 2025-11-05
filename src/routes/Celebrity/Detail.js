import React from 'react'
import { Link } from 'react-router-dom'

const CelebrityDetail = () => {
	const celebrity = {
		name: 'Hugh Jackman',
		role: 'Actor  |  Producer',
		image: 'images/uploads/cebsingle2.png',
		bio: [
			'Jackman was born in Sydney, New South Wales, to Grace McNeil (Greenwood) and Christopher John Jackman, an accountant. He is the youngest of five children. His parents both English, moved to Australia shortly before his birth. He also has Greek (from a great-grandfather) and Scottish (from a grandmother) ancestry.',
			'Hugh Michael Jackman is an Australian actor, singer, multi-instrumentalist, dancer and producer. Jackman has won international recognition for his roles in major films, notably as superhero, period, and romance characters.',
		],
		photos: [
			'images/uploads/image1.jpg',
			'images/uploads/image2.jpg',
			'images/uploads/image3.jpg',
			'images/uploads/image4.jpg',
		],
		filmography: [
			{
				title: 'X-Men: Apocalypse',
				character: 'Logan',
				year: 2016,
				image: 'images/uploads/film1.jpg',
			},
			{
				title: 'Eddie the Eagle',
				character: 'Bronson Peary',
				year: 2015,
				image: 'images/uploads/film2.jpg',
			},
			{
				title: 'Me and Earl and the Dying Girl',
				character: 'Hugh Jackman',
				year: 2015,
				image: 'images/uploads/film3.jpg',
			},
			{
				title: 'Night at the Museum 3',
				character: 'Blackbeard',
				year: 2014,
				image: 'images/uploads/film4.jpg',
			},
		],
	}

	return (
		<>
			<div className="page-single movie-single cebleb-single">
				<div className="container">
					<div className="row ipad-width">
						<div className="col-md-4 col-sm-12 col-xs-12">
							<div className="mv-ceb">
								<img src={celebrity.image} alt={celebrity.name} />
							</div>
						</div>
						<div className="col-md-8 col-sm-12 col-xs-12">
							<div className="movie-single-ct">
								<h1 className="bd-hd">{celebrity.name}</h1>
								<p className="ceb-single">{celebrity.role}</p>
								<div className="social-link cebsingle-socail">
									<a href="#">
										<i className="ion-social-facebook"></i>
									</a>
									<a href="#">
										<i className="ion-social-twitter"></i>
									</a>
									<a href="#">
										<i className="ion-social-googleplus"></i>
									</a>
									<a href="#">
										<i className="ion-social-linkedin"></i>
									</a>
								</div>
								<div className="movie-tabs">
									<div className="tabs">
										<ul className="tab-links tabs-mv">
											<li className="active">
												<a href="#overviewceb">Overview</a>
											</li>
											<li>
												<a href="#biography">biography</a>
											</li>
											<li>
												<a href="#mediaceb">Media</a>
											</li>
											<li>
												<a href="#filmography">filmography</a>
											</li>
										</ul>
										<div className="tab-content">
											<div id="overviewceb" className="tab active">
												<div className="row">
													<div className="col-md-8 col-sm-12 col-xs-12">
														{celebrity.bio.map((paragraph, index) => (
															<p key={index}>{paragraph}</p>
														))}
														<p className="time">
															<a href="#">
																See full bio <i className="ion-ios-arrow-right"></i>
															</a>
														</p>
														<div className="title-hd-sm">
															<h4>Videos & Photos</h4>
															<a href="#" className="time">
																All 5 Videos & 245 Photos <i className="ion-ios-arrow-right"></i>
															</a>
														</div>
														<div className="mvsingle-item ov-item">
															{celebrity.photos.map((photo, index) => (
																<a
																	key={index}
																	className="img-lightbox"
																	data-fancybox-group="gallery"
																	href={photo}
																>
																	<img src={photo} alt="" />
																</a>
															))}
														</div>
														<div className="title-hd-sm">
															<h4>filmography</h4>
															<a href="#" className="time">
																Full Filmography
																<i className="ion-ios-arrow-right"></i>
															</a>
														</div>
														<div className="mvcast-item">
															{celebrity.filmography.map((film, index) => (
																<div key={index} className="cast-it">
																	<div className="cast-left cebleb-film">
																		<img src={film.image} alt={film.title} />
																		<div>
																			<Link to="#">{film.title}</Link>
																			<p className="time">{film.character}</p>
																		</div>
																	</div>
																	<p>... {film.year}</p>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CelebrityDetail
