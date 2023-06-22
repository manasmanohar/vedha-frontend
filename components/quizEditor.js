import { useState } from 'react'
import QnAEditor from '@/components/QnAEditor'

const QuizEditor = ({ questions, onChange, children }) => {
    const handleQuestionChange = (question, index) => {
        const update = [...questions]
        
        update.splice(index, 1, {
            ...questions[index],
            question,
        })
        onChange(update)
    }

    const handleAnswerChange = (options, index) => {
        const update = [...questions]
        
        update.splice(index, 1, {
            ...questions[index],
            options,
        })
        onChange(updatedQuestions)
    }

    return (
        <div className="flex flex-col mt-4 px-2 rounded">
            <p className="text-3xl text-black mb-2">Edit Quiz</p>

            <div>
                {questions.map((item) => (
                    <QnAEditor key={item.id} item={item} onQuestionChange={(value) => handleQuestionChange(value, index)} onAnswerChange={(options => onAnswerChange(options, index))} />
                ))}
            </div>

            {children}
        </div>
    )
}

export default QuizEditor
