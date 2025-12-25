import ActionButtonRow from "./components/ActionButtonRow";
import AudioStories from "./components/AudioStories";
import HeaderCard from "./components/HeaderCard";
import PracticeHumans from "./components/PracticeHumans";
import PracticeAI from "./components/PracticeAI";
import BottomNav from "./components/BottomNav";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pb-24">
        {/* We will put screens here */}
        <HeaderCard />
        <ActionButtonRow />
        <AudioStories />
        <PracticeHumans />
        <PracticeAI />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
