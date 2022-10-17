import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ShopProvider } from '../../context/ShopContext'
import Admin from '../Admin'
import AdminOrders from '../AdminOrders'
import Home from '../Home'
import MyCart from '../MyCart'
import PageLayout from '../../components/PageLayout'
import PageLayoutAdmin from '../../components/PageLayoutAdmin'

test('add an order', () => {
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
	const cestaBtn = screen.getByText('Cesta 1')
	fireEvent.click(cestaBtn)
	const nomeCesta = screen.getByPlaceholderText('Nome da Cesta')
	fireEvent.change(nomeCesta, { target: { value: 'cesta teste' } })
	const finalizarBtn = screen.getByText('Finalizar Compra')
	fireEvent.click(finalizarBtn)
	expect(global.alert).toBeCalled()
})

test('check if order has been placed', () => {
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

	fireEvent.click(screen.getByText('Compras'))
	const orderPlaced = screen.getByText('cesta teste')
	expect(orderPlaced).toBeInTheDocument()
})
