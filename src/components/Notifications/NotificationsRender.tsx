import { slugify } from "@/utils/slugify";
import { X } from "lucide-react";
import Link from "next/link";

interface INote{
   id:string;
   channel:string;
   avatar:string;
   title:string;
   dateTime:string;
}

interface INoteRender{
   items:INote[]
}


const NotificationsRender = ({items}:INoteRender) => {
  return(
    <div  >
      {items.map((item)=>(
         <Link href={`/channel/${slugify(item.channel)}`} key={item.id} className="flex bg-gray-950 p-2 mb-3 relative">
            <div className="flex flex-col items-center">
               <img src={item.avatar} alt="" className="w-14 h-14 rounded-full" />
               <p>{item.channel}</p>
            </div>
            <div className="flex flex-col items-start">
               <p>{item.title}</p>
               <p>{item.dateTime}</p>
            </div>
            <X className=" absolute right-2"/>
         </Link>
      ))}
    </div>
  )
}



export default NotificationsRender