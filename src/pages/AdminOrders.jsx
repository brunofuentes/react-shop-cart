import React from 'react'
import OrdersList from '../components/OrdersList'

function AdminOrders() {
	return (
		<div className="flex flex-grow flex-col py-3 px-8">
			<span className="pb-3">{'admin > orders'}</span>
			<OrdersList />
		</div>
	)
}

export default AdminOrders
