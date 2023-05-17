import { useState } from 'react'
// import { withAuth } from '@/pages/api/auth/withAuth'
import NavBarTeacher from 'components/NavBarTeacher'
function Classroom() {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [classNo, setClassNo] = useState('')
    const [classCode, setClassCode] = useState('')

    const generateCode = () => {
        const code = Math.random().toString(36).substring(2, 8)
        setClassCode(code)
    }

    const handleShare = () => {
        // const url = `https://example.com/classroom/${classCode}`
        // implement share functionality here
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generateCode()
    }

    return (
        <div id="wrapper" className="bg-secondarywhite  flex flex-col-reverse lg:flex-row w-full h-full">
            <NavBarTeacher className="lg:w-1/4 flex-shrink-0" />
            <div className="container">
                <div id="wrapper" className="bg-white w-full h-full overflow-auto">
                    <div className="bg-blue-700 h-24 flex justify-start items-center w-full">
                        <p className="text-2xl p-4 text-white">Create New Classroom</p>
                    </div>
                    <div className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Eg: 7B Geography"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    id="subject"
                                    type="text"
                                    placeholder="Eg: Geography"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="classNo">
                                    Class No.
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    id="classNo"
                                    type="text"
                                    placeholder="Eg: Lecture Hall 12"
                                    value={classNo}
                                    onChange={(e) => setClassNo(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Create Classroom Code
                            </button>
                        </form>
                        {classCode && (
                            <div className="mt-4">
                                <p className="font-bold">Classroom Code:</p>
                                <p className="text-lg">{classCode}</p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                                    onClick={handleShare}
                                >
                                    Share
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classroom
