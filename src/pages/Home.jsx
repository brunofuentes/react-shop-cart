import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ShopContext from '../context/ShopContext'
import Basket from '../components/Basket'
import SearchProduct from '../components/SearchProduct'

function Home() {
	const { updateShopItems } = useContext(ShopContext)
	const { page } = useParams()

	useEffect(() => {
		updateShopItems()
	}, [updateShopItems])

	return (
		<div className="min-h-[90vh] relative flex flex-grow flex-col px-8 py-3">
			<div className="flex justify-between items-center">
				<span>{page !== 'basket' ? 'Home' : 'Cesta'}</span>
				{page !== 'basket' && <SearchProduct />}
			</div>
			{page !== 'basket' ? <ProductList /> : <Basket />}
		</div>
	)
}

export default Home
