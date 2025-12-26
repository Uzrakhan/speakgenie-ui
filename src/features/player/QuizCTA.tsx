import { FiCheckCircle } from "react-icons/fi";

export default function QuizCTA() {
    return (
        <div className="px-6 mt-5">
            <button className="w-full bg-emerald-500 text-white rounded-xl py-2 flex items-center justify-between px-4 shadow-md active:scale-[0.99] transition">

                <span className="flex items-center gap-2 font-medium text-sm">
                    <FiCheckCircle />
                    Test Your Understanding
                </span>

                <span className="bg-white/20 font-semibold px-3 py-1 rounded-full text-xs">
                    7 Questions
                </span>
            </button>
        </div>
    )
}