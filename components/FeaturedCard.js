import { useRouter } from 'next/router'
import Image from 'next/image'

const FeaturedCard = ({ key, title, chapter, imageUrl, subject }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/subject/${subject}`)
    }

    return (
        <>
            <div
                className="relative bg-blue-300 rounded-lg p-5 w-96 h-60 flex-shrink-0 mr-10 mx-auto overflow-hidden"
                onClick={handleClick}
            >
                <p className="text-4xl font-bold">{title}</p>
                {/* <p>{chapter}</p> */}
                <p className="mt-32 pt-4"> {chapter} </p>
                <div className="absolute bg-blue-700 rounded-bl-full w-40 h-40 bottom-0 right-0 transform rotate-90">
                    <div className="transform -rotate-90 ml-8 ">
                        <Image src={imageUrl} alt="/" width="80" height="80" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedCard
