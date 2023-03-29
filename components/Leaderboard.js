import React from "react";


const Leaderboard = ({quizdet}) => {
    
    console.log(quizdet.quizname)
    console.log(quizdet.scores)
    // qscores.score.sort((a, b) => b.score - a.score);

  return (
    <div class="mx-auto my-8 px-4 py-2 border border-gray-400 rounded-md max-w-screen-sm text-center">
    <h2 class="text-2xl font-bold">{{ quizname }}</h2>
    <table class="mx-auto w-full table-auto border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-2 font-medium text-gray-700">Rank</th>
          <th class="px-4 py-2 font-medium text-gray-700">Name</th>
          <th class="px-4 py-2 font-medium text-gray-700">Score</th>
        </tr>
      </thead>
      {/* <tbody>
        {scores.map((player, index) => (
          <tr key={player.name}>
            <td class="px-4 py-2 font-medium">{index + 1}</td>
            <td class="px-4 py-2">{player.name}</td>
            <td class="px-4 py-2">{player.score}</td>
          </tr>
        ))}
      </tbody> */}
    </table>
  </div>
  
  );
};

export default Leaderboard;
