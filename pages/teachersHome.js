import FeaturedSection from '@/components/FeaturedSection'
import SubjectSection from '@/components/SubjectSection'
import { withAuth } from '@/pages/api/auth/withAuth'

function teacherHome() {
    const featuredCardsData = [
        {
            title: '   Physics',
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
        <div id="wrapper" className="bg-secondarywhite w-full h-full  ">
            <FeaturedSection featuredCardsData={featuredCardsData} />
            <SubjectSection />
        </div>
    )
}

export default withAuth(teacherHome)
