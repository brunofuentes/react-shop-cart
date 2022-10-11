import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function ProductList() {
	const { shopItems } = useContext(ShopContext)
	return (
		<>
			<div className="p-3">
				<table className="table-auto border">
					<thead className="border-b">
						<th className="border-r p-1">produto</th>
						<th className="border-r p-1">descrição</th>
						<th></th>
					</thead>
					<tbody>
						{shopItems.map((item, index) => (
							<tr className="border-b">
								<td className="border-r">{item.name}</td>
								<td className="border-r">{item.description}</td>
								<td>
									<div className="flex">
										<div className="border p-1">
											<input type="number" placeholder="quantidade" />
										</div>
										<div className="border p-1">
											<button className="px-10 bg-gray-400 rounded">adicionar</button>
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
