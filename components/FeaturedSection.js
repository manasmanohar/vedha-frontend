import SubjectCard from '@/components/FeaturedCard'

const FeatureSection = ({ children }) => {
    return (
        <div className="bg-white">
            <p className="text-black text-3xl px-10 pt-10">Welcome back Manas!</p>
            <div className="w-screen  h-auto border-b-2  px-10 py-3 pb-8  flex-row flex justify-between">
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
            </div>
        </div>
    )
}

export default FeatureSection
