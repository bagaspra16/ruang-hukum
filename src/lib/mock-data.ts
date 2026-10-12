// Mock data for the Ruang Hukum prototype

export const mockUser = {
  id: 'mock-user-id',
  full_name: 'Keisha Stephany Manik',
  email: 'keisha.manik@email.com',
  university: 'President University',
  major: 'Law (Corporate Law)',
  learning_goal: 'Become a corporate lawyer',
  streak_count: 5,
  points: 1250,
  subscription_status: 'free_trial' as const,
  subscription_expires_at: '2025-04-16T23:59:59.000Z',
};

export const mockModules = [
  {
    id: '1',
    title: 'Legal Science',
    slug: 'legal-science',
    description: 'Explore the foundation, concepts, and principles of law.',
    total_chapters: 4,
    estimated_duration: '3-4 hours',
    icon: 'Scale',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
  },
  {
    id: '2',
    title: 'Introduction to Law',
    slug: 'introduction-to-law',
    description: 'Learn the basics and general concepts of law.',
    total_chapters: 4,
    estimated_duration: '3-4 hours',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&q=80',
  },
  {
    id: '3',
    title: 'Criminal Law',
    slug: 'criminal-law',
    description: 'Understand the elements, procedures, and types of criminal law.',
    total_chapters: 4,
    estimated_duration: '4-5 hours',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=400&q=80',
  },
  {
    id: '4',
    title: 'Legal Clinic',
    slug: 'legal-clinic',
    description: 'Gain practical knowledge through real case studies and clinics.',
    total_chapters: 4,
    estimated_duration: '3-4 hours',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  },
  {
    id: '5',
    title: 'Legal Reasoning & Research Methodology',
    slug: 'legal-reasoning',
    description: 'Develop analytical and research skills in law.',
    total_chapters: 4,
    estimated_duration: '4-5 hours',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
  },
  {
    id: '6',
    title: 'Legal Industry & Career Preparation',
    slug: 'career-preparation',
    description: 'Learn about the legal industry, career paths, and professional skills.',
    total_chapters: 4,
    estimated_duration: '3-4 hours',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80',
  },
];

export const mockChapters: Record<string, Array<{
  id: string;
  module_id: string;
  chapter_number: number;
  title: string;
  description: string;
  duration: string;
  video_url: string;
  content_body: string;
  is_locked: boolean;
}>> = {
  'legal-science': [
    {
      id: 'ls-1',
      module_id: '1',
      chapter_number: 1,
      title: 'Meaning and Scope of Legal Science',
      description: 'An introduction to what legal science is, its scope, and its importance in the legal system.',
      duration: '15 min',
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      content_body: `Normative methods are approaches used in legal science to analyze, evaluate, and determine what the law should be. Unlike empirical methods, which focus on what happens in reality, normative methods focus on what ought to be based on values, principles, and legal norms.\n\nIn legal studies, normative methods help us understand the purpose of the law, assess the validity of legal rules, and provide a foundation for legal reasoning and decision-making.`,
      is_locked: false,
    },
    {
      id: 'ls-2',
      module_id: '1',
      chapter_number: 2,
      title: 'Legal Concepts and Terminology',
      description: 'Key legal terms and their meanings, which form the basic language of law.',
      duration: '20 min',
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      content_body: 'Understanding legal terminology is fundamental to legal practice...',
      is_locked: false,
    },
    {
      id: 'ls-3',
      module_id: '1',
      chapter_number: 3,
      title: 'Sources of Law',
      description: 'Primary and secondary sources of law, and how they are applied in practice.',
      duration: '20 min',
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      content_body: 'Sources of law include constitutions, statutes, regulations, and case law...',
      is_locked: false,
    },
    {
      id: 'ls-4',
      module_id: '1',
      chapter_number: 4,
      title: 'Normative Methods',
      description: 'Learn how law is studied and analyzed through normative methods.',
      duration: '25 min',
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      content_body: 'Normative legal methods are approaches used in legal science...',
      is_locked: false,
    },
  ],
};

// Generate chapters for other modules
['introduction-to-law', 'criminal-law', 'legal-clinic', 'legal-reasoning', 'career-preparation'].forEach(slug => {
  const titles: Record<string, string[]> = {
    'introduction-to-law': ['What is Law?', 'Functions of Law', 'Types of Law', 'Legal Systems of the World'],
    'criminal-law': ['Elements of Criminal Law', 'Types of Crimes', 'Criminal Procedure', 'Penalties and Sentencing'],
    'legal-clinic': ['Introduction to Legal Clinics', 'Client Counseling', 'Case Analysis', 'Legal Documentation'],
    'legal-reasoning': ['Deductive Legal Reasoning', 'Inductive Reasoning in Law', 'Analogical Reasoning', 'Legal Research Methods'],
    'career-preparation': ['Legal Profession Overview', 'Building Your Legal Career', 'Professional Ethics', 'Networking in Law'],
  };
  
  mockChapters[slug] = (titles[slug] || ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4']).map((title, i) => ({
    id: `${slug}-${i + 1}`,
    module_id: String(i + 2),
    chapter_number: i + 1,
    title,
    description: `Learn about ${title.toLowerCase()} and its applications.`,
    duration: `${15 + i * 5} min`,
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content_body: `This chapter covers ${title}...`,
    is_locked: i === 3,
  }));
});

export const mockQuizzes: Record<string, Array<{
  id: string;
  module_id: string;
  question: string;
  options: { key: string; text: string }[];
  correct_answer: string;
}>> = {
  'legal-science': [
    {
      id: 'q1',
      module_id: '1',
      question: 'What is the main purpose of legal science?',
      options: [
        { key: 'A', text: 'To study and analyze the rules, principles, and concepts of law.' },
        { key: 'B', text: 'To practice law in the courtroom.' },
        { key: 'C', text: 'To enforce legal decisions.' },
        { key: 'D', text: 'To focus on criminal punishment.' },
      ],
      correct_answer: 'A',
    },
    {
      id: 'q2',
      module_id: '1',
      question: 'Which of the following is a primary source of law?',
      options: [
        { key: 'A', text: 'Legal textbooks' },
        { key: 'B', text: 'Law journal articles' },
        { key: 'C', text: 'Constitutional provisions' },
        { key: 'D', text: 'Legal dictionaries' },
      ],
      correct_answer: 'C',
    },
    {
      id: 'q3',
      module_id: '1',
      question: 'What distinguishes normative methods from empirical methods in legal research?',
      options: [
        { key: 'A', text: 'Normative methods focus on what the law is in reality.' },
        { key: 'B', text: 'Normative methods focus on what the law ought to be.' },
        { key: 'C', text: 'Empirical methods are based on legal principles.' },
        { key: 'D', text: 'There is no difference between the two.' },
      ],
      correct_answer: 'B',
    },
    {
      id: 'q4',
      module_id: '1',
      question: 'Which concept refers to the body of rules that govern a community?',
      options: [
        { key: 'A', text: 'Justice' },
        { key: 'B', text: 'Ethics' },
        { key: 'C', text: 'Law' },
        { key: 'D', text: 'Morality' },
      ],
      correct_answer: 'C',
    },
    {
      id: 'q5',
      module_id: '1',
      question: 'Legal science is primarily concerned with:',
      options: [
        { key: 'A', text: 'The philosophical basis of punishment.' },
        { key: 'B', text: 'Systematic study of law as a set of norms and rules.' },
        { key: 'C', text: 'The history of ancient civilizations.' },
        { key: 'D', text: 'Economic theories of market behavior.' },
      ],
      correct_answer: 'B',
    },
  ],
  'introduction-to-law': [
    {
      id: 'itl-q1',
      module_id: '2',
      question: 'What is the primary function of law in society?',
      options: [
        { key: 'A', text: 'To generate government revenue' },
        { key: 'B', text: 'To maintain order and protect individual rights' },
        { key: 'C', text: 'To promote economic growth exclusively' },
        { key: 'D', text: 'To control religious practices' },
      ],
      correct_answer: 'B',
    },
    {
      id: 'itl-q2',
      module_id: '2',
      question: 'Common law systems are primarily based on:',
      options: [
        { key: 'A', text: 'Written codes and statutes only' },
        { key: 'B', text: 'Religious texts' },
        { key: 'C', text: 'Judicial precedents and case law' },
        { key: 'D', text: 'International treaties exclusively' },
      ],
      correct_answer: 'C',
    },
    {
      id: 'itl-q3',
      module_id: '2',
      question: 'Which term refers to the principle that no one is above the law?',
      options: [
        { key: 'A', text: 'Judicial review' },
        { key: 'B', text: 'Rule of Law' },
        { key: 'C', text: 'Separation of powers' },
        { key: 'D', text: 'Due process' },
      ],
      correct_answer: 'B',
    },
    {
      id: 'itl-q4',
      module_id: '2',
      question: 'What distinguishes public law from private law?',
      options: [
        { key: 'A', text: 'Public law involves relationships between private individuals' },
        { key: 'B', text: 'Private law is more important than public law' },
        { key: 'C', text: 'Public law governs relationships between individuals and the state' },
        { key: 'D', text: 'There is no meaningful distinction' },
      ],
      correct_answer: 'C',
    },
    {
      id: 'itl-q5',
      module_id: '2',
      question: 'Which of the following is an example of substantive law?',
      options: [
        { key: 'A', text: 'Rules of evidence' },
        { key: 'B', text: 'Court procedures' },
        { key: 'C', text: 'The elements of a crime' },
        { key: 'D', text: 'Filing deadlines' },
      ],
      correct_answer: 'C',
    },
  ],
  'criminal-law': [
    {
      id: 'cl-q1',
      module_id: '3',
      question: 'What are the two main elements of a crime?',
      options: [
        { key: 'A', text: 'Motive and opportunity' },
        { key: 'B', text: 'Actus reus and mens rea' },
        { key: 'C', text: 'Evidence and witnesses' },
        { key: 'D', text: 'Arrest and conviction' },
      ],
      correct_answer: 'B',
    },
    {
      id: 'cl-q2',
      module_id: '3',
      question: '"Mens rea" in criminal law refers to:',
      options: [
        { key: 'A', text: 'The physical act of committing a crime' },
        { key: 'B', text: 'The guilty mind or criminal intent' },
        { key: 'C', text: 'The victim\'s testimony' },
        { key: 'D', text: 'The punishment prescribed by law' },
      ],
      correct_answer: 'B',
    },
    {
      id: 'cl-q3',
      module_id: '3',
      question: 'Which standard of proof applies in criminal cases?',
      options: [
        { key: 'A', text: 'Preponderance of evidence' },
        { key: 'B', text: 'Clear and convincing evidence' },
        { key: 'C', text: 'Beyond reasonable doubt' },
        { key: 'D', text: 'Probable cause' },
      ],
      correct_answer: 'C',
    },
    {
      id: 'cl-q4',
      module_id: '3',
      question: 'Which of the following is a valid defense in criminal law?',
      options: [
        { key: 'A', text: 'Self-defense' },
        { key: 'B', text: 'Poverty' },
        { key: 'C', text: 'Peer pressure' },
        { key: 'D', text: 'Ignorance of the law' },
      ],
      correct_answer: 'A',
    },
    {
      id: 'cl-q5',
      module_id: '3',
      question: 'What is the purpose of criminal sanctions?',
      options: [
        { key: 'A', text: 'Only to rehabilitate offenders' },
        { key: 'B', text: 'Only to compensate victims' },
        { key: 'C', text: 'To deter, punish, and rehabilitate' },
        { key: 'D', text: 'Only to protect law enforcement officers' },
      ],
      correct_answer: 'C',
    },
  ],
};

// Generate quizzes for remaining modules
['legal-clinic', 'legal-reasoning', 'career-preparation'].forEach(slug => {
  mockQuizzes[slug] = [
    {
      id: `${slug}-q1`,
      module_id: slug,
      question: `Sample question 1 for ${slug.replace(/-/g, ' ')}?`,
      options: [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
      ],
      correct_answer: 'A',
    },
    {
      id: `${slug}-q2`,
      module_id: slug,
      question: `Sample question 2 for ${slug.replace(/-/g, ' ')}?`,
      options: [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
      ],
      correct_answer: 'B',
    },
    {
      id: `${slug}-q3`,
      module_id: slug,
      question: `Sample question 3 for ${slug.replace(/-/g, ' ')}?`,
      options: [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
      ],
      correct_answer: 'C',
    },
    {
      id: `${slug}-q4`,
      module_id: slug,
      question: `Sample question 4 for ${slug.replace(/-/g, ' ')}?`,
      options: [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
      ],
      correct_answer: 'A',
    },
    {
      id: `${slug}-q5`,
      module_id: slug,
      question: `Sample question 5 for ${slug.replace(/-/g, ' ')}?`,
      options: [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' },
      ],
      correct_answer: 'D',
    },
  ];
});

export const mockExpertContent = [
  {
    id: '1',
    title: 'The Importance of Legal Reasoning in Modern Law',
    category: 'Articles',
    author: 'Prof. Dr. Sari Winata',
    published_date: '2025-04-12',
    content_body: `Legal reasoning is the foundation of the legal system. It helps judges, lawyers, and other legal professionals interpret the law, analyze facts, and reach fair and just decisions. Without solid legal reasoning, the application of the law can become arbitrary and inconsistent. In today's complex society, legal reasoning is more important than ever, as it ensures that the law adapts to new challenges while still upholding justice and the rule of law.

## What is Legal Reasoning?

Legal reasoning refers to the process of analyzing legal rules, principles, and facts to arrive at a conclusion. It involves logical thinking, interpretation of laws, and the use of legal arguments to support a decision. There are several types of legal reasoning, including deductive, inductive, and analogical reasoning, each with its own role in legal analysis.

## Why It Matters in Modern Law

1. **Ensures Fairness** – Helps prevent bias and ensures that decisions are based on clear legal principles.
2. **Provides Consistency** – Maintains uniformity in the application of the law.
3. **Adapts to Change** – Allows the legal system to respond to new social, technological, and economic developments.
4. **Builds Public Trust** – Strengthens confidence in the justice system and legal institutions.`,
    read_time: '8 min read',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
    tags: ['Legal Reasoning', 'Modern Law', 'Justice'],
  },
  {
    id: '2',
    title: 'Understanding Criminal Law: Key Concepts and Applications',
    category: 'Videos',
    author: 'Dr. Andi Setiawan',
    published_date: '2025-04-08',
    content_body: 'A comprehensive video guide covering criminal law fundamentals...',
    read_time: '10 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    tags: ['Criminal Law', 'Legal Education'],
  },
  {
    id: '3',
    title: 'Legal Career Paths: Insights from Young Practitioners',
    category: 'Expert Talks',
    author: 'Rizky Pratama, S.H.',
    published_date: '2025-04-03',
    content_body: 'Real stories and advice from young legal professionals who have successfully built their careers...',
    read_time: '12 min read',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    tags: ['Career', 'Legal Profession'],
  },
  {
    id: '4',
    title: 'The Role of the Constitution in Protecting Citizens\' Rights',
    category: 'Articles',
    author: 'Dr. Maya Lestari',
    published_date: '2025-03-28',
    content_body: 'How the constitution serves as the foundation of justice and democracy...',
    read_time: '6 min read',
    image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=800&q=80',
    tags: ['Constitutional Law', 'Human Rights'],
  },
  {
    id: '5',
    title: 'A Landmark Case: Constitutional Review in Indonesia',
    category: 'Case Studies',
    author: 'Prof. Dr. Budi Santoso',
    published_date: '2025-03-22',
    content_body: 'An in-depth look at a key constitutional case and its impact on the legal system...',
    read_time: '15 min read',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    tags: ['Case Study', 'Constitutional Review'],
  },
  {
    id: '6',
    title: 'The Future of the Legal Industry: Trends and Opportunities',
    category: 'Expert Talks',
    author: 'Dimas Aditya, S.H.',
    published_date: '2025-03-15',
    content_body: 'How technology and globalization are shaping the legal profession...',
    read_time: '8 min read',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    tags: ['Legal Tech', 'Future of Law'],
  },
];

export const mockProgress = {
  overall_percentage: 62,
  completed_chapters: 5,
  total_chapters: 8,
  total_hours: '4h 32m',
  quizzes_taken: 4,
  average_score: 80,
  streak_days: 5,
  points: 1250,
  modules: [
    { slug: 'legal-science', name: 'Legal Science', completed: 5, total: 8, status: 'Completed', last_accessed: '12 Apr 2025' },
    { slug: 'introduction-to-law', name: 'Introduction to Law', completed: 3, total: 5, status: 'In Progress', last_accessed: '10 Apr 2025' },
    { slug: 'criminal-law', name: 'Criminal Law', completed: 1, total: 5, status: 'In Progress', last_accessed: '8 Apr 2025' },
    { slug: 'legal-clinic', name: 'Legal Clinic', completed: 0, total: 5, status: 'Not Started', last_accessed: '-' },
    { slug: 'legal-reasoning', name: 'Legal Reasoning and Research Methodology', completed: 0, total: 5, status: 'Not Started', last_accessed: '-' },
    { slug: 'career-preparation', name: 'Legal Industry & Career Preparation', completed: 0, total: 5, status: 'Not Started', last_accessed: '-' },
  ],
  recent_quizzes: [
    { chapter: 'Chapter 4 – Normative Methods', module: 'Legal Science', date: '10 Apr 2025', score: 80 },
    { chapter: 'Chapter 2 – Legal Concepts', module: 'Introduction to Law', date: '10 Apr 2025', score: 60 },
    { chapter: 'Chapter 1 – Sources of Law', module: 'Legal Science', date: '8 Apr 2025', score: 100 },
    { chapter: 'Chapter 3 – Elements of Crime', module: 'Criminal Law', date: '3 Apr 2025', score: 70 },
    { chapter: 'Chapter 1 – Legal Clinic', module: 'Legal Clinic', date: '-', score: -1 },
  ],
};

export const mockAchievements = [
  { id: '1', name: 'First Chapter Completed', description: 'Completed Chapter 1 (Introduction to Legal Science)', date: '8 Apr 2025', icon: '📖', color: 'amber' },
  { id: '2', name: 'Quiz Champion', description: 'Scored 80% on your last quiz.', date: '8 Apr 2025', icon: '⭐', color: 'yellow' },
  { id: '3', name: 'Learning Streak', description: '3 days in a row', date: '8 Apr 2025', icon: '🔥', color: 'red' },
  { id: '4', name: 'Knowledge Seeker', description: 'Completed 5 chapters', date: '7 Apr 2025', icon: '📚', color: 'maroon' },
];
