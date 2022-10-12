import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from '../context/ShopContext'

function Basket() {
	let navigate = useNavigate()
	let totalPrice = 0

	const { cartItems, setCartItems, orders, setOrders, removeCartItem, updateCartItems, updateOrders, resetCart } = useContext(ShopContext)
	const [orderName, setOrderName] = useState()
	const trackOrder = useRef(orders.length)

	useEffect(() => {
		if (orders.length > trackOrder.current) {
			updateOrders()
			resetCart()
		} else {
			updateCartItems()
		}
	})

	const changeItemQty = (qty, item) => {
		const itemToChange = cartItems.find((x) => x.id === item.id)
		if (itemToChange) {
			setCartItems(cartItems.map((x) => (x.id === item.id ? { ...itemToChange, qty: qty } : x)))
		}
	}

	const checkOut = () => {
		if (cartItems.length > 0 && orderName) {
			setOrders([
				...orders,
				{
					orderId: orders.length > 0 ? orders[orders.length - 1].orderId + 1 : 1,
					orderName: orderName,
					totalPrice: totalPrice,
					items: cartItems,
				},
			])
			alert(`A compra ${orderName} foi finalizada com sucesso!`)
		} else if (cartItems.length > 0 && !orderName) {
			alert('Dê um nome a sua cesta de compras antes de finalizar.')
		}
	}

	if (cartItems.length > 0) {
		totalPrice = cartItems.map((x) => x.price * x.qty).reduce((a, b) => a + b, 0)
	}

	return (
		<>
			<div className="p-3 flex flex-grow flex-col">
				<h2>Cesta</h2>
				<div className="border rounded my-1">
					<input className="p-1" type="text" placeholder="Nome da Cesta" onChange={(e) => setOrderName(e.target.value)} />
				</div>
				<div className="my-3">
					<table className="table-auto border">
						<thead>
							<tr className="border-b">
								<th className="border-r p-1">Qtd</th>
								<th className="border-r p-1">Produto</th>
								<th className="border-r p-1">Descrição</th>
								<th className="border-r p-1">Valor</th>
								<th className="border-r p-1"></th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((item, index) => (
								<tr key={index} className="border-b">
									<td className="border-r">
										<input
											type="number"
											min="1"
											defaultValue={item.qty}
											onChange={(e) => changeItemQty(parseInt(e.target.value), item)}
										/>
									</td>
									<td className="border-r">{item.name}</td>
									<td className="border-r">{item.description}</td>
									<td className="border-r">R${item.price * item.qty}</td>
									<td className="p-1">
										<button onClick={() => removeCartItem(item)}>
											<img width={16} height={16} src="/images/icons/delete_icon.svg" alt="Remove Item" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<span>Total: R${totalPrice.toFixed(2)}</span>
				<div>
					<button disabled={!(cartItems.length > 0)} onClick={() => checkOut()}>
						Finalizar Compra
					</button>
				</div>
			</div>
		</>
	)
}

export default Basket
