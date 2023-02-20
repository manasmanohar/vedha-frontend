import NavBar from '@/components/NavBar'
// import Header from '@/components/Header'
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row-reverse w-screen h-screen ">
            <main className="flex-1 ">{children}</main>
            <NavBar className="flex-shrink-0" />
        </div>
    )
}

export default Layout
