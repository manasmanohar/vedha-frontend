import FeaturedCard from '@/components/FeaturedCard'

const FeatureSection = ({ children }) => {
    const featuredSubjects = [
        {
            title: 'Physics',
            chapter: 'Chapter 1',
            imageUrl: '/ufo.png',
        },
        {
            title: 'Chemistry',
            chapter: 'Chapter 2',
            imageUrl: '/ufo.png',
        },
        {
            title: 'Biology',
            chapter: 'Chapter 3',
            imageUrl: '/ufo.png',
        },
        {
            title: 'Geography',
            chapter: 'Chapter 3',
            imageUrl: '/ufo.png',
        },
    ]

    return (
        <div className="bg-white">
            <p className="text-black text-3xl px-10 pt-10">Welcome back Manas!</p>
            <div className="w-screen  h-auto border-b-2  px-10 py-3 pb-8 flex   gap-y-4 justify-between overflow-x-scroll">
                {featuredSubjects.map((subject) => (
                    <FeaturedCard
                        key={subject.title}
                        title={subject.title}
                        chapter={subject.chapter}
                        imageUrl={subject.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeatureSection
