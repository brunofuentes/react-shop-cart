import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function ProductList() {
	const { addItemToCart, changeShopItemQty, filteredShopItems } = useContext(ShopContext)

	return (
		<div className="py-5">
			<div className="overflow-x-auto">
				<table className="table-auto border w-full mx-auto">
					<thead className="bg-slate-300">
						<tr className="border-b">
							<th className="border-r p-1">Produto</th>
							<th className="border-r p-1" width="50%">
								Descrição
							</th>
							<th className="border-r p-1" width="10%">
								Preço
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{filteredShopItems.map((item, index) => (
							<tr key={item.id} className="border-b odd:bg-gray-50">
								<td className="border-r px-3 py-1">{item.name}</td>
								<td className="border-r px-3 py-1" width="50%">
									{item.description}
								</td>
								<td className="border-r px-3 py-1 text-center">R${item.price}</td>
								<td className="border-r px-3 py-1" width="20%">
									<div className="flex justify-center items-center">
										<div className="border p-1 rounded">
											<input
												type="number"
												min="1"
												defaultValue={item.qty}
												className="w-10"
												onChange={(e) => changeShopItemQty(item, parseInt(e.target.value))}
											/>
										</div>
										<div className="px-1">
											<button
												onClick={() => {
													addItemToCart(item)
												}}
												className="px-5 py-1 bg-yellow-300 hover:bg-yellow-400 rounded"
											>
												Adicionar
											</button>
										</div>
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

export default ProductList
