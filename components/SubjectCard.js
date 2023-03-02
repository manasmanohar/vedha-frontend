const SubjectCard = ({ children }) => {
    return (
        <div className="display:block rounded-xl w-40 h-40 lg:w-60 lg:h-60 bg-teal-400 p-4 sm:p-6 lg:p-8 my-4 lg:mx-2 lg:my-2 flex flex-col justify-end text-left hover:bg-teal-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
            <p className="texl-2xl">subject card</p>
            <p>Chapter 1</p>
        </div>
    )
}

export default SubjectCard
