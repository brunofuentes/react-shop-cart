import { createContext, useState } from 'react'

const ShopContext = createContext()

export function ShopProvider({ children }) {
	const [cartItems, setCartItems] = useState([])
	const [shopItems, setShopItems] = useState([
		{ id: 1, name: 'camera x', description: 'uma baita camera x', preco: 500 },
		{ id: 2, name: 'camera y', description: 'uma baita camera y', preco: 600 },
		{ id: 3, name: 'camera z', description: 'uma baita camera z', preco: 700 },
	])

	return <ShopContext.Provider value={{ cartItems, setCartItems, shopItems, setShopItems }}>{children}</ShopContext.Provider>
}

export default ShopContext
