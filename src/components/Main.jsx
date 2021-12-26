import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Offer from '../pages/Offer'

const Main = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />}></Route>
			<Route path="/offer" element={<Offer />}></Route>
		</Routes>
	)
}

export default Main
