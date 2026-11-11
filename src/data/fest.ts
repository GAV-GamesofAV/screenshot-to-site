/**
 * ============================================================
 *  CHEMISTRECREATE — EDIT ALL FESTIVAL CONTENT HERE
 * ============================================================
 *  Every piece of text on the website comes from this file.
 *  Replace the placeholder values ("To be announced", "Event 1", …)
 *  with the real details when they are confirmed.
 *
 *  Links: leave a link as "" (empty) until it is ready —
 *  the site will show a "coming soon" state instead of a broken link.
 */

export const club = {
  name: "Chemistrecreate",
  motto: "Experimentalis Doctrina",
  clubLabel: "The Chemistry Club",
  school: "School name to be added",
  schoolAddress: "School address to be added",
};

export const fest = {
  edition: "Chem Connect 6.0",
  tagline: "Where Chemistry Comes Alive.",
  intro:
    "The annual chemistry festival of the Chemistrecreate Chemistry Club — a celebration of experiments, ideas and curious minds. Full details are on their way.",
  dates: "Dates to be announced",
  venue: "Venue to be announced",
};

export const about = {
  heading: "A festival built on curiosity",
  paragraphs: [
    "Chemistrecreate is the Chemistry Club of our school. Guided by our motto, Experimentalis Doctrina — learning through experiment — we bring chemistry out of the textbook and into the hands of students.",
    "Our annual festival is where that spirit comes together: a day of competitions, hands-on experiments, exhibitions and activities for everyone who is curious about how the world works.",
    "Replace this text with the club's own story, the festival's history and what this year's edition is about.",
  ],
  facts: [
    { label: "Edition", value: "Chem Connect 6.0" },
    { label: "Dates", value: "To be announced" },
    { label: "Venue", value: "To be announced" },
  ],
};

export type EventCategory = "Competition" | "Activity" | "Experiment" | "Exhibition";

export const eventCategories: { id: EventCategory; label: string; symbol: string; blurb: string }[] = [
  { id: "Competition", label: "Competitions", symbol: "Cp", blurb: "Test your knowledge and skill." },
  { id: "Activity", label: "Activities", symbol: "Ac", blurb: "Play, solve and participate." },
  { id: "Experiment", label: "Experiments", symbol: "Ex", blurb: "Hands-on chemistry, live." },
  { id: "Exhibition", label: "Exhibitions", symbol: "Eh", blurb: "Projects, models and displays." },
];

export type FestEvent = {
  name: string;
  category: EventCategory;
  time: string;
  venue: string;
  description: string;
};

/** Placeholder events — mirror the six slots on the poster. Edit freely. */
export const events: FestEvent[] = [
  { name: "Event 1", category: "Competition", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 2", category: "Competition", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 3", category: "Activity", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 4", category: "Experiment", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 5", category: "Experiment", time: "Time", venue: "Venue TBA", description: "Description to be added." },
  { name: "Event 6", category: "Exhibition", time: "Time", venue: "Venue TBA", description: "Description to be added." },
];

export type ScheduleDay = {
  day: string;
  date: string;
  slots: { time: string; title: string; location: string }[];
};

export const schedule: ScheduleDay[] = [
  {
    day: "Day 1",
    date: "Date to be announced",
    slots: [
      { time: "Time TBA", title: "Event 1", location: "Location TBA" },
      { time: "Time TBA", title: "Event 2", location: "Location TBA" },
      { time: "Time TBA", title: "Event 3", location: "Location TBA" },
    ],
  },
  {
    day: "Day 2",
    date: "Date to be announced",
    slots: [
      { time: "Time TBA", title: "Event 4", location: "Location TBA" },
      { time: "Time TBA", title: "Event 5", location: "Location TBA" },
      { time: "Time TBA", title: "Event 6", location: "Location TBA" },
    ],
  },
];

export const importantInfo: { label: string; value: string }[] = [
  { label: "Reporting time", value: "To be announced" },
  { label: "Venue", value: "To be announced" },
  { label: "What to bring", value: "To be announced" },
  { label: "Dress code", value: "To be announced" },
];

/** Shown as periodic-table tiles. */
export const attractions: { number: number; symbol: string; name: string; description: string }[] = [
  { number: 1, symbol: "A1", name: "Attraction 1", description: "Details to be announced." },
  { number: 2, symbol: "A2", name: "Attraction 2", description: "Details to be announced." },
  { number: 3, symbol: "A3", name: "Attraction 3", description: "Details to be announced." },
  { number: 4, symbol: "A4", name: "Attraction 4", description: "Details to be announced." },
];

export const registration = {
  /** Paste the registration form link here, e.g. "https://forms.gle/…". */
  url: "",
  heading: "Join the reaction",
  text: "Registrations for Chem Connect 6.0 will open soon. Details on eligibility, team size and deadlines will be shared here.",
  details: [
    { label: "Opens", value: "To be announced" },
    { label: "Deadline", value: "To be announced" },
    { label: "Eligibility", value: "To be announced" },
    { label: "Team size", value: "To be announced" },
  ],
};

export type Person = { name: string; role: string; email?: string; phone?: string };

export const contacts = {
  /** Leave email / phone empty until confirmed. */
  clubEmail: "",
  clubPhone: "",
  faculty: [
    { name: "Faculty coordinator", role: "Name to be added" },
    { name: "Faculty coordinator", role: "Name to be added" },
  ] as Person[],
  students: [
    { name: "Student coordinator", role: "Name to be added" },
    { name: "Student coordinator", role: "Name to be added" },
    { name: "Student coordinator", role: "Name to be added" },
  ] as Person[],
};

/** Add social links like { label: "Instagram", url: "https://instagram.com/…" }. Empty = hidden. */
export const socials: { label: "Instagram" | "YouTube" | "Facebook" | "Website" | "X"; url: string }[] = [];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "schedule", label: "Schedule" },
  { id: "attractions", label: "Attractions" },
  { id: "register", label: "Register" },
  { id: "contact", label: "Contact" },
] as const;
