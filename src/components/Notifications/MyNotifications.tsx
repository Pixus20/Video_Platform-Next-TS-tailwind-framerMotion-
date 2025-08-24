import { AnimatePresence, motion } from "framer-motion"
import NotificationsRender from "./NotificationsRender"

const Note =[
   {
      id:"1",
      channel:"name-channel",
      avatar:"https://korali.info/wp-content/uploads/2023/09/perekladach.jpg",
      title:"title note",
      dateTime:"12.08"
   },
   {
      id:"2",
      channel:"name-channel",
      avatar:"https://korali.info/wp-content/uploads/2023/09/perekladach.jpg",
      title:"title note",
      dateTime:"12.08"
   },
   {
      id:"3",
      channel:"name-channel",
      avatar:"https://korali.info/wp-content/uploads/2023/09/perekladach.jpg",
      title:"title note",
      dateTime:"12.08"
   },
   {
      id:"4",
      channel:"name-channel",
      avatar:"https://korali.info/wp-content/uploads/2023/09/perekladach.jpg",
      title:"title note",
      dateTime:"12.08"
   },
   {
      id:"5",
      channel:"name-channel",
      avatar:"https://korali.info/wp-content/uploads/2023/09/perekladach.jpg",
      title:"title note",
      dateTime:"12.08"
   }
]

interface NoteProps{
   onClose:()=> void
}

const MyNotifications = ({onClose}:NoteProps) => {
   return (
      <AnimatePresence>
         <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3 }}
               className="w-full md:w-[20%] max-h-[30vh] flex flex-col items-center bg-gray-900 absolute md:right-20 p-5 text-white overflow-y-auto rounded-lg shadow-lg"
               >
                     <div className="flex justify-between w-full  bg-gray-900 z-10 pb-2"> 
               <h1 className="uppercase mb-3 abs">Notifications</h1>
               <button
               onClick={onClose}
               className="absolute top-2 right-2 cursor-pointer text-white"
               >
               ✕
               </button>
            </div>
            <div className="w-full">
               <NotificationsRender items={Note}/>
            </div>
         </motion.div>
      </AnimatePresence>
   )
 }
 

export default MyNotifications
