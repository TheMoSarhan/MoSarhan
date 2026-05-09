export interface Project {
  slug: string;
  n: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  client: string;
  role: string;
  team: string[];
  duration: string;
  deliverables: string[];
  context: string;
  challenge: string;
  approach: string[];
  outcomes: { metric: string; label: string }[];
  reflection: string;
  next?: string; // slug of next project
}

export const projects: Project[] = [
  {
    slug: "northwind-banking",
    n: "01",
    title: "Northwind Banking",
    tag: "Fintech · Product Design",
    year: "2025",
    blurb: "Re-imagined the core onboarding for a challenger bank in MENA, lifting day-30 retention by 38%.",
    client: "Northwind (private)",
    role: "Lead Product Designer",
    team: ["1 PM", "3 Engineers", "1 Researcher"],
    duration: "14 weeks",
    deliverables: [
      "End-to-end onboarding flow (iOS, Android, Web)",
      "KYC + liveness UX",
      "Component contributions to the design system",
      "Localized Arabic-first experience",
    ],
    context:
      "Northwind launched into a crowded MENA market with a strong brand but a leaky funnel. 47% of users who downloaded the app never completed account opening — and most dropped at the document-capture step.",
    challenge:
      "Cut onboarding drop-off without compromising on regulatory KYC requirements, in a region where document quality and connectivity vary wildly.",
    approach: [
      "Shadowed 18 first-time users in three cities to map the real flow, not the spec.",
      "Re-sequenced KYC so users start with the smallest commitment (phone + name) and earn into harder steps.",
      "Designed a forgiving document-capture experience: edge detection, retake hints, offline queue.",
      "Localised the flow Arabic-first, then mirrored to English — not the other way around.",
    ],
    outcomes: [
      { metric: "+38%", label: "Day-30 retention" },
      { metric: "−54%", label: "Drop at KYC step" },
      { metric: "4.7★", label: "App Store rating" },
      { metric: "2.3min", label: "Median time to fund" },
    ],
    reflection:
      "The biggest win wasn't a screen — it was a sequencing change. Onboarding is a psychological contract, not a form.",
    next: "atlas-health",
  },
  {
    slug: "atlas-health",
    n: "02",
    title: "Atlas Health",
    tag: "Healthcare · Design System",
    year: "2024",
    blurb: "Built a unified design system spanning patient, clinician, and admin surfaces across web and mobile.",
    client: "Atlas Health Group",
    role: "Lead Designer & Systems Architect",
    team: ["2 Designers", "6 Engineers", "1 Accessibility specialist"],
    duration: "9 months",
    deliverables: [
      "Cross-platform design system (Figma + React + SwiftUI)",
      "Accessibility documentation (WCAG 2.2 AA)",
      "Governance model and contribution workflow",
      "Migration playbook for 4 product teams",
    ],
    context:
      "Three product teams, three visual languages, one company. Engineering velocity was suffering and clinicians were learning a different UI on every screen.",
    challenge:
      "Unify four mature products into one coherent system without freezing roadmaps or breaking specialist clinical workflows.",
    approach: [
      "Audited 1,200+ components across products and reduced to 84 primitives.",
      "Co-designed tokens with engineering so handoff was a name, not a spec.",
      "Built tier-1 components (Inputs, Tables, Modals) first — the long tail can wait.",
      "Set up a contribution model so teams owned their corners of the system.",
    ],
    outcomes: [
      { metric: "−62%", label: "Time to ship a screen" },
      { metric: "100%", label: "WCAG 2.2 AA coverage" },
      { metric: "84", label: "Components, down from 1,200+" },
      { metric: "4", label: "Teams unified" },
    ],
    reflection:
      "A design system is a treaty between teams, not a Figma library. The hard work was the politics.",
    next: "helio-studio",
  },
  {
    slug: "helio-studio",
    n: "03",
    title: "Helio Studio",
    tag: "Brand · Identity",
    year: "2024",
    blurb: "Identity, motion language, and a Webflow site for a generative design studio in Berlin.",
    client: "Helio Studio",
    role: "Brand & Web Designer",
    team: ["1 Motion designer", "1 Developer"],
    duration: "6 weeks",
    deliverables: [
      "Wordmark + secondary marks",
      "Type system and motion principles",
      "Webflow site with custom GLSL shaders",
      "Brand guidelines",
    ],
    context:
      "Helio is a small generative-design studio with strong work and zero brand presence. They needed an identity that matched the strangeness of what they make.",
    challenge:
      "Build an identity system that feels alive without becoming gimmicky — and that survives outside of a curated case study.",
    approach: [
      "Anchored the system on a single typographic idea: a serif that breaks its own rules.",
      "Designed the motion language before the static logo — movement first, mark second.",
      "Built the site in Webflow with custom shader backgrounds, no JS bloat.",
      "Wrote the brand book like a pocket manifesto, not a corporate doc.",
    ],
    outcomes: [
      { metric: "3×", label: "Inbound leads in Q1" },
      { metric: "98", label: "Lighthouse score" },
      { metric: "1", label: "Brand awarded by It's Nice That" },
      { metric: "0", label: "Stock assets used" },
    ],
    reflection:
      "Brand is the residue of a thousand small decisions. The logo got 5% of the attention.",
    next: "quill",
  },
  {
    slug: "quill",
    n: "04",
    title: "Quill",
    tag: "AI · 0→1",
    year: "2023",
    blurb: "Designed an AI writing tool from research to launch — now used by 60k+ writers monthly.",
    client: "Quill (YC W23)",
    role: "Founding Designer",
    team: ["2 Founders", "3 Engineers"],
    duration: "8 months (pre-seed → launch)",
    deliverables: [
      "End-to-end product design (web + desktop)",
      "Editor UX and inline AI interactions",
      "Brand identity and marketing site",
      "Onboarding flow and pricing page",
    ],
    context:
      "Writers were drowning in AI tools that wrote *for* them. Quill's bet: a tool that writes *with* you — and stays out of the way.",
    challenge:
      "Design an editor that makes AI feel like a collaborator, not an autocomplete dispenser, without overwhelming the page with controls.",
    approach: [
      "Studied 40 hours of writers using existing tools — most pain was in *interrupting* the writer's flow.",
      "Built the entire product around a single primitive: select text, ask a question.",
      "Designed an opinionated empty state — the blank page is the hardest UX problem in writing.",
      "Cut every feature that didn't earn its place in the first 90 seconds.",
    ],
    outcomes: [
      { metric: "60k+", label: "Monthly active writers" },
      { metric: "$1.4M", label: "ARR within 6 months" },
      { metric: "73%", label: "Day-7 retention" },
      { metric: "1", label: "Product Hunt #1 of the day" },
    ],
    reflection:
      "0→1 design is mostly subtraction. Every feature you ship is a feature you'll have to defend.",
    next: "northwind-banking",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
