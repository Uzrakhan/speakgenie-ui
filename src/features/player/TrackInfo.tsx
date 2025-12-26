import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


interface TrackInfoProps {
    title: string;
    description: string;
    liked?: boolean;
    onLike?: () => void;
}

export default function TrackInfo({
    title,
    description,
    liked = false,
    onLike,
}: TrackInfoProps) {
    return (
        <div className="px-6 mt-4 flex justify-between items-start">

            <div className="mt-1">
                <h2 className="font-bold text-black text-xl">
                    {title}
                </h2>

                <p className="text-sm text-gray-500 max-w-[260px] leading-snug">
                    {description}
                </p>
            </div>

            <button
                onClick={onLike}
                className="p-2 transition mt-1"
            >
                {liked ? (
                    <FaHeart size={18} className="text-emerald-500" />
                ) : (
                    <FiHeart size={18} className="text-gray-500" />
                )}
            </button>

        </div>
    )
}