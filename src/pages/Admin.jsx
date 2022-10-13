import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminAddProductForm from '../components/AdminAddProductForm'
import AdminProductList from '../components/AdminProductList'
import ShopContext from '../context/ShopContext'
import OrdersList from '../components/OrdersList'

function Admin() {
	const { updateShopItems } = useContext(ShopContext)
	const { page } = useParams()

	useEffect(() => {
		updateShopItems()
	})

	return (
		<div className="flex flex-grow flex-col px-3 py-8">
			<span className="pb-3">
				<a href="/admin">admin</a> {'>'} {page !== 'orders' ? 'produtos' : 'compras'}
			</span>
			{page !== 'orders' ? (
				<>
					<AdminAddProductForm />
					<AdminProductList />
				</>
			) : (
				<OrdersList />
			)}
		</div>
	)
}

export default Admin
