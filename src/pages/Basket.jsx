import React from 'react'

function Basket() {
	return (
		<>
			<div className="p-3 flex flex-grow flex-col">
				<h2>Cesta</h2>
				<div className="border rounded my-1">
					<input className="p-1" type="text" placeholder="Nome da Cesta" />
				</div>
				<div className="my-3">
					<table className="table-auto border">
						<thead className="border-b">
							<th className="border-r p-1">Qtd</th>
							<th className="border-r p-1">Produto</th>
							<th className="border-r p-1">Descrição</th>
							<th className="border-r p-1">Valor</th>
							<th className="border-r p-1"></th>
						</thead>
						<tbody>
							<tr className="border-b">
								<td className="border-r">1</td>
								<td className="border-r">2</td>
								<td className="border-r">3</td>
								<td className="border-r">4</td>
								<td className="p-1">
									<img width={16} height={16} src="/images/icons/delete_icon.svg" alt="" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Basket
