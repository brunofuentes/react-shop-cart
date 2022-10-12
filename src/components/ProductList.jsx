import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function ProductList() {
	const { shopItems, addItemToCart, changeShopItemQty } = useContext(ShopContext)

	return (
		<>
			<div className="p-3">
				<table className="table-auto border">
					<thead>
						<tr className="border-b">
							<th className="border-r p-1">Produto</th>
							<th className="border-r p-1">Descrição</th>
							<th className="border-r p-1">Preço</th>
						</tr>
					</thead>
					<tbody>
						{shopItems.map((item, index) => (
							<tr key={index} className="border-b">
								<td className="border-r">{item.name}</td>
								<td className="border-r">{item.description}</td>
								<td className="border-r">R${item.price}</td>
								<td>
									<div className="flex">
										<div className="border p-1">
											<input
												type="number"
												min="1"
												defaultValue={item.qty}
												onChange={(e) => changeShopItemQty(item, parseInt(e.target.value))}
											/>
										</div>
										<div className="border p-1">
											<button
												onClick={() => {
													addItemToCart(item)
												}}
												className="px-10 bg-gray-400 rounded"
											>
												adicionar
											</button>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ProductList
