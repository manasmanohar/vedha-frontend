import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 bg-gray-200 lg:h-screen p-28 py-8 rounded-xl">
        <h1 className="text-black font-sans font-semibold lg:text-4xl text-2xl mb-1 text-center">
          Vedha
        </h1>
        <img
          src="/hero.svg"
          alt="Landing page image"
          width={550}
          height={280}
        />
        <h1 className="text-2xl text-center font-family:Arial font-semibold text-black mb-4  ">
          Learning Made Simple!
        </h1>
        <div className="items-center text-center text-sm font-sans text-gray-700 py-4">
          <p className="">"Online learning is not the next big thing...</p>
          <p>Its the now big thing"</p>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-8 mt-0 sm:flex flex-col items-center bg-white">
        <form className="flex flex-col space-y-2 py-36 items-center">
          <button
            type="button"
            className="text-align:center w-64 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <div className="pl-8">
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </div>
            Sign in with Google
          </button>
          <hr className="w-56 h-px my-8 bg-gray-200 border-0 dark:bg-gray-400 mt-2 focus:outline-none focus:ring focus:ring-violet-300" />
          <div className="mb-2">
            <label
              className="block text-black font-sans font-semibold  text-md  mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-64 bg-gray-200 border rounded  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-black text-md font-semibold font-sans mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-64 bg-gray-200  rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <button
            type="button"
            className="text-black bg-gray-200  focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 text-align:center mx-5 inline-flex  dark:bg-gray-300   dark:focus:ring-blue-800 w-64 h-10"
          >
            <p className="pl-16"> Sign In</p>
            <svg
              aria-hidden="true"
              className="w-5 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <a
            className=" font-semibold font-sans text-sm text-black hover:text-gray-600"
            href="#"
          />
          Forgot Password?
          <p className="text-center text-gray-500 text-xs py-4">
            By continuing, you agree to our
            <br />
            Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}
