import { Outlet, Link } from 'react-router'
const Layout = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='protected'>Protected</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout