import './App.css'
import {Route} from 'react-router-dom'
import  AuthRequired  from './AuthRequired';
import {
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements
} from 'react-router-dom'
import Layout
 from "./Layout";
import NotFound from './NotFound';
 const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route index element={<h1>Home Page</h1>}/>
<Route element={<AuthRequired/>}>
  <Route path='protected' element={<h1>Super secret info here</h1>}/>
</Route>
    <Route path='*' element={<NotFound/>}/>

    </Route>
 ))
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
