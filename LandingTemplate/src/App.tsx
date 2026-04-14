import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, useLoaderData } from 'react-router-dom'
import Home from './pages/Home.tsx'
import { Features } from './pages/Features.tsx'
import Teams from './pages/teams.tsx'
import Layout from './components/Layout.tsx'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route>
   
   <Route element={<Layout/>}>
    <Route path='/' element={<Home />} />

    <Route path='/home' element={<Home />} />
    <Route path='/features' element={<Features />} />
    <Route path='/teams' element={<Teams/>} />

   </Route>

  </Route>))
  return (
    <RouterProvider router={router} />
  )
}

export default App
