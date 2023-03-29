import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Subject(props) {
    return (
        <>
            <div className="bg-gray-300 px-4 py-8">
                <div className="mx-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 ">Physics</h1>
                    <p className="text-xl text-gray-700 mt-7">Ms. Deepthi</p>
                </div>
            </div>
            <div className="m-8 flex flex-wrap  justify-between ">
                <Link href="/quiz">
                    <div className="rounded-xl w-40 h-40  lg:w-48  lg:h-48 bg-blue-400 p-4 sm:p-6 lg:p-8 my-4 lg:mx-2 lg:my-2 flex flex-col justify-end text-left hover:bg-blue-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl text-gray-900 ">Quizzes</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/">
                    <div className="display:block rounded-xl w-40 h-40  lg:w-48  lg:h-48  bg-green-400 p-4 sm:p-6 lg:p-8 my-4 lg:mx-2 lg:my-2 flex flex-col justify-end text-left hover:bg-green-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl text-gray-900 ">Syllabus</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/">
                    <div className="display:block rounded-xl w-40 h-40  lg:w-48  lg:h-48 bg-purple-400 p-4 sm:p-6 lg:p-8  my-4 lg:mx-2 lg:my-2 flex flex-col justify-end text-left hover:bg-purple-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl text-gray-900 ">Activties</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/">
                    <div className="display:block rounded-xl w-40 h-40 lg:w-48  lg:h-48  bg-orange-400 p-4 sm:p-6 lg:p-8 my-4 lg:mx-2 lg:my-2 flex flex-col justify-end text-left hover:bg-orange-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl text-gray-900 ">Remarks</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Subject
