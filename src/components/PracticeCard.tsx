interface PracticeCardProps {
    title: string;
    subtitle: string;
    image: string;
    badge?: string;
}


export default function PracticeCard({
    title,
    subtitle,
    image,
    badge = "Be first!"
}: PracticeCardProps) {
    return (
        <div className="relative min-w-[260px] rounded-3xl shadow-md overflow-hidden">
            <img 
                src={image}
                className="w-full h-48 object-cover"
            />

            {/** dark gradient overlay */}
            <div className="absolute inset-0  bg-black/40 rounded-3xl" />

            {/** badge */}
            <div className="absolute top-3 right-2">
                <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {badge}
                </span>
            </div>

            {/*text */}
            <div className="absolute left-5 top-12 text-white">
                <p className="font-semibold">{title}</p>
                <p className="text-xs opacity-90 max-w-[170px]">
                    {subtitle}
                </p>
            </div>

            {/** glass join button */}
            <div className="absolute left-0 right-0 bottom-3 flex justify-center">
                <button
                    className=" bg-white/90 text-emerald-600 font-semibold text-xs px-14 py-2 rounded-full shadow hover:bg-white transition-colors"
                >
                    Join & Start Call
                </button>
            </div>
        </div>
    )
}