export interface Post {
  slug: string;
  title: string;
  date: string; // ISO
  readingMinutes: number;
  tag: string;
  excerpt: string;
  body: string[]; // paragraphs
}

export const posts: Post[] = [
  {
    slug: "the-quiet-interface",
    title: "The Quiet Interface",
    date: "2026-04-12",
    readingMinutes: 4,
    tag: "Craft",
    excerpt:
      "Most software shouts. The best of it whispers. A short defence of restraint as a design strategy.",
    body: [
      "There's a recognisable look to interfaces designed by people who want to be noticed: dense, gradient-heavy, animated for the screenshot. They photograph well. They onboard poorly.",
      "The interfaces I keep using — and the ones I find myself defending in design crits — share a different quality. They're quiet. They sit politely behind the work. They don't compete with the content for attention, because the content is the point.",
      "Restraint isn't the absence of design. It's the hardest design move there is. Anyone can add. Subtraction requires a point of view.",
      "When I'm reviewing a screen, the question I keep coming back to is: what would happen if we removed this? Half the time, the answer is nothing — and the screen gets stronger for the cut.",
    ],
  },
  {
    slug: "design-systems-are-treaties",
    title: "Design Systems Are Treaties",
    date: "2026-02-28",
    readingMinutes: 6,
    tag: "Systems",
    excerpt:
      "After shipping four design systems, I've come to believe the Figma file is the easy part. The hard part is the politics.",
    body: [
      "Every design system I've worked on has eventually run into the same wall: the system is fine, the components are fine, but two teams refuse to use them in the same way.",
      "The temptation is to write more documentation. To add more lint rules. To force compliance through process. None of it works for long. Systems are adopted, not enforced.",
      "What works is treating the system like a treaty between teams: negotiated, mutually beneficial, occasionally renewed. The components are the artifacts of an agreement. Without the agreement, the components are just suggestions.",
      "If you're starting a design system, spend less time on tokens and more time talking to the engineers who'll use it. The library is downstream of the relationship.",
    ],
  },
  {
    slug: "the-90-second-test",
    title: "The 90-Second Test",
    date: "2025-11-04",
    readingMinutes: 3,
    tag: "Process",
    excerpt:
      "A simple heuristic for cutting features: if it doesn't earn its place in the first ninety seconds, it doesn't ship.",
    body: [
      "When I joined Quill we had a feature list with forty-three items. We launched with eleven. The cuts came from a single question: does this earn its place in the first ninety seconds of a new user's session?",
      "Ninety seconds is roughly the amount of time a curious person will give a new tool before deciding whether to keep going. Anything that doesn't show up in that window — or worse, gets in the way of the thing they came for — is a future feature, not a launch feature.",
      "This isn't a rule. It's a forcing function. Most teams know which features are weak; what they lack is a clean reason to cut them. Ninety seconds gives you one.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
