import React from 'react'
import './Card.css'

import cars from '../../json/cars.json'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import { FaGasPump } from 'react-icons/fa'
import { GiGearStickPattern, GiCarDoor, GiCarWheel } from 'react-icons/gi'
import { IoSpeedometer, IoSnowSharp } from 'react-icons/io5'
import { MdLuggage } from 'react-icons/md'

const Card = ({ carId }) => {
	const CardSpec = ({ icon, text, tooltip = 'Unknown' }) => {
		return (
			<OverlayTrigger placement="top" overlay={<Tooltip>{tooltip}</Tooltip>}>
				<div className="card-spec">
					{icon} {text}
				</div>
			</OverlayTrigger>
		)
	}

	return (
		<>
			{cars
				.filter((car) => car.id === carId)
				.map(({ id, name, model, fullName, fuelType, gearbox, avgFuelConsuption, bootCapacity, doors, driveType, airConditioningType, img }) => (
					<div className="shop-card d-flex flex-column flex-lg-row align-items-center py-3 px-3" key={id}>
						<img src={img} alt={fullName} className="card-img w-50" />
						<div className="card-content ms-4">
							<h1 className="card-title mt-3">{fullName}</h1>
							<div className="card-specs">
								<CardSpec icon={<FaGasPump />} text={fuelType} tooltip="Fuel Type" />
								<CardSpec icon={<GiGearStickPattern />} text={gearbox} tooltip="Gearbox Type" />
								<CardSpec icon={<IoSpeedometer />} text={`[l/100km]: ${avgFuelConsuption}`} tooltip="Average Fuel Consuption" />
								<CardSpec icon={<MdLuggage />} text={bootCapacity} tooltip="Boot Capacity" />
								<CardSpec icon={<GiCarDoor />} text={doors} tooltip="Number of Doors" />
								<CardSpec icon={<GiCarWheel />} text={driveType} tooltip="Wheel Drive Type" />
								<CardSpec icon={<IoSnowSharp />} text={airConditioningType} tooltip="Air Conditioning Type" />
							</div>
						</div>
					</div>
				))}
		</>
	)
}

export default Card
