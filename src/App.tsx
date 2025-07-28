// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router'

import '@/App.css'

import Layout from '@/components/Layout'

import HomePage from '@/pages/HomePage'
import PlanetsPage from '@/pages/PlanetsPage'
import NoMatch from '@/pages/NoMatch'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
