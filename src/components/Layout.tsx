import { Outlet } from 'react-router'

import Navigation from '@/components/Navigation'

function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]" dir="ltr">
      <header className="flex justify-between items-center">
        <h1 className="text-xl">HatchWars 🌃</h1>
        <Navigation />
      </header>
      <main className="py-8">
        <Outlet />
      </main>
      <footer className="p-8 text-center">
        <p>&copy; {new Date().getFullYear()} Hatchwars All rights reserved 🚀</p>
      </footer>
    </div>
  )
}

export default Layout
