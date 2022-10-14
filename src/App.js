import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import { ShopProvider } from './context/ShopContext'
import Admin from './pages/Admin'
import MyCart from './pages/MyCart'
import AdminOrders from './pages/AdminOrders'
import PageLayoutAdmin from './components/PageLayoutAdmin'

function App() {
	return (
		<ShopProvider>
			<Router>
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/basket" element={<MyCart />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Route>
					<Route element={<PageLayoutAdmin />}>
						<Route path="/admin" element={<Admin />} />
						<Route path="/admin/orders" element={<AdminOrders />} />
						<Route path="/admin/*" element={<Navigate to="/admin" replace />} />
					</Route>
				</Routes>
			</Router>
		</ShopProvider>
	)
}

export default App
