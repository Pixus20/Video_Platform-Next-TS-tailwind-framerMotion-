
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Settings, User } from "lucide-react";
import UserButtonRender from "./UserButtonRender";

const buttons = [
  { id: "1", icon: User, label: "Profile", link: "/User" },
  { id: "2", icon: Settings, label: "Settings", link: "/Settings" },
  { id: "3", icon: LogOut, label: "Quit", link: "/" },
];

interface UserMenuModalProps {
  onClose: () => void;
}

const UserMenuModal = ({ onClose }: UserMenuModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute md:right-32 z-50 bg-gray-900 text-white p-6 w-full md:w-64 shadow-lg rounded-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4">User Menu</h2>
        <UserButtonRender items={buttons} />
      </motion.div>
    </AnimatePresence>
  );
};

export default UserMenuModal;
