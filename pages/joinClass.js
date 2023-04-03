import { useState } from 'react'

const JoinClassroom = () => {
    const [classCode, setClassCode] = useState('')
    const [message, setMessage] = useState('')

    const handleJoin = (e) => {
        e.preventDefault()
        // Add your frontend code here to handle joining the classroom
        // You can use fetch or axios to make an API call to your backend
        // and update the message state based on the response
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border  border-gray-300 rounded-lg shadow-lg w-3/4 h-3/4">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4 text-left">Join Classroom</h1>
                    <form onSubmit={handleJoin} className="flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Enter classroom code"
                            value={classCode}
                            onChange={(e) => setClassCode(e.target.value)}
                            className="border border-gray-400 rounded-md py-2 px-4 mb-4"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Join Classroom
                        </button>
                    </form>
                    {message && <p className="mt-4">{message}</p>}
                </div>
            </div>
        </div>
    )
}

export default JoinClassroom
