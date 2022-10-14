import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'

function SearchProduct() {
	const { keyword, setKeyword } = useContext(ShopContext)

	return (
		<div>
			<span className="border items-center flex p-1 rounded">
				<img className="inline" width={16} height={16} src="/images/icons/search_icon.svg" alt="Search product" />
				<input className="pl-1" onChange={(e) => setKeyword(e.target.value)} value={keyword} type="text" placeholder="Procurar Produto" />
			</span>
		</div>
	)
}

export default SearchProduct
