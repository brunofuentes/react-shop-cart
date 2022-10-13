import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { useForm } from 'react-hook-form'

function AdminAddProductForm() {
	const { adminAddShopItem } = useContext(ShopContext)
	const { register, handleSubmit } = useForm()

	return (
		<div>
			<form onSubmit={handleSubmit(adminAddShopItem)} action="" className="flex ">
				<div className="flex-col flex pr-1">
					<label className="font-medium" htmlFor="">
						Produto
					</label>
					<input className="border p-1" {...register('name')} type="text" placeholder="Produto" />
				</div>
				<div className="flex-col flex px-1 w-2/4">
					<label className="font-medium" htmlFor="">
						Descrição
					</label>
					<input className="border p-1" {...register('description')} type="text" placeholder="Descrição" />
				</div>
				<div className="flex-col flex px-1">
					<label className="font-medium" htmlFor="">
						Preço
					</label>
					<input className="border p-1" {...register('price')} type="number" placeholder="Preço em R$" />
				</div>
				<button className="mt-auto p-2 ml-2 border hover:scale-110 hover:bg-emerald-600">
					<img className="" width={16} height={16} src="/images/icons/add_icon.svg" alt="" />
				</button>
			</form>
		</div>
	)
}

export default AdminAddProductForm
