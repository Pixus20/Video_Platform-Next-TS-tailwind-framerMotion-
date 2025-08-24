import UserPageNav from "./UserPageNav";
import UserRender from "./UserRender";

const User=[
  {id:'1',avatar:"spbvpsdb.png", channel:'Test' }
]

const MenuItem = [
  { id: "1", name: "Home", src: "/User" },
  { id: "2", name: "About", src: "/User/About" },
  { id: "3", name: "Videos", src: "/User/Videos" },
];

const UserLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <div className="w-full "><img className="h-[500px] w-full" src="https://www.navair.navy.mil/sites/g/files/jejdrs536/files/styles/crop_16_9/public/190122-N-UZ648-331_0.jpg?itok=yoOtjDps" alt="" /></div>
      <div className="m-8 min-h-dvh">
        <UserRender items={User}/>
        <UserPageNav items={MenuItem}/>
        {children}
      </div>
    </div>
  )
}

export default UserLayout