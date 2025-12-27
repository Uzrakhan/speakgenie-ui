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
  badge = "Be first!",
}: PracticeCardProps) {
  return (
    <div
      className="
        relative 
        min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[340px] 
        rounded-3xl shadow-md overflow-hidden
      "
    >
      <img
        src={image}
        className="
          w-full 
          h-40 sm:h-48 md:h-56 lg:h-64 
          object-cover
        "
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl" />

      {/* badge */}
      <div className="absolute top-3 right-2">
        <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {badge}
        </span>
      </div>

      {/* text */}
      <div className="absolute left-5 top-12 md:top-16 text-white">
        <p className="font-semibold text-sm md:text-base lg:text-lg">
          {title}
        </p>

        <p className="text-xs md:text-sm opacity-90 max-w-[200px] lg:max-w-[240px]">
          {subtitle}
        </p>
      </div>

      {/* button */}
      <div className="absolute left-0 right-0 bottom-3 flex justify-center">
        <button className="bg-white/90 text-emerald-600 font-semibold text-xs md:text-sm px-10 md:px-14 py-2 rounded-full shadow hover:bg-white transition-colors">
          Join & Start Call
        </button>
      </div>
    </div>
  );
}
