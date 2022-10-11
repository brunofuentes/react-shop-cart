import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Basket from './pages/Basket'
import PageLayout from './pages/PageLayout'
import { ShopProvider } from './context/ShopContext'

function App() {
	return (
		<main>
			<ShopProvider>
				<Router>
					<Routes>
						<Route element={<PageLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/basket" element={<Basket />} />
						</Route>
					</Routes>
				</Router>
			</ShopProvider>
		</main>
	)
}

export default App
