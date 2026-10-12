/**
 * Bilingual content data for Ruang Hukum.
 * Returns the same data structure as mock-data.ts but in the selected language.
 * Identical keys, different text values.
 */
import { Lang } from './translations';

// ─── Module Titles & Descriptions ────────────────────────────────────────────

export const moduleContent: Record<Lang, Array<{
  id: string;
  title: string;
  slug: string;
  description: string;
  total_chapters: number;
  estimated_duration: string;
  icon: string;
  image: string;
}>> = {
  en: [
    {
      id: '1', slug: 'legal-science', icon: 'Scale',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
      title: 'Legal Science',
      description: 'Explore the foundation, concepts, and principles of law.',
      total_chapters: 4, estimated_duration: '3-4 hours',
    },
    {
      id: '2', slug: 'introduction-to-law', icon: 'BookOpen',
      image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&q=80',
      title: 'Introduction to Law',
      description: 'Learn the basics and general concepts of law.',
      total_chapters: 4, estimated_duration: '3-4 hours',
    },
    {
      id: '3', slug: 'criminal-law', icon: 'Shield',
      image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=400&q=80',
      title: 'Criminal Law',
      description: 'Understand the elements, procedures, and types of criminal law.',
      total_chapters: 4, estimated_duration: '4-5 hours',
    },
    {
      id: '4', slug: 'legal-clinic', icon: 'Users',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
      title: 'Legal Clinic',
      description: 'Gain practical knowledge through real case studies and clinics.',
      total_chapters: 4, estimated_duration: '3-4 hours',
    },
    {
      id: '5', slug: 'legal-reasoning', icon: 'Search',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
      title: 'Legal Reasoning & Research Methodology',
      description: 'Develop analytical and research skills in law.',
      total_chapters: 4, estimated_duration: '4-5 hours',
    },
    {
      id: '6', slug: 'career-preparation', icon: 'Briefcase',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80',
      title: 'Legal Industry & Career Preparation',
      description: 'Learn about the legal industry, career paths, and professional skills.',
      total_chapters: 4, estimated_duration: '3-4 hours',
    },
  ],
  id: [
    {
      id: '1', slug: 'legal-science', icon: 'Scale',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
      title: 'Ilmu Hukum',
      description: 'Jelajahi fondasi, konsep, dan prinsip-prinsip dasar hukum.',
      total_chapters: 4, estimated_duration: '3-4 jam',
    },
    {
      id: '2', slug: 'introduction-to-law', icon: 'BookOpen',
      image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&q=80',
      title: 'Pengantar Hukum',
      description: 'Pelajari dasar-dasar dan konsep umum hukum.',
      total_chapters: 4, estimated_duration: '3-4 jam',
    },
    {
      id: '3', slug: 'criminal-law', icon: 'Shield',
      image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=400&q=80',
      title: 'Hukum Pidana',
      description: 'Pahami unsur-unsur, prosedur, dan jenis-jenis hukum pidana.',
      total_chapters: 4, estimated_duration: '4-5 jam',
    },
    {
      id: '4', slug: 'legal-clinic', icon: 'Users',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
      title: 'Klinik Hukum',
      description: 'Dapatkan pengetahuan praktis melalui studi kasus nyata dan klinik hukum.',
      total_chapters: 4, estimated_duration: '3-4 jam',
    },
    {
      id: '5', slug: 'legal-reasoning', icon: 'Search',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
      title: 'Penalaran Hukum & Metodologi Penelitian',
      description: 'Kembangkan kemampuan analitis dan penelitian di bidang hukum.',
      total_chapters: 4, estimated_duration: '4-5 jam',
    },
    {
      id: '6', slug: 'career-preparation', icon: 'Briefcase',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80',
      title: 'Industri Hukum & Persiapan Karier',
      description: 'Pelajari industri hukum, jalur karier, dan keterampilan profesional.',
      total_chapters: 4, estimated_duration: '3-4 jam',
    },
  ],
};

// ─── Chapter Content ──────────────────────────────────────────────────────────

type Chapter = {
  id: string; module_id: string; chapter_number: number;
  title: string; description: string; duration: string;
  video_url: string; content_body: string; is_locked: boolean;
};

const chaptersByLang: Record<Lang, Record<string, Chapter[]>> = {
  en: {
    'legal-science': [
      {
        id: 'ls-1', module_id: '1', chapter_number: 1, is_locked: false,
        title: 'Meaning and Scope of Legal Science',
        description: 'An introduction to what legal science is, its scope, and its importance in the legal system.',
        duration: '15 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Normative methods are approaches used in legal science to analyze, evaluate, and determine what the law should be. Unlike empirical methods, which focus on what happens in reality, normative methods focus on what ought to be based on values, principles, and legal norms.\n\nIn legal studies, normative methods help us understand the purpose of the law, assess the validity of legal rules, and provide a foundation for legal reasoning and decision-making.`,
      },
      {
        id: 'ls-2', module_id: '1', chapter_number: 2, is_locked: false,
        title: 'Legal Concepts and Terminology',
        description: 'Key legal terms and their meanings, which form the basic language of law.',
        duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Understanding legal terminology is fundamental to legal practice. Legal concepts such as "jurisdiction", "liability", "tort", and "due process" form the backbone of legal communication.\n\nMastering these terms allows you to read statutes, understand court decisions, and communicate clearly in a legal setting. Each term carries a precise meaning shaped by centuries of case law and legal scholarship.`,
      },
      {
        id: 'ls-3', module_id: '1', chapter_number: 3, is_locked: false,
        title: 'Sources of Law',
        description: 'Primary and secondary sources of law, and how they are applied in practice.',
        duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Sources of law include constitutions, statutes, regulations, and case law. Primary sources are the law itself — constitutions, legislation, and judicial opinions. Secondary sources explain or analyze the law — textbooks, law review articles, and legal encyclopedias.\n\nIn Indonesia, the primary sources of law include the 1945 Constitution (UUD 1945), laws enacted by the DPR, government regulations, and ministerial regulations, arranged in a hierarchical order.`,
      },
      {
        id: 'ls-4', module_id: '1', chapter_number: 4, is_locked: false,
        title: 'Normative Methods',
        description: 'Learn how law is studied and analyzed through normative methods.',
        duration: '25 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Normative legal methods are approaches used in legal science to analyze rules and norms. This method studies law as a set of norms that regulate society, focusing on "what the law says" rather than "what actually happens".\n\nThis approach involves examining legal texts, statutes, court decisions, and legal principles to understand the rights and obligations they create. Normative research is the most common method used in Indonesian legal scholarship.`,
      },
    ],
    'introduction-to-law': [
      { id: 'itl-1', module_id: '2', chapter_number: 1, is_locked: false, title: 'What is Law?', description: 'Understand the fundamental definition and nature of law.', duration: '15 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Law is a system of rules created and enforced by social or governmental institutions to regulate behavior. It shapes politics, economics, history, and society in countless ways and serves as the primary social mediator in relations between people.' },
      { id: 'itl-2', module_id: '2', chapter_number: 2, is_locked: false, title: 'Functions of Law', description: 'Explore the key social functions that law serves in society.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Law serves several vital functions: maintaining order and social stability, protecting individual rights and liberties, resolving disputes through legitimate processes, and promoting justice and equality within communities.' },
      { id: 'itl-3', module_id: '2', chapter_number: 3, is_locked: false, title: 'Types of Law', description: 'Distinguish between different categories and branches of law.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Law can be categorized in many ways: public law (constitutional, administrative, criminal) vs. private law (civil, commercial, family), substantive law vs. procedural law, and domestic law vs. international law.' },
      { id: 'itl-4', module_id: '2', chapter_number: 4, is_locked: false, title: 'Legal Systems of the World', description: 'Compare the major legal systems: civil law, common law, and mixed systems.', duration: '25 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'The world\'s major legal systems include civil law (based on codified statutes, prevalent in continental Europe and Indonesia), common law (based on judicial precedent, used in the UK and USA), Islamic law (Sharia), and mixed systems combining elements of these.' },
    ],
    'criminal-law': [
      { id: 'cl-1', module_id: '3', chapter_number: 1, is_locked: false, title: 'Elements of Criminal Law', description: 'Learn the essential elements that constitute a criminal act.', duration: '15 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Criminal law requires proof of two key elements: actus reus (the guilty act) and mens rea (the guilty mind). For most crimes, both must be present for criminal liability to attach.' },
      { id: 'cl-2', module_id: '3', chapter_number: 2, is_locked: false, title: 'Types of Crimes', description: 'Survey the major categories of crimes recognized in law.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Crimes are classified into felonies and misdemeanors, or categorized by type: crimes against persons (murder, assault), property crimes (theft, fraud), white-collar crimes, and public-order offenses.' },
      { id: 'cl-3', module_id: '3', chapter_number: 3, is_locked: false, title: 'Criminal Procedure', description: 'Follow the stages of a criminal case from arrest through sentencing.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Criminal procedure encompasses the rules governing the investigation, arrest, charging, trial, and sentencing of accused persons. Due process guarantees fairness at each stage.' },
      { id: 'cl-4', module_id: '3', chapter_number: 4, is_locked: false, title: 'Penalties and Sentencing', description: 'Understand the philosophy and practice of criminal sentencing.', duration: '25 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Sentencing aims to achieve deterrence, retribution, rehabilitation, and incapacitation. Judges consider factors like the nature of the offense, the offender\'s history, and mitigating or aggravating circumstances.' },
    ],
    'legal-clinic': [
      { id: 'lc-1', module_id: '4', chapter_number: 1, is_locked: false, title: 'Introduction to Legal Clinics', description: 'Overview of legal clinics and their role in legal education.', duration: '15 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Legal clinics provide hands-on experience in real or simulated legal work. Students develop practical skills by assisting real clients under faculty supervision, bridging theory and practice.' },
      { id: 'lc-2', module_id: '4', chapter_number: 2, is_locked: false, title: 'Client Counseling', description: 'Master the skills needed to effectively counsel and advise clients.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Effective client counseling involves active listening, clear communication, empathy, and the ability to translate complex legal issues into understandable advice. Establishing trust is foundational.' },
      { id: 'lc-3', module_id: '4', chapter_number: 3, is_locked: false, title: 'Case Analysis', description: 'Develop the skills to analyze legal cases systematically and thoroughly.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Case analysis requires identifying the key facts, legal issues, applicable rules, and arguments. The IRAC method (Issue, Rule, Application, Conclusion) is a structured framework for legal analysis.' },
      { id: 'lc-4', module_id: '4', chapter_number: 4, is_locked: false, title: 'Legal Documentation', description: 'Learn to draft, review, and manage key legal documents.', duration: '25 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Legal documentation includes contracts, pleadings, briefs, memoranda, and correspondence. Precision, clarity, and structure are essential. Even small errors in documents can have major legal consequences.' },
    ],
    'legal-reasoning': [
      { id: 'lr-1', module_id: '5', chapter_number: 1, is_locked: false, title: 'Deductive Legal Reasoning', description: 'Apply deductive logic to legal arguments and case analysis.', duration: '15 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Deductive reasoning moves from a general rule to a specific conclusion. In law, this typically means: (1) state the legal rule, (2) apply the rule to the facts, (3) reach a conclusion. This syllogistic approach is central to legal analysis.' },
      { id: 'lr-2', module_id: '5', chapter_number: 2, is_locked: false, title: 'Inductive Reasoning in Law', description: 'Use specific cases to build general legal principles.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Inductive reasoning moves from specific observations (cases) to general principles. In common law, judges build rules by examining patterns across multiple decisions, gradually forming legal doctrine.' },
      { id: 'lr-3', module_id: '5', chapter_number: 3, is_locked: false, title: 'Analogical Reasoning', description: 'Understand how analogies are used to resolve novel legal problems.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Analogical reasoning compares the current case to prior decisions or established principles. If the similarity is strong enough, the same rule applies. This is especially valuable when no direct precedent exists.' },
      { id: 'lr-4', module_id: '5', chapter_number: 4, is_locked: false, title: 'Legal Research Methods', description: 'Master the tools and techniques of effective legal research.', duration: '25 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Legal research involves finding and analyzing primary and secondary sources. Key skills include identifying relevant statutes, finding case law, using legal databases, and synthesizing information into coherent legal arguments.' },
    ],
    'career-preparation': [
      { id: 'cp-1', module_id: '6', chapter_number: 1, is_locked: false, title: 'Legal Profession Overview', description: 'Survey the diverse roles and sectors within the legal profession.', duration: '15 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'The legal profession includes private practice, government service, corporate legal departments, public interest law, and academia. Each path offers different work environments, compensation, and impact opportunities.' },
      { id: 'cp-2', module_id: '6', chapter_number: 2, is_locked: false, title: 'Building Your Legal Career', description: 'Practical strategies for launching and advancing your career in law.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Building a legal career requires internships, mentorship, developing a specialty, passing bar exams, and continuously updating your knowledge. A strong professional brand and network are invaluable assets.' },
      { id: 'cp-3', module_id: '6', chapter_number: 3, is_locked: false, title: 'Professional Ethics', description: 'Understand the ethical obligations that govern legal professionals.', duration: '20 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Legal ethics encompasses duties of confidentiality, loyalty, competence, and candor. Violations can result in disciplinary action, disbarment, or criminal liability. Ethics is fundamental to maintaining public trust in the legal system.' },
      { id: 'cp-4', module_id: '6', chapter_number: 4, is_locked: false, title: 'Networking in Law', description: 'Leverage professional relationships to grow your legal career.', duration: '25 min', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Networking is essential in law. Bar association events, alumni networks, LinkedIn, and informational interviews connect you with opportunities and mentors. Give as much as you receive — relationships are built on mutual value.' },
    ],
  },
  id: {
    'legal-science': [
      {
        id: 'ls-1', module_id: '1', chapter_number: 1, is_locked: false,
        title: 'Pengertian dan Ruang Lingkup Ilmu Hukum',
        description: 'Pengenalan tentang apa itu ilmu hukum, ruang lingkupnya, dan pentingnya dalam sistem hukum.',
        duration: '15 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Metode normatif adalah pendekatan yang digunakan dalam ilmu hukum untuk menganalisis, mengevaluasi, dan menentukan bagaimana seharusnya hukum itu. Berbeda dengan metode empiris yang berfokus pada apa yang terjadi di kenyataan, metode normatif berfokus pada apa yang seharusnya ada berdasarkan nilai-nilai, prinsip-prinsip, dan norma hukum.\n\nDalam studi hukum, metode normatif membantu kita memahami tujuan hukum, menilai validitas aturan hukum, dan memberikan dasar untuk penalaran hukum serta pengambilan keputusan.`,
      },
      {
        id: 'ls-2', module_id: '1', chapter_number: 2, is_locked: false,
        title: 'Konsep dan Terminologi Hukum',
        description: 'Istilah-istilah hukum penting dan maknanya, yang membentuk bahasa dasar hukum.',
        duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Memahami terminologi hukum merupakan hal yang mendasar dalam praktik hukum. Konsep-konsep hukum seperti "yurisdiksi", "tanggung jawab hukum", "perbuatan melawan hukum", dan "proses hukum yang semestinya" membentuk tulang punggung komunikasi hukum.\n\nMenguasai istilah-istilah ini memungkinkan Anda membaca peraturan perundang-undangan, memahami putusan pengadilan, dan berkomunikasi secara jelas dalam lingkungan hukum.`,
      },
      {
        id: 'ls-3', module_id: '1', chapter_number: 3, is_locked: false,
        title: 'Sumber-Sumber Hukum',
        description: 'Sumber hukum primer dan sekunder, serta bagaimana keduanya diterapkan dalam praktik.',
        duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Sumber-sumber hukum meliputi konstitusi, undang-undang, peraturan, dan yurisprudensi. Sumber hukum primer adalah hukum itu sendiri — konstitusi, perundang-undangan, dan putusan pengadilan. Sumber hukum sekunder menjelaskan atau menganalisis hukum — buku teks, artikel jurnal hukum, dan ensiklopedia hukum.\n\nDi Indonesia, sumber hukum primer meliputi UUD 1945, undang-undang yang dibentuk oleh DPR, peraturan pemerintah, dan peraturan menteri, yang disusun dalam urutan hierarki.`,
      },
      {
        id: 'ls-4', module_id: '1', chapter_number: 4, is_locked: false,
        title: 'Metode Normatif',
        description: 'Pelajari bagaimana hukum dipelajari dan dianalisis melalui metode normatif.',
        duration: '25 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        content_body: `Metode hukum normatif adalah pendekatan yang digunakan dalam ilmu hukum untuk menganalisis aturan dan norma. Metode ini mempelajari hukum sebagai seperangkat norma yang mengatur masyarakat, berfokus pada "apa yang dikatakan hukum" daripada "apa yang sebenarnya terjadi".\n\nPendekatan ini melibatkan pemeriksaan teks hukum, undang-undang, putusan pengadilan, dan prinsip-prinsip hukum untuk memahami hak dan kewajiban yang diciptakannya. Penelitian normatif adalah metode yang paling umum digunakan dalam keilmuan hukum Indonesia.`,
      },
    ],
    'introduction-to-law': [
      { id: 'itl-1', module_id: '2', chapter_number: 1, is_locked: false, title: 'Apa Itu Hukum?', description: 'Pahami definisi fundamental dan hakikat hukum.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Hukum adalah sistem aturan yang dibuat dan ditegakkan oleh lembaga sosial atau pemerintah untuk mengatur perilaku. Hukum membentuk politik, ekonomi, sejarah, dan masyarakat dengan berbagai cara, dan berfungsi sebagai mediator sosial utama dalam hubungan antar manusia.' },
      { id: 'itl-2', module_id: '2', chapter_number: 2, is_locked: false, title: 'Fungsi Hukum', description: 'Jelajahi fungsi-fungsi sosial utama yang diemban hukum dalam masyarakat.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Hukum menjalankan beberapa fungsi vital: menjaga ketertiban dan stabilitas sosial, melindungi hak dan kebebasan individu, menyelesaikan sengketa melalui proses yang sah, serta mempromosikan keadilan dan kesetaraan dalam masyarakat.' },
      { id: 'itl-3', module_id: '2', chapter_number: 3, is_locked: false, title: 'Jenis-Jenis Hukum', description: 'Bedakan kategori dan cabang-cabang hukum yang berbeda.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Hukum dapat dikategorikan dalam berbagai cara: hukum publik (tata negara, administrasi negara, pidana) vs. hukum privat (perdata, dagang, keluarga), hukum materiil vs. hukum formil, serta hukum nasional vs. hukum internasional.' },
      { id: 'itl-4', module_id: '2', chapter_number: 4, is_locked: false, title: 'Sistem Hukum di Dunia', description: 'Bandingkan sistem hukum utama: civil law, common law, dan sistem campuran.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Sistem hukum utama dunia meliputi civil law (berdasarkan kodifikasi undang-undang, berlaku di Eropa kontinental dan Indonesia), common law (berdasarkan preseden peradilan, digunakan di Inggris dan AS), hukum Islam (Syariah), dan sistem campuran yang menggabungkan unsur-unsur tersebut.' },
    ],
    'criminal-law': [
      { id: 'cl-1', module_id: '3', chapter_number: 1, is_locked: false, title: 'Unsur-Unsur Hukum Pidana', description: 'Pelajari unsur-unsur esensial yang membentuk suatu perbuatan pidana.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Hukum pidana mensyaratkan pembuktian dua unsur utama: actus reus (perbuatan pidana yang nyata) dan mens rea (niat jahat/kesalahan). Untuk sebagian besar kejahatan, keduanya harus terpenuhi agar tanggung jawab pidana dapat dikenakan.' },
      { id: 'cl-2', module_id: '3', chapter_number: 2, is_locked: false, title: 'Jenis-Jenis Tindak Pidana', description: 'Ulas kategori-kategori utama tindak pidana yang diakui hukum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Tindak pidana diklasifikasikan menjadi kejahatan dan pelanggaran, atau dikategorikan berdasarkan jenisnya: kejahatan terhadap orang (pembunuhan, penganiayaan), kejahatan harta benda (pencurian, penipuan), kejahatan kerah putih, dan tindak pidana ketertiban umum.' },
      { id: 'cl-3', module_id: '3', chapter_number: 3, is_locked: false, title: 'Hukum Acara Pidana', description: 'Ikuti tahapan perkara pidana dari penangkapan hingga pemidanaan.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Hukum acara pidana mencakup aturan-aturan yang mengatur penyelidikan, penangkapan, dakwaan, persidangan, dan pemidanaan terhadap tersangka/terdakwa. Asas due process menjamin keadilan di setiap tahapan.' },
      { id: 'cl-4', module_id: '3', chapter_number: 4, is_locked: false, title: 'Sanksi Pidana dan Pemidanaan', description: 'Pahami filosofi dan praktik pemidanaan dalam hukum pidana.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Pemidanaan bertujuan untuk mencapai efek jera (deterrence), pembalasan (retribusi), rehabilitasi, dan isolasi. Hakim mempertimbangkan faktor-faktor seperti sifat tindak pidana, riwayat pelaku, serta keadaan yang meringankan atau memberatkan.' },
    ],
    'legal-clinic': [
      { id: 'lc-1', module_id: '4', chapter_number: 1, is_locked: false, title: 'Pengantar Klinik Hukum', description: 'Gambaran umum klinik hukum dan perannya dalam pendidikan hukum.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Klinik hukum memberikan pengalaman langsung dalam pekerjaan hukum nyata atau simulasi. Mahasiswa mengembangkan keterampilan praktis dengan mendampingi klien nyata di bawah pengawasan dosen, menjembatani teori dan praktik.' },
      { id: 'lc-2', module_id: '4', chapter_number: 2, is_locked: false, title: 'Konsultasi Klien', description: 'Kuasai keterampilan yang diperlukan untuk berkonsultasi dan memberikan saran kepada klien secara efektif.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Konsultasi klien yang efektif melibatkan mendengarkan secara aktif, komunikasi yang jelas, empati, dan kemampuan menerjemahkan masalah hukum yang kompleks menjadi saran yang mudah dipahami. Membangun kepercayaan adalah fondasinya.' },
      { id: 'lc-3', module_id: '4', chapter_number: 3, is_locked: false, title: 'Analisis Kasus', description: 'Kembangkan kemampuan menganalisis kasus hukum secara sistematis dan menyeluruh.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Analisis kasus mengharuskan identifikasi fakta-fakta kunci, isu-isu hukum, aturan yang berlaku, dan argumen. Metode IRAC (Issue/Isu, Rule/Aturan, Application/Penerapan, Conclusion/Kesimpulan) adalah kerangka terstruktur untuk analisis hukum.' },
      { id: 'lc-4', module_id: '4', chapter_number: 4, is_locked: false, title: 'Dokumentasi Hukum', description: 'Pelajari cara menyusun, menelaah, dan mengelola dokumen-dokumen hukum penting.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Dokumentasi hukum mencakup kontrak, surat gugatan, memori banding, memorandum, dan korespondensi. Ketepatan, kejelasan, dan struktur sangat penting. Bahkan kesalahan kecil dalam dokumen dapat berdampak hukum yang besar.' },
    ],
    'legal-reasoning': [
      { id: 'lr-1', module_id: '5', chapter_number: 1, is_locked: false, title: 'Penalaran Hukum Deduktif', description: 'Terapkan logika deduktif pada argumen hukum dan analisis kasus.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Penalaran deduktif bergerak dari aturan umum ke kesimpulan spesifik. Dalam hukum, ini biasanya berarti: (1) nyatakan aturan hukum, (2) terapkan aturan pada fakta, (3) capai kesimpulan. Pendekatan silogistik ini merupakan inti analisis hukum.' },
      { id: 'lr-2', module_id: '5', chapter_number: 2, is_locked: false, title: 'Penalaran Induktif dalam Hukum', description: 'Gunakan kasus-kasus spesifik untuk membangun prinsip hukum yang umum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Penalaran induktif bergerak dari pengamatan spesifik (kasus-kasus) ke prinsip-prinsip umum. Dalam common law, hakim membangun aturan dengan memeriksa pola di berbagai putusan, secara bertahap membentuk doktrin hukum.' },
      { id: 'lr-3', module_id: '5', chapter_number: 3, is_locked: false, title: 'Penalaran Analogis', description: 'Pahami bagaimana analogi digunakan untuk menyelesaikan masalah hukum baru.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Penalaran analogis membandingkan kasus saat ini dengan putusan-putusan sebelumnya atau prinsip-prinsip yang sudah mapan. Jika kemiripannya cukup kuat, aturan yang sama diterapkan. Ini sangat berharga ketika tidak ada preseden langsung.' },
      { id: 'lr-4', module_id: '5', chapter_number: 4, is_locked: false, title: 'Metode Penelitian Hukum', description: 'Kuasai alat dan teknik penelitian hukum yang efektif.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Penelitian hukum melibatkan pencarian dan analisis sumber primer dan sekunder. Keterampilan utama meliputi mengidentifikasi undang-undang yang relevan, menemukan yurisprudensi, menggunakan basis data hukum, dan mensintesis informasi menjadi argumen hukum yang koheren.' },
    ],
    'career-preparation': [
      { id: 'cp-1', module_id: '6', chapter_number: 1, is_locked: false, title: 'Gambaran Umum Profesi Hukum', description: 'Ulas peran dan sektor yang beragam dalam profesi hukum.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Profesi hukum mencakup praktik swasta, dinas pemerintahan, departemen hukum perusahaan, hukum kepentingan publik, dan akademi. Setiap jalur menawarkan lingkungan kerja, kompensasi, dan peluang dampak yang berbeda.' },
      { id: 'cp-2', module_id: '6', chapter_number: 2, is_locked: false, title: 'Membangun Karier Hukum Kamu', description: 'Strategi praktis untuk memulai dan mengembangkan karier di bidang hukum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Membangun karier hukum memerlukan magang, mentorship, pengembangan spesialisasi, lulus ujian advokat, dan terus memperbarui pengetahuan. Merek profesional yang kuat dan jaringan yang luas adalah aset yang tak ternilai.' },
      { id: 'cp-3', module_id: '6', chapter_number: 3, is_locked: false, title: 'Etika Profesi', description: 'Pahami kewajiban etis yang mengatur para profesional hukum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Etika hukum mencakup kewajiban kerahasiaan, loyalitas, kompetensi, dan kejujuran. Pelanggaran dapat mengakibatkan tindakan disiplin, pencabutan izin, atau tanggung jawab pidana. Etika adalah fondasi untuk menjaga kepercayaan publik terhadap sistem hukum.' },
      { id: 'cp-4', module_id: '6', chapter_number: 4, is_locked: false, title: 'Membangun Jaringan di Dunia Hukum', description: 'Manfaatkan hubungan profesional untuk mengembangkan karier hukum kamu.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', content_body: 'Membangun jaringan sangat penting dalam dunia hukum. Acara asosiasi advokat, jaringan alumni, LinkedIn, dan wawancara informasional menghubungkan Anda dengan peluang dan mentor. Berikan sebanyak yang Anda terima — hubungan dibangun atas dasar nilai bersama.' },
    ],
  },
};

// ─── Quiz Content ─────────────────────────────────────────────────────────────

type QuizQuestion = {
  id: string; module_id: string; question: string;
  options: { key: string; text: string }[];
  correct_answer: string;
};

export const quizContent: Record<Lang, Record<string, QuizQuestion[]>> = {
  en: {
    'legal-science': [
      { id: 'q1', module_id: '1', question: 'What is the main purpose of legal science?', options: [{ key: 'A', text: 'To study and analyze the rules, principles, and concepts of law.' }, { key: 'B', text: 'To practice law in the courtroom.' }, { key: 'C', text: 'To enforce legal decisions.' }, { key: 'D', text: 'To focus on criminal punishment.' }], correct_answer: 'A' },
      { id: 'q2', module_id: '1', question: 'Which of the following is a primary source of law?', options: [{ key: 'A', text: 'Legal textbooks' }, { key: 'B', text: 'Law journal articles' }, { key: 'C', text: 'Constitutional provisions' }, { key: 'D', text: 'Legal dictionaries' }], correct_answer: 'C' },
      { id: 'q3', module_id: '1', question: 'What distinguishes normative methods from empirical methods in legal research?', options: [{ key: 'A', text: 'Normative methods focus on what the law is in reality.' }, { key: 'B', text: 'Normative methods focus on what the law ought to be.' }, { key: 'C', text: 'Empirical methods are based on legal principles.' }, { key: 'D', text: 'There is no difference between the two.' }], correct_answer: 'B' },
      { id: 'q4', module_id: '1', question: 'Which concept refers to the body of rules that govern a community?', options: [{ key: 'A', text: 'Justice' }, { key: 'B', text: 'Ethics' }, { key: 'C', text: 'Law' }, { key: 'D', text: 'Morality' }], correct_answer: 'C' },
      { id: 'q5', module_id: '1', question: 'Legal science is primarily concerned with:', options: [{ key: 'A', text: 'The philosophical basis of punishment.' }, { key: 'B', text: 'Systematic study of law as a set of norms and rules.' }, { key: 'C', text: 'The history of ancient civilizations.' }, { key: 'D', text: 'Economic theories of market behavior.' }], correct_answer: 'B' },
    ],
    'introduction-to-law': [
      { id: 'itl-q1', module_id: '2', question: 'What is the primary function of law in society?', options: [{ key: 'A', text: 'To generate government revenue' }, { key: 'B', text: 'To maintain order and protect individual rights' }, { key: 'C', text: 'To promote economic growth exclusively' }, { key: 'D', text: 'To control religious practices' }], correct_answer: 'B' },
      { id: 'itl-q2', module_id: '2', question: 'Common law systems are primarily based on:', options: [{ key: 'A', text: 'Written codes and statutes only' }, { key: 'B', text: 'Religious texts' }, { key: 'C', text: 'Judicial precedents and case law' }, { key: 'D', text: 'International treaties exclusively' }], correct_answer: 'C' },
      { id: 'itl-q3', module_id: '2', question: 'Which term refers to the principle that no one is above the law?', options: [{ key: 'A', text: 'Judicial review' }, { key: 'B', text: 'Rule of Law' }, { key: 'C', text: 'Separation of powers' }, { key: 'D', text: 'Due process' }], correct_answer: 'B' },
      { id: 'itl-q4', module_id: '2', question: 'What distinguishes public law from private law?', options: [{ key: 'A', text: 'Public law involves relationships between private individuals' }, { key: 'B', text: 'Private law is more important than public law' }, { key: 'C', text: 'Public law governs relationships between individuals and the state' }, { key: 'D', text: 'There is no meaningful distinction' }], correct_answer: 'C' },
      { id: 'itl-q5', module_id: '2', question: 'Which of the following is an example of substantive law?', options: [{ key: 'A', text: 'Rules of evidence' }, { key: 'B', text: 'Court procedures' }, { key: 'C', text: 'The elements of a crime' }, { key: 'D', text: 'Filing deadlines' }], correct_answer: 'C' },
    ],
    'criminal-law': [
      { id: 'cl-q1', module_id: '3', question: 'What are the two main elements of a crime?', options: [{ key: 'A', text: 'Motive and opportunity' }, { key: 'B', text: 'Actus reus and mens rea' }, { key: 'C', text: 'Evidence and witnesses' }, { key: 'D', text: 'Arrest and conviction' }], correct_answer: 'B' },
      { id: 'cl-q2', module_id: '3', question: '"Mens rea" in criminal law refers to:', options: [{ key: 'A', text: 'The physical act of committing a crime' }, { key: 'B', text: 'The guilty mind or criminal intent' }, { key: 'C', text: "The victim's testimony" }, { key: 'D', text: 'The punishment prescribed by law' }], correct_answer: 'B' },
      { id: 'cl-q3', module_id: '3', question: 'Which standard of proof applies in criminal cases?', options: [{ key: 'A', text: 'Preponderance of evidence' }, { key: 'B', text: 'Clear and convincing evidence' }, { key: 'C', text: 'Beyond reasonable doubt' }, { key: 'D', text: 'Probable cause' }], correct_answer: 'C' },
      { id: 'cl-q4', module_id: '3', question: 'Which of the following is a valid defense in criminal law?', options: [{ key: 'A', text: 'Self-defense' }, { key: 'B', text: 'Poverty' }, { key: 'C', text: 'Peer pressure' }, { key: 'D', text: 'Ignorance of the law' }], correct_answer: 'A' },
      { id: 'cl-q5', module_id: '3', question: 'What is the purpose of criminal sanctions?', options: [{ key: 'A', text: 'Only to rehabilitate offenders' }, { key: 'B', text: 'Only to compensate victims' }, { key: 'C', text: 'To deter, punish, and rehabilitate' }, { key: 'D', text: 'Only to protect law enforcement officers' }], correct_answer: 'C' },
    ],
    'legal-clinic': [
      { id: 'lc-q1', module_id: '4', question: 'What is the primary purpose of a legal clinic?', options: [{ key: 'A', text: 'To provide theoretical lectures only' }, { key: 'B', text: 'To give students hands-on legal experience with real clients' }, { key: 'C', text: 'To conduct only mock trials' }, { key: 'D', text: 'To grade students on written exams' }], correct_answer: 'B' },
      { id: 'lc-q2', module_id: '4', question: 'The IRAC method in legal analysis stands for:', options: [{ key: 'A', text: 'Issue, Research, Analysis, Conclusion' }, { key: 'B', text: 'Introduction, Rule, Application, Citation' }, { key: 'C', text: 'Issue, Rule, Application, Conclusion' }, { key: 'D', text: 'Inquiry, Reasoning, Argument, Court' }], correct_answer: 'C' },
      { id: 'lc-q3', module_id: '4', question: 'Effective client counseling requires:', options: [{ key: 'A', text: 'Immediately providing legal opinions without listening' }, { key: 'B', text: 'Active listening, empathy, and clear communication' }, { key: 'C', text: 'Only discussing fees' }, { key: 'D', text: 'Avoiding emotional engagement' }], correct_answer: 'B' },
      { id: 'lc-q4', module_id: '4', question: 'Legal documentation must prioritize:', options: [{ key: 'A', text: 'Length and verbosity' }, { key: 'B', text: 'Persuasive rhetoric only' }, { key: 'C', text: 'Precision, clarity, and structure' }, { key: 'D', text: 'Informal language' }], correct_answer: 'C' },
      { id: 'lc-q5', module_id: '4', question: 'Case analysis begins with identifying:', options: [{ key: 'A', text: 'The judge\'s personal opinion' }, { key: 'B', text: 'The client\'s emotional state' }, { key: 'C', text: 'Key facts and legal issues' }, { key: 'D', text: 'The court fees' }], correct_answer: 'C' },
    ],
    'legal-reasoning': [
      { id: 'lr-q1', module_id: '5', question: 'Deductive legal reasoning moves from:', options: [{ key: 'A', text: 'Specific cases to general principles' }, { key: 'B', text: 'General rules to specific conclusions' }, { key: 'C', text: 'Opinions to facts' }, { key: 'D', text: 'Evidence to testimony' }], correct_answer: 'B' },
      { id: 'lr-q2', module_id: '5', question: 'Analogical reasoning in law is used when:', options: [{ key: 'A', text: 'A written statute directly applies' }, { key: 'B', text: 'No direct precedent exists and similar cases guide the decision' }, { key: 'C', text: 'The judge dismisses all prior cases' }, { key: 'D', text: 'International law overrides domestic law' }], correct_answer: 'B' },
      { id: 'lr-q3', module_id: '5', question: 'Inductive reasoning in law builds:', options: [{ key: 'A', text: 'Specific case outcomes from statutes' }, { key: 'B', text: 'General legal principles from specific case patterns' }, { key: 'C', text: 'Constitutional amendments' }, { key: 'D', text: 'Criminal charges' }], correct_answer: 'B' },
      { id: 'lr-q4', module_id: '5', question: 'A primary source for legal research is:', options: [{ key: 'A', text: 'A legal textbook summary' }, { key: 'B', text: 'A law review article' }, { key: 'C', text: 'A court judgment or statute' }, { key: 'D', text: 'A legal dictionary' }], correct_answer: 'C' },
      { id: 'lr-q5', module_id: '5', question: 'The syllogistic approach in legal analysis involves:', options: [{ key: 'A', text: 'Asking the jury for guidance' }, { key: 'B', text: 'Stating a rule, applying it to facts, then concluding' }, { key: 'C', text: 'Ignoring existing case law' }, { key: 'D', text: 'Appealing to public opinion' }], correct_answer: 'B' },
    ],
    'career-preparation': [
      { id: 'cp-q1', module_id: '6', question: 'Which of the following is NOT a typical career path in law?', options: [{ key: 'A', text: 'Private law firm associate' }, { key: 'B', text: 'Government prosecutor' }, { key: 'C', text: 'Software engineer' }, { key: 'D', text: 'Corporate counsel' }], correct_answer: 'C' },
      { id: 'cp-q2', module_id: '6', question: 'Professional ethics in law requires:', options: [{ key: 'A', text: 'Sharing client secrets when convenient' }, { key: 'B', text: 'Confidentiality, competence, and candor' }, { key: 'C', text: 'Prioritizing fees over client interests' }, { key: 'D', text: 'Avoiding all court appearances' }], correct_answer: 'B' },
      { id: 'cp-q3', module_id: '6', question: 'Networking in the legal profession is important because:', options: [{ key: 'A', text: 'It is the only way to pass the bar exam' }, { key: 'B', text: 'Connections lead to opportunities and mentorship' }, { key: 'C', text: 'It replaces the need for legal skills' }, { key: 'D', text: 'It guarantees a high salary' }], correct_answer: 'B' },
      { id: 'cp-q4', module_id: '6', question: 'Which sector employs lawyers to represent government interests?', options: [{ key: 'A', text: 'Private practice' }, { key: 'B', text: 'Corporate legal departments' }, { key: 'C', text: 'Government/public sector' }, { key: 'D', text: 'NGOs only' }], correct_answer: 'C' },
      { id: 'cp-q5', module_id: '6', question: 'Continuing legal education (CLE) is required to:', options: [{ key: 'A', text: 'Re-take the law school entrance exam' }, { key: 'B', text: 'Maintain professional competence and license' }, { key: 'C', text: 'Change practice areas without any study' }, { key: 'D', text: 'Avoid paying taxes' }], correct_answer: 'B' },
    ],
  },
  id: {
    'legal-science': [
      { id: 'q1', module_id: '1', question: 'Apa tujuan utama ilmu hukum?', options: [{ key: 'A', text: 'Mempelajari dan menganalisis aturan, prinsip, dan konsep hukum.' }, { key: 'B', text: 'Berpraktik hukum di pengadilan.' }, { key: 'C', text: 'Menegakkan putusan hukum.' }, { key: 'D', text: 'Berfokus pada hukuman pidana.' }], correct_answer: 'A' },
      { id: 'q2', module_id: '1', question: 'Manakah di bawah ini yang merupakan sumber hukum primer?', options: [{ key: 'A', text: 'Buku teks hukum' }, { key: 'B', text: 'Artikel jurnal hukum' }, { key: 'C', text: 'Ketentuan konstitusional' }, { key: 'D', text: 'Kamus hukum' }], correct_answer: 'C' },
      { id: 'q3', module_id: '1', question: 'Apa yang membedakan metode normatif dari metode empiris dalam penelitian hukum?', options: [{ key: 'A', text: 'Metode normatif berfokus pada apa yang menjadi hukum dalam kenyataan.' }, { key: 'B', text: 'Metode normatif berfokus pada bagaimana seharusnya hukum itu.' }, { key: 'C', text: 'Metode empiris didasarkan pada prinsip-prinsip hukum.' }, { key: 'D', text: 'Tidak ada perbedaan antara keduanya.' }], correct_answer: 'B' },
      { id: 'q4', module_id: '1', question: 'Konsep manakah yang merujuk pada seperangkat aturan yang mengatur suatu masyarakat?', options: [{ key: 'A', text: 'Keadilan' }, { key: 'B', text: 'Etika' }, { key: 'C', text: 'Hukum' }, { key: 'D', text: 'Moralitas' }], correct_answer: 'C' },
      { id: 'q5', module_id: '1', question: 'Ilmu hukum terutama berkaitan dengan:', options: [{ key: 'A', text: 'Dasar filosofis pemidanaan.' }, { key: 'B', text: 'Studi sistematis hukum sebagai seperangkat norma dan aturan.' }, { key: 'C', text: 'Sejarah peradaban kuno.' }, { key: 'D', text: 'Teori ekonomi perilaku pasar.' }], correct_answer: 'B' },
    ],
    'introduction-to-law': [
      { id: 'itl-q1', module_id: '2', question: 'Apa fungsi utama hukum dalam masyarakat?', options: [{ key: 'A', text: 'Menghasilkan pendapatan pemerintah' }, { key: 'B', text: 'Menjaga ketertiban dan melindungi hak individu' }, { key: 'C', text: 'Mendorong pertumbuhan ekonomi semata' }, { key: 'D', text: 'Mengatur praktik keagamaan' }], correct_answer: 'B' },
      { id: 'itl-q2', module_id: '2', question: 'Sistem common law terutama didasarkan pada:', options: [{ key: 'A', text: 'Kodifikasi dan undang-undang tertulis saja' }, { key: 'B', text: 'Teks keagamaan' }, { key: 'C', text: 'Preseden pengadilan dan yurisprudensi' }, { key: 'D', text: 'Perjanjian internasional semata' }], correct_answer: 'C' },
      { id: 'itl-q3', module_id: '2', question: 'Istilah manakah yang merujuk pada prinsip bahwa tidak ada yang di atas hukum?', options: [{ key: 'A', text: 'Judicial review' }, { key: 'B', text: 'Supremasi hukum (Rule of Law)' }, { key: 'C', text: 'Pemisahan kekuasaan' }, { key: 'D', text: 'Due process' }], correct_answer: 'B' },
      { id: 'itl-q4', module_id: '2', question: 'Apa yang membedakan hukum publik dari hukum privat?', options: [{ key: 'A', text: 'Hukum publik mengatur hubungan antara individu swasta' }, { key: 'B', text: 'Hukum privat lebih penting dari hukum publik' }, { key: 'C', text: 'Hukum publik mengatur hubungan antara individu dengan negara' }, { key: 'D', text: 'Tidak ada perbedaan yang berarti' }], correct_answer: 'C' },
      { id: 'itl-q5', module_id: '2', question: 'Manakah di bawah ini yang merupakan contoh hukum materiil?', options: [{ key: 'A', text: 'Aturan pembuktian' }, { key: 'B', text: 'Prosedur pengadilan' }, { key: 'C', text: 'Unsur-unsur tindak pidana' }, { key: 'D', text: 'Batas waktu pengajuan berkas' }], correct_answer: 'C' },
    ],
    'criminal-law': [
      { id: 'cl-q1', module_id: '3', question: 'Apa dua unsur utama suatu tindak pidana?', options: [{ key: 'A', text: 'Motif dan kesempatan' }, { key: 'B', text: 'Actus reus dan mens rea' }, { key: 'C', text: 'Bukti dan saksi' }, { key: 'D', text: 'Penangkapan dan putusan' }], correct_answer: 'B' },
      { id: 'cl-q2', module_id: '3', question: '"Mens rea" dalam hukum pidana mengacu pada:', options: [{ key: 'A', text: 'Tindakan fisik melakukan kejahatan' }, { key: 'B', text: 'Niat jahat atau kesengajaan melakukan kejahatan' }, { key: 'C', text: 'Kesaksian korban' }, { key: 'D', text: 'Hukuman yang ditetapkan undang-undang' }], correct_answer: 'B' },
      { id: 'cl-q3', module_id: '3', question: 'Standar pembuktian manakah yang berlaku dalam perkara pidana?', options: [{ key: 'A', text: 'Preponderance of evidence (keseimbangan bukti)' }, { key: 'B', text: 'Clear and convincing evidence (bukti yang jelas dan meyakinkan)' }, { key: 'C', text: 'Beyond reasonable doubt (di luar keraguan wajar)' }, { key: 'D', text: 'Probable cause (dugaan yang cukup)' }], correct_answer: 'C' },
      { id: 'cl-q4', module_id: '3', question: 'Manakah di bawah ini yang merupakan alasan pembenar yang valid dalam hukum pidana?', options: [{ key: 'A', text: 'Bela diri (self-defense)' }, { key: 'B', text: 'Kemiskinan' }, { key: 'C', text: 'Tekanan teman sebaya' }, { key: 'D', text: 'Ketidaktahuan akan hukum' }], correct_answer: 'A' },
      { id: 'cl-q5', module_id: '3', question: 'Apa tujuan sanksi pidana?', options: [{ key: 'A', text: 'Hanya untuk merehabilitasi pelaku' }, { key: 'B', text: 'Hanya untuk mengganti kerugian korban' }, { key: 'C', text: 'Untuk menangkal, menghukum, dan merehabilitasi' }, { key: 'D', text: 'Hanya untuk melindungi aparat penegak hukum' }], correct_answer: 'C' },
    ],
    'legal-clinic': [
      { id: 'lc-q1', module_id: '4', question: 'Apa tujuan utama klinik hukum?', options: [{ key: 'A', text: 'Hanya memberikan kuliah teori' }, { key: 'B', text: 'Memberikan mahasiswa pengalaman hukum langsung dengan klien nyata' }, { key: 'C', text: 'Hanya melakukan persidangan semu' }, { key: 'D', text: 'Menilai mahasiswa berdasarkan ujian tertulis saja' }], correct_answer: 'B' },
      { id: 'lc-q2', module_id: '4', question: 'Metode IRAC dalam analisis hukum merupakan singkatan dari:', options: [{ key: 'A', text: 'Isu, Riset, Analisis, Kesimpulan' }, { key: 'B', text: 'Pendahuluan, Aturan, Penerapan, Kutipan' }, { key: 'C', text: 'Isu (Issue), Aturan (Rule), Penerapan (Application), Kesimpulan (Conclusion)' }, { key: 'D', text: 'Pertanyaan, Penalaran, Argumen, Pengadilan' }], correct_answer: 'C' },
      { id: 'lc-q3', module_id: '4', question: 'Konsultasi klien yang efektif memerlukan:', options: [{ key: 'A', text: 'Langsung memberikan pendapat hukum tanpa mendengarkan' }, { key: 'B', text: 'Mendengar secara aktif, empati, dan komunikasi yang jelas' }, { key: 'C', text: 'Hanya membahas biaya jasa' }, { key: 'D', text: 'Menghindari keterlibatan emosional' }], correct_answer: 'B' },
      { id: 'lc-q4', module_id: '4', question: 'Dokumentasi hukum harus mengutamakan:', options: [{ key: 'A', text: 'Panjang dan bertele-tele' }, { key: 'B', text: 'Retorika persuasif semata' }, { key: 'C', text: 'Ketepatan, kejelasan, dan struktur' }, { key: 'D', text: 'Bahasa informal' }], correct_answer: 'C' },
      { id: 'lc-q5', module_id: '4', question: 'Analisis kasus dimulai dengan mengidentifikasi:', options: [{ key: 'A', text: 'Pendapat pribadi hakim' }, { key: 'B', text: 'Kondisi emosional klien' }, { key: 'C', text: 'Fakta-fakta kunci dan isu-isu hukum' }, { key: 'D', text: 'Biaya perkara' }], correct_answer: 'C' },
    ],
    'legal-reasoning': [
      { id: 'lr-q1', module_id: '5', question: 'Penalaran hukum deduktif bergerak dari:', options: [{ key: 'A', text: 'Kasus spesifik ke prinsip umum' }, { key: 'B', text: 'Aturan umum ke kesimpulan spesifik' }, { key: 'C', text: 'Pendapat ke fakta' }, { key: 'D', text: 'Bukti ke kesaksian' }], correct_answer: 'B' },
      { id: 'lr-q2', module_id: '5', question: 'Penalaran analogis dalam hukum digunakan ketika:', options: [{ key: 'A', text: 'Sebuah undang-undang tertulis langsung berlaku' }, { key: 'B', text: 'Tidak ada preseden langsung dan kasus serupa menjadi panduan' }, { key: 'C', text: 'Hakim mengabaikan semua kasus sebelumnya' }, { key: 'D', text: 'Hukum internasional mengesampingkan hukum domestik' }], correct_answer: 'B' },
      { id: 'lr-q3', module_id: '5', question: 'Penalaran induktif dalam hukum membangun:', options: [{ key: 'A', text: 'Hasil kasus spesifik dari undang-undang' }, { key: 'B', text: 'Prinsip hukum umum dari pola kasus spesifik' }, { key: 'C', text: 'Amandemen konstitusional' }, { key: 'D', text: 'Dakwaan pidana' }], correct_answer: 'B' },
      { id: 'lr-q4', module_id: '5', question: 'Sumber primer untuk penelitian hukum adalah:', options: [{ key: 'A', text: 'Ringkasan buku teks hukum' }, { key: 'B', text: 'Artikel jurnal hukum' }, { key: 'C', text: 'Putusan pengadilan atau undang-undang' }, { key: 'D', text: 'Kamus hukum' }], correct_answer: 'C' },
      { id: 'lr-q5', module_id: '5', question: 'Pendekatan silogistik dalam analisis hukum melibatkan:', options: [{ key: 'A', text: 'Meminta panduan dari juri' }, { key: 'B', text: 'Menyatakan aturan, menerapkannya pada fakta, kemudian menyimpulkan' }, { key: 'C', text: 'Mengabaikan yurisprudensi yang ada' }, { key: 'D', text: 'Mengacu pada opini publik' }], correct_answer: 'B' },
    ],
    'career-preparation': [
      { id: 'cp-q1', module_id: '6', question: 'Manakah di bawah ini yang BUKAN jalur karier umum di bidang hukum?', options: [{ key: 'A', text: 'Rekanan firma hukum swasta' }, { key: 'B', text: 'Jaksa pemerintah' }, { key: 'C', text: 'Insinyur perangkat lunak' }, { key: 'D', text: 'Penasihat hukum perusahaan' }], correct_answer: 'C' },
      { id: 'cp-q2', module_id: '6', question: 'Etika profesi dalam hukum mengharuskan:', options: [{ key: 'A', text: 'Membagikan rahasia klien bila diperlukan' }, { key: 'B', text: 'Kerahasiaan, kompetensi, dan kejujuran' }, { key: 'C', text: 'Mengutamakan biaya jasa di atas kepentingan klien' }, { key: 'D', text: 'Menghindari semua sidang pengadilan' }], correct_answer: 'B' },
      { id: 'cp-q3', module_id: '6', question: 'Membangun jaringan dalam profesi hukum penting karena:', options: [{ key: 'A', text: 'Itu satu-satunya cara untuk lulus ujian advokat' }, { key: 'B', text: 'Koneksi membuka peluang dan mentorship' }, { key: 'C', text: 'Menggantikan kebutuhan akan keahlian hukum' }, { key: 'D', text: 'Menjamin gaji yang tinggi' }], correct_answer: 'B' },
      { id: 'cp-q4', module_id: '6', question: 'Sektor mana yang mempekerjakan pengacara untuk mewakili kepentingan pemerintah?', options: [{ key: 'A', text: 'Praktik swasta' }, { key: 'B', text: 'Departemen hukum perusahaan' }, { key: 'C', text: 'Pemerintah/sektor publik' }, { key: 'D', text: 'LSM saja' }], correct_answer: 'C' },
      { id: 'cp-q5', module_id: '6', question: 'Pendidikan hukum berkelanjutan (CLE) diperlukan untuk:', options: [{ key: 'A', text: 'Mengulang ujian masuk fakultas hukum' }, { key: 'B', text: 'Mempertahankan kompetensi profesional dan izin praktik' }, { key: 'C', text: 'Berganti bidang praktik tanpa belajar' }, { key: 'D', text: 'Menghindari pembayaran pajak' }], correct_answer: 'B' },
    ],
  },
};

// ─── Expert Content ───────────────────────────────────────────────────────────

export const expertContent: Record<Lang, Array<{
  id: string; title: string; category: string; author: string;
  published_date: string; content_body: string; read_time: string; image: string; tags: string[];
}>> = {
  en: [
    { id: '1', title: 'The Importance of Legal Reasoning in Modern Law', category: 'Articles', author: 'Prof. Dr. Sari Winata', published_date: '2025-04-12', read_time: '8 min read', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80', tags: ['Legal Reasoning', 'Modern Law', 'Justice'], content_body: `Legal reasoning is the foundation of the legal system. It helps judges, lawyers, and other legal professionals interpret the law, analyze facts, and reach fair and just decisions.\n\n## What is Legal Reasoning?\n\nLegal reasoning refers to the process of analyzing legal rules, principles, and facts to arrive at a conclusion.\n\n## Why It Matters in Modern Law\n\n1. **Ensures Fairness** – Prevents bias and ensures decisions are based on clear legal principles.\n2. **Provides Consistency** – Maintains uniformity in the application of the law.\n3. **Adapts to Change** – Allows the legal system to respond to new developments.\n4. **Builds Public Trust** – Strengthens confidence in the justice system.` },
    { id: '2', title: 'Understanding Criminal Law: Key Concepts and Applications', category: 'Videos', author: 'Dr. Andi Setiawan', published_date: '2025-04-08', read_time: '10 min read', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', tags: ['Criminal Law', 'Legal Education'], content_body: 'A comprehensive video guide covering criminal law fundamentals including actus reus, mens rea, and criminal defenses.' },
    { id: '3', title: 'Legal Career Paths: Insights from Young Practitioners', category: 'Expert Talks', author: 'Rizky Pratama, S.H.', published_date: '2025-04-03', read_time: '12 min read', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', tags: ['Career', 'Legal Profession'], content_body: 'Real stories and advice from young legal professionals who have successfully built their careers in law firms, government, and beyond.' },
    { id: '4', title: "The Role of the Constitution in Protecting Citizens' Rights", category: 'Articles', author: 'Dr. Maya Lestari', published_date: '2025-03-28', read_time: '6 min read', image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=800&q=80', tags: ['Constitutional Law', 'Human Rights'], content_body: 'How the constitution serves as the foundation of justice and democracy, protecting fundamental rights from government overreach.' },
    { id: '5', title: 'A Landmark Case: Constitutional Review in Indonesia', category: 'Case Studies', author: 'Prof. Dr. Budi Santoso', published_date: '2025-03-22', read_time: '15 min read', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', tags: ['Case Study', 'Constitutional Review'], content_body: 'An in-depth look at a key constitutional case and its lasting impact on the Indonesian legal system and democratic governance.' },
    { id: '6', title: 'The Future of the Legal Industry: Trends and Opportunities', category: 'Expert Talks', author: 'Dimas Aditya, S.H.', published_date: '2025-03-15', read_time: '8 min read', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80', tags: ['Legal Tech', 'Future of Law'], content_body: 'How technology, artificial intelligence, and globalization are reshaping the legal profession and creating new opportunities for lawyers.' },
  ],
  id: [
    { id: '1', title: 'Pentingnya Penalaran Hukum dalam Hukum Modern', category: 'Artikel', author: 'Prof. Dr. Sari Winata', published_date: '12 Apr 2025', read_time: '8 menit baca', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80', tags: ['Penalaran Hukum', 'Hukum Modern', 'Keadilan'], content_body: `Penalaran hukum adalah fondasi dari sistem hukum. Ini membantu hakim, pengacara, dan profesional hukum lainnya dalam menafsirkan hukum, menganalisis fakta, dan mengambil keputusan yang adil.\n\n## Apa Itu Penalaran Hukum?\n\nPenalaran hukum mengacu pada proses menganalisis aturan hukum, prinsip, dan fakta untuk sampai pada suatu kesimpulan.\n\n## Mengapa Ini Penting dalam Hukum Modern\n\n1. **Memastikan Keadilan** – Mencegah bias dan memastikan keputusan didasarkan pada prinsip hukum yang jelas.\n2. **Memberikan Konsistensi** – Menjaga keseragaman dalam penerapan hukum.\n3. **Beradaptasi dengan Perubahan** – Memungkinkan sistem hukum merespons perkembangan baru.\n4. **Membangun Kepercayaan Publik** – Memperkuat keyakinan terhadap sistem peradilan.` },
    { id: '2', title: 'Memahami Hukum Pidana: Konsep Kunci dan Penerapannya', category: 'Video', author: 'Dr. Andi Setiawan', published_date: '8 Apr 2025', read_time: '10 menit baca', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', tags: ['Hukum Pidana', 'Pendidikan Hukum'], content_body: 'Panduan video komprehensif yang mencakup dasar-dasar hukum pidana termasuk actus reus, mens rea, dan pembelaan dalam hukum pidana.' },
    { id: '3', title: 'Jalur Karier Hukum: Wawasan dari Praktisi Muda', category: 'Ceramah Ahli', author: 'Rizky Pratama, S.H.', published_date: '3 Apr 2025', read_time: '12 menit baca', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', tags: ['Karier', 'Profesi Hukum'], content_body: 'Kisah nyata dan saran dari para profesional hukum muda yang telah sukses membangun karier di firma hukum, pemerintahan, dan bidang lainnya.' },
    { id: '4', title: 'Peran Konstitusi dalam Melindungi Hak-Hak Warga Negara', category: 'Artikel', author: 'Dr. Maya Lestari', published_date: '28 Mar 2025', read_time: '6 menit baca', image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=800&q=80', tags: ['Hukum Tata Negara', 'Hak Asasi Manusia'], content_body: 'Bagaimana konstitusi berfungsi sebagai fondasi keadilan dan demokrasi, melindungi hak-hak fundamental dari penyalahgunaan kekuasaan negara.' },
    { id: '5', title: 'Putusan Landmark: Judicial Review di Indonesia', category: 'Studi Kasus', author: 'Prof. Dr. Budi Santoso', published_date: '22 Mar 2025', read_time: '15 menit baca', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', tags: ['Studi Kasus', 'Judicial Review'], content_body: 'Tinjauan mendalam terhadap kasus konstitusional penting dan dampaknya yang berkelanjutan terhadap sistem hukum Indonesia dan tata kelola demokratis.' },
    { id: '6', title: 'Masa Depan Industri Hukum: Tren dan Peluang', category: 'Ceramah Ahli', author: 'Dimas Aditya, S.H.', published_date: '15 Mar 2025', read_time: '8 menit baca', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80', tags: ['Legal Tech', 'Masa Depan Hukum'], content_body: 'Bagaimana teknologi, kecerdasan buatan, dan globalisasi membentuk ulang profesi hukum dan menciptakan peluang baru bagi para advokat.' },
  ],
};

// ─── Progress Data ────────────────────────────────────────────────────────────

export const progressContent: Record<Lang, typeof import('./mock-data').mockProgress> = {
  en: {
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
      { slug: 'legal-reasoning', name: 'Legal Reasoning & Research Methodology', completed: 0, total: 5, status: 'Not Started', last_accessed: '-' },
      { slug: 'career-preparation', name: 'Legal Industry & Career Preparation', completed: 0, total: 5, status: 'Not Started', last_accessed: '-' },
    ],
    recent_quizzes: [
      { chapter: 'Chapter 4 – Normative Methods', module: 'Legal Science', date: '10 Apr 2025', score: 80 },
      { chapter: 'Chapter 2 – Legal Concepts', module: 'Introduction to Law', date: '10 Apr 2025', score: 60 },
      { chapter: 'Chapter 1 – Sources of Law', module: 'Legal Science', date: '8 Apr 2025', score: 100 },
      { chapter: 'Chapter 3 – Elements of Crime', module: 'Criminal Law', date: '3 Apr 2025', score: 70 },
      { chapter: 'Chapter 1 – Legal Clinic', module: 'Legal Clinic', date: '-', score: -1 },
    ],
  },
  id: {
    overall_percentage: 62,
    completed_chapters: 5,
    total_chapters: 8,
    total_hours: '4j 32m',
    quizzes_taken: 4,
    average_score: 80,
    streak_days: 5,
    points: 1250,
    modules: [
      { slug: 'legal-science', name: 'Ilmu Hukum', completed: 5, total: 8, status: 'Selesai', last_accessed: '12 Apr 2025' },
      { slug: 'introduction-to-law', name: 'Pengantar Hukum', completed: 3, total: 5, status: 'Sedang Berjalan', last_accessed: '10 Apr 2025' },
      { slug: 'criminal-law', name: 'Hukum Pidana', completed: 1, total: 5, status: 'Sedang Berjalan', last_accessed: '8 Apr 2025' },
      { slug: 'legal-clinic', name: 'Klinik Hukum', completed: 0, total: 5, status: 'Belum Dimulai', last_accessed: '-' },
      { slug: 'legal-reasoning', name: 'Penalaran Hukum & Metodologi Penelitian', completed: 0, total: 5, status: 'Belum Dimulai', last_accessed: '-' },
      { slug: 'career-preparation', name: 'Industri Hukum & Persiapan Karier', completed: 0, total: 5, status: 'Belum Dimulai', last_accessed: '-' },
    ],
    recent_quizzes: [
      { chapter: 'Bab 4 – Metode Normatif', module: 'Ilmu Hukum', date: '10 Apr 2025', score: 80 },
      { chapter: 'Bab 2 – Konsep Hukum', module: 'Pengantar Hukum', date: '10 Apr 2025', score: 60 },
      { chapter: 'Bab 1 – Sumber Hukum', module: 'Ilmu Hukum', date: '8 Apr 2025', score: 100 },
      { chapter: 'Bab 3 – Unsur Tindak Pidana', module: 'Hukum Pidana', date: '3 Apr 2025', score: 70 },
      { chapter: 'Bab 1 – Klinik Hukum', module: 'Klinik Hukum', date: '-', score: -1 },
    ],
  },
};

// ─── Achievements ─────────────────────────────────────────────────────────────

export const achievementsContent: Record<Lang, typeof import('./mock-data').mockAchievements> = {
  en: [
    { id: '1', name: 'First Chapter Completed', description: 'Completed Chapter 1 (Introduction to Legal Science)', date: '8 Apr 2025', icon: '📖', color: 'amber' },
    { id: '2', name: 'Quiz Champion', description: 'Scored 80% on your last quiz.', date: '8 Apr 2025', icon: '⭐', color: 'yellow' },
    { id: '3', name: 'Learning Streak', description: '3 days in a row', date: '8 Apr 2025', icon: '🔥', color: 'red' },
    { id: '4', name: 'Knowledge Seeker', description: 'Completed 5 chapters', date: '7 Apr 2025', icon: '📚', color: 'maroon' },
  ],
  id: [
    { id: '1', name: 'Bab Pertama Selesai', description: 'Menyelesaikan Bab 1 (Pengantar Ilmu Hukum)', date: '8 Apr 2025', icon: '📖', color: 'amber' },
    { id: '2', name: 'Juara Kuis', description: 'Meraih nilai 80% pada kuis terakhir.', date: '8 Apr 2025', icon: '⭐', color: 'yellow' },
    { id: '3', name: 'Beruntun Belajar', description: '3 hari berturut-turut', date: '8 Apr 2025', icon: '🔥', color: 'red' },
    { id: '4', name: 'Pencari Ilmu', description: 'Menyelesaikan 5 bab', date: '7 Apr 2025', icon: '📚', color: 'maroon' },
  ],
};

// ─── Hook: Get localized data ─────────────────────────────────────────────────

export function getLocalizedChapters(slug: string, lang: Lang): Chapter[] {
  return chaptersByLang[lang][slug] || [];
}
