
import { slugify } from '@/utils/slugify';
import Link from 'next/link';

interface MainCard {
  id: string;
  video: string;
  avatar: string;
  title: string;
  channel: string;
  category: string;
  language: string;
}

interface CardRendering {
  items: MainCard[];
}

const MainCard = ({ items }: CardRendering) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {items.map((item) => (
        <div
          className="flex flex-col  items-center w-[300px]  mx-2"
          key={item.id}
        >
          <Link href={`/channel/${slugify(item.channel)}`}>
          <video 
            className=" h-[200px]"
            src={item.video}
            controls
            ></video>
            </Link>
          <div className="flex justify-between  gap-2 p-2">
            <img src={item.avatar}  className='w-14 h-14 rounded-full'/>
            <div className="flex flex-col gap-1">
            <div className="relative group max-w-[200px]">
              <h5 className="truncate overflow-hidden whitespace-nowrap cursor-pointer">
                {item.title}
              </h5>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                              bg-black text-white text-sm px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-10">
                {item.title}
              </div>
            </div>
              <Link href={`/channel/${slugify(item.channel)}`} className="text-blue-500 ">
                {item.channel}
              </Link>
              <Link
        href={`/Following/Categories/${slugify(item.category)}`} 
        className="text-purple-900 hover:text-purple-800 transition-colors"
      >
        {item.category}
      </Link>
      <Link
        href={`/Following/Languages/${slugify(item.language)}`}  
        className="bg-amber-50 opacity-40 w-fit text-gray-400 px-2 rounded-xl"
      >
        {item.language}
      </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainCard
