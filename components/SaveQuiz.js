const SaveQuiz = ({ questions, onSave }) => {
    const handleSave = () => {
        onSave(questions)
    }

    return (
        <div>
            <button className="bg-blue-800 text-white p-5 w-24 rounded-lg mt-10 h-10" onClick={handleSave}>
                Save
            </button>
        </div>
    )
}

export default SaveQuiz
