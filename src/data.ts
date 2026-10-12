export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  methods: string[];
  limitations: string;
  codeUrl?: string;
  paperUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'vision-guided-robot-manipulation',
    number: '01',
    title: 'Vision-Guided Robot Manipulation',
    shortTitle: 'Robot manipulation',
    category: 'Robotics',
    summary: 'Connecting language-guided intent with visual observations for FR5 robot manipulation.',
    problem: 'How can a robot act on a task when its understanding must be grounded in what its camera observes?',
    approach: 'This ongoing project explores FR5 manipulation using vision-language models, segmentation, and camera observations.',
    methods: ['FR5 robot manipulation', 'Vision-language models', 'Segmentation', 'Camera observations'],
    limitations: 'Project-specific limitations have not been documented yet.',
  },
  {
    slug: 'facial-expression-analysis',
    number: '02',
    title: 'Facial Expression Analysis',
    shortTitle: 'Expression analysis',
    category: 'Computer vision',
    summary: 'Studying facial action-unit dynamics across different emotional conditions.',
    problem: 'Facial expressions unfold over time; this project focuses on how action-unit dynamics vary across emotional conditions.',
    approach: 'An ongoing analysis of facial action-unit dynamics across emotional conditions.',
    methods: ['Facial action units', 'Temporal dynamics', 'Emotional conditions'],
    limitations: 'Project-specific limitations have not been documented yet.',
  },
  {
    slug: 'worldripple',
    number: '03',
    title: 'WorldRipple',
    shortTitle: 'WorldRipple',
    category: 'Applied AI',
    summary: 'Exploring geopolitical early-warning signals through event data and temporal modeling.',
    problem: 'Geopolitical developments can emerge through changing patterns in event data over time.',
    approach: 'This ongoing project explores early-warning signals using event data and temporal modeling.',
    methods: ['Event data', 'Temporal modeling', 'Early-warning signals'],
    limitations: 'Project-specific limitations have not been documented yet.',
  },
];

export const categories = ['All', ...new Set(projects.map((project) => project.category))];

export const researchAreas = [
  'AI & applied machine learning',
  'Robot manipulation',
  'Computer vision',
  'Vision-language models',
];

export const journey = [
  { date: '', title: 'Research in AI Convergence', detail: 'PhD student at Kunsan National University, South Korea.' },
  { date: '', title: 'Global Korea Scholarship', detail: 'A GKS scholar, originally from India.' },
  { date: '', title: 'Based in Gunsan', detail: 'Building a research life in South Korea.' },
];
