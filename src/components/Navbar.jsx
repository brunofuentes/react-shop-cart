import React from 'react'

function Navbar() {
	return (
		<div className="flex justify-between border-b p-3">
			<a className="flex hover:scale-105" href="/">
				<img src="/images/icons/shop_cart_icon.svg" width={20} height={20} alt="" />
				<span className="pl-2 font-bold">S-Shop</span>
			</a>
			<span>
				<img width={25} height={25} src="/images/icons/bars_icon.svg" alt="Menu" />
			</span>
		</div>
	)
}

export default Navbar
