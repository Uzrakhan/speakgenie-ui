interface XPCardProps {
    level?: string;
    currentXp?: number;
    maxXp?: number;
    nextLevel?: string;
}

export default function XPCard({
    level = "L1",
    currentXp = 0,
    maxXp = 100,
    nextLevel = "L2",
}: XPCardProps) {
    const progress = (currentXp / maxXp) * 100;

    return(
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-white/10">
            {/** top row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold">
                        {level}
                    </div>

                    <p className="text-xs font-semibold tracking-wide">
                        XP PROGRESS •
                    </p>
                </div>

                <p className="text-xs opacity-80">
                    Next: {nextLevel}
                </p>
            </div>

            {/**XP Text */}
            <div className="flex items-center justify-between text-[11px] mt-1 opacity-90">
                <span>{currentXp}/{maxXp} XP</span>
            </div>

            {/** progress bar */}
            <div className="w-full h-2 bg-white/20 rounded-full mt-1 overflow-hidden">
                <div 
                    className="h-2 bg-white rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/** bottom row */}
            <div className="flex items-center justify-between mt-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                    ⚙️
                </div>

                <p className="text-sm font-semibold">
                    {currentXp} XP
                </p>

                <div className="flex gap-1 opacity-80">
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                </div>
            </div>
        </div>
    )
}