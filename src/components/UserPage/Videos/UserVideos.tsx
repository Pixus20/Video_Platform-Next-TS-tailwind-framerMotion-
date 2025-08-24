

const UserVideos = () => {
  return (
   <div className="flex gap-4 ">
   <label htmlFor="videoFilter">Filter by</label>
   <select id="videoFilter" className="border p-1 rounded w-[300px] bg-black">
     <option value="default ">Default</option>
     <option value="highlights">Highlights</option>
     <option value="clips">Clips</option>
     <option value="all">All Videos</option>
   </select>
 </div>
  )
}

export default UserVideos