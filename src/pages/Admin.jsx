import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AdminProductList from '../components/AdminProductList'
import ShopContext from '../context/ShopContext'

function Admin() {
	const { updateShopItems, adminAddShopItem } = useContext(ShopContext)
	const { register, handleSubmit } = useForm()

	useEffect(() => {
		updateShopItems()
	})

	return (
		<>
			<div className="flex flex-grow flex-col p-3">
				<p>
					<a href="/admin">admin</a> {'>'} produtos
				</p>
				<div>
					<form onSubmit={handleSubmit(adminAddShopItem)} action="" className="flex p-5">
						<div className="flex-col flex px-1">
							<label htmlFor="">Produto</label>
							<input {...register('name')} type="text" placeholder="Produto" className="border" />
						</div>
						<div className="flex-col flex px-1 w-2/4">
							<label htmlFor="">Descrição</label>
							<input {...register('description')} type="text" placeholder="Descrição" className="border" />
						</div>
						<div className="flex-col flex px-1">
							<label htmlFor="">Preço</label>
							<input {...register('price')} type="number" placeholder="Preço em R$" className="border" />
						</div>
						<button className="mt-auto py-1 px-2 mx-2 border">
							<img width={16} height={16} src="/images/icons/add_icon.svg" alt="" />
						</button>
					</form>
				</div>
				<AdminProductList />
			</div>
		</>
	)
}

export default Admin
