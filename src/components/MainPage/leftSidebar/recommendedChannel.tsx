import { Telescope } from "lucide-react";
import ChannelRendering from "./ChannelRendering";

type ItemType = { id: string; channel: string; avatar: string };

const recommended: ItemType[] = [
  { id: "1", channel: "channel1", avatar: "https://example.com/avatars/channel2.png" },
  { id: "2", channel: "channel2", avatar: "https://example.com/avatars/channel2.png" },
];

const RecommendedChannel = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col py-2 w-full">
      {isOpen
      ?
      <h2 className="uppercase ml-2">Recommended</h2> 
      :
      <span className="ml-4 mb-2">
        <Telescope size={24} color="currentColor" />
      </span>}
      <ChannelRendering items={recommended} isOpen={isOpen} />
    </div>
  );
};

export default RecommendedChannel;
