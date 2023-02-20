import FeatureCard from '@/components/FeatureCard'

const FeatureSection = ({ children }) => {
    return (
        <div className="w-screen h-auto bg-violet-600  p-10  flex-row flex justify-between">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
        </div>
    )
}

export default FeatureSection
// flex sm:flex-col lg:flex-row  sm:flex
