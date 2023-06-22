import { useState } from 'react'

const QnAEditor = ({ item, index, onQuestionChange, onAnswerChange }) => {
    const handleIndividualAnswer = (value, index) => {
        const update = [...item.options]
        
        update.splice(index, 1, value)

        onAnswerChange(update)
    }

    return (
        <div className="flex flex-col ml-0 mb-4 bg-blue-100 p-4 rounded">
            <div className="flex align-center">
                <p className="p-1 text-blue-600">Q{index}.</p>{' '}
                <textarea
                    className="bg-white rounded-md p-1 text-blue-600 w-full resize-none"
                    name=""
                    id=""
                    cols="1"
                    rows="1"
                    value={item.question}
                    onChange={(e) => onQuestionChange(e.target.value)}
                />
            </div>
            <div className="flex ml-2 flex-col">
                {item.options.map(([key, value], index) => (
                    <div key={index} className="flex items-center">
                        <p className="mr-2">{`${index+1})`}</p>
                        <textarea
                            className={`bg-white rounded-md p-1 mt-1 w-full resize-none ${
                                value === item.correctAnswer ? 'text-green-600' : ''
                            }`}
                            name={`answer-${index}`}
                            id=""
                            cols="1"
                            rows="1"
                            value={value}
                            onChange={(e) => handleIndividualAnswer(e.target.value, index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QnAEditor
