import SubjectCard from '@/components/SubjectCard'

const SubjectSection = ({ children }) => {
    const subjects = [
        { id: 1, title: 'English', imageUrl: 'math.jpg' },
        { id: 2, title: 'Physics', imageUrl: 'physics.jpg' },
        { id: 3, title: 'History', imageUrl: 'history.jpg' },
        { id: 4, title: 'Geography', imageUrl: 'Geography.jpg' },
        { id: 5, title: 'Chemistry', imageUrl: 'chemistry.jpg' },
    ]
    return (
        <div>
            <p className="text-black text-2xl px-10 pt-10">Daily Quiz</p>
            <div className="w-screen  h-auto border-b-2  px-10 py-3 pb-8 flex   gap-y-4 justify-between overflow-x-auto pr-64">
                {subjects.map((subject) => (
                    <SubjectCard key={subject.id} title={subject.title} imageUrl={subject.imageUrl} />
                ))}
            </div>
        </div>
    )
}

export default SubjectSection
