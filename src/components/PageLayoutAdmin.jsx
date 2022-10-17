import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function PageLayoutAdmin() {
	const navigate = useNavigate()

	return (
		<>
			<nav className="flex justify-between border-b p-3 bg-yellow-300">
				<a className="flex hover:scale-105" href="/">
					<img src="/images/icons/shop_cart_icon.svg" width={20} height={20} alt="" />
					<span className="pl-2 font-bold">S-Shop</span>
				</a>
				<span className="text-red-600 font-bold">Página de Administração</span>
				<span>
					<img width={25} height={25} src="/images/icons/bars_icon.svg" alt="Menu" />
				</span>
			</nav>
			<section className="flex mx-auto sm:min-h-[93vh] flex-col sm:flex-row">
				<div className="flex flex-col border-r sm:w-1/6 ">
					<button
						className="bg-slate-300 border-b hover:scale-105 hover:bg-slate-400 shadow-sm py-3"
						onClick={() => navigate('/admin')}
					>
						Produtos
					</button>
					<button
						className="bg-slate-300 hover:scale-105 hover:bg-slate-400 shadow-sm py-3"
						onClick={() => navigate('/admin/orders')}
					>
						Compras
					</button>
				</div>
				<Outlet />
			</section>
		</>
	)
}

export default PageLayoutAdmin
