import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { LuLightbulb, LuSparkles, LuTarget } from 'react-icons/lu'


export default function QuizScreen() {
    const navigate = useNavigate();
    const MAX = 60;
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard"| "">("")
    const topics = [
        "My Best Friend",
        "Cricket Basics",
        "Solar System",
        "Healthy Habits",
        "Animals & Birds",
        "School Picnic",
    ];

    const levels = [
        {
            id: "easy",
            label: "Easy",
            desc: "Short sentences & gentle vocabulary.",
            color: "text-green-600",
            border: "border-green-600",
            bg: "bg-gradient-to-br from-green-50 to-white",
            Icon: LuLightbulb
        },
        {
            id: "medium",
            label: "Medium",
            desc: "Everyday situations with detail.",
            color: "text-amber-600",
            border: "border-amber-200",
            bg: "bg-gradient-to-br from-amber-50 to-white",
            Icon: LuSparkles
        },
        {
            id: "hard",
            label: "Hard",
            desc: "Longer thinking and tricky choices.",
            color: "text-purple-600",
            border: "border-purple-200",
            bg: "bg-purple-50",
            Icon: LuTarget
        },
    ] as const;


    return (
        <div className="min-h-screen bg-gray-50 px-4 pb-28">
            
            <div className="sticky top-0 z-30 py-3 bg-gray-50">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 text-green-600 font-medium bg-white rounded-2xl shadow-sm py-1 px-2"
                >
                    <FiArrowLeft size={15}/>
                    Back
                </button>
            </div>
            

            <div className="bg-white rounded-2xl shadow-lg p-5 mt-5">
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

            {/** step2 */}
            <div className="bg-white rounded-2xl shadow p-4 mt-5">
                <p className="text-xs text-green-600 font-bold">
                    STEP 2
                </p>

                <h2 className="font-semibold mt-1 text-xl">
                    Pick a challenge level
                </h2>

                <div className="mt-3 flex flex-col gap-3">
                    {levels.map(l => {
                        const isActive = difficulty === l.id;
                        const Icon = l.Icon;

                        return (
                            <button
                                key={l.id}
                                onClick={() => setDifficulty(l.id)}
                                className={`w-full text-left rounded-2xl border p-4 transition active:scale-[0.98] m-1
                                ${isActive ? `${l.bg} border-green-500 shadow-lg` : "border-gray-200 bg-white"}`}
                            >
                                <div className="flex justify-between items-start">
                                    <p className={`font-semibold ${l.color}`}>
                                        {l.label}
                                    </p>

                                    <Icon className={`${l.color} text-lg`} />
                                </div>

                                <p className="text-sm text-gray-500 mt-1">
                                {l.desc}
                                </p>

                                {isActive && (
                                <span className="inline-block mt-2 text-sm text-green-600 font-semibold px-2 py-1 rounded-full shadow-sm">
                                    Selected
                                </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <section className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-5 shadow-lg w-full text-white mt-6">
                <p className="font-semibold uppercase tracking-wide opacity-80 text-sm">
                    What you'll get
                </p>
                <h3 className="font-bold text-xl mt-1">
                    Friendly quiz with instant feedback
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                        Bite-sized explanations for every answer.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                            Tone automatically matches the learner profile.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                        Ready-to-play quiz inside the Learn tab.
                    </li>
                </ul>
            </section>

            <div className="fixed bottom-0 left-0 right-0 z-50">
                <div className="max-w-md mx-auto">
                    <div className="bg-white p-8 pb-20">
                        <button
                            disabled={!topic || !difficulty}
                            className={`w-full py-4 rounded-2xl text-white font-semibold transition-all shadow-lg
                                ${topic && difficulty ? 'bg-green-600 active:scale-[0.99]' : 'bg-gray-300'}`}
                        >
                            Generate Quiz
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}