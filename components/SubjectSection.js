import SubjectCard from '@/components/SubjectCard';
import Link from 'next/link';

const SubjectSection = ({ children }) => {
  const subjects = [
    { id: 1, title: 'English', imageUrl: '/leonardo.png' },
    { id: 2, title: 'Physics', imageUrl: '/sun.png' },
    { id: 3, title: 'History', imageUrl: '/penguin-2.png' },
    { id: 4, title: 'Geography', imageUrl: '/ufo.png' },
    { id: 5, title: 'Chemistry', imageUrl: '/elephant.png' },
  ];
    
  return (
    <div>
      <p className="text-black text-2xl px-10 pt-10">Daily Quiz</p>
      <div className="w-screen h-auto border-b-2 px-10 py-3 pb-8 flex gap-y-4 justify-between overflow-x-auto pr-64">
        {subjects.map((subject) => (
          <Link href="/quiz" key={subject.id}>
            
              <SubjectCard title={subject.title} imageUrl={subject.imageUrl} />
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectSection;
