import { useRouter } from 'next/router'
import NavBar from '@/components/NavBarTeacher'
import Header from '@/components/Header'

const Layout = ({ children }) => {
    const router = useRouter()
    const includeLayout = !router.pathname.startsWith('/landing')

    return (
        <div className="flex flex-col lg:flex-row-reverse w-full h-screen bg-white">
            {includeLayout && <Header className="sticky top-0" />}
            <main className="flex-1 lg:w-3/4">{children}</main>
            {/* {includeLayout && <NavBar className="lg:w-1/4 flex-shrink-0" />} */}
        </div>
    )
}

export default Layout
