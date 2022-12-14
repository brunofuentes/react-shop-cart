import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function Basket() {
	const { setOrderName, checkOut, cartItems, changeCartItemQty, cartTotalPrice, removeCartItem } =
		useContext(ShopContext)

	return (
		<div className="py-5">
			<div className="border rounded">
				<input
					className="p-1 w-full"
					type="text"
					placeholder="Nome da Cesta"
					onChange={(e) => setOrderName(e.target.value)}
				/>
			</div>
			<div className="relative pt-5 pb-3">
				<div className="overflow-x-auto">
					<table className="table-auto border mx-auto w-full">
						<thead className="bg-slate-300">
							<tr className="border-b">
								<th className="border-r p-1" width="5%">
									Qtd
								</th>
								<th className="border-r p-1" width="20%">
									Produto
								</th>
								<th className="border-r p-1">Descrição</th>
								<th className="border-r p-1" width="10%">
									Valor
								</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((item, index) => (
								<tr key={item.id} className="border-b odd:bg-gray-50">
									<td className="border-r px-3 py-1">
										<div className="rounded border p-1">
											<input
												type="number"
												min="1"
												className="w-10"
												defaultValue={item.qty}
												onChange={(e) => changeCartItemQty(parseInt(e.target.value), item)}
											/>
										</div>
									</td>
									<td className="border-r px-3 py-1">{item.name}</td>
									<td className="border-r px-3 py-1">{item.description}</td>
									<td className="border-r text-center py-1 px-3">R${item.price * item.qty}</td>
									<td className="text-center hover:bg-red-500" width="5%">
										<div className="w-5 sm:w-auto">
											<button onClick={() => removeCartItem(item)}>
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
			<div className="text-right">
				<p>Total: R${cartTotalPrice()}</p>
				<button
					className="my-3 bg-yellow-300 hover:bg-yellow-400 rounded px-5 py-1"
					disabled={!(cartItems.length > 0)}
					onClick={() => checkOut()}
				>
					Finalizar Compra
				</button>
			</div>
		</div>
	)
}

export default Basket
