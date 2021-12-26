import React from 'react'
import './Services.css'

import OrderCar from '../../assets/images/order-a-car.svg'
import OrderRide from '../../assets/images/order-a-ride.svg'
import Towing from '../../assets/images/towing.svg'
import Opinion from '../../assets/images/opinion.svg'

const ServiceCard = ({ type }) => {
	let img, title, description

	if (type === 'rent') {
		img = OrderRide
		title = 'Rent A Car'
		description =
			'We are renting car of each type from small compacts to big family vans. You can rent car of your choice for the time period which you needed.'
	} else if (type === 'order') {
		img = OrderCar
		title = 'Car booking'
		description =
			'We are booking cars for short periods of time like wedding, events, party in limousine or just a ride. We can prepare car according to your order and preferences.'
	} else if (type === 'towing') {
		img = Towing
		title = 'Insurance'
		description =
			'We run an cars and motorbikes insurance. In our offer you will receive insurance against theft, flooding, accident and more. If your car is not available we can guarantee you a replacement vehicle, also we are providing roadside assistance all over Europe.'
	} else if (type === 'opinion') {
		img = Opinion
		title = 'Expert Opinion'
		description =
			'We share our several years of experience and you can hire one of our experts to make professional tests and car valuation that you want to buy or sell.'
	}

	return (
		<div className="service-card d-flex flex-column align-items-center justify-content-between text-center">
			<img src={img} className="service-card-img" />
			<h1 className="service-card-title mt-4">{title}</h1>
			<p className="service-card-description">{description}</p>
		</div>
	)
}

export default ServiceCard
