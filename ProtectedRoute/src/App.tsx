import './App.css'
import AuthRequired from './AuthRequired';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, Route,
  redirect
} from 'react-router-dom'
import Layout from "./Layout";
import NotFound from './NotFound';
import { Heading1 } from 'lucide-react';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index
      element={<h1>Home Page</h1>}
      loader={
        async () => {

return null
        }
      } />
          <Route path='protected'
      element={<h1>Super sucrete goes here</h1>}
      loader={
        async () => {
          const isLoggedIn=false
          if(!isLoggedIn){
          throw  redirect('/login')
          }
          return null}
      }/ > 
      
     
    
      <Route path='/login' element={<h1>Login page goes here</h1>}/>


  </Route>
))
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
