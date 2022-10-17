import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ShopProvider } from '../../context/ShopContext'
import { act } from 'react-test-renderer'
import Admin from '../Admin'
import Home from '../Home'
import PageLayout from '../../components/PageLayout'
import PageLayoutAdmin from '../../components/PageLayoutAdmin'

test('render Homepage before tests to populate localStorage', () => {
	global.localStorage.clear()
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
})

test('change product specs', () => {
	const route = '/admin'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayoutAdmin />}>
						<Route path="/admin" element={<Admin />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const productName = screen.getByDisplayValue('camera x')
	fireEvent.input(productName, { target: { value: 'camera x modified' } })
	expect(screen.getByDisplayValue('camera x modified')).toBeInTheDocument()

	const productDescription = screen.getByDisplayValue('uma baita camera x')
	fireEvent.input(productDescription, { target: { value: 'uma baita camera x modified' } })
	expect(screen.getByDisplayValue('uma baita camera x modified')).toBeInTheDocument()

	const productPrice = screen.getByDisplayValue('500')
	fireEvent.input(productPrice, { target: { value: 1000 } })
	expect(screen.getByDisplayValue('1000')).toBeInTheDocument()
})

test('delete product', () => {
	const route = '/admin'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayoutAdmin />}>
						<Route path="/admin" element={<Admin />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const cameraZ = screen.getByDisplayValue('camera z')
	expect(cameraZ).toBeInTheDocument()
	const removeBtns = screen.getAllByAltText('Remove Item')
	fireEvent.click(removeBtns[2])
	expect(cameraZ).not.toBeInTheDocument()
})

test('add new shop item', async () => {
	const route = '/admin'

	render(
		<ShopProvider>
			<MemoryRouter initialEntries={[route]}>
				<Routes>
					<Route element={<PageLayoutAdmin />}>
						<Route path="/admin" element={<Admin />} />
					</Route>
				</Routes>
			</MemoryRouter>
		</ShopProvider>
	)

	const inputName = screen.getByPlaceholderText('Produto')
	const inputDescription = screen.getByPlaceholderText('Descrição')
	const inputPrice = screen.getByPlaceholderText('Preço em R$')
	const addBtn = screen.getByAltText('Add product')

	await act(async () => {
		fireEvent.input(inputName, { target: { value: 'produto teste' } })
		fireEvent.input(inputDescription, { target: { value: 'descrição teste' } })
		fireEvent.input(inputPrice, { target: { value: 1111 } })
	})

	await act(async () => {
		fireEvent.click(addBtn)
	})

	const produtoTeste = screen.getByDisplayValue('produto teste')
	expect(produtoTeste).toBeInTheDocument()
})
