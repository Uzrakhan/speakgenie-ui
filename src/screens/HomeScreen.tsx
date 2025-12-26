import { HeaderCard, PracticeAI, ActionButtonRow, AudioStories, PracticeHumans } from '../features/home'


export default function HomeScreen() {
  return (
    <>
      <HeaderCard />
      <ActionButtonRow />
      <AudioStories />
      <PracticeHumans />
      <PracticeAI />
    </>
  );
}
