import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ShopProvider } from '../../context/ShopContext'
import Home from '../Home'
import MyCart from '../MyCart'
import PageLayout from '../../components/PageLayout'
import PageLayoutAdmin from '../../components/PageLayoutAdmin'
import Admin from '../Admin'
import AdminOrders from '../AdminOrders'

test('modify item quantity in the cart', () => {
	global.localStorage.clear()
	const route = '/'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/basket" element={<MyCart />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const items = screen.getAllByText('Adicionar')
	fireEvent.click(items[0])
	const cestaBtn = screen.getByText('Cesta 1')
	fireEvent.click(cestaBtn)
	const priceBefore = screen.getByText('Total: R$500.00')
	expect(priceBefore).toBeTruthy()
	const changeQty = screen.getByRole('spinbutton')
	const qty = 3
	fireEvent.input(changeQty, { target: { value: qty } })
	const priceAfter = screen.getByText('Total: R$1500.00')
	expect(priceAfter).toBeTruthy()
})

test('delete item from the cart', () => {
	global.localStorage.clear()
	const route = '/'
	global.confirm = jest.fn(() => true)

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/basket" element={<MyCart />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const items = screen.getAllByText('Adicionar')
	fireEvent.click(items[0])
	const cestaBtn = screen.getByText('Cesta 1')
	fireEvent.click(cestaBtn)
	const deleteBtn = screen.getByAltText('Remove Item')
	fireEvent.click(deleteBtn)
	expect(global.confirm).toBeCalled()
	const rows = screen.getAllByRole('row')
	expect(rows.length).toBe(1)
})

test('finalize order without basket name', () => {
	global.localStorage.clear()
	const route = '/'
	global.alert = jest.fn()

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/basket" element={<MyCart />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const items = screen.getAllByText('Adicionar')
	fireEvent.click(items[0])
	const basketBtn = screen.getByText('Cesta 1')
	fireEvent.click(basketBtn)
	const finalizarBtn = screen.getByText('Finalizar Compra')
	fireEvent.click(finalizarBtn)
	expect(global.alert).toBeCalled()
})

test('finalize order with basket name', () => {
	global.localStorage.clear()
	const route = '/'
	global.alert = jest.fn()

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/basket" element={<MyCart />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const items = screen.getAllByText('Adicionar')
	fireEvent.click(items[0])
	const basketBtn = screen.getByText('Cesta 1')
	fireEvent.click(basketBtn)
	const nomeCesta = screen.getByPlaceholderText('Nome da Cesta')
	fireEvent.change(nomeCesta, { target: { value: 'cesta teste' } })
	const finalizarBtn = screen.getByText('Finalizar Compra')
	fireEvent.click(finalizarBtn)
	expect(global.alert).toBeCalled()
	const totalPrice = screen.getByText('Total: R$')
	expect(totalPrice).toBeTruthy()
})

test('check if order was placed after finilizing order', () => {
	const route = '/admin'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayoutAdmin />}>
						<Route path="/admin" element={<Admin />} />
						<Route path="/admin/orders" element={<AdminOrders />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const comprasBtn = screen.getByText('Compras')
	fireEvent.click(comprasBtn)
	const cestaTeste = screen.getByText('cesta teste')
	expect(cestaTeste).toBeInTheDocument()
})
