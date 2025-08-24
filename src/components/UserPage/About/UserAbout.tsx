import { FaInstagram, FaSteam, FaTelegram } from "react-icons/fa";
import AboutInfo from "./AboutInfo";

const aboutInfo =[
  {
    followers: 253,
    channel: "nana",
    socialLinks: [
      { icon: FaInstagram, title: "Instagram", link: "https://www.instagram.com/nana" },
      { icon: FaTelegram, title: "Telegram", link: "https://t.me/nana" },
      { icon: FaSteam, title: "Steam", link: "https://steamcommunity.com/id/nana" }
    ]
  }
]


const UserAbout = () => {
  return (
    <div >
      <AboutInfo items={aboutInfo}/>
    </div>
  )
}

export default UserAbout