import React from 'react'
import ProductList from '../components/ProductList'
import SearchProduct from '../components/SearchProduct'

function Home() {
	return (
		<div className="flex flex-grow flex-col px-8 py-3">
			<div className="flex justify-between items-center">
				<span>Home</span>
				<SearchProduct />
			</div>
			<ProductList />
		</div>
	)
}

export default Home
