import classNames from 'classnames'
import { useState } from 'react'

const QuizEditor = (props) => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'What is the capital of India?',
            options: { a: 'Delhi', b: 'Mumbai', c: 'Kolkata', d: 'Chennai' },
            correctAnswer: 'a',
        },
        {
            id: 2,
            question: 'What is the capital of USA?',
            options: { a: 'New York', b: 'Washington D.C.', c: 'Los Angeles', d: 'Chicago' },
            correctAnswer: 'b',
        },
        {
            id: 3,
            question: 'What is the capital of Japan?',
            options: { a: 'Tokyo', b: 'Kyoto', c: 'Osaka', d: 'Sapporo' },
            correctAnswer: 'a',
        },
    ])
    const [showPopup, setShowPopup] = useState(false)

    const handleQuestionChange = (index, e) => {
        const updatedQuestions = [...questions]
        updatedQuestions[index].question = e.target.value
        setQuestions(updatedQuestions)
    }

    const handleSubmit = () => {
        // TODO: Save the questions
        setShowPopup(true)
    }

    const handlePopupClose = () => {
        setShowPopup(false)
    }

    return (
        <div className="flex flex-col mt-4 px-2  rounded ">
            <p className="text-3xl text-black mb-2 ">Edit Quiz</p>

            <div className="">
                {questions.map((q, index) => (
                    <div key={q.id} className="flex flex-col ml-0 mb-4 bg-blue-100 p-4 rounded">
                        <div className="flex align-center">
                            <p className="p-1 text-blue-600 ">Q{index + 1}.</p>{' '}
                            <textarea
                                className="bg-white rounded-md p-1 text-blue-600 w-full resize-none"
                                name=""
                                id=""
                                cols="1"
                                rows="1"
                                value={q.question}
                                onChange={(e) => {
                                    q.question = e.target.value
                                    setQuestions([...questions])
                                }}
                            />
                        </div>
                        <div className="flex ml-2 flex-col">
                            {Object.entries(q.options).map(([key, value]) => (
                                <div key={key} className="flex items-center">
                                    <p className="mr-2">{`${key})`}</p>
                                    <textarea
                                        className={classNames('bg-white rounded-md p-1 mt-1 w-full resize-none', {
                                            'text-green-600': key === q.correctAnswer,
                                        })}
                                        name=""
                                        id=""
                                        cols="1"
                                        rows="1"
                                    >
                                        {value}
                                    </textarea>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex  justify-center mb-8 ">
                <button
                    className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>

            {showPopup && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                    <svg
                                        className="h-6 w-6 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Questions Saved!</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">Your questions have been saved.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QuizEditor
