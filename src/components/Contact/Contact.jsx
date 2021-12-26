import React from 'react'
import './Contact.css'
import ContactMap from '../../assets/images/map.svg'

const Contact = () => {
	return (
		<div className="contact py-5" id="contact">
			<div className="container">
				<div className="row row-cols-md-2 row-cols-1 align-items-center">
					<div className="col">
						<h2>Contact</h2>
						<p>If you have any problem or question, you can contact us or visit us in one of our offices and we will do our best to help.</p>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<strong>Email:</strong> contact@carrent.com
							</li>
							<li className="list-group-item">
								<strong>Job Appy:</strong> job.apply@carrent.com
							</li>
							<li className="list-group-item">
								<strong>Business Email:</strong> business@carrent.com
							</li>
							<li className="list-group-item">
								<strong>Phone:</strong> +49 503-173-420
							</li>
							<li className="list-group-item">
								<strong>Headquarters:</strong> Gabriele-Tergit-Promenade 21, 10963 Berlin, Germany
							</li>
						</ul>
					</div>

					<div className="col pt-md-0 pt-4">
						<img src={ContactMap} alt="Map" className="contact-img" />
					</div>
				</div>

				<h3 className="mt-5 mb-4 text-center">Frequently Asked Questions</h3>
				<div className="accordion accordion-flush" id="accordion1">
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingOne">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne"
							>
								What are the advantages of CarRent?
							</button>
						</h2>
						<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordion1">
							<div className="accordion-body">
								<p>
									CarRent is a car rental company that offers best rental rates and pickup location from almost everywhere. CarRent is one of the
									fastest growing with an impressive customer base more than 20 million customers and over 3,000 employees.
								</p>
								<p>
									From the beginning of the company's existence, our goal was to provide safe services and gain the trust of customers. Because of our
									priorities we cooperate with trusted car repair shops and provide roadside assistance to help our customer as fast as we can in case
									of issue with the car.
								</p>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingTwo">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo"
							>
								How do I book a car in CarRent?
							</button>
						</h2>
						<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordion1">
							<div className="accordion-body">
								<p>
									CarRent is the first on-demand car rental service that provides on-demand booking for all types of cars. For on-demand rental
									bookings, customers can choose from a range of cars of different makes and models. The company has offices in several cities all
									over Europe.
								</p>
								<p>
									In CarRent we have few ways to book cars - the most liked is via our mobile app CarRent supported by our group of programmers. You
									can also call or mail us and reserve car that you want.
								</p>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingThree">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree"
								aria-expanded="false"
								aria-controls="flush-collapseThree"
							>
								What type of insurance is provided by CarRent?
							</button>
						</h2>
						<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion1">
							<div className="accordion-body">
								<p>
									The CarRent insurance policy is an optional expense that covers damages caused by accidents during the rental period or by vandalism
									to the rented vehicle or any items left inside it.
								</p>
								<p>
									XYZ hires people with multiple year experience if you want to know more about it, call our insurance department{' '}
									<strong>+49 512-513-732</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
