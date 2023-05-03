import { SessionProvider } from 'next-auth/react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import router from 'next/router'
import signInWithGoogle from 'utils/supabaseClient'
import { supabase } from 'utils/supabaseClient'

export default function LandingPage() {
    return (
        <SessionProvider>
            <LandingPageContent />
        </SessionProvider>
    )
    function LandingPageContent() {
        const { data: session } = useSession()
        console.log(session)
        if (session) {
            router.push('/home')
            return null
        }
        return (
            <Layout excludeLayout={true}>
                <div className="bg-gradient-to-r from-gray-200 to-yellow-100 min-h-screen">
                    <nav className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="mr-2">
                                <img src="https://img.icons8.com/fluency/48/null/student-center.png" />
                            </div>
                            <h1 className="text-2xl lg:text-3xl text-black font-semibold">Vedha</h1>
                        </div>
                    </nav>
                    <div className="container flex flex-col-reverse md:flex-row items-center lg:py-9 px-6 mx-auto lg:mx-12">
                        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 py-4">
                            <h2 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-black">
                                The next big thing in Learning
                            </h2>
                            <p className="max-w-md text-xl font-bold text-gray-600 text-center md:text-xl md:text-left">
                                Vedha provides you the best and efficient learning platform with powerful features and
                                tools.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <button
                                    onClick={() => signInWithGoogle()}
                                    type="button"
                                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2 -ml-1"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="google"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 488 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                        ></path>
                                    </svg>
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/3 drop-shadow-md lg:mr-12 flex justify-center">
                            <Image src="/cap.png" alt="Image description" width={750} height={700} />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
