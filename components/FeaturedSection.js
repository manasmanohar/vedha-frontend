import FeaturedCard from '@/components/FeaturedCard'
const FeaturedSection = ({ children, featuredCardsData }) => {
    return (
        <div className="bg-white">
            <p className="text-black text-3xl px-10 pt-10">Welcome back Manas!</p>
            <div className="w-full  h-auto  px-10 py-3 pb-8  flex-row flex justify-start  overflow-x-scroll">
                {featuredCardsData.map((card) => (
                    <FeaturedCard
                        key={card.id}
                        title={card.title}
                        chapter={card.chapter}
                        imageUrl={card.imageUrl}
                        subject={card.subject}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturedSection
