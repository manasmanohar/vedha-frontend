import React from "react";

const Leaderboard = ({ quiz }) => {
  const sortedScores = [...quiz.scores].sort((a, b) => b.score - a.score);

  const topThree = sortedScores.slice(0, 3);
  const remainingPlayers = sortedScores.slice(3);

  return (
    <div className="mx-auto my-8 px-4 py-2 bg-blue-600 border border-gray-300 rounded-lg max-w-screen-md ">
      <h2 className="text-2xl font-bold text-white mb-6">{quiz.quizname}</h2>

      <div className="grid grid-cols-3 mb-6">
        <div className="flex flex-col items-center bg-yellow-200 py-4 rounded-full mt-7 border-yellow-200 overflow-hidden ml-5">
          <div className="bg-yellow-400 rounded-full w-16 h-16 mb-2 flex items-center justify-center">
            <img
              src="https://static.thenounproject.com/png/2138076-200.png"
              className="w-12 h-12"
            />
          </div>
          <div className="font-bold text-lg text-gray-800 mb-2">
            {topThree[1].name}
          </div>
          <div className="text-gray-600">{topThree[1].score} points</div>
        </div>

        <div className="flex flex-col items-center bg-yellow-200 py-4 rounded-full ">
          <div className="bg-yellow-400 rounded-full w-16 h-16 mb-2 flex items-center justify-center">
            <img
              src="https://static.thenounproject.com/png/2138076-200.png"
              className="w-12 h-12"
            />
          </div>
          <div className="font-bold text-lg text-gray-800 mb-2">
            {topThree[0].name}
          </div>
          <div className="text-gray-600">{topThree[0].score} points</div>
        </div>

        <div className="flex flex-col items-center bg-yellow-200 py-4 rounded-full mt-7 mr-5">
          <div className="bg-yellow-400 rounded-full w-16 h-16 mb-2 flex items-center justify-center">
            <img
              src="https://static.thenounproject.com/png/2138076-200.png"
              className="w-12 h-12"
            />
          </div>
          <div className="font-bold text-lg text-gray-800 mb-2">
            {topThree[2].name}
          </div>
          <div className="text-gray-600">{topThree[2].score} points</div>
        </div>
      </div>
      <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-6 py-3 border-b-2 border-blue-400 text-left text-lg font-medium text-gray-800">
              Rank
            </th>
            <th className="px-6 py-3 border-b-2 border-blue-400 text-left text-lg font-medium text-gray-800">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-blue-400 text-left text-lg font-medium text-gray-800">
              Score
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {remainingPlayers.map((player, index) => (
            <tr key={player.name} className="bg-blue-200 rounded-lg">
              <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">
                {index + 4}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <img
                    src="https://static.thenounproject.com/png/2138076-200.png"
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-lg text-gray-800">{player.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">
                {player.score} points
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
