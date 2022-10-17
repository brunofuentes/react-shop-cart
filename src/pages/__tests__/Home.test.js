import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ShopProvider } from '../../context/ShopContext'
import Home from '../Home'
import PageLayout from '../../components/PageLayout'

test('add one product to cart', () => {
	const route = '/'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const items = screen.getAllByText('Adicionar')
	fireEvent.click(items[0])
	const cestaBtn = screen.getByText('Cesta 1')
	expect(cestaBtn).toBeTruthy()
})

test('add two products to cart', () => {
	const route = '/'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const items = screen.getAllByText('Adicionar')
	fireEvent.click(items[0])
	fireEvent.click(items[1])
	const cestaBtn = screen.getByText('Cesta 2')
	expect(cestaBtn).toBeTruthy()
})

test('check if search works', () => {
	render(
		<ShopProvider>
			<Home />
		</ShopProvider>
	)

	const searchInput = screen.getByPlaceholderText('Procurar Produto')
	const items = screen.getAllByText('Adicionar')
	expect(items.length).toBe(3)

	fireEvent.change(searchInput, { target: { value: 'camera x' } })
	const itemsAfterSearch = screen.getAllByText('Adicionar')
	expect(itemsAfterSearch.length).toBe(1)
})
