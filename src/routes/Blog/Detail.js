import React from 'react'

const BlogDetail = () => {
	const comments = [
		{
			id: 1,
			author: 'Steve Perry',
			date: '27 Mar 2017',
			avatar: '/images/uploads/author.png',
			text: "Even though Journey's classic vocalist Steve Perry didn't reunite with the band during their Rock Hall performance (to the dismay of hopeful fans), he did offer up a touching speech."
		},
		{
			id: 2,
			author: 'Joss Whedon',
			date: '27 Mar 2017',
			avatar: '/images/uploads/author2.png',
			text: "Prince died not long after the 2016 Rock Hall ceremony, so this year's edition featured Lenny Kravitz and a full gospel choir performing a swamp-funk take on When Doves Cry.",
			reply: true
		},
	]

	return (
		<>
			<div className="hero common-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>blog detail</h1>
								<ul className="breadcumb">
									<li className="active"><a href="#">Home</a></li>
									<li> <span className="ion-ios-arrow-right"></span> <a href="/blog">blog</a></li>
									<li> <span className="ion-ios-arrow-right"></span> blog detail</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="page-single">
				<div className="container">
					<div className="row">
						<div className="col-md-9 col-sm-12 col-xs-12">
							<div className="blog-detail-ct">
								<h1>New Character Posters For Pirates Of The Caribbean</h1>
								<span className="time">27 Mar 2017</span>
								<img src="/images/uploads/blog-detail.jpg" alt="" />
								<p>
									Joss Whedon has a little bit of a history with superhero movies, and for creating layered female characters. After his documented frustrations with Wonder Woman, he's getting another chance at the DC Extended Universe and Warner Bros., closing in on a deal to write direct and produce a Batgirl movie.
								</p>
								<p>
									It's a somewhat surprising, but welcome move, given that Whedon has taken a long break to write something original, but has now pivoted to focus on developing the Batgirl project. First appearing in 1967 in Gardner Fox and Carmine Infantino's story run The Million Dollar Debut Of Batgirl, she's the superhero alias of Barbara Gordon, daughter of Gotham City Police Commissioner James Gordon.
								</p>

								<div className="flex-it share-tag">
									<div className="social-link">
										<h4>Share it</h4>
										<a href="#"><i className="ion-social-facebook"></i></a>
										<a href="#"><i className="ion-social-twitter"></i></a>
										<a href="#"><i className="ion-social-googleplus"></i></a>
										<a href="#"><i className="ion-social-pinterest"></i></a>
										<a href="#"><i className="ion-social-linkedin"></i></a>
									</div>
									<div className="right-it">
										<h4>Tags</h4>
										<a href="#">Gray,</a>
										<a href="#">Film,</a>
										<a href="#">Poster</a>
									</div>
								</div>

								<div className="comments">
									<h4>{comments.length} Comments</h4>
									{comments.map((comment) => (
										<div key={comment.id} className={`cmt-item flex-it ${comment.reply ? 'reply' : ''}`}>
											<img src={comment.avatar} alt="" />
											<div className="author-infor">
												<div className="flex-it2">
													<h6><a href="#">{comment.author}</a></h6> 
													<span className="time"> - {comment.date}</span>
												</div>
												<p>{comment.text}</p>
												{!comment.reply && <p><a className="rep-btn" href="#">+ Reply</a></p>}
											</div>
										</div>
									))}
								</div>

								<div className="comment-form">
									<h4>Leave a comment</h4>
									<form className="form-style-1">
										<div className="row">
											<div className="col-md-6 form-it">
												<label>Name</label>
												<input type="text" placeholder="Your name" />
											</div>
											<div className="col-md-6 form-it">
												<label>Email</label>
												<input type="email" placeholder="Your email" />
											</div>
											<div className="col-md-12 form-it">
												<label>Your comment</label>
												<textarea placeholder="Your comment"></textarea>
											</div>
											<div className="col-md-12">
												<input className="submit" type="submit" value="submit" />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-12 col-xs-12">
							<div className="sidebar">
								<div className="searh-form">
									<h4 className="sb-title">Search for article</h4>
									<form className="form-style-1" action="#">
										<div className="row">
											<div className="col-md-12 form-it">
												<label>Article title</label>
												<input type="text" placeholder="Enter keyword" />
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

export default BlogDetail
