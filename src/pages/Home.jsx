import React, { useContext, useEffect, useRef } from 'react'
import ProductList from '../components/ProductList'
import ShopContext from '../context/ShopContext'

function Home() {
	const { updateShopItems, updateCartItems } = useContext(ShopContext)

	useEffect(() => {
		updateShopItems()
	}, [])

	useEffect(() => {
		updateCartItems()
	})

	return (
		<div className="flex flex-grow flex-col">
			<div className="flex justify-between p-3">
				<span>Home</span>
				<span className="border items-center flex p-1 rounded">
					<img className="inline" width={16} height={16} src="/images/icons/search_icon.svg" alt="Search product" />
					<input type="text" placeholder="" />
				</span>
			</div>
			<ProductList />
		</div>
	)
}

export default Home
