export type Story = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const stories: Story[] = [
  {
    id: 1,
    title: "Prahlad – Inner Strength",
    description: "A tale of inner strength overcoming fear and adversity",
    image: "https://storage.googleapis.com/speakgenie-assets/images/stories/prahlad.png",
  },
  {
    id: 2,
    title: "Teamwork and Leadership",
    description: "Learn the importance of working together and leading with kindness",
    image: "https://storage.googleapis.com/speakgenie-assets/images/stories/teamwork%20and%20leadership.png",
  },
  {
    id: 3,
    title: "The Magic Pencil",
    description: "A magical adventure about creativity and imagination",
    image: "https://storage.googleapis.com/speakgenie-assets/images/stories/the%20magic%20pencil.png",
  },
  {
    id: 4,
    title: "The Melody of Friendship",
    description: "A heartwarming story about friendship and courage",
    image: "https://storage.googleapis.com/speakgenie-assets/images/stories/the%20melody%20of%20frendship%20and%20courage.png"
  },
  {
    id: 5,
    title: "The Monkey King",
    description: "A story of selflessness and helping others",
    image: "https://storage.googleapis.com/speakgenie-assets/images/stories/the%20monkey%20king.jpeg"
  },
  {
    id: 6,
    title: "The Wind and the Sun",
    description: "A classic fable about kindness and gentleness",
    image: "https://storage.googleapis.com/speakgenie-assets/images/stories/the%20wind%20and%20the%20sun.png"
  }
];
