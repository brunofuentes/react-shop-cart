import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Basket from './pages/Basket'
import PageLayout from './pages/PageLayout'
import { ShopProvider } from './context/ShopContext'
import Admin from './pages/Admin'
import OrdersList from './pages/OrdersList'

function App() {
	return (
		<main>
			<ShopProvider>
				<Router>
					<Routes>
						<Route element={<PageLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<Home />} />
							<Route path="/basket" element={<Basket />} />
							<Route path="/admin" element={<Admin />} />
							<Route path="/admin/orders" element={<OrdersList />} />
						</Route>
					</Routes>
				</Router>
			</ShopProvider>
		</main>
	)
}

export default App
