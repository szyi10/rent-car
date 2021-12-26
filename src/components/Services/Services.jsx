import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'

const Services = () => {
	return (
		<div className="services py-5" id="services">
			<div className="container">
				<h2>Our Services</h2>
				<p className="services-subtitle mb-4">The services we provide for our clients:</p>
				<div>
					<div className="row row-cols-lg-2 row-cols-1">
						<div className="col">
							<ServiceCard type={'rent'} />
						</div>
						<div className="col">
							<ServiceCard type={'order'} />
						</div>
					</div>

					<div className="row row-cols-lg-2 row-cols-1">
						<div className="col">
							<ServiceCard type={'towing'} />
						</div>
						<div className="col">
							<ServiceCard type={'opinion'} />
						</div>
					</div>
				</div>
				<h4 className="text-center fs-5 fw-light">
					If you want to use one of our services, please contact us in a <a href="#contact">way that suits you.</a>
				</h4>
			</div>
		</div>
	)
}

export default Services
