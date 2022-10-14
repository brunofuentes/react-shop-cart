import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ShopContext from '../context/ShopContext'

function PageLayout() {
	const { cartItems } = useContext(ShopContext)

	const navigate = useNavigate()

	return (
		<div className="min-h-screen">
			<nav className="flex justify-between border-b p-3">
				<a className="flex hover:scale-105" href="/">
					<img src="/images/icons/shop_cart_icon.svg" width={20} height={20} alt="" />
					<span className="pl-2 font-bold">S-Shop</span>
				</a>
				<span>
					<img width={25} height={25} src="/images/icons/bars_icon.svg" alt="Menu" />
				</span>
			</nav>
			<section className="flex mx-auto">
				<div className="flex flex-col flex-1 border-r w-1/6">
					<button className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3" onClick={() => navigate('/')}>
						Home
					</button>
					<button className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3" onClick={() => navigate('/basket')}>
						Cesta {cartItems.length > 0 && cartItems.length}
					</button>
				</div>
				<Outlet />
			</section>
		</div>
	)
}

export default PageLayout
