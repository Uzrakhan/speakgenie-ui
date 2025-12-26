import SectionTitle from "../../components/SectionTitle";

export default function PracticeAI() {
  const ai = [
    { id: 1, label: "Doraemon", image: "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/Practice%20with%20Ai/Doremon.jpg" },
    { id: 2, label: "Spiderman", image: "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/Practice%20with%20Ai/Spiderman.jpg" },
    { id: 3, label: "Shinchan", image: "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/Practice%20with%20Ai/ShinChan.jpg" },
    { id: 4, label: "Virat Kohli", image: "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/Practice%20with%20Ai/Kohili.jpg" },
    { id: 5, label: "Shashi Tharoor", image: "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/Practice%20with%20Ai/Shashi%20tharur.jpg" }
  ];

  const colors = [
    "bg-blue-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-green-100",
];


  return (
    <>
      <SectionTitle title="Practice with AI" />

      <div className="flex gap-3 overflow-x-auto px-4 mt-3 no-scrollbar">
        {ai.map((a, i) => (
            <div
            key={a.id}
            className={`rounded-2xl flex flex-col items-center min-w-[140px] shadow-sm border ${colors[i % colors.length]}`}
            >
            <div className="w-24 h-24 rounded-xl shadow flex items-center justify-center mt-3">
                <img
                src={a.image}
                alt={a.label}
                loading="lazy"
                className="w-20 h-20 object-contain"
                />
            </div>

            <p className="mt-2 mb-3 text-xs font-medium text-gray-800 text-center">
                Talk with {a.label}
            </p>
            </div>
        ))}
      </div>

    </>
  );
}
