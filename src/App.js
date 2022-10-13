import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Basket from './components/Basket'
import PageLayout from './pages/PageLayout'
import { ShopProvider } from './context/ShopContext'
import Admin from './pages/Admin'
import OrdersList from './components/OrdersList'

function App() {
	return (
		<main>
			<ShopProvider>
				<Router>
					<Routes>
						<Route element={<PageLayout />}>
							<Route path="*" element={<Home />} />
							<Route path="/" element={<Home />}>
								<Route path="/:page" element={<Basket />} />
							</Route>
							<Route path="/admin" element={<Admin />}>
								<Route path="/admin/:page" element={<OrdersList />} />
							</Route>
						</Route>
					</Routes>
				</Router>
			</ShopProvider>
		</main>
	)
}

export default App
