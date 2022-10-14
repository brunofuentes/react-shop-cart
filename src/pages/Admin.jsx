import React from 'react'
import AdminAddProductForm from '../components/AdminAddProductForm'
import AdminProductList from '../components/AdminProductList'

function Admin() {
	return (
		<div className="flex flex-grow flex-col py-3 px-8">
			<span className="pb-3">{'admin > products'}</span>
			<AdminAddProductForm />
			<AdminProductList />
		</div>
	)
}

export default Admin
