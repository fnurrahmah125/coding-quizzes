interface Content {
  id: number;
  heading: string;
  description: string;
  icon: string;
}

export const content: Content[] = [
  {
    id: 1,
    heading: "Engaging Challenges",
    description:
      "Challenge your coding skills with our diverse range of quizzes, meticulously designed to cater to all proficiency levels. Whether you are just starting your coding journey or you are a seasoned programmer looking to refine your expertise, our quizzes offer something for everyone.",
    icon: "ri-sword-line mb-3 inline-block rounded-full bg-red-100 px-3 py-2 text-3xl text-red-500",
  },
  {
    id: 2,
    heading: "Real-time Feedback",
    description:
      "Receive instant, detailed feedback on your answers, including explanations for correct and incorrect choices, to help you understand the underlying concepts. This immediate response allows you to quickly identify and correct mistakes, reinforcing your learning and enabling you to improve your coding skills on the spot.",
    icon: "ri-time-line mb-3 inline-block rounded-full bg-green-100 px-3 py-2 text-3xl text-green-500",
  },
  {
    id: 3,
    heading: "Track Your Progress",
    description:
      "Track your development with our comprehensive progress tracking system, which provides detailed insights into your performance. Compare your scores, see areas for improvement, and measure your skills against a global community of coders. This feature allows you to understand your strengths, identify areas for improvement, and stay motivated as you climb the leaderboard and achieve new milestones.",
    icon: "ri-task-line mb-3 inline-block rounded-full bg-violet-100 px-3 py-2 text-3xl text-violet-500",
  },
  {
    id: 4,
    heading: "Community Support",
    description:
      "Absolutely! Our vibrant community of coders is here to support you every step of the way. Share your quiz results and coding achievements, engage in meaningful discussions, seek advice, and collaborate on projects. Learn from the experiences and insights of fellow coders, and contribute your own knowledge to help others grow. Whether you’re a beginner or a seasoned pro, you’ll find a welcoming and resourceful community ready to assist and inspire you on your coding journey.",
    icon: "ri-community-line mb-3 inline-block rounded-full bg-blue-100 px-3 py-2 text-3xl text-blue-500",
  },
];
