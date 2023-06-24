import { useState } from 'react';

const QnAEditor = ({ item, index, onQuestionChange, onAnswerChange }) => {
    const handleIndividualAnswer = (value, index) => {
        const update = [...item.options];
        update.splice(index, 1, value);
        onAnswerChange(update);
    };

    return (
        <div className="flex flex-col ml-0 mb-4 bg-blue-100 p-4 rounded">
            <div className="flex ml-2 flex-col">
                <textarea
                    className={'bg-white rounded-md p-1 text-black mt-1 w-full resize-none'}
                    name={`question-${index}`}
                    id=""
                    cols="1"
                    rows="1"
                    defaultValue={item.question}
                    onChange={(e) => onQuestionChange(e.target.value, index)}
                />

                {item.options.map((value, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                        <p className="mr-2">{`${optionIndex + 1})`}</p>

                        <textarea
                            className={`bg-white rounded-md p-1 mt-1 w-full resize-none ${
                                value === item.correctAnswer ? 'text-green-600' : 'text-black'
                            }`}
                            name={`answer-${optionIndex}`}
                            id=""
                            cols="1"
                            rows="1"
                            defaultValue={value}
                            onChange={(e) => handleIndividualAnswer(e.target.value, optionIndex)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QnAEditor;
