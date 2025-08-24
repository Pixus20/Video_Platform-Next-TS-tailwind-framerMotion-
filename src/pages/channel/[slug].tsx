// import LiveChat from "@/components/Slug/LiveChat";
// import MainSlug from "@/components/Slug/MainSlug";
// import AboutInfo from "@/components/UserPage/About/AboutInfo";
// import { Bell, ThumbsUp } from "lucide-react";
// import { FaInstagram, FaSteam, FaTelegram } from "react-icons/fa";

// const mainSlugItem = [
//   {
//     id: "1",
//     video: "https://example.com/videos/nonexistent.mp4",
//     avatar: "https://example.com/avatars/channel1.png",
//     title: "React Tutorial for Beginners",
//     channel: "Code Academy",
//     categories: ["Education"],
//     languages: ["English", "French"],
//     rightButtons: [
//       { icon: ThumbsUp, title: "Like" },
//       { icon: Bell, title: "Subscribe" }
//     ],
//     viewers:459,
//     timeStart:"12:23:34",
//     followers: 253,
//     socialLinks: [
//       { icon: FaInstagram, title: "Instagram", link: "https://www.instagram.com/codeacademy" },
//       { icon: FaTelegram, title: "Telegram", link: "https://t.me/codeacademy" },
//       { icon: FaSteam, title: "Steam", link: "https://steamcommunity.com/id/codeacademy" }
//     ]
//   }
// ];

// export default function ChannelPage() {
//   return (
//     <div className="flex flex-col items-center xl:items-start xl:flex-row w-full gap-2">
//     <div className="w-full xl:w-[80%] flex flex-col items-center xl:items-start">
//       <MainSlug items={mainSlugItem} />
//       <AboutInfo  items={mainSlugItem}/>
//     </div>
//     <div className="w-full xl:w-[20%]">
//       <LiveChat/>
//     </div>
//     </div>
//   );
// }



"use client";

import LiveChat from "@/components/Slug/LiveChat";
import MainSlug from "@/components/Slug/MainSlug";
import AboutInfo from "@/components/UserPage/About/AboutInfo";
import { Bell, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { FaInstagram, FaSteam, FaTelegram } from "react-icons/fa";

const mainSlugItem = [
  {
    id: "1",
    video: "https://example.com/videos/nonexistent.mp4",
    avatar: "https://example.com/avatars/channel1.png",
    title: "React Tutorial for Beginners",
    channel: "Code Academy",
    categories: ["Education"],
    languages: ["English", "French"],
    rightButtons: [
      { icon: ThumbsUp, title: "Like" },
      { icon: Bell, title: "Subscribe" },
    ],
    viewers: 459,
    timeStart: "12:23:34",
    followers: 253,
    socialLinks: [
      {
        icon: FaInstagram,
        title: "Instagram",
        link: "https://www.instagram.com/codeacademy",
      },
      { icon: FaTelegram, title: "Telegram", link: "https://t.me/codeacademy" },
      {
        icon: FaSteam,
        title: "Steam",
        link: "https://steamcommunity.com/id/codeacademy",
      },
    ],
  },
];

export default function ChannelPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col items-center xl:items-start xl:flex-row w-full gap-2 relative">
      {/* Основний блок */}
      <div className="w-full xl:w-[80%] flex flex-col items-center xl:items-start">
        <MainSlug items={mainSlugItem} />
        <AboutInfo items={mainSlugItem} />

        {/* Кнопка відкриття чату тільки на мобільних */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-5 right-5 xl:hidden bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Відкрити чат
        </button>
      </div>

      {/* Чат для десктопа */}
      <div className="hidden xl:block w-full xl:w-[20%]">
        <LiveChat />
      </div>

      {/* Мобільний чат (модальне вікно) */}
      {isChatOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-end xl:hidden z-50">
          <div className="w-full h-[70vh] bg-gray-800 rounded-t-2xl shadow-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Live Chat</h2>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-red-500 font-bold"
              >
                ✖
              </button>
            </div>
            <LiveChat />
          </div>
        </div>
      )}
    </div>
  );
}
