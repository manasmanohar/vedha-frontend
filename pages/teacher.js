import FeaturedSection from '@/components/FeaturedSection'
import SubjectSection from '@/components/SubjectSection'
import NavBarTeacher from '@/components/NavBarTeacher'
function Teacher() {
    const featuredCardsData = [
        {
            title: '   Physics Chapter 1',
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
        <div id="wrapper" className="bg-secondarywhite  flex flex-col lg:flex-row w-full h-full">
            <NavBarTeacher className="lg:w-1/4 flex-shrink-0" />
            <div className="container">
                <FeaturedSection featuredCardsData={featuredCardsData} />
                <SubjectSection />
            </div>
        </div>
    )
}

export default Teacher
