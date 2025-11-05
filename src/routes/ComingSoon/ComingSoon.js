import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
	return (
		<div className="page-single-2">
			<div className="container">
				<div className="row ipad-width">
					<div className="left-content">
						<Link to="/">
							<img className="md-logo" src="images/logo1.png" alt="" />
						</Link>
						<h1>Coming soon</h1>
						<p>We are working hard to get back to you in</p>
						<div className="row">
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="coming-ct">
									<div id="clockdiv" className="time">
										<div className="it-time">
											<span className="days"></span>
											<br />
											<p>days</p>
										</div>

										<div className="it-time">
											<span className="hours"></span>
											<br />
											<p>hours</p>
										</div>
										<div className="it-time">
											<span className="minutes"></span>
											<br />
											<p>Minutes</p>
										</div>
										<div className="it-time">
											<span className="seconds"></span>
											<br />
											<p>Seconds</p>
										</div>
									</div>
								</div>
								<h3>Nofication me</h3>
								<form action="#">
									<input className="email" type="text" placeholder="Enter your email" />
									<input className="redbtn" type="submit" value="subscribe" />
								</form>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<img className="cm-img" src="images/uploads/cm-img.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComingSoon
