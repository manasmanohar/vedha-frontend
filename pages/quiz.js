import React from 'react';

function Quiz() {
  return (
    <>
      <div className="w-80 mx-auto mt-8">
        <div className="ml-4 text-left">
          <h3 className="text-lg font-medium my-6">Forces In Nature</h3>
        </div>
        <div className="px-4 py-2 bg-gray-300 rounded-lg w-3/4 mx-auto my-2">
          <h2 className="text-xl text-black font-medium text-center">Which is the strongest Force in nature?</h2> 
        </div>
        <div className="mt-8">
          <h3 className="ml-4 text-left font-medium my-6">Options</h3>
          <div className="flex flex-col items-center mt-4">
            <h3 className="w-3/4 py-2 rounded-md bg-gray-300 text-center text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-gray-300 hover:border-black hover:shadow-xl hover:-translate-y-1 my-2">Gravity</h3>
            <h3 className="w-3/4 py-2 rounded-md bg-gray-300 text-center text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-gray-300 hover:border-black hover:shadow-xl hover:-translate-y-1 my-2">Nuclear Force</h3>
            <h3 className="w-3/4 py-2 rounded-md bg-gray-300 text-center text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-gray-300 hover:border-black hover:shadow-xl hover:-translate-y-1 my-2">Wind</h3>
            <h3 className="w-3/4 py-2 rounded-md bg-gray-300 text-center text-lg font-medium text-black shadow-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-gray-300 hover:border-black hover:shadow-xl hover:-translate-y-1 my-2">Electromagnetic Force</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz;
