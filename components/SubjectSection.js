import SubjectCard from '@/components/SubjectCard'
import FeaturedCard from '@/components/FeaturedCard'
const SubjectSection = ({ children }) => {
    return (
        <div className="w-screen h-auto bg-white-600  p-10  flex-wrap flex justify-between">
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
        </div>
    )
}

export default SubjectSection
