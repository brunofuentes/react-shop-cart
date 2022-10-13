import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function PageLayout() {
	return (
		<>
			<Navbar />
			<section className="flex mx-auto">
				<Sidebar />
				<Outlet />
			</section>
		</>
	)
}

export default PageLayout
