// import { HeartCrack } from "lucide-react";
// import Link from "next/link";

// interface ItemType {
//   id: string;
//   banner: string;
//   avatar: string;
//   title: string;
// }

// interface FollowingChannelsRenderProps {
//   items: ItemType[];
//   onUnfollow?: (id: string) => void;
// }

// const FollowingChannelsRender = ({ items, onUnfollow }: FollowingChannelsRenderProps) => {
//   return (
//     <div className="space-y-2 p-5 flex flex-col items-center md:flex-row md:flex-4/5">
//       {items.map((item) => (
//        <div
//        key={item.id}
//        className="group w-[240px] h-[140px] flex flex-col items-center gap-3 p-2 rounded-lg relative hover:bg-gray-800 transition bg-cover bg-center"
//        style={{ backgroundImage: `url(${item.banner})` }}
//      >
//           <img src={item.avatar} className="w-10 h-10 rounded-full" alt="" />
//           <Link href="" className="text-white truncate">
//             {item.title}
//           </Link>
//           <button
//             onClick={() => onUnfollow?.(item.id)}
//             className="absolute bottom-2 left-2 p-1 rounded-full bg-red-600 hover:bg-red-700 transition opacity-0 group-hover:opacity-100"
//           >
//             <HeartCrack/>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FollowingChannelsRender;



import { HeartCrack } from "lucide-react";
import Link from "next/link";

interface ItemType {
  id: string;
  banner: string;
  avatar: string;
  title: string;
}

interface FollowingChannelsRenderProps {
  items: ItemType[];
  onUnfollow?: (id: string) => void;
}

const FollowingChannelsRender = ({ items, onUnfollow }: FollowingChannelsRenderProps) => {
  return (
    <div className="p-5 grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-10 justify-items-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="group w-[240px] h-[140px] flex flex-col items-center gap-3 p-2 rounded-lg relative hover:bg-gray-800 transition bg-cover bg-center"
          style={{ backgroundImage: `url(${item.banner})` }}
        >
          <img src={item.avatar} className="w-10 h-10 rounded-full" alt="" />
          <Link href="" className="text-white truncate">
            {item.title}
          </Link>
          <button
            onClick={() => onUnfollow?.(item.id)}
            className="absolute bottom-2 left-2 p-1 rounded-full bg-red-600 hover:bg-red-700 transition opacity-0 group-hover:opacity-100"
          >
            <HeartCrack />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowingChannelsRender;
