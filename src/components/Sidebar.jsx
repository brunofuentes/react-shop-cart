import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ShopContext from '../context/ShopContext'

function Sidebar() {
	const { cartItems } = useContext(ShopContext)
	let navigate = useNavigate()
	return (
		<div className="flex flex-col border-r w-1/6">
			<button onClick={() => navigate('/')}>home</button>
			<button onClick={() => navigate('/basket')}>cesta {cartItems.length > 0 && cartItems.length}</button>
		</div>
	)
}

export default Sidebar
