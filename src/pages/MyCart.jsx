import React from 'react'
import Basket from '../components/Basket'

function MyCart() {
	return (
		<div className="flex flex-grow flex-col px-8 py-3">
			<span>Cesta</span>
			<Basket />
		</div>
	)
}

export default MyCart
