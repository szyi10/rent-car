import React from 'react'
import './CTA.css'

const CTA = ({ newsletterClicked, setEmailValue }) => {
	return (
		<div className="cta mt-4">
			<div className="container py-5 text-center">
				<h2 className="fs-1">Join our newsletter</h2>
				<h5 className="fw-normal">New cars & sales straight to your inbox</h5>
				<div className="newsletter-inputs mt-4 d-flex align-items-center justify-content-center flex-md-row flex-column">
					<input
						type="email"
						className="newsletter-input"
						placeholder="Enter your email here ..."
						aria-describedby="newsletter-btn"
						onChange={(e) => setEmailValue(e.target.value)}
					/>
					<button type="button" className=" newsletter-btn" id="newsletter-btn" onClick={newsletterClicked}>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	)
}

export default CTA
