// import dynamic from 'next/dynamic'
import FeaturedCard from '@/components/FeaturedCard'

// const StudentDashboard = dynamic(() => import('@/components/StudentDashboard'), {ssr: false})
// const TeacherDashboard = dynamic(() => import('@/components/TeachDashboard'), {ssr: false})

const FeaturedSection = ({ children, featuredCardsData }) => {
    // const user = getUser()

    // const isStudent = user.role.includes('student')
    // const isTeacher = user.role.includes('teacher')

    // if (isStudent) {
    //     return <StudentDashboard/>
    // }

    // if (isTeacher) {
    //     return 'TEACHER'
    // }

    return (
        <div className="bg-white">
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
