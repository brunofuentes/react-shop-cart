import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { useForm } from 'react-hook-form'

function AdminAddProductForm() {
	const { adminAddShopItem } = useContext(ShopContext)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = (item) => {
		adminAddShopItem(item)
		reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} action="" className="flex">
				<div className="flex-col flex pr-1">
					<label className="font-medium" htmlFor="">
						Produto
					</label>
					<input
						className="border p-1"
						{...register('name', { required: true })}
						type="text"
						placeholder="Produto"
					/>
					{errors.name && <span>Nome do produto é obrigatório</span>}
				</div>
				<div className="flex-col flex px-1 w-2/4">
					<label className="font-medium" htmlFor="">
						Descrição
					</label>
					<input
						className="border p-1"
						{...register('description', { required: true })}
						type="text"
						placeholder="Descrição"
					/>
					{errors.description && <span>Descrição do produto é obrigatório</span>}
				</div>
				<div className="flex-col flex px-1">
					<label className="font-medium" htmlFor="">
						Preço
					</label>
					<input
						className="border p-1"
						{...register('price', { required: true })}
						type="number"
						placeholder="Preço em R$"
					/>
					{errors.price && <span>Preço do produto é obrigatório</span>}
				</div>
				<button className="mt-auto p-2 ml-2 border hover:scale-110 hover:bg-emerald-600">
					<img className="" width={16} height={16} src="/images/icons/add_icon.svg" alt="Add product" />
				</button>
			</form>
		</div>
	)
}

export default AdminAddProductForm
