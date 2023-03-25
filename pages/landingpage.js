import Image from 'next/image'
import Header from '@/components/Header'

export default function LandingPage() {
    return (
        <div className="bg-gradient-to-r from-gray-200 to-yellow-100 min-h-screen">
            <nav className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img src="https://img.icons8.com/fluency/48/null/student-center.png" />
                    </div>
                    <h1 className="text-2xl lg:text-3xl text-black font-semibold">Vedha</h1>
                </div>
            </nav>
            <div className="container flex flex-col-reverse md:flex-row items-center py-9 px-6 mx-auto lg:mx-12">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2 py-4">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-black">
                        The next big thing in Learning
                    </h2>
                    <p className="max-w-md text-xl font-bold text-gray-600 text-center md:text-xl md:text-left">
                        Vedha provides you the best and efficient learning platform with powerful features and tools.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-black hover:bg-blue-700 text-white w-24 font-bold py-2 px-4 rounded-md">
                            Login
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 drop-shadow-md lg:mr-12 mt-1 flex justify-center">
                    <Image src="/cap.png" alt="Image description" width={750} height={700} />
                </div>
            </div>
        </div>
    )
}
