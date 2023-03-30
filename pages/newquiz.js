import { useState } from 'react'
import { withAuth } from '@/pages/api/auth/withAuth'
function NewQuiz() {
    const questions = [
        {
            id: 1,
            question: 'What is the capital of India?',
            options: {
                a: 'Delhi',
                b: 'Mumbai',
                c: 'Kolkata',
                d: 'Chennai',
            },
            id: 2,
            question: 'What is the capital of India?',
            options: {
                a: 'Delhi',
                b: 'Mumbai',
                c: 'Kolkata',
                d: 'Chennai',
            },
            id: 1,
            question: 'What is the capital of India?',
            options: {
                a: 'Delhi',
                b: 'Mumbai',
                c: 'Kolkata',
                d: 'Chennai',
            },
        },
    ]
    const [uploadMessage, setUploadMessage] = useState('')

    const handleFileUpload = async (event) => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await fetch('http://127.0.0.1:5000/upload', {
                method: 'POST',
                body: formData,
            })

            if (response.status === 200) {
                const data = await response.json()
                setUploadMessage(data.message)
                console.log(data)
                for (let i = 0; i < data.questions.length; i++) {
                    console.log(data.questions[i])
                    console.log('\n')
                }

                alert('Sucessfully uploaded')
                console.log(response)
            } else {
                setUploadMessage('Upload failed')
                console.log(response)
            }
        } catch (error) {
            console.error(error)
            setUploadMessage('Upload failed')
        }
    }

    return (
        <div id="wrapper" className="bg-secondarywhite w-full h-screen  ">
            <div className="flex flex-col p-10 w-full h-full">
                <p className="text-3xl text-black mb-2 ">New Quiz</p>
                <p className="text-lg text-slate-700 mb-4 ">Upload PDF to generate Quiz </p>

                <form encType="multipart/form-data">
                    <div className="flex flex-col items-center justify-center w-full">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800 dark:bg-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mb-3 text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                </svg>
                                <p className="mb-2 text-sm text-blue-500 dark:text-blue-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-blue-500 dark:text-blue-400">Supported files: PDF</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} />
                        </label>
                        <button
                            className="bg-blue-800 text-white p-5 w-24 rounded-lg  mt-10 h-10 flex justify-between text-center items-center"
                            type="submit"
                        >
                            upload
                        </button>
                    </div>
                </form>
                {uploadMessage && <p>{uploadMessage}</p>}

                <div className="flex flex-col mt-4 px-2  rounded ">
                    <p className="text-3xl text-black mb-2 ">Edit Quiz</p>

                    <div>
                        {questions.map((q) => (
                            <div key={q.id} className="flex flex-col ml-3 bg-blue-100 rounded">
                                <p>{q.question}</p>
                                <div className="flex flex-col">
                                    {Object.entries(q.options).map(([key, value]) => (
                                        <textarea key={key} className="bg-transparent" name="" id="" cols="1" rows="1">
                                            {value}
                                        </textarea>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(NewQuiz)
