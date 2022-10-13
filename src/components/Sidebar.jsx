import React, { useContext } from 'react'
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
					<button className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3" onClick={() => navigate('/')}>
						Home
					</button>
					<button className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3" onClick={() => navigate('/basket')}>
						Cesta {cartItems.length > 0 && cartItems.length}
					</button>
				</div>
			) : (
				<div className="flex flex-col border-r w-1/6">
					<button className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3" onClick={() => navigate('/admin')}>
						Produtos
					</button>
					<button className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3" onClick={() => navigate('/admin/orders')}>
						Compras
					</button>
				</div>
			)}
		</>
	)
}

export default Sidebar
