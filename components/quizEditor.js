import classNames from 'classnames'

const QuizEditor = (props) => {
    const questions = [
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
    ]
    return (
        <div className="flex flex-col mt-4 px-2  rounded ">
            <p className="text-3xl text-black mb-2 ">Edit Quiz</p>

            <div className="">
                {questions.map((q, index) => (
                    <div key={q.id} className="flex flex-col ml-0 mb-4 bg-blue-100 p-4 rounded">
                        <div className="flex align-center">
                            <p className="text-blue-600 ">Q{index + 1}.</p>{' '}
                            <textarea
                                className="bg-transparent text-blue-600 w-full resize-none"
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
                        <div className="flex flex-col">
                            {Object.entries(q.options).map(([key, value]) => (
                                <div key={key} className="flex items-center">
                                    <p className="mr-2">{`${key})`}</p>
                                    <textarea
                                        className={classNames('bg-transparent resize-none', {
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
            <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default QuizEditor
