import Link from 'next/link'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const NavBar = (data) => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/landingpage')
    }

    return (
        // <nav className="bg-white  flex  sm:sticky  lg:flex-col sm:flex-row  lg:w-64 bottom-0 lg:left-0 lg:h-full  lg:py-6 lg:px-3 sm:px-5 lg:border-r-2 sm:border-t-2">
        //     <div className=" hidden lg:flex lg:items-center">
        //         <img src="https://img.icons8.com/fluency/48/null/student-center.png" />
        //         <p className="text-lg ml-2 font-bold text-black">Vedha</p>
        //     </div>
        <nav className="bg-white flex sm:sticky lg:flex-col sm:flex-row lg:w-64 bottom-0 left-0 py-6 px-3 border-t-2">
        <div className="hidden lg:flex lg:items-center">
            <img src="https://img.icons8.com/fluency/48/null/student-center.png" />
            <p className="text-lg ml-2 font-bold text-black">Vedha</p>
        </div>

            <div
                id="navButton-wrapper"
                className="flex flex-shrink-0 flex-row justify-between items center w-full  sm:h-18 lg:flex-col  my-2"
            >
                <Link href="/home">
                    <div
                        id="nav-button"
                        className="flex flex-col items-center lg:flex-row text-gray-600  hover:bg-gray-50 hover:text-gray-900 group  rounded-md pr-2 py-3 text-md font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="grey"
                            className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <span className="text-grey-600 text-md font-medium">Home</span>
                    </div>
                </Link>
                <Link href="/subject">
                    <div
                        id="nav-button"
                        className="flex flex-col items-center lg:flex-row hover:bg-gray-100 text-gray-600 group  rounded-md pr-2 py-3 text-md font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="grey"
                            className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>

                        <span className="text-grey-600 text-md font-medium">Subjects</span>
                    </div>
                </Link>
                <Link href="/quiz">
                    <div
                        id="nav-button"
                        className="flex flex-col items-center lg:flex-row lg:hover:bg-gray-100 text-gray-600 group  rounded-md pr-2 py-3 text-md font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="grey"
                            className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>

                        <span className="text-grey-600 text-md font-medium">Quiz</span>
                    </div>
                </Link>
                <Link href="/classroom">
                    <div
                        id="nav-button"
                        className="flex flex-col items-center lg:flex-row lg:hover:bg-gray-100 text-gray-600 group  rounded-md pr-2 py-3 text-md font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="grey"
                            className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>

                        <span className="text-grey-600 text-md font-medium">Classroom</span>
                    </div>
                </Link>
                <Link href="/quizscore">
                    <div
                        id="nav-button"
                        className="flex flex-col items-center lg:flex-row lg:hover:bg-gray-100 text-gray-600 group  rounded-md pr-2 py-3 text-md font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="grey"
                            className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>

                        <span className="text-grey-600 text-md font-medium">Quiz Score</span>
                    </div>
                </Link>
                <Link href="/newquiz">
                    <div
                        id="nav-button"
                        className="flex flex-col items-center lg:flex-row lg:hover:bg-gray-100 text-gray-600 group  rounded-md pr-2 py-3 text-md font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="grey"
                            className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>

                        <span className="text-grey-600 text-md font-medium">New quiz</span>
                    </div>
                </Link>
               
                {/* <div>
                    <button
                        className="flex flex-col items-center lg:flex-row lg:hover:bg-gray-100 text-gray-600 group  rounded-md pr-2 py-3 text-md font-medium"
                        onClick={async () => {
                            await supabase.auth.signOut()
                            router.push('/landingpage')
                        }}
                    >
                        Logout
                    </button>
                </div> */}
                
                <Link href="/newquiz">
                <div
                id="nav-button"
                className="flex flex-col items-center lg:flex-row lg:hover:bg-gray-100 text-gray-600 group rounded-md pr-2 py-3 text-md font-medium"
                onClick={handleLogout}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="grey"
                    className="w-6 h-6 lg:mx-3 group-hover:text-gray-500 flex-shrink-0"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <span className="text-grey-600 text-md font-medium">Logout</span>
                    </div>
                    </Link>
            </div>
        </nav>
    )
}


export default NavBar
