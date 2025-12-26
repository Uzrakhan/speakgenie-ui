import { FiChevronDown, FiShare2 } from "react-icons/fi";
import { IoNotificationsOutline } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

export default function PlayerHeader() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between px-4 py-3 mt-2">

            <button className="text-gray-700" onClick={() => navigate(-1)}>
                <FiChevronDown size={24}/>
            </button>

            <p className="text-sm font-semibold tracking-wide text-gray-700">
                NOW PLAYING
            </p>

            <div className="flex items-center gap-3">
                <FiShare2 size={20} className="text-gray-700"/>

                <div className="relative">
                    <IoNotificationsOutline size={22} className="text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] rounded-full px-1">
                        7
                    </span>
                </div>
            </div>
        </div>
    )
}