import React, { useContext, useEffect } from 'react'
import ProductList from '../components/ProductList'
import ShopContext from '../context/ShopContext'
import SearchProduct from '../components/SearchProduct'

function Home() {
	const { updateShopItems } = useContext(ShopContext)

	useEffect(() => {
		updateShopItems()
	}, [updateShopItems])

	return (
		<div className="flex flex-grow flex-col px-8 py-3">
			<div className="flex justify-between items-center">
				<span>Home</span>
				<SearchProduct />
			</div>
			<ProductList />
		</div>
	)
}

export default Home
