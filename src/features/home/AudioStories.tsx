import { FiStar } from "react-icons/fi";
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import { stories } from "../../data/stories";

export default function AudioStories() {
    const navigate = useNavigate();

    return (
        <>
            <SectionTitle title="Audio Stories" icon={<FiStar />}/>

            <div className="flex gap-3 overflow-x-auto px-4 mt-6 no-scrollbar">
                {stories.map((s) => (
                    <div 
                        key={s.id} 
                        className="min-w-[130px] cursor-pointer"
                        onClick={() => navigate(`/player/${s.id}`)}
                    >
                        <div>
                            <img 
                                src={s.image}
                                alt={s.title}
                                className="rounded-xl w-full h-40 object-cover"
                            />
                        </div>

                        <p className="text-xs font-medium mt-2 text-center">
                            {s.title}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}