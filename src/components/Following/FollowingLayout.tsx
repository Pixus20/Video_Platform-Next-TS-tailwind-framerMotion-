import UserPageNav from '../UserPage/UserPageNav'

const MenuItem=[
   { id: "1", name: "Overview", src: "/Following" },
   { id: "2", name: "Live", src: "/Following/Live" },
   { id: "3", name: "Videos", src: "/Following/Videos" },
   { id: "4", name: "Categories", src: "/Following/Categories" },
   { id: "5", name: "Channels", src: "/Following/Channels" },
 ]

const FollowingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div >
      <div className='md:p-5'>
      <h1>Following</h1>
      <UserPageNav items={MenuItem}/>
      </div>
      {children}
    </div>
  )
}

export default FollowingLayout