import { FaHome, FaTrophy, FaPhoneAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const tabs = [
    { id: "home", label: "Home", icon: <FaHome />, path: '/' },
    { id: "learn", label: "Learn", icon: <FaTrophy />, path: '/learn' },
    { id: "call", label: "Call", icon: <FaPhoneAlt />, path: '/call' },
    { id: "profile", label: "Profile", icon: <FaUser />, path: '/profile' },
]

export default function BottomNav() {

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm pb-1 pt-1">
            <div className="max-w-md mx-auto flex justify-between px-6 py-2">
                {tabs.map(tab => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        end={tab.path === '/'}
                        className={({ isActive }) => 
                            `flex flex-col items-center gap-1 ${
                                isActive ? 'text-emerald-500' : 'text-gray-400'
                            }`
                        }
                    >
                        <span className="text-2xl">{tab.icon}</span>
                        <span className="text-xs font-medium">{tab.label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}