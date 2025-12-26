import SectionTitle from "../../components/SectionTitle";
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
                    image="https://storage.googleapis.com/speakgenie-assets/images/practice-with-humans/Favorite%20Animals.jpeg"
                />

                <PracticeCard
                    title="Hobbies"
                    subtitle="Share what you love to do"
                    image="https://storage.googleapis.com/speakgenie-assets/images/practice-with-humans/Hobbies%20&%20Fun.jpeg"
                />

                <PracticeCard 
                    title="School Life"
                    subtitle="Chat about school, friends and learning"
                    image="https://storage.googleapis.com/speakgenie-assets/images/practice-with-humans/School%20Life.jpeg"
                />

                <PracticeCard
                    title="Favorite Foods"
                    subtitle="Discuss yummy foods and recipes"
                    image="https://storage.googleapis.com/speakgenie-assets/images/practice-with-humans/Favorite%20Foods.jpeg"
                />

                <PracticeCard
                    title="Books & Stories"
                    subtitle="Talk about favorite books and stories"
                    image="https://storage.googleapis.com/speakgenie-assets/images/practice-with-humans/Books%20&%20Stories.jpeg"
                />

                <PracticeCard
                    title="Family & Traditions"
                    subtitle="Share about your family and special traditions"
                    image="https://storage.googleapis.com/speakgenie-assets/images/practice-with-humans/Family%20&%20Traditions.jpeg"
                />
            </div>
        </>
    )
}