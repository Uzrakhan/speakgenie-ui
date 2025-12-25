import { FiStar } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

export default function AudioStories() {
    const stories = [
        { id: 1, title: "Choosing the Right Path" },
        { id: 2, title: "The Fountain & the Mayor" },
        { id: 3, title: "The Little Seed" },
        { id: 4, title: "Prahlad - Inner Strength" },
        { id: 5, title: "Teamwork and Leadership" },
        { id: 6, title:  "The Magic Pencil"}
    ];

    return (
        <>
            <SectionTitle title="Audio Stories" icon={<FiStar />}/>

            <div className="flex gap-3 overflow-x-auto px-4 mt-3 no-scrollbar">
                {stories.map((s) => (
                    <div key={s.id} className="min-w-[120px]">
                        <img 
                            src={`https://picsum.photos/200?random=${s.id}`}
                            className="w-full h-40 object-cover rounded-xl shadow"
                        />

                        <p className="text-xs mt-1 font-medium text-center">
                            {s.title}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}