import React, { useContext, useEffect } from 'react'
import AdminAddProductForm from '../components/AdminAddProductForm'
import AdminProductList from '../components/AdminProductList'
import ShopContext from '../context/ShopContext'

function Admin() {
	const { updateShopItems } = useContext(ShopContext)

	useEffect(() => {
		updateShopItems()
	})

	return (
		<div className="flex flex-grow flex-col py-3 px-8">
			<span className="pb-3">{'admin > products'}</span>
			<AdminAddProductForm />
			<AdminProductList />
		</div>
	)
}

export default Admin
