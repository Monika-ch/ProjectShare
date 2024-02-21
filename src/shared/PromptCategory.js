// Function to generate a unique ID
function generateId(title) {
  // Get the first character of each word in the title
  let initials = title.split(" ").map((word) => word[0]);

  // Randomly convert each initial to uppercase or lowercase
  initials = initials
    .map((char) =>
      Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");

  // Generate a random 3-digit number
  let randomNumber = Math.floor(Math.random() * 900) + 100;

  // Combine the initials and the random number to form the ID
  return initials + randomNumber;
}

export const PROMPT_CATEGORY = [
  {
    id: generateId("Work & Productivity"),
    title: "Work & Productivity",
    subtext:
      "Prompts that help users increase their productivity at work. This could include generating ideas for blog posts, creating a list of keywords for a marketing campaign, or writing a product description for an e-commerce store.",
  },
  {
    id: generateId("Education & Learning"),
    title: "Education & Learning",
    subtext:
      "Prompts that assist users in their learning journey. This could involve generating a list of resources for learning a new skill or subject, or creating a study plan.",
  },
  {
    id: generateId("Career Guidance"),
    title: "Career Guidance",
    subtext:
      "Prompts that provide career advice. This could include generating a template for a resume or crafting a compelling elevator pitch for a job.",
  },
  {
    id: generateId("Programming & Debugging"),
    title: "Programming & Debugging",
    subtext:
      "Prompts that assist users with coding. This could involve generating code snippets, providing solutions to common programming problems, or helping debug errors.",
  },
  {
    id: generateId("Planning & Organization"),
    title: "Planning & Organization",
    subtext:
      "Prompts that help users plan various aspects of their life. This could include planning a trip, organizing a daily schedule, or setting personal goals.",
  },
  {
    id: generateId("Creative Writing"),
    title: "Creative Writing",
    subtext:
      "Prompts that stimulate creativity. This could involve generating a story based on a given theme, writing a poem, or coming up with ideas for a novel.",
  },
  {
    id: generateId("Health & Fitness"),
    title: "Health & Fitness",
    subtext:
      "Prompts that provide information or advice on health and fitness. This could include generating a workout plan, providing tips for a healthy diet, or answering questions about specific health concerns.",
  },
  {
    id: generateId("Personal Growth"),
    title: "Personal Growth",
    subtext:
      "Prompts that assist users in their personal development journey. This could involve generating a list of self-improvement books to read, providing tips for improving communication skills, or offering advice on building good habits.",
  },
  {
    id: generateId("Entertainment"),
    title: "Entertainment",
    subtext:
      "Prompts that provide entertainment. This could involve generating jokes, creating trivia questions, or writing a short story.",
  },
  {
    id: generateId("Mindfulness & Well-being"),
    title: "Mindfulness & Well-being",
    subtext:
      "Prompts that assist users in their mindfulness and well-being journey. This could involve generating a 500-word article on the benefits of mindfulness, providing tips for stress management, or offering advice on maintaining work-life balance.",
  },
];
