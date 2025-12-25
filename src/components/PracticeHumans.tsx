import SectionTitle from "./SectionTitle";
import PracticeCard from "./PracticeCard";
import { FiPhoneCall } from "react-icons/fi";

export default function PracticeHumans() {
    return (
        <>  
            <SectionTitle title="Practice with Humans" icon={<FiPhoneCall />}/>

            <div className="flex gap-3 overflow-x-auto px-4 mt-3 no-scrollbar">
                <PracticeCard 
                    title="Favorite Animals"
                    subtitle="Talk about your favorite animals and pets"
                    image="https://picsum.photos/400/220?random=30"
                />

                <PracticeCard
                    title="Hobbies"
                    subtitle="Share what you love to do"
                    image="https://picsum.photos/400/220?random=31"
                />

                <PracticeCard 
                    title="School Life"
                    subtitle="Chat about school, friends and learning"
                    image="https://picsum.photos/400/220?random=32"
                />

                <PracticeCard
                    title="Fvaorite Foods"
                    subtitle="Discuss yummy foods and recipes"
                    image="https://picsum.photos/400/220?random=33"
                />

                <PracticeCard
                    title="Books & Stories"
                    subtitle="Talk about favorite books and stories"
                    image="https://picsum.photos/400/220?random=34"
                />

                <PracticeCard
                    title="Family & Traditions"
                    subtitle="Share about your family and special traditions"
                    image="https://picsum.photos/400/220?random=35"
                />
            </div>
        </>
    )
}