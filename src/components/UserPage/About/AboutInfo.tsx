import Link from 'next/link';

interface SocialLinks{
   icon: React.ComponentType<{ size?: number }>;
   title:string;
   link: string;
}

interface About{
   followers:number;
   channel:string;
   socialLinks:SocialLinks[]
}

interface AboutUserRender{
   items:About[]
}

const AboutInfo = ({items}:AboutUserRender) => {
  return (
   <div className=' mx-auto p-5'>
   {items.map((item)=>(
     <div className='flex flex-col items-start' key={item.channel}>
     <h1 className='mb-2'>About {item.channel} </h1>
     <div className='flex flex-col lg:flex-row justify-between gap-4 bg-gray-800 p-5 rounded-md '>
      <div className='flex flex-col gap-2 w-[80%]'>
         <span>{item.followers}k followers</span>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eaque quasi sapiente, doloribus sint,
             quos adipisci accusamus labore dignissimos laboriosam ab 
            illum possimus fugiat iste? Iure iusto atque nesciunt autem.</p>
      </div>
      <div>{
         item.socialLinks.map((social,idx)=>(
            <Link key={idx} href={social.link} className='flex gap-2 mb-2 hover:text-amber-200 transition-all'>
               <social.icon size={20}/>
               <span>{social.title}</span>
            </Link>
         ))
         } </div>
     </div>
     </div>
      ))}
   </div>
  )
}

export default AboutInfo