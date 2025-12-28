📘 **SpeakGenie Frontend Internship — UI Assignment**

**A mobile-first responsive UI** built using **React, TypeScript, Tailwind CSS**, and React Router that recreates three key screens from the SpeakGenie web application:

✅ **Home / Dashboard**

✅ **Audio Story Player (Now Playing)**

✅ **Quiz Builder — “Craft a Custom Quiz”**

The goal of this project was to match the given UI screenshots as closely as possible while writing **clean, maintainable, and well-structured frontend code.**

-------

🌐 **Live Demo**

🔗 **Live Link**: https://speakgenie-ui-rust.vercel.app/

🔗 **GitHub Repo**: https://github.com/Uzrakhan/speakgenie-ui

**Best viewed on mobile or narrow browser widths first — but the UI also adapts gracefully to larger screens.**

-------
🛠 **Tech Stack**

1. React (Vite)

2. TypeScript

3. Tailwind CSS

4. React Router

5. React Icons

--------

📱 **Screens Implemented**
🏠 1. **Home Screen**

Includes:
• XP progress widget

• Action quick-access buttons

• AI Practice section

• Practice with Humans

• Audio Stories

------

🎧 2. **Audio Story Player — Now Playing**

Includes:
• Story artwork

• Title & description

• Like button

• Progress bar

• Player controls (prev / play-pause / next)

• CTA to generate a quiz

-------

📚 3. **Learn Tab (Modules & Tools Screen)**

**This is the screen that appears after tapping Learn in the bottom nav.**

It includes:

✔ Header with Learn tab title

✔ Multiple learning modules + tools

✔ Cards such as:

• Quiz Generator

• AI Practice

• Learning tools


✔ Mobile-first scrolling

✔ Responsive layout for laptop

✔ Tap navigation into Quiz Builder

This page was designed to look **clean and uncluttered**, matching the tone of SpeakGenie’s UX for school-age learners.

-----------

🧠 4. **Quiz Builder — “Craft a Custom Quiz”**

This is the **two-step quiz creation flow:**

**Step 1 — Choose a topic**

✔ Text input with live **character counter (max 60)**

✔ Suggested topic chips

✔ Click to auto-fill

✔ Active selection styling

**Step 2 — Select difficulty level**

✔ Three difficulty options

✔ Custom icons per level

✔ Highlighted state on selection

✔ Explanation caption per difficulty

**Sticky CTA**

✔ **Generate Quiz** button stays fixed at the bottom

✔ Disabled until valid input

✔ Matches the original app behavior & UI


-------

🧩 **Project Structure**
src/
├── components/
│   ├── ActionButton.tsx
│   ├── BottomNav.tsx
│   └── SectionTitle.tsx
│
├── data/
│   └── stories.ts
│
├── features/
│   ├── home/
│   │   ├── ActionButtonRow.tsx
│   │   ├── AudioStories.tsx
│   │   ├── HeaderCard.tsx
│   │   ├── index.tsx
│   │   ├── PracticeAI.tsx
│   │   ├── PracticeCard.tsx
│   │   ├── PracticeHumans.tsx
│   │   └── XPCard.tsx
│   │
│   └── player/
│       ├── ArtworkCard.tsx
│       ├── index.tsx
│       ├── PlayerControls.tsx
│       ├── PlayerHeader.tsx
│       ├── ProgressBar.tsx
│       ├── QuizCTA.tsx
│       └── TrackInfo.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── LearnScreen.tsx
│   ├── PlayerScreen.tsx
│   └── QuizScreen.tsx
│
├── App.css
├── App.tsx
├── index.css
└── main.tsx

Built with reusable, composable components.

----------

📐 **Responsive Design Approach**

This project was designed **mobile-first:**

✔ Horizontal scroll on sections like **Practice with Humans**

✔ Cards scale up on tablet/laptop

✔ Content rows centered visually on larger screens

✔ Bottom navigation stays fixed (hidden on player + quiz)

✔ Layout does **not break — it degrades gracefully**


This matches SpeakGenie’s real product, which prioritizes young learners on mobile while staying usable on desktop.

-----------

🧠 **State & Interactivity**

1. **useState** for UI state (likes, selections, navigation)

2. **useNavigate** + params for routing

3. Controlled inputs with validation

4. Disabled buttons until form valid

5. Story navigation state machine


---------

🧪 **How to Run Locally**

git clone <repo>

cd <repo>

npm install

npm run dev


-------

🧼 **Code Quality Practices**

✔ TypeScript props typing

✔ Meaningful component decomposition

✔ Descriptive naming

✔ Consistent Tailwind utility patterns

✔ Small, single-responsibility UI pieces

✔ Accessibility-minded (alt text, readable contrast)


----------

📊 **Product Feedback (Attached PDF)**

A separate Product Feedback Document is included, covering:

✨ What works well

🚧 Where learners may face friction

💡 Suggested UX improvements

🎯 Feature opportunities


Written from the lens of a frontend + product-thinking mindset.

-----------


🚀 **Possible Future Enhancements**

If extended, I would add:

🔹 Real API integration

🔹 Audio state persistence

🔹 Toast notifications

🔹 Accessibility passes

🔹 Unit tests

🔹 Animation polish

🔹 Real quiz engine

🔹 Loading skeletons


----------

🙋‍♀️ **About Me**

I’m **Uzra Khan**, a **frontend-focused developer** who enjoys building clean and intuitive UI using React & Tailwind — especially in meaningful spaces like **education + AI**.
