import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    PlayerHeader,
    ArtworkCard,
    TrackInfo,
    QuizCTA,
    ProgressBar,
    PlayerControls,
} from '../features/player';
import { stories } from '../data/stories';

export default function PlayerScreen() {
    const { id } = useParams();
    const startIndex = stories.findIndex(s => s.id === Number(id))
    const [currentIndex, setCurrentIndex] = useState(startIndex === -1 ? 0 : startIndex);
    const [liked, setLiked] = useState(false);

    const currentStory = stories[currentIndex];

    return (
        <>
            <PlayerHeader />
            <ArtworkCard image={currentStory.image} />
            <TrackInfo 
                title={currentStory.title}
                description={currentStory.description}
                liked={liked}
                onLike={() => setLiked(!liked)}
            />
            <QuizCTA />
            <ProgressBar />
            <PlayerControls 
                onNext={() => 
                    setCurrentIndex((prev) => 
                        prev === stories.length - 1 ? 0 : prev + 1
                    )
                }
                onPrev={() => 
                    setCurrentIndex((prev) => 
                        prev === 0 ? stories.length - 1 : prev - 1
                    )
                }
            />
        </>
    )
}