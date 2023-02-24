import NavBar from '@/components/NavBar'
// import Header from '@/components/Header'
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row-reverse w-screen h-screen ">
            <main className="flex-1 lg:w-3/4  ">{children}</main>
            <NavBar className="lg:w-1/4 flex-shrink-0" />
        </div>
    )
}

export default Layout
