import FeaturedSection from '@/components/FeaturedSection'
import SubjectSection from '@/components/SubjectSection'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
function FactOfTheDay() {
    const facts = [
      '🌞 Did you know that the sun is actually a star?',
      '🌌 The Milky Way galaxy is estimated to contain over 100 billion stars.',
      '🌠 A light-year is the distance light travels in one year, which is about 5.88 trillion miles (9.46 trillion kilometers).',
      '👨‍🚀 Astronauts experience weightlessness in space due to the microgravity environment.',
      '🌕 The moon is about 1/6th the size of Earth and has a gravitational force about 1/6th as strong.',
    ];
    const [randomFact, setRandomFact] = useState('');
  
    useEffect(() => {
      const selectedFact = facts[Math.floor(Math.random() * facts.length)];
      setRandomFact(selectedFact);
    }, []);
  
  return (
    <div className=" mt-8 py-10 mb-0 bg-blue-400 mx-4 p-4 rounded-lg text-white text-xl text-center">
    <p className="mb-2">🚀 Fact of the Day:</p>
    <p>{randomFact}</p>
  </div>
  
  )
}

function Home() {
  const user = useUser()

  const featuredCardsData = [
    {
      title: 'Physics',
      chapter: 'Chapter 1',
      imageUrl: '/sun.png',
    },
    {
      title: 'Chemistry',
      chapter: 'Chapter 2',
      imageUrl: '/ufo.png',
    },
    {
      title: 'English',
      chapter: 'Chapter 3',
      imageUrl: '/penguin-2.png',
    },
    {
      title: 'Geography',
      chapter: 'Chapter 3',
      imageUrl: '/leonardo.png',
    },
  ]

  return (
    <div id="wrapper" className="bg-secondarywhite w-full h-full">
      <p className="text-black text-3xl px-10 pt-10">Welcome back, {user.user_metadata.name}!</p>
      <FeaturedSection featuredCardsData={featuredCardsData} />
      <SubjectSection />
      <FactOfTheDay /> {/* Moved FactOfTheDay component to client-side rendering */}
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
