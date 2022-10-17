import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function AdminProductList() {
	const { shopItems, adminChangeName, adminChangeDescription, adminChangePrice, adminRemoveShopItem } =
		useContext(ShopContext)

	return (
		<div className="pt-5 pb-3">
			<div className="overflow-x-auto">
				<table className="table-auto border w-full mx-auto">
					<thead className="bg-slate-300">
						<tr className="border-b ">
							<th className="border-r p-1">Produto</th>
							<th className="border-r p-1 w-2/4">Descrição</th>
							<th className="border-r p-1">Preço</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{shopItems.map((item, index) => (
							<tr key={item.id} className="border-b hover:bg-yellow-100 odd:bg-gray-50">
								<td className="border-r px-3 py-1">
									<input
										className="w-40 sm:w-full p-1 bg-inherit"
										type="text"
										defaultValue={item.name}
										onInput={(e) => adminChangeName(item, e.target.value)}
									/>
								</td>
								<td className="border-r px-3 py-1">
									<textarea
										className="w-40 sm:w-full p-1 bg-inherit"
										rows={1}
										defaultValue={item.description}
										onInput={(e) => adminChangeDescription(item, e.target.value)}
									/>
								</td>
								<td className="border-r p-1">
									<div className="flex justify-center items-center">
										<span>R$</span>
										<input
											className="w-13 p-1 bg-inherit"
											type="number"
											defaultValue={item.price}
											onInput={(e) => adminChangePrice(item, parseInt(e.target.value))}
										/>
									</div>
								</td>
								<td className="text-center hover:bg-red-500" width="5%">
									<div className="w-5 sm:w-auto">
										<button onClick={() => adminRemoveShopItem(item)}>
											<img
												width={16}
												height={16}
												src="/images/icons/delete_icon.svg"
												alt="Remove Item"
											/>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default AdminProductList
