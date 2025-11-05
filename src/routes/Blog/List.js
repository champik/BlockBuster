import React from 'react'

const BlogList = () => {
	const blogPosts = [
		{
			id: 1,
			title: "Captain America: Civil War – IMAX Featurette & Exclusive Poster",
			image: '/images/uploads/bloglist-it1.jpg',
			date: '27 Mar 2017',
			excerpt: "Africa's burgeoning animation scene got a boost this week with the announcement of an ambitious new partnership that will pair rising talents from across the continent..."
		},
		{
			id: 2,
			title: "The Walking Dead: Season 8 Will Be Partially A Time Jump",
			image: '/images/uploads/bloglist-it2.jpg',
			date: '27 Mar 2017',
			excerpt: "Magnolia Pictures has acquired U.S. and international rights to the comedic drama Lucky John Carroll Lynch's directorial debut. Lynch is an in-demand character actor who..."
		},
		{
			id: 3,
			title: "Game of Thrones Season 7 Trailer: Daenerys Makes Her Move",
			image: '/images/uploads/bloglist-it3.jpg',
			date: '27 Mar 2017',
			excerpt: "New Line's remake of \"Going in Style\" launched with a moderate $600,000 on Thursday night, while Sony's animated \"Smurfs: The Lost Village\" debuted with $375,000..."
		},
	]

	return (
		<>
			<div className="hero common-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="hero-ct">
								<h1>blog listing - list</h1>
								<ul className="breadcumb">
									<li className="active"><a href="#">Home</a></li>
									<li> <span className="ion-ios-arrow-right"></span> blog listing</li>
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
							{blogPosts.map((post) => (
								<div key={post.id} className="blog-item-style-1 blog-item-style-3">
									<img src={post.image} alt={post.title} />
									<div className="blog-it-infor">
										<h3><a href={`/blog/${post.id}`}>{post.title}</a></h3>
										<span className="time">{post.date}</span>
										<p>{post.excerpt}</p>
									</div>
								</div>
							))}

							<ul className="pagination">
								<li className="icon-prev"><a href="#"><i className="ion-ios-arrow-left"></i></a></li>
								<li className="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">...</a></li>
								<li><a href="#">21</a></li>
								<li className="icon-next"><a href="#"><i className="ion-ios-arrow-right"></i></a></li>
							</ul>
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

export default BlogList
