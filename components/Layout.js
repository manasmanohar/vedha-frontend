import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'

const Layout = ({ children }) => {
    const router = useRouter()
    const includeLayout = !router.pathname.startsWith('/landing')

    return (
        // <div className="flex flex-col lg:flex-row-reverse w-full min-h-screen bg-white">
        //   {includeLayout && <Header className="sticky top-0" />}
        //   <main className="flex-1 lg:w-3/4">
        //     <div className="lg:min-h-screen flex flex-col">
        //       {children}
        //     </div>
        //   </main>
        //   {includeLayout && <NavBar className="lg:w-1/4 flex-shrink-0" />}
        // </div>
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-screen bg-white">
            {includeLayout && <Header className="sticky top-0" />}
            <main className="flex-1 overflow-y-auto">
                <div className="flex flex-col min-h-screen">
                    {children}
                </div>
            </main>
            {includeLayout && <NavBar className="lg:w-1/4 flex-shrink-0" />}
        </div>
    )
      
}

export default Layout
