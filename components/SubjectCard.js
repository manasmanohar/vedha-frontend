import Image from 'next/image'

const SubjectCard = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-shrink-0 text-black relative w-48 h-48 mr-12 rounded-lg bg-green-200 hover:bg-teal-600 hover:text-white hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out min-w-48">
      <div
        style={{ transform: 'rotate(-10deg)' }}
        className="flex  text-black justify-between px-10 pt-12 items-center h-3/4"
      >
        <Image src={imageUrl} alt={title} width={90} height={90} />
      </div>
      <div className="absolute mt-2 pt-2 bottom-0 right-0 p-2">
        <p className="text-2xl">{title}</p>
      </div>
    </div>
  )
}

export default SubjectCard;
