import React from 'react'
import cars from '../../json/cars.json'
import './Shop.css'
import Card from '../Card/Card'

const Shop = () => {
	return (
		<div className="shop">
			<div className="container">
				<div className="cards-container py-5">
					{cars.map(({ id }) => (
						<Card carId={id} key={id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Shop
