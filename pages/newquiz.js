import { useState, useCallback } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import QuizEditor from '@/components/QuizEditor';
import SaveQuiz from '@/components/SaveQuiz';
import axios from 'axios';

function NewQuiz() {
    const [showModal, setShowModal] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [quizSaved, setQuizSaved] = useState(false);

    const supabase = useSupabaseClient();

    const handleFileUpload = async (event) => {
        event.preventDefault();
        setShowModal(true);

        try {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                },
            });

            if (response.status === 200) {
                const data = response.data;
                setFileUploaded(true);

                if (data.questions.length > 0) {
                    setQuestions(data.questions.map((item) => {
                        return {
                            ...item,
                            options: Object.values(item.options),
                        };
                    }));
                }
            } else {
                console.log(response);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setShowModal(false);
        }
    };

    const saveToSupabase = useCallback(async (item) => {
        try {
            const { data, error } = await supabase
                .from('quizzes')
                .insert({ id: '', classroom_id: '', teacher_id: '', quiz_data: item });

            if (data) {
                setQuizSaved(true);
            }
        } catch (err) {
            console.log(err);
        }
    }, [supabase]);

    return (
        <div id="wrapper" className="bg-secondarywhite w-full h-full overflow-auto">
            <div className="flex flex-col p-10 w-full h-full">
                <p className="text-3xl text-black mb-2">New Quiz</p>
                <p className="text-lg text-slate-700 mb-4">Upload PDF to generate Quiz</p>
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
                            className="bg-blue-800 text-white p-5 w-24 rounded-lg mt-10 h-10 flex justify-between text-center items-center"
                            type="submit"
                        >
                            Upload
                        </button>
                    </div>
                </form>
                {fileUploaded && (
                    <QuizEditor questions={questions} onChange={setQuestions}>
                        <button
                            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full"
                            onClick={() => {
                                saveToSupabase(questions);
                            }}
                        >
                            Save
                        </button>
                    </QuizEditor>
                )}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <svg
                                    className="animate-spin mr-2 h-5 w-5 text-gray-800"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.309-2.691 6-6 6-1.65 0-3.15-.641-4.291-1.709L6 14.29z"
                                    ></path>
                                </svg>
                                <p className="text-lg text-gray-800">Uploading file...</p>
                            </div>
                            <p>{uploadProgress}% complete</p>
                        </div>
                    </div>
                )}
                {quizSaved && <p>Quiz saved!</p>}
            </div>
        </div>
    );
}

export default NewQuiz;
