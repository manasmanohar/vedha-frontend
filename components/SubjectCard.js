import Image from 'next/image'

const SubjectCard = ({ title, imageUrl }) => {
    return (
        <div className="relative w-48  h-48 mr-12 rounded-lg bg-green-200 hover:bg-teal-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out min-w-48">
            <div className="flex pt-4 justify-center items-center h-3/4">
                <Image src="/ufo.png" alt={title} width="90" height="90" />
            </div>
            <div className="absolute bottom-0 right-0 p-2">
                <p className="text-2xl">{title}</p>
            </div>
        </div>
    )
}

export default SubjectCard
