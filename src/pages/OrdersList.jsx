import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'

function OrdersList() {
	const { orders, updateOrders } = useContext(ShopContext)

	useEffect(() => {
		updateOrders()
	})

	return (
		<>
			<div className="p-3">
				<table className="table-auto border">
					<thead>
						<tr className="border-b">
							<th className="border-r p-1">Nome</th>
							<th className="border-r p-1">Detalhes</th>
							<th className="border-r p-1">Total</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<tr key={index} className="border-b">
								<td className="border-r">{order.orderName}</td>
								<td className="border-r">
									<small>
										Items:
										<ul>
											{order.items.map((item, index) => (
												<li key={index}>
													- {item.name}, {item.qty} un.
												</li>
											))}
										</ul>
									</small>
								</td>
								<td className="border-r">R$ {order.totalPrice}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default OrdersList