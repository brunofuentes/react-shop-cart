import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function AdminProductList() {
	const { shopItems, adminChangeName, adminChangeDescription, adminChangePrice, adminRemoveShopItem } = useContext(ShopContext)

	return (
		<>
			<div className="inline border">
				<button className="border">Salvar alterações</button>
			</div>
			<table className="table-auto border">
				<thead>
					<tr className="border-b">
						<th className="border-r p-1">Produto</th>
						<th className="border-r p-1 w-2/4">Descrição</th>
						<th className="border-r p-1">Preço</th>
					</tr>
				</thead>
				<tbody>
					{shopItems.map((item, index) => (
						<tr key={index} className="border-b">
							<td className="border-r p-1">
								<input type="text" defaultValue={item.name} onInput={(e) => adminChangeName(item, e.target.value)} />
							</td>
							<td className="border-r p-1">
								<input type="text" defaultValue={item.description} onInput={(e) => adminChangeDescription(item, e.target.value)} />
							</td>
							<td className="border-r p-1">
								R$
								<input type="text" defaultValue={item.price} onInput={(e) => adminChangePrice(item, parseInt(e.target.value))} />
							</td>
							<td>
								<button onClick={() => adminRemoveShopItem(item)} className="m-1">
									<img width={16} height={16} src="/images/icons/delete_icon.svg" alt="Remove Item" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default AdminProductList
