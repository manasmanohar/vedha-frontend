import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Image from 'next/image'
import ProgressBar from '@/components/Progressbar'
import { withAuth } from '@/lib/auth/withAuth'

const qna = [
  {
    question: 'Which is the Strongest force in nature',
    answer: 'Nuclear Force',
    distractors: {
      o1: 'Gravity',
      o2: 'Nuclear Force',
      o3: 'Wind',
      o4: 'Electromagnetic Forces',
    },
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
    distractors: {
      o1: 'Saturn',
      o2: 'Mars',
      o3: 'Jupiter',
      o4: 'Venus',
    },
  },
]

function Quiz() {
  let i = 0
  const [seloption, setseloption] = useState(null)
  const [questionindex, setquestionindex] = useState(0)
  const [iscorrectans, setiscorrectans] = useState(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleChoice = (choice) => {
    if (choice === qna[questionindex].answer) {
      setiscorrectans(true)
      setseloption({ option: choice, isCorrect: true })
      setScore(score + 1)
    } else {
      setseloption({ option: choice, isCorrect: false })
    }
  }

  const questionhandle = () => {
    if (questionindex + 1 === qna.length) {
      setQuizCompleted(true)
    } else {
      setquestionindex(questionindex + 1)
      setiscorrectans(false)
    }
  }

  const renderQuizCompleted = () => {
    return (
        <div className="text-center mt-8 bg-blue-200 py-4">
        <h2 className="text-3xl font-bold text-black mb-4">Quiz Completed!</h2>
        <p className="text-lg text-gray-800">Your Score: {score}/{qna.length}</p>
      </div>
    );
  };
  

  return (
      <>
                {quizCompleted && renderQuizCompleted()}

      <div className="">
        <div className="flex flex-row ml-12 text-left">
          <div className="text-black text-xl font-medium my-6">
            <h3>Forces In Nature</h3>
          </div>
        </div>
        <div className="mx-24">
          <ProgressBar totalQuestions={qna.length} answeredQuestions={questionindex} />
        </div>
        <div className=" p-4 bg-purple-300 rounded-lg w-3/4 mx-auto my-4 text-center ">
          <h2 className="text-2xl text-black font-medium  p-5">{qna[questionindex].question}</h2>
        </div>
        <div className="mt-8">
          <h3 className="text-black text-lg ml-12 text-left font-medium my-6">Options</h3>
          <div className="flex flex-col lg:grid grid-cols-2 gap-6 items-center lg:mx-32 lg:ml-64 mt-4">
            <div
              className={`cursor-pointer w-3/4 p-4 rounded-2xl bg-gray-300  text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform  hover:text-white hover:border-black  hover:bg-purple-400 hover:shadow-xl   ${
                seloption &&
                seloption.option === qna[questionindex].distractors.o1 &&
                (seloption.isCorrect ? 'bg-green-500' : 'bg-red-500')
              }`}
              onClick={() => handleChoice(qna[questionindex].distractors.o1)}
            >
              <div className="flex items-center">
                <h3 className="mr-4">A)</h3>
                <h3> {qna[questionindex].distractors.o1}</h3>
              </div>
            </div>

            <div
              className={`cursor-pointer w-3/4 p-4 rounded-2xl bg-gray-300  text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform  hover:text-white hover:border-black hover:bg-purple-400 hover:shadow-xl  ${
                seloption &&
                seloption.option === qna[questionindex].distractors.o2 &&
                (seloption.isCorrect ? 'bg-green-500' : 'bg-red-500')
              }`}
              onClick={() => handleChoice(qna[questionindex].distractors.o2)}
            >
              <div className="flex items-center">
                <h3 className="mr-4">B)</h3>
                <h3> {qna[questionindex].distractors.o2}</h3>
              </div>
            </div>

            <div
              className={`cursor-pointer w-3/4 p-4 rounded-2xl bg-gray-300  text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform  hover:text-white hover:border-black hover:bg-purple-400 hover:shadow-xl  ${
                seloption &&
                seloption.option === qna[questionindex].distractors.o3 &&
                (seloption.isCorrect ? 'bg-green-500' : 'bg-red-500')
              }`}
              onClick={() => handleChoice(qna[questionindex].distractors.o3)}
            >
              <div className="flex items-center">
                <h3 className="mr-4">C)</h3>
                <h3> {qna[questionindex].distractors.o3}</h3>
              </div>
            </div>
            <div
              className={`cursor-pointer w-3/4 p-4 rounded-2xl bg-gray-300  text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform  hover:text-white hover:border-black hover:bg-purple-400 hover:shadow-xl  ${
                seloption &&
                seloption.option === qna[questionindex].distractors.o4 &&
                (seloption.isCorrect ? 'bg-green-500' : 'bg-red-500')
              }`}
              onClick={() => handleChoice(qna[questionindex].distractors.o4)}
            >
              <div className="flex items-center">
                <h3 className="mr-4">D)</h3>
                <h3> {qna[questionindex].distractors.o4}</h3>
              </div>
            </div>
          </div>
          <button
            className="text-black bg-purple-300 w-3/4 text-lg rounded-xl mx-auto mt-4 p-4 text-center flex items-center justify-center lg:mt-12"
            onClick={() => questionhandle()}
          >
            {quizCompleted ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
        {iscorrectans ? (
          <div className="flex items-center justify-center">
            <Image src="Well-Done.svg" alt="/" width="100" height="100" />
          </div>
        ) : null}
        {quizCompleted ? renderQuizCompleted() : null}
      </div>
    </>
  )
}

export default Quiz
