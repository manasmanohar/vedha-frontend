import { useState } from 'react'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'

function Classroom() {
  const user = useUser()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [classNumber, setClassNumber] = useState('')
  const [classCode, setClassCode] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShare = async () => {
    const url = `https://example.com/classroom/${classCode}`
    await navigator.clipboard.writeText(url)
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch('/api/supabase/classrooms/create', {
        method: 'POST',
        body: JSON.stringify({
          name,
          subject,
          classNumber,
        }),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      }).then(async (res) => {
        if (res.ok) {
          const data = await res.json()
          setClassCode(data.code)
        }
      })
    } catch (error) {
      console.error('Error creating classroom:', error)
    }
  }

  return (
    <div id="wrapper" className="bg-white w-full h-full overflow-auto">
      <div className="bg-blue-700 h-24 flex justify-start items-center w-full">
        <p className="text-2xl p-4 text-white">Create New Classroom</p>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Eg: 7B Geography"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Eg: Geography"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="classNumber">
              Class No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classNumber"
              type="text"
              placeholder="Eg: Lecture Hall 12"
              value={classNumber}
              onChange={(e) => setClassNumber(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Classroom Code
          </button>
        </form>
        {classCode && (
          <div className="mt-4 rounded-lg p-8 bg-blue-500 text-white text-center">
            <p className="font-bold text-xl mb-4">Classroom Code:</p>
            <p className="text-lg">{classCode}</p>
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline mt-4 transition-colors duration-300"
              onClick={handleShare}
            >
              Share
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-4xl text-green-500 mb-4">&#x2714;</div>
            <p className="text-lg text-black font-bold mb-4">Link Copied!</p>
            <p className="text-sm text-gray-500">
              The link has been copied to your clipboard.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx)
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default Classroom
