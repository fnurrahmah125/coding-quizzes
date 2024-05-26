interface Features {
  id: number;
  heading: string;
  content: string[];
}

export const features: Features[] = [
  {
    id: 1,
    heading: "Wide Range of Topics",
    content: [
      "Programming Languages: Python, JavaScript, Java, C++, and more.",
      "Algorithms and Data Structures: Sorting, searching, dynamic programming, and more.",
      "Web Development: HTML, CSS, JavaScript, frameworks.",
      "Database Management: SQL, NoSQL, database design.",
    ],
  },
  {
    id: 2,
    heading: "Customizable Quizzes",
    content: [
      "Create your own quizzes and challenge your friends.",
      "Adjust difficulty levels to match your learning pace.",
    ],
  },
  {
    id: 3,
    heading: "Gamified Experience",
    content: [
      "Earn badges and rewards as you complete quizzes.",
      "Climb the leaderboard and compete with peers worldwide.",
    ],
  },
  {
    id: 4,
    heading: "Mobile Friendly",
    content: [
      "Sync your progress across devices.",
      "Access quizzes on the go with our mobile-friendly design.",
    ],
  },
];
