import { NavLink, Outlet } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex text-xl shadow-md py-4 justify-evenly px-10 '>
            <h1 className=' font-bold w-1/3'>REACT LANDING PAGE</h1>

            <nav  className='flex justify-around  gap w-full '>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/features'>Features</NavLink>
                <NavLink to='/teams'>Teams</NavLink>

            </nav>
<Outlet/>
        </div>
    )
}

export default Navbar