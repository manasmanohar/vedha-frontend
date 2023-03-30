const Leaderboard = ({ quiz }) => {
    console.log(quiz.quizname)
    console.log(quiz.scores)

    const sortedScores = [...quiz.scores].sort((a, b) => b.score - a.score)

    return (
        <div className="mx-auto my-8 px-4 py-2 border border-gray-400 rounded-md max-w-screen-sm text-center">
            <h2 className="text-2xl font-bold">{quiz.quizname}</h2>
            <table className="mx-auto w-full table-auto border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 font-medium text-gray-700">Rank</th>
                        <th className="px-4 py-2 font-medium text-gray-700">Name</th>
                        <th className="px-4 py-2 font-medium text-gray-700">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedScores.map((player, index) => (
                        <tr key={player.name}>
                            <td className="px-4 py-2 font-medium">{index + 1}</td>
                            <td className="px-4 py-2">{player.name}</td>
                            <td className="px-4 py-2">{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard
