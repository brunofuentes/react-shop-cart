import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ShopContext from '../context/ShopContext'
import Basket from '../components/Basket'

function Home() {
	const { updateShopItems } = useContext(ShopContext)
	const { page } = useParams()

	useEffect(() => {
		updateShopItems()
	}, [updateShopItems])

	return (
		<div className="min-h-[90vh] relative flex flex-grow flex-col px-8 py-3">
			<div className="flex justify-between">
				<span>{page !== 'basket' ? 'Home' : 'Cesta'}</span>
				{page !== 'basket' && (
					<span className="border items-center flex p-1 rounded">
						<img className="inline" width={16} height={16} src="/images/icons/search_icon.svg" alt="Search product" />
						<input type="text" placeholder="" />
					</span>
				)}
			</div>
			{page !== 'basket' ? <ProductList /> : <Basket />}
		</div>
	)
}

export default Home
