import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function QuizScreen() {
    const navigate = useNavigate();
    const MAX = 60;
    const [topic, setTopic] = useState("");
    const topics = [
        "My Best Friend",
        "Cricket Basics",
        "Solar System",
        "Healthy Habits",
        "Animals & Birds",
        "School Picnic",
    ];

    return (
        <div className="px-4 mt-4 pb-10">
            
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 text-green-600 font-medium bg-white rounded-2xl shadow-sm py-1 px-2"
            >
                <FiArrowLeft size={15}/>
                Back
            </button>

            <div className="bg-white rounded-2xl shadow-lg p-5 mt-4">
                <p className="text-l text-green-600 font-semibold">
                    LEARN TAB
                </p>

                <h2 className="font-bold text-2xl mt-1">
                    Craft a custom quiz
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    Pick a topic, choose difficulty, and we will build four fun questions instantly.
                </p>

                <div className="flex gap-2 mt-3 text-xs p-2">
                    <div className="flex gap-1 bg-emerald-100 text-green-600 px-2 py-1 rounded-full">
                        <FaStar size={15}/>
                        <span className="font-medium">
                            AI Powered
                        </span>
                    </div>
                    
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        4 Questions
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        Instant play
                    </span>
                </div>
            </div>

            {/*step1 */}
            <div className="bg-white rounded-2xl shadow p-4 mt-6">
                <p className="text-xs text-green-600 font-bold">
                    STEP 1
                </p>

                <h3 className="font-semibold mt-1 text-xl">
                    Choose a topic
                </h3>

                <input 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    maxLength={MAX}
                    placeholder='e.g. "My school day" or "Planets" '
                    className="mt-4 w-full bg-gray-50 rounded-xl px-3 py-4 text-sm outline-emerald-500"
                />

                <div className="flex justify-end -mt-7 mr-4">
                    <span className="text-xs text-gray-400">
                        {topic.length}/{MAX}
                    </span>
                </div>

                <div className="flex gap-3 flex-wrap mt-7">
                    {topics.map(t => {
                        const isActive = topic === t;

                        return (
                        <button
                            key={t}
                            onClick={() => setTopic(t)}
                            className={`px-3 py-1 rounded-full text-sm transition 
                            ${isActive 
                                ? "bg-green-600 text-white shadow" 
                                : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {t}
                        </button>
                        );
                    })}
                </div>
            </div>

            <button
                disabled={!topic}
                className={`w-full mt-20 py-3 rounded-2xl text-white font-medium transition
                    ${topic ? 'bg-green-600 active:scale-[0.99]' : 'bg-gray-300'}`}
            >
                Generate Quiz
            </button>
        </div>
    )
}