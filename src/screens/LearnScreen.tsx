import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRightCircle, FiBookOpen } from "react-icons/fi";

export default function LearnScreen() {
  const navigate = useNavigate();

  const modules = [
    { id: 1, title: "Practice Chat", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/Practice%20Chat.jpg" },
    { id: 2, title: "Role Play", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/roleplay.jpg" },
    { id: 3, title: "Word Meaning", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/wordmeaning.jpg" },
    { id: 4, title: "Word Games", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/word%20games.jpg" },
    { id: 5, title: "Reading...", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/Reading%20Comprehension.jpg" },
    { id: 6, title: "Quiz Generator", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/Quiz%20Generato.jpg", link: "/learn/quiz" },
    { id: 7, title: "Phonic & Sounds", image: "https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/Phonics%20&%20Sounds.jpg" },
    { id: 8, title: "Sentence Builder", image:"https://storage.googleapis.com/speakgenie-assets/images/learnscreen/coverimages/Sentence%20Builder.jpg" }
  ];


  return (
    <div className="min-h-screen bg-green-600 pb-24 overflow-y-auto">
      
      <div className="sticky top-0 z-20 bg-white flex items-center justify-between gap-3 px-4 py-5 shadow">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600"
        >
          <FiArrowLeft size={20} className="bg-white rounded-xl shadow-lg"/>
        </button>

        <div className="flex items-center gap-2">
          <FiBookOpen size={22} color="green" className="mt-1"/>
          <h1 className="text-xl font-bold text-gray-900">
            Learn English
          </h1>
        </div>

        <div className="w-10"></div>
      </div>

      {/**content */}
      <div className="grid grid-cols-2 gap-5 px-5 mt-9">
        {modules.map(m => (
          <div
            key={m.id}
            onClick={() => m.link && navigate(m.link)}
            className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden active:scale-[0.98] transition"
          >
            <img 
              src={m.image}
              alt={m.title}
              className="w-full  object-cover"
            />
            
            <h3 className="font-bold text-center p-2 text-sm">
              {m.title}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
}
