import { FiPlay, FiSkipBack, FiSkipForward, FiVolume2 } from "react-icons/fi";
import { BiRepeat } from 'react-icons/bi';

interface Props {
    onNext?: () => void;
    onPrev?: () => void;
}

export default function PlayerControls({ onNext, onPrev }: Props) {
    return (
        <div className="flex items-center justify-between px-6 mt-6 text-gray-700">

            <FiVolume2 size={20} />

            <button onClick={onPrev}>
                <FiSkipBack size={24} />
            </button>

            <button className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow">
                <FiPlay size={28} />
            </button>

            <button onClick={onNext}>
                <FiSkipForward size={24}/>
            </button>
            <BiRepeat  size={22}/>
        </div>
    )
}