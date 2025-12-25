import { useState } from "react";
import { FaHome, FaTrophy, FaPhoneAlt, FaUser } from "react-icons/fa";

const tabs = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "learn", label: "Learn", icon: <FaTrophy /> },
    { id: "call", label: "Call", icon: <FaPhoneAlt /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
]

export default function BottomNav() {
    const [active,setActive] = useState("home");

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm pb-1 pt-1">
            <div className="max-w-md mx-auto flex justify-between px-6 py-2">
                {tabs.map((tab) => {
                    const isActive = active === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className="flex flex-col items-center gap-1"
                        >
                            <span
                                className={`text-2xl ${isActive ? 'text-emerald-500' : 'text-gray-400'}`}
                            >
                                {tab.icon}
                            </span>

                            <span
                                className={`text-xs font-medium ${
                                    isActive ? "text-emerald-500" : "text-gray-400"
                                }`}
                            >
                                {tab.label}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}