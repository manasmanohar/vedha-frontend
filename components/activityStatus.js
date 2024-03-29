import Image from 'next/image'
const FeaturedCard = ({ children }) => {
    return (
        <>
            <div className="relative bg-blue-300 rounded-lg p-5 w-96 h-60 flex-shrink-0 mr-10 mx-auto overflow-hidden">
                <p className="text-xl font-bold">Physics</p>
                <p>Chapter 1</p>
                <p className="mt-32">Continue Learning </p>
                <div className="absolute bg-blue-700 rounded-bl-full w-40 h-40 bottom-0 right-0 transform rotate-90">
                    <div className="transform -rotate-90 ml-8 ">
                        <Image src="/ufo.png" alt="/" width="80" height="80" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default acticityStatus
