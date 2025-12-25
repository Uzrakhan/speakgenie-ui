import XPCard from "./XPCard";

export default function HeaderCard() {
  return (
    <div className="bg-gradient-to-b from-[#25C878] to-[#19A55D] text-white pt-10 p-4 rounded-b-3xl">
      
      {/* Top Row */}
      <div className="flex items-start justify-between">
        
        {/* Avatar + Text */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <p className="text-xs opacity-80">Good Night</p>
            <p className="text-2xl font-semibold leading-tight">Lorenzo</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <span className="bg-emerald-700/40 px-2 py-1 rounded-full text-sm">
            🌙
          </span>

          <span className="bg-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
            PRO
          </span>
        </div>
      </div>

      {/* XP Card */}
      <div className="bg-emerald-700/40 mt-10 p-4 rounded-2xl">
        <XPCard level="L1" currentXp={0} maxXp={100} nextLevel="L2"/>
      </div>
    </div>
  );
}

