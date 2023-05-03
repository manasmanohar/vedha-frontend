import { useState } from 'react'

const UserOnboardingCard = ({ title, description, onNext, onPrevious, onFinish, isLastStep }) => {
    const [classroomCode, setClassroomCode] = useState('')

    const handleClassroomCodeChange = (event) => {
        setClassroomCode(event.target.value)
    }

    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 h-96 h-sm:p-6">
                <div className="text-lg font-medium text-gray-900">{title}</div>
                <div className="mt-1 text-sm text-gray-500">{description}</div>
                {isLastStep ? (
                    <div className="mt-4">
                        <label htmlFor="classroom-code" className="block text-sm font-medium text-gray-700">
                            Classroom code
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="classroom-code"
                                id="classroom-code"
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                value={classroomCode}
                                onChange={handleClassroomCodeChange}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">/5</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:justify-end">
                {onPrevious ? (
                    <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                        onClick={onPrevious}
                    >
                        Previous
                    </button>
                ) : null}
                {onNext ? (
                    <button
                        type="button"
                        className="mt-3 ml-4  w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={onNext}
                    >
                        {isLastStep ? 'Finish' : 'Next'}
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default UserOnboardingCard
