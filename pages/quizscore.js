import React from "react";
import Leaderboard from "../components/Leaderboard";

  const quiz = {
    quizname: "Science Quiz",
    scores: [
      { name: "John", score: 8 },
      { name: "Emma", score: 9 },
      { name: "Alex", score: 6 },
      { name: "Sarah", score: 7 },
    ],
  };


function quizscore() {
  return (
    <>
        <Leaderboard quiz={quiz} />;
    </>
  )
}

export default quizscore;

 

