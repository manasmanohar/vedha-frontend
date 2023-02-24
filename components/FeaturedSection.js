import SubjectCard from '@/components/FeaturedCard'

const FeatureSection = ({ children }) => {
    return (
        <div className="w-screen h-auto bg-violet-600  p-10  flex-row flex justify-between">
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
        </div>
    )
}

export default FeatureSection
