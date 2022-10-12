import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import ShopContext from '../context/ShopContext'

function Sidebar() {
	const { cartItems } = useContext(ShopContext)

	let currentPath = window.location.pathname
	let navigate = useNavigate()

	return (
		<>
			{!currentPath.includes('/admin') ? (
				<div className="flex flex-col border-r w-1/6">
					<button onClick={() => navigate('/')}>Home</button>
					<button onClick={() => navigate('/basket')}>Cesta {cartItems.length > 0 && cartItems.length}</button>
				</div>
			) : (
				<div className="flex flex-col border-r w-1/6">
					<button onClick={() => navigate('/admin')}>Produtos</button>
					<button onClick={() => navigate('/admin/orders')}>Compras</button>
				</div>
			)}
		</>
	)
}

export default Sidebar
