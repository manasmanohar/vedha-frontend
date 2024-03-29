import Image from 'next/image'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import { signInWithGoogle } from 'utils/supabaseClient'

function LandingPageContent() {
    const client = useSupabaseClient()
    const router = useRouter()

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
                                onClick={() => signInWithGoogle(client)}
                                type="button"
                                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                            >
                                Login
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

export const getServerSideProps = async (ctx) => {
    const supabase = createPagesServerClient(ctx)
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        return {
            redirect: {
                destination: '/home',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}

export default function LandingPage() {
    return <LandingPageContent />
}
