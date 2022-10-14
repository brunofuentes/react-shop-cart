import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'

function OrdersList() {
	const { orders, updateOrders } = useContext(ShopContext)

	useEffect(() => {
		updateOrders()
	})

	return (
		<>
			<div className="py-5">
				<table className="table-auto border w-full mx-auto">
					<thead className="bg-slate-300">
						<tr className="border-b">
							<th className="border-r p-1">Nome</th>
							<th className="border-r p-1">Detalhes</th>
							<th className="border-r p-1">Total</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<tr key={order.orderId} className="border-b odd:bg-gray-50">
								<td className="border-r px-3 py-1">{order.orderName}</td>
								<td className="border-r px-3 py-1">
									<small>
										Items:
										<ul>
											{order.items.map((item, index) => (
												<li key={item.orderId}>
													- {item.name}, {item.qty} un.
												</li>
											))}
										</ul>
									</small>
								</td>
								<td className="border-r px-3 py-1" width="10%">
									R$ {order.totalPrice}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default OrdersList
