import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row">
            <NavBar>{children}</NavBar>
            <Header></Header>
        </div>
    )
}

export default Layout
// flex sm:flex-col lg:flex-row  sm:flex
