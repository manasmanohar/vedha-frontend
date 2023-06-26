import Image from 'next/image';
import { useRouter } from 'next/router';

const FeaturedCard = ({ title, chapter, imageUrl, subject }) => {
  const colors = ['bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-purple-300'];
  const router = useRouter();

  // Get the index of the card based on the subject
  const index = subject ? subject.charCodeAt(0) % colors.length : 0;
  const colorClass = colors[index];

  const handleClick = () => {
    // Perform the desired action when the card is clicked, such as redirecting to the subject screen
    router.push('/subject');
  };

  return (
    <>
      <div className={`relative ${colorClass} rounded-lg p-5 w-96 h-60 flex-shrink-0 mr-10 mx-auto overflow-hidden`} onClick={handleClick}>
        <p className="text-xl font-bold">{title}</p>
        <p>{chapter}</p>
        <p className="mt-32">Continue Learning</p>
        <div className="absolute rounded-bl-full w-40 h-40 bottom-0 right-0 transform rotate-90 bg-blue-700">
          <div className="transform -rotate-90 ml-8">
            <Image src={imageUrl} alt="/" width={80} height={80} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
