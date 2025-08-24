import { LucideIcon } from 'lucide-react';
import Link from 'next/link';


interface UserButton {
   id:string,
   icon:LucideIcon,
   label:string,
   link:string
}

interface UserButtonRender{
   items:UserButton[]
}

const UserButtonRender = ({items}:UserButtonRender) => {
  return (
   <div className="space-y-2">
   {items.map(({ id, icon: Icon, label, link }) => (
       <Link href={link} key={id}  className='cursor-pointer items-center  text-sm text-white rounded-md  hover:bg-blue-500 transition-all  ease-in flex pl-1 gap-4 py-2 '>
       <Icon className="w-5 h-5" />
       <p>{label}</p>
       </Link>
   ))}
 </div>
  )
}

export default UserButtonRender
