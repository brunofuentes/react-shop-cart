import { createContext, useState } from 'react'

const ShopContext = createContext()

export function ShopProvider({ children }) {
	let cartItemsLS = JSON.parse(localStorage.getItem('cartItems')) || []
	let ordersLS = JSON.parse(localStorage.getItem('orders')) || []
	let shopItemsLS = JSON.parse(localStorage.getItem('shopItems')) || [
		{ id: 1, name: 'camera x', description: 'uma baita camera x', price: 500, qty: 1 },
		{ id: 2, name: 'camera y', description: 'uma baita camera y', price: 600, qty: 1 },
		{ id: 3, name: 'camera z', description: 'uma baita camera z', price: 700, qty: 1 },
	]

	const [shopItems, setShopItems] = useState(shopItemsLS)
	const [cartItems, setCartItems] = useState(cartItemsLS)
	const [orderName, setOrderName] = useState()
	const [orders, setOrders] = useState(ordersLS)

	const addItemToCart = (item) => {
		const exist = cartItems.find((product) => product.id === item.id)
		if (exist) {
			setCartItems(cartItems.map((product) => (product.id === item.id ? { ...exist, qty: exist.qty + item.qty } : product)))
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
		setShopItems([...shopItems, { ...item, qty: 1, id: shopItems[shopItems.length - 1] + 1 }])
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
			setShopItems(shopItems.map((x) => (x.id === item.id ? { ...itemToChange, description: newDescription } : x)))
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

	const updateShopItems = () => {
		localStorage.setItem('shopItems', JSON.stringify(shopItems))
	}

	const updateCartItems = () => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}

	const updateOrders = () => {
		localStorage.setItem('orders', JSON.stringify(orders))
	}

	const resetCart = () => {
		localStorage.removeItem('cartItems')
	}

	return (
		<ShopContext.Provider
			value={{
				shopItems,
				setShopItems,
				addItemToCart,
				removeCartItem,
				changeShopItemQty,
				cartItems,
				setCartItems,
				changeCartItemQty,
				cartTotalPrice,
				checkOut,
				setOrderName,
				orders,
				setOrders,
				updateOrders,
				updateShopItems,
				updateCartItems,
				resetCart,
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
