import SubjectCard from '@/components/SubjectCard'
import FeaturedCard from '@/components/FeaturedCard'
const SubjectSection = ({ children }) => {
    return (
        <div>
            <p className="text-black text-2xl px-10 pt-10">Daily Quiz</p>
            <div className="w-screen h-auto bg-white-600 px-10 py-3  flex-wrap flex justify-between">
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
            </div>
        </div>
    )
}

export default SubjectSection
