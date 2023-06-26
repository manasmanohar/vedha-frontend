import FeaturedSection from '@/components/FeaturedSection'
import SubjectSection from '@/components/SubjectSection'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useUser } from '@supabase/auth-helpers-react'

function Home() {
    const user = useUser()

    const featuredCardsData = [
        {
            title: '   Physics',
            chapter: 'Chapter 1',
            imageUrl: '/leonardo.png',
        },
        {
            title: 'Chemistry',
            chapter: 'Chapter 2',
            imageUrl: '/penguin-2.png',
        },
        {
            title: 'Biology',
            chapter: 'Chapter 3',
            imageUrl: '/.png',
        },
        {
            title: 'Geography',
            chapter: 'Chapter 3',
            imageUrl: '/sun.png',
        },
    ]

    return (
        <div id="wrapper" className="bg-secondarywhite w-full h-full">
            <p className="text-black text-3xl px-10 pt-10">Welcome back, {user.user_metadata.name}!</p>
            <FeaturedSection featuredCardsData={featuredCardsData} />
            <SubjectSection />
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const supabase = createPagesServerClient(ctx)
    const { data } = await supabase.auth.getSession()

    if (!data.session) {
        return {
            redirect: {
                destination: '/landingpage',
                permanent: false,
            },
        }
    }

    return {
        props: {
            initialSession: data.session,
            user: data.session.user,
        },
    }
}

export default Home
