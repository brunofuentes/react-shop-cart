import React from 'react'

function Navbar() {
	let currentPath = window.location.pathname

	return (
		<div className={currentPath.includes('/admin') ? 'flex justify-between border-b p-3 bg-yellow-300' : 'flex justify-between border-b p-3'}>
			<a className="flex hover:scale-105" href="/">
				<img src="/images/icons/shop_cart_icon.svg" width={20} height={20} alt="" />
				<span className="pl-2 font-bold">S-Shop</span>
			</a>
			{currentPath.includes('/admin') && <span className="text-red-600 font-bold">Página de Administração</span>}
			<span>
				<img width={25} height={25} src="/images/icons/bars_icon.svg" alt="Menu" />
			</span>
		</div>
	)
}

export default Navbar
