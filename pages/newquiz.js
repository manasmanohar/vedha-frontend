import { useState } from 'react'
import QuizEditor from '@/components/QuizEditor'
import SaveQuiz from '@/components/SaveQuiz'
import axios from 'axios'

function NewQuiz() {
    const [questions, setQuestions] = useState([])
    const [uploadMessage, setUploadMessage] = useState('')
    const [fileUploaded, setFileUploaded] = useState(false)
    const [progress, setProgress] = useState(0)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [showProgressBar, setShowProgressBar] = useState(false)

    // const progress = new ProgressBar({
    //     size: 4,
    //     color: '#29d',
    //     className: 'z-50',
    //     delay: 100,
    // })
    const handleFileUpload = async (event) => {
        // setShowProgressBar(true) // set showProgressBar state to true before making the API call

        event.preventDefault()
        setShowProgressBar(true)
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    setUploadProgress(percentCompleted)
                },
            })

            if (response.status === 200) {
                const data = response.data
                setUploadMessage(data.message)
                setFileUploaded(true) // set fileUploaded state to true
                
                if (data.questions.length > 0) {
                    setQuestions(data.questions.map(item => {
                        return {
                            ...item,
                            options: Object.values(item.options)
                        }
                    }))
                }
            } else {
                setUploadMessage('Upload failed')
                console.log(response)
            }
        } catch (error) {
            console.error(error)
            setUploadMessage('Upload failed')
        } finally {
            setShowProgressBar(false) // set showProgressBar state to false after the API call is complete
        }
    }



    return (
        <div id="wrapper" className="bg-secondarywhite w-full h-full overflow-auto  ">
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
                {fileUploaded && (
                    <QuizEditor questions={questions} setQuestions={setQuestions}>
                        <SaveQuiz questions={questions} onSave={SaveQuiz} />
                    </QuizEditor>
                )}
                {/* Show progress bar */}
            </div>
        </div>
    )
}

export default NewQuiz
