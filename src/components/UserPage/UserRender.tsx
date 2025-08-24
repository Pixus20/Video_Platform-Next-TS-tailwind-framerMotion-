
interface UserRender{
   id:string;
   avatar:string;
   channel:string;
}

interface UserPageRender{
  items:UserRender[]
}


const UserRender = ({items}:UserPageRender) => {
  return (
    <div>
      {items.map((item)=>(
        <span className="flex gap-2 items-center " key={item.id}>
          <img className="h-[60px] w-[60px] rounded-full bg-amber-300" src={item.avatar} alt="" />
          <p>{item.channel}</p>
        </span>
      ))}

    </div>
  )
}

export default UserRender