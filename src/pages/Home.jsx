import React from 'react'
import ProductList from '../components/ProductList'

function Home() {
	return (
		<>
			<div className="flex">
				<div className="flex-grow p-3">
					<div className="flex justify-between">
						<span>lugar do carrinho</span>
						<span className="border items-center flex p-1 rounded">
							<img className="inline" width={16} height={16} src="/images/icons/search_icon.svg" alt="Search product" />
							<input type="text" placeholder="" />
						</span>
					</div>
					<ProductList />
				</div>
			</div>
		</>
	)
}

export default Home
