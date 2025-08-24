import { slugify } from "@/utils/slugify";
import Link from "next/link";

type ItemType = { id: string; channel: string; avatar: string };

export default function ChannelRendering({
  items,
  isOpen,
}: {
  items: ItemType[];
  isOpen: boolean;
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-2 px-2 py-1">
          <Link
            href={`/channel/${slugify(item.channel)}`}
            className={`flex items-center gap-2 hover:bg-blue-500 p-1 rounded-md transition-colors ${isOpen ? "w-full" : "w-auto"}`}
            >
            <img
              src={item.avatar}
              alt={item.channel}
              className="w-8 h-8 rounded-full"
            />
            {isOpen && <span className="text-white">{item.channel}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
