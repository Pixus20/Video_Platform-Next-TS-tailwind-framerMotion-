import MainCard from "../../components/MainPage/MainContent/MainCard"
import UserLayout from "../../components/UserPage/UserLayout"

interface CardItem {
  id: string
  video: string
  avatar: string
  title: string
  channel: string
  category: string
  language: string
}

const Card:CardItem[]=[
  {
     id: "1",
     video: "https://example.com/videos/video1.mp4",
     avatar: "https://example.com/avatars/channel1.png",
     title: "React Tutorial for Beginners",
     channel: "Code Academy",
     category: "Education",
     language: "English",
   },
   {
     id: "2",
     video: "https://example.com/videos/video2.mp4",
     avatar: "https://example.com/avatars/channel2.png",
     title: "Learn TypeScript in 30 Minutes",
     channel: "Tech Master",
     category: "Programming",
     language: "English",
   },
   {
     id: "3",
     video: "https://example.com/videos/video2.mp4",
     avatar: "https://example.com/avatars/channel2.png",
     title: "Learn TypeScript in 30 Minutes",
     channel: "Tech Master",
     category: "Programming",
     language: "English",
   },
   {
     id: "4",
     video: "https://example.com/videos/video2.mp4",
     avatar: "https://example.com/avatars/channel2.png",
     title: "Learn TypeScript in 30 Minutes",
     channel: "Tech Master",
     category: "Programming",
     language: "English",
   },
   {
     id: "5",
     video: "https://example.com/videos/video2.mp4",
     avatar: "https://example.com/avatars/channel2.png",
     title: "Learn TypeScript in 30 Minutes",
     channel: "Tech Master",
     category: "Programming",
     language: "English",
   },
   {
     id: "6",
     video: "https://example.com/videos/video2.mp4",
     avatar: "https://example.com/avatars/channel2.png",
     title: "Learn TypeScript in 30 Minutes",
     channel: "Tech Master",
     category: "Programming",
     language: "English",
   },
   {
     id: "7",
     video: "https://example.com/videos/video2.mp4",
     avatar: "https://example.com/avatars/channel2.png",
     title: "Learn TypeScript in 30 Minutes",
     channel: "Tech Master",
     category: "Programming",
     language: "English",
   },
]



const index = () => {
  return (
      <UserLayout >
        <MainCard items={Card}/>
      </UserLayout>
  )
}

export default index