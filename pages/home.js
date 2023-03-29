import FeaturedSection from '@/components/FeaturedSection'
import SubjectSection from '@/components/SubjectSection'
import { withAuth } from '@/pages/api/auth/withAuth'

function Home() {
    return (
        <div id="wrapper" className="bg-secondarywhite w-full h-full  ">
            <FeaturedSection />
            <SubjectSection />
        </div>
    )
}

export default withAuth(Home)
