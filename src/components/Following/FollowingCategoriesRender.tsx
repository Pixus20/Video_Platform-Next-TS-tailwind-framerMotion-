import { slugify } from "@/utils/slugify";
import Link from "next/link";


interface CategoryType{
   id:string;
   banner:string;
   title:string;
   viewers:number;
   tags:string
}

interface CategoryRenderingProps{
   items:CategoryType[];
}


const FollowingCategoriesRender = ({items}:CategoryRenderingProps) => {
  return (
<div className="flex flex-col items-center sm:grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
  {items.map((item) => (
    <Link
      href={`/Following/Categories/${slugify(item.tags)}`}
      key={item.id}
      className="w-[200px]"
    >
      <img src={item.banner} className="w-full rounded-lg" />
      <div className="flex flex-col">
        <p>{item.title}</p>
        <span>{item.viewers} viewers</span>
        <span className="px-2 rounded-xl bg-gray-800 w-fit">{item.tags}</span>
      </div>
    </Link>
  ))}
</div>
  )
}

export default FollowingCategoriesRender