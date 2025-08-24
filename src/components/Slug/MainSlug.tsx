"use client";

import { slugify } from "@/utils/slugify";
import { LucideIcon, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


interface RightButton {
  icon: LucideIcon;
  title?: string;
}

interface IMainChannel {
  id: string;
  video: string;
  title: string;
  categories: string[];
  languages: string[];
  channel: string;
  avatar: string;
  rightButtons: RightButton[];
  viewers:number;
  timeStart:string;
}

interface IMainChannelRender {
  items: IMainChannel[];
}

const MainSlug = ({ items }: IMainChannelRender) => {

  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});
  const [subscribed, setSubscribed] = useState<{ [key: string]: boolean }>({});
   const [videoErrors, setVideoErrors]=useState<{[key:string]:boolean}> ({})
   const [videoTime, setVideoTime]=useState<{[key:string]:string}>({})

  const toggleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSubscribe = (id: string) => {
    setSubscribed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVideoErrors= (id:string)=>{
   setVideoErrors((prev)=>({...prev, [id]:true}))
  }

  useEffect(()=>{
   const interval=setInterval(()=>{
      const now= new Date();
      const updatedTimes:{[key:string]:string}={}

      items.forEach((item)=>{
         const[h,m,s]=item.timeStart.split(":").map(Number);
         const startTime= new Date();
         startTime.setHours(h,m,s);

         const diff= now>startTime ? now.getTime() - startTime.getTime():0

         const hours = Math.floor(diff/3600000);
         const minutes= Math.floor(diff%3600000/60000);
         const seconds = Math.floor(diff%60000/1000);

         updatedTimes[item.id]= `${String(hours).padStart(2, "0")}:${String(
            minutes
         ).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
      })
      setVideoTime(updatedTimes);
   },1000)
   return ()=>clearInterval(interval);
  },[items])



  return (
    <div className="w-full flex">
      {items.map((item) => (
        <section className="w-full flex flex-col items-center" key={item.id}>
          {videoErrors[item.id]?(
            <div className="h-[200px] w-full xl:h-[770px] bg-gray-800 flex flex-col items-center justify-center text-white">
               <p className="text-lg mb-4">⚠ Щось пішло не так...</p>
               <button 
                  onClick={()=>window.location.reload()}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer transition-all"
               >
                  перезавантажити
               </button>
            </div>
          )
          :(<video 
            className=" xl:h-[770px] w-[90%] md:w-full"
            src={item.video}
            controls
            onError={() => handleVideoErrors(item.id)}
          ></video>)}
         <div className="w-[95%] flex flex-col items-center md:justify-between md:flex-row md:items-start">
          <div className="flex m-5">
          <Link
  href={`/channel/${slugify(item.channel)}`}
  className="bg-red-300 h-16 w-16 rounded-full overflow-hidden"
>
  <img src={item.avatar} alt={item.title} />
</Link>

<div className="ml-5 ">
  <Link href={`/channel/${slugify(item.channel)}`} className="hover:text-amber-100">
    {item.channel}
  </Link>

  <p>{item.title}</p>
  <div className="flex gap-4 mt-1 flex-wrap">
    {item.categories.map((category, idx) => (
      <Link
        href={`/Following/Categories/${slugify(category)}`} 
        key={idx}
        className="text-purple-900 hover:text-purple-800 transition-colors"
      >
        {category}
      </Link>
    ))}
    {item.languages.map((language, idx) => (
      <Link
        href={`/Following/Languages/${slugify(language)}`}  
        key={idx}
        className="bg-amber-50 opacity-40 text-gray-400 px-2 rounded-xl"
      >
        {language}
      </Link>
    ))}
  </div>
</div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-4 mt-3">
                {(() => {
                  const Icon = item.rightButtons[0]?.icon;
                  return (
                    <button
                      onClick={() => toggleLike(item.id)}
                      className={`flex items-center gap-1 transition ${
                        likes[item.id]
                          ? "text-red-500"
                          : "hover:text-amber-200"
                      }`}
                    >
                      {Icon && <Icon size={20} />}
                      <span>{likes[item.id] ? "Liked" : "Like"}</span>
                    </button>
                  );
                })()}

                {(() => {
                  const Icon = item.rightButtons[1]?.icon;
                  return (
                    <button
                      onClick={() => toggleSubscribe(item.id)}
                      className={`flex items-center gap-1 transition ${
                        subscribed[item.id]
                          ? "text-green-500"
                          : "hover:text-amber-200"
                      }`}
                    >
                      {Icon && <Icon size={20} />}
                      <span>
                        {subscribed[item.id] ? "Subscribed" : "Subscribe"}
                      </span>
                    </button>
                  );
                })()}
               </div>
               <div className="flex gap-5">
                  <span className="flex text-red-400"><User/> {item.viewers}</span>
                  <span className=" flex"> {videoTime[item.id] || "00:00:00"} </span>
               </div>
              </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MainSlug;
