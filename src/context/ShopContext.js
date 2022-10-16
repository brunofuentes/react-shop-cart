import { createContext, useEffect, useMemo, useRef, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ShopContext = createContext()

export function ShopProvider({ children }) {
	let cartItemsLS = JSON.parse(localStorage.getItem('cartItems')) || []
	let ordersLS = JSON.parse(localStorage.getItem('orders')) || []
	let shopItemsLS = JSON.parse(localStorage.getItem('shopItems')) || [
		{ id: 1, name: 'camera x', description: 'uma baita camera x', price: 500, qty: 1 },
		{ id: 2, name: 'camera y', description: 'uma baita camera y', price: 600, qty: 1 },
		{ id: 3, name: 'camera z', description: 'uma baita camera z', price: 700, qty: 1 },
	]

	const [shopItems, setShopItems] = useLocalStorage('shopItems', shopItemsLS)
	const [cartItems, setCartItems] = useLocalStorage('cartItems', cartItemsLS)
	const [orders, setOrders] = useLocalStorage('orders', ordersLS)

	const [keyword, setKeyword] = useState('')
	const [orderName, setOrderName] = useState(null)

	const filteredShopItems = (input) => {
		if (input) {
			const filtered = shopItems.filter(
				(item) =>
					item.name.toLowerCase().includes(input.toLowerCase()) ||
					item.description.toLowerCase().includes(input.toLowerCase())
			)
			return filtered
		} else {
			return shopItems
		}
	}

	const addItemToCart = (item) => {
		const exist = cartItems.find((product) => product.id === item.id)
		if (exist) {
			setCartItems(
				cartItems.map((product) => (product.id === item.id ? { ...exist, qty: exist.qty + item.qty } : product))
			)
		} else {
			setCartItems([...cartItems, { ...item, qty: item.qty }])
		}
	}

	const changeShopItemQty = (item, newQty) => {
		const itemToChange = shopItems.find((x) => x.id === item.id)
		if (itemToChange) {
			setShopItems(shopItems.map((x) => (x.id === item.id ? { ...itemToChange, qty: newQty } : x)))
		}
	}

	const changeCartItemQty = (qty, item) => {
		const itemToChange = cartItems.find((x) => x.id === item.id)
		if (itemToChange) {
			setCartItems(cartItems.map((x) => (x.id === item.id ? { ...itemToChange, qty: qty } : x)))
		}
	}

	const removeCartItem = (item) => {
		const confirm = window.confirm('Você está certo de que quer remover este item de sua cesta de compras?')
		if (confirm) {
			setCartItems(cartItems.filter((x) => x.id !== item.id))
		}
	}

	const cartTotalPrice = () => {
		if (cartItems.length > 0) {
			return cartItems
				.map((x) => x.price * x.qty)
				.reduce((a, b) => a + b, 0)
				.toFixed(2)
		}
	}

	const checkOut = () => {
		if (cartItems.length > 0 && orderName) {
			setOrders([
				...orders,
				{
					orderId: orders.length > 0 ? orders[orders.length - 1].orderId + 1 : 1,
					orderName: orderName,
					totalPrice: cartTotalPrice(),
					items: cartItems,
				},
			])
			alert(`A compra ${orderName} foi finalizada com sucesso!`)
		} else if (cartItems.length > 0 && !orderName) {
			alert('Dê um nome a sua cesta de compras antes de finalizar.')
		}
	}

	const adminAddShopItem = (item) => {
		setShopItems([...shopItems, { ...item, qty: 1, id: shopItems.length + 1 }])
	}

	const adminChangeName = (item, newName) => {
		let itemToChange = shopItems.find((x) => x.id === item.id)
		if (itemToChange) {
			setShopItems(shopItems.map((x) => (x.id === item.id ? { ...itemToChange, name: newName } : x)))
		}
	}

	const adminChangeDescription = (item, newDescription) => {
		let itemToChange = shopItems.find((x) => x.id === item.id)
		if (itemToChange) {
			setShopItems(
				shopItems.map((x) => (x.id === item.id ? { ...itemToChange, description: newDescription } : x))
			)
		}
	}

	const adminChangePrice = (item, newPrice) => {
		let itemToChange = shopItems.find((x) => x.id === item.id)
		if (itemToChange) {
			setShopItems(shopItems.map((x) => (x.id === item.id ? { ...itemToChange, price: newPrice } : x)))
		}
	}

	const adminRemoveShopItem = (item) => {
		setShopItems(shopItems.filter((x) => x.id !== item.id))
	}

	const trackOrder = useRef(orders.length)

	useMemo(() => {
		if (orders.length > trackOrder.current) {
			setCartItems([])
		}
	}, [orders])

	return (
		<ShopContext.Provider
			value={{
				filteredShopItems,
				shopItems,
				keyword,
				setKeyword,
				addItemToCart,
				removeCartItem,
				changeShopItemQty,
				cartItems,
				changeCartItemQty,
				cartTotalPrice,
				checkOut,
				setOrderName,
				orders,
				adminAddShopItem,
				adminChangeName,
				adminChangeDescription,
				adminChangePrice,
				adminRemoveShopItem,
			}}
		>
			{children}
		</ShopContext.Provider>
	)
}

export default ShopContext
