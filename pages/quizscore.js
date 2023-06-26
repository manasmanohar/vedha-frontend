import React from 'react'
import Leaderboard from '../components/Leaderboard'

const quiz = {
    quizname: 'Science Quiz',
    scores: [
        { name: 'John', score: 5 },
        { name: 'Emma', score: 4 },
        { name: 'Manas Manohar', score: 3},
        { name: 'Sarah', score: 7 },
    ],
}

const QuizScore = () => {
    return (
        <>
            <Leaderboard className="p-10"quiz={quiz} />;
        </>
    )
}

export default QuizScore
