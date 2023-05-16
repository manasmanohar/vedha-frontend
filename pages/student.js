import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import FeaturedSection from '@/components/FeaturedSection'
import SubjectSection from '@/components/SubjectSection'

function Student() {
    const client = useSupabaseClient()
    const [data, setData] = useState(null)

    // useEffect(() => {
    //   async function loadData() {
    //     const { data } = await client.from('<table>').select('<row>')
    //     setData(data)
    //   }

    //   return () => setData(null)
    // }, [])

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
        <div id="wrapper" className="bg-secondarywhite w-full h-full">
            <FeaturedSection featuredCardsData={featuredCardsData} />
            <SubjectSection />
        </div>
    )
}

export default Student
