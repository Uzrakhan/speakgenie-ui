import { Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from "./components/BottomNav";
import HomeScreen from "./screens/HomeScreen";
import PlayerScreen from './screens/PlayerScreen';
import LearnScreen from './screens/LearnScreen';
import QuizScreen from  './screens/QuizScreen';


function App() {
  const location = useLocation();
  const hideBottomNav = 
    location.pathname.startsWith("/player") ||
    location.pathname === "/learn/quiz";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pb-24">

        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/player/:id' element={<PlayerScreen />}/>
          <Route path='/learn' element={<LearnScreen />}/>
          <Route path='/learn/quiz' element={<QuizScreen />}/>
        </Routes>
        
      </div>

      {!hideBottomNav && <BottomNav />}
    </div>
  );
}

export default App;
