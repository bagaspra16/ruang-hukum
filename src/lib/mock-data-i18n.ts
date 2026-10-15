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
      title: 'Introduction to Legal Science (PIH)',
      description: 'Comprehensive study of legal science, social norms, legal concepts, sources of law, systems, and enforcement.',
      total_chapters: 7, estimated_duration: '6-7 hours',
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
      title: 'Pengantar Ilmu Hukum (PIH)',
      description: 'Pengantar dan ruang lingkup ilmu hukum, norma & kaidah sosial, karakteristik, konsep dasar, sumber hukum, asas, sistem, dan penegakan hukum.',
      total_chapters: 7, estimated_duration: '6-7 jam',
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
        title: 'Introduction and Scope of Legal Science',
        description: 'Definition and objectives of legal science, differences between PIH and PHI, and legal disciplines.',
        duration: '25 min', video_url: 'https://www.youtube.com/embed/fu36xULlEpI',
        content_body: `Legal science is essentially the branch of knowledge that takes law as its primary object of study. As a comprehensive discipline, legal science examines every facet related to law in depth and breadth, covering the origins of law, its nature and forms, underlying fundamental principles, existing legal systems, classifications of law, sources of law, historical evolution, and the function and status of law in society.

Because legal science examines law as a universal phenomenon in human life across all places and eras, it possesses an inherently universal nature and an intimate bond with history. Anyone wishing to truly understand law must study how law emerges, grows, and evolves over time. Approaching legal science involves key methods, notably idealist approaches (viewing law as embodying justice) and normative analytical methods (viewing law as an autonomous system of abstract norms).

From a pedagogical perspective, Introduction to Legal Science (PIH) equips learners with a foundational understanding of the definition, function, and position of legal science as the bedrock for advanced legal studies and juridical reasoning.

### Differences and Relationship Between PIH and PHI
According to J. B. Daliyo, S.H. (*Pengantar Ilmu Hukum*), the primary distinction between Introduction to Legal Science (PIH) and Introduction to Indonesian Law (PHI) lies in their object and function. PIH examines law in general, possessing a universal scope unbounded by time or place, providing foundational concepts for anyone studying jurisprudence. In contrast, PHI focuses on Indonesian positive law currently in force in broad outline. PIH serves as the conceptual prerequisite, while PHI provides concrete national illustrations of the principles studied in PIH.

### Legal Disciplines (Legal Science, Legal Philosophy, and Legal Utility)
Legal discipline is a system of teachings governing human realities concerning law:
1. **Legal Science**: Comprehensively studies all aspects of law, from origins and principles to societal functions.
2. **Philosophy of Law**: Fundamental and abstract branch exploring the essence, foundational values, and justice ideals of law.
3. **Legal Utility / Function**: The practical purposes of law in society, including social order, social control, social engineering (reforming society), and legal certainty and justice.`,
      },
      {
        id: 'ls-2', module_id: '1', chapter_number: 2, is_locked: false,
        title: 'Social Norms and Rules',
        description: 'Religious, moral, courtesy, and legal norms, Sudikno Mertokusumo classification, and comparative sanctions.',
        duration: '25 min', video_url: 'https://www.youtube.com/embed/fR9w1VqOny4',
        content_body: `In societal life, humans interact continuously and require conduct guidelines called social norms or rules to preserve harmony and order.

### Four Types of Social Norms

#### 1. Religious Norms
Social rules originating from God consisting of commands, prohibitions, and guidance toward goodness and truth. They govern duties toward God and oneself. Violations incur divine sanctions in the afterlife.

#### 2. Moral Norms (Kaidah Kesusilaan)
Rules of conduct originating from human conscience determining good versus bad deeds. Aimed at perfecting individual morality and inner attitude. The sanction comes from within one's own conscience (guilt, remorse), making it **autonomous**.

#### 3. Courtesy / Etiquette Norms (Kaidah Kesopanan)
Rules of life arising from social interaction in a particular community (manners, etiquette, custom). Directed at outward conduct to maintain camaraderie. Sanctions consist of social disapproval, reprimand, or ostracization, enforced externally (**heteronomous**).

#### 4. Legal Norms (Kaidah Hukum)
Rules officially established by authorized state authorities, binding on everyone, and enforceable by state apparatus. Legal norms govern external conduct rather than inner thoughts, grant rights while imposing duties, and are enforced externally (**heteronomous**). Examples include marriage validity (Law No. 1/1974), contractual obligations (Civil Code Art. 1234), and criminal provisions (Penal Code Art. 338 & 362).

### Classification by Prof. Dr. Sudikno Mertokusumo, S.H.
Prof. Dr. Sudikno Mertokusumo classifies the four social norms into two categories:
a. **Personal Aspect**: Religious norms and moral norms.
b. **Interpersonal Aspect**: Courtesy norms and legal norms.

### Hierarchy of Sanctions & Why Legal Norms Are Essential
Because sanctions of religious norms occur in the hereafter, moral sanctions depend on conscious remorse, and courtesy sanctions rely on social peer pressure, none of the three can guarantee strict societal order. Legal norms provide precise, externally enforceable sanctions backed by state apparatus, ensuring order, certainty, justice, and security.`,
      },
      {
        id: 'ls-3', module_id: '1', chapter_number: 3, is_locked: false,
        title: 'Characteristics and Sanctions of Legal Norms',
        description: 'Core characteristics of legal norms, sanction properties according to J.B. Daliyo, and branches of sanctions.',
        duration: '20 min', video_url: 'https://www.youtube.com/embed/8hFJIJOhI-w',
        content_body: `Legal norms are officially enacted regulations binding on all persons, enforceable by authorized state authorities to ensure order, stability, and justice.

### Characteristics of Legal Norms
1. **Regulate External Conduct**: Law evaluates tangible actions, not mere inner thoughts or malice without conduct.
2. **Coercive Nature**: Compliance can be legally compelled; rules cannot simply be disregarded.
3. **Heteronomous**: Rules and penalties originate outside the individual from legitimate authorities.
4. **Grant Rights and Impose Duties**: Create reciprocal legal relationships between subjects of law.
5. **Officially Enacted**: Enacted through constitutional and statutory procedures by authorized bodies.

### Sanctions in Legal Norms (J. B. Daliyo, S.H.)
Legal sanctions possess distinct attributes: definite and clear, enforceable by state power, externally imposed, and aimed at justice and order.
- **Criminal Sanctions**: Imposed on offenders through criminal proceedings (imprisonment, fines, supervision).
- **Civil Sanctions**: Remedies in private disputes, such as damages for breach of contract (*wanprestasi*) or unlawful acts (*onrechtmatige daad*).
- **Administrative Sanctions**: Imposed by government bodies (warnings, administrative fines, license revocation).`,
      },
      {
        id: 'ls-4', module_id: '1', chapter_number: 4, is_locked: false,
        title: 'Fundamental Concepts in Law',
        description: 'Objective vs subjective law, legal events (rechtsfeit), legal acts (rechtshandeling), legal relationships, and legal consequences.',
        duration: '30 min', video_url: 'https://www.youtube.com/embed/HfSUo7FgJcE',
        content_body: `Mastering foundational concepts is essential for legal reasoning and analysis.

### Objective Law vs Subjective Law
- **Objective Law**: The body of general rules governing societal relations and state interactions.
- **Subjective Law**: The specific rights and entitlements acquired by a legal subject under objective law.

### Legal Events (Rechtsfeit)
Factual occurrences connected by law to legal consequences (birth, change, transfer, or extinguishing of rights/duties):
- **Human Acts**: Legal acts (intended consequences, e.g. contracts) vs Unlawful acts (*onrechtmatige daad*, civil torts).
- **Natural Facts**: Birth (immediate legal personality), death (inheritance opening), lapse of time (statute of limitations / *verjaring*).

### Legal Acts (Rechtshandeling)
Voluntary actions intended to create legal effects:
- **Unilateral**: Executed by one party (wills, resignation, power of attorney).
- **Bilateral / Multilateral**: Formed by consensus between multiple parties (sales, leases, employment contracts).

### Legal Relationships (Rechtsbetrekking)
Three essential components: Legal subjects (natural persons and legal entities), Legal objects (tangible/intangible goods, services, IP), and Legal bonds (rights paired with duties).

### Legal Consequences
The outcomes triggered under law, including status modifications, rights creation, and sanctions. Key provisions under the Indonesian Civil Code (KUHPerdata) include Article 1320 (validity requirements of agreements), Article 1338 (*pacta sunt servanda*), Article 1238 (default), and Article 1243 (damages).`,
      },
      {
        id: 'ls-5', module_id: '1', chapter_number: 5, is_locked: false,
        title: 'Sources of Law',
        description: 'Material and formal sources of law (statutes, customs, jurisprudence, treaties, contracts, doctrine) and hierarchy.',
        duration: '35 min', video_url: 'https://www.youtube.com/embed/QWiga-kPDhY',
        content_body: `Sources of law encompass all factors and formal instruments that give birth to binding rules.

### Meanings of Sources of Law (Prof. Dr. Sudikno Mertokusumo, S.H.)
Used in five contexts: as legal principles, historical sources, formal validity sources, evidentiary knowledge sources, and law-generating sources.

### Material vs Formal Sources
- **Material Sources**: Sociological, economic, historical, and ethical factors determining the content of rules.
- **Formal Sources**: Distinct forms giving binding force to legal norms (*causa efficient*):
  1. **Statutes / Legislation**: Material vs formal meaning; fundamental maxims (*lex posterior derogat legi priori*, *lex superior*, *lex specialis*, non-retroactivity); statutory hierarchy.
  2. **Custom and Usage**: Repetitive practice accompanied by legal conviction (*opinio necessitatis*).
  3. **Jurisprudence (Precedent)**: Judicial decisions; principle of *ius curia novit* (judges cannot refuse to adjudicate cases); judge-made law.
  4. **Treaties**: International agreements (bilateral, multilateral, collective; *treaty* vs *agreement*).
  5. **Contracts**: Private agreements binding as law between parties (Civil Code Art. 1320; *pacta sunt servanda*).
  6. **Doctrine**: Authoritative teachings of prominent jurists, formally recognized under ICJ Statute Article 38(1).`,
      },
      {
        id: 'ls-6', module_id: '1', chapter_number: 6, is_locked: false,
        title: 'Legal Principles and World Legal Systems',
        description: 'Doctrinal definitions of legal principles, world legal families (Civil Law, Common Law, etc.), and branches of law.',
        duration: '25 min', video_url: 'https://www.youtube.com/embed/jg0QxW6fAok',
        content_body: `Legal principles are the foundational pillars guiding the enactment, application, and interpretation of law.

### Legal Principles
Defined by scholars (Bellefroid, P. Scholten, Eikema Hommes, Satjipto Rahardjo) as the "heart" of legal rules and the moral-ethical bridge between norms and human ideals.

### Major Legal Systems of the World
1. **Civil Law**: Codified statutory law as primary source (Indonesia, Germany, France, Japan).
2. **Common Law**: Judicial precedent (*stare decisis*) as primary source (UK, US, Australia, Canada).
3. **Religious Law**: Sacred texts as divine legal sources (Sharia in Saudi Arabia, Iran, UAE).
4. **Customary Law**: Indigenous community customs and traditions.
5. **Mixed Law**: Hybrid traditions integrating multiple systems (e.g. Nigeria, Indonesia).

### Classification of Law
- By Form: Written codified, written uncodified, unwritten.
- By Content: Public law (Constitutional, Criminal, Administrative, Tax) vs Private law (Civil, Commercial).
- By Time: Permanent, temporary, positive law (*ius constitutum*), prospective law (*ius constituendum*).
- By Territory: National, international, foreign.`,
      },
      {
        id: 'ls-7', module_id: '1', chapter_number: 7, is_locked: false,
        title: 'Dynamics and Enforcement of Law',
        description: 'Indonesian regulatory dynamics, human rights & democracy, schools of jurisprudence, and Lawrence M. Friedman theory.',
        duration: '30 min', video_url: 'https://www.youtube.com/embed/lBqpjoxGyR4',
        content_body: `Indonesia's legal dynamics reflect a mixed system navigating regulatory harmonisation and institutional integrity.

### Regulatory Dynamics and Rule of Law
Challenges include hyper-regulation, overlapping regional and central laws, and enforcement hurdles. In a constitutional *Rechtsstaat*, legislation must strictly align with Human Rights and Democratic governance.

### Schools of Legal Jurisprudence
1. **Natural Law School**: Law derived from divine will or universal human reason (Aquinas, Grotius, Kant).
2. **Legal Positivism**: Law as the sovereign's written command, distinct from morality (Austin, Kelsen).
3. **Utilitarianism**: Law maximizing greatest happiness for the greatest number (Bentham, Mill).
4. **Historical School**: Law developing from national consciousness (*volksgeist*) (Savigny, Hugo).
5. **Sociological Jurisprudence**: Law reflecting societal living law (Ehrlich, Pound).
6. **Legal Realism**: Law in operational action and judicial decision-making (Holmes, Llewellyn).

### Enforcement and Sanctions
- **Criminal Sanctions**: Retribution, deterrence, and rehabilitation under Penal Code and Law No. 1/2023.
- **Civil Sanctions**: Restoring private rights via condemnatory, declaratory, or constitutive judgments.
- **Administrative Sanctions**: Reparative government remedies without court litigation.

### Three Elements of Legal Enforcement (Lawrence M. Friedman)
1. **Legal Substance**: Coherent, quality legal rules and statutes.
2. **Legal Structure**: Integrity, training, and apparatus of institutions (police, prosecutors, courts).
3. **Legal Culture**: Public legal awareness, values, and compliance.`,
      },
    ],
    'introduction-to-law': [
      { id: 'itl-1', module_id: '2', chapter_number: 1, is_locked: false, title: 'What is Law?', description: 'Understand the fundamental definition and nature of law.', duration: '15 min', video_url: 'https://www.youtube.com/embed/razlee5kmt8', content_body: 'Law is a system of rules created and enforced by social or governmental institutions to regulate behavior. It shapes politics, economics, history, and society in countless ways and serves as the primary social mediator in relations between people.' },
      { id: 'itl-2', module_id: '2', chapter_number: 2, is_locked: false, title: 'Functions of Law', description: 'Explore the key social functions that law serves in society.', duration: '20 min', video_url: 'https://www.youtube.com/embed/cVwtFrHeskg', content_body: 'Law serves several vital functions: maintaining order and social stability, protecting individual rights and liberties, resolving disputes through legitimate processes, and promoting justice and equality within communities.' },
      { id: 'itl-3', module_id: '2', chapter_number: 3, is_locked: false, title: 'Types of Law', description: 'Distinguish between different categories and branches of law.', duration: '20 min', video_url: 'https://www.youtube.com/embed/XrBgaZbkO7g', content_body: 'Law can be categorized in many ways: public law (constitutional, administrative, criminal) vs. private law (civil, commercial, family), substantive law vs. procedural law, and domestic law vs. international law.' },
      { id: 'itl-4', module_id: '2', chapter_number: 4, is_locked: false, title: 'Legal Systems of the World', description: 'Compare the major legal systems: civil law, common law, and mixed systems.', duration: '25 min', video_url: 'https://www.youtube.com/embed/xaJuFbtuK7E', content_body: 'The world\'s major legal systems include civil law (based on codified statutes, prevalent in continental Europe and Indonesia), common law (based on judicial precedent, used in the UK and USA), Islamic law (Sharia), and mixed systems combining elements of these.' },
    ],
    'criminal-law': [
      { id: 'cl-1', module_id: '3', chapter_number: 1, is_locked: false, title: 'Elements of Criminal Law', description: 'Learn the essential elements that constitute a criminal act.', duration: '15 min', video_url: 'https://www.youtube.com/embed/7R5DUxKik2Y', content_body: 'Criminal law requires proof of two key elements: actus reus (the guilty act) and mens rea (the guilty mind). For most crimes, both must be present for criminal liability to attach.' },
      { id: 'cl-2', module_id: '3', chapter_number: 2, is_locked: false, title: 'Types of Crimes', description: 'Survey the major categories of crimes recognized in law.', duration: '20 min', video_url: 'https://www.youtube.com/embed/cWW4iKzjTuo', content_body: 'Crimes are classified into felonies and misdemeanors, or categorized by type: crimes against persons (murder, assault), property crimes (theft, fraud), white-collar crimes, and public-order offenses.' },
      { id: 'cl-3', module_id: '3', chapter_number: 3, is_locked: false, title: 'Criminal Procedure', description: 'Follow the stages of a criminal case from arrest through sentencing.', duration: '20 min', video_url: 'https://www.youtube.com/embed/GI79ofCmH5U', content_body: 'Criminal procedure encompasses the rules governing the investigation, arrest, charging, trial, and sentencing of accused persons. Due process guarantees fairness at each stage.' },
      { id: 'cl-4', module_id: '3', chapter_number: 4, is_locked: false, title: 'Penalties and Sentencing', description: 'Understand the philosophy and practice of criminal sentencing.', duration: '25 min', video_url: 'https://www.youtube.com/embed/qCITb5zsZm4', content_body: 'Sentencing aims to achieve deterrence, retribution, rehabilitation, and incapacitation. Judges consider factors like the nature of the offense, the offender\'s history, and mitigating or aggravating circumstances.' },
    ],
    'legal-clinic': [
      { id: 'lc-1', module_id: '4', chapter_number: 1, is_locked: false, title: 'Introduction to Legal Clinics', description: 'Overview of legal clinics and their role in legal education.', duration: '15 min', video_url: 'https://www.youtube.com/embed/Vg5A64wT3vc', content_body: 'Legal clinics provide hands-on experience in real or simulated legal work. Students develop practical skills by assisting real clients under faculty supervision, bridging theory and practice.' },
      { id: 'lc-2', module_id: '4', chapter_number: 2, is_locked: false, title: 'Client Counseling', description: 'Master the skills needed to effectively counsel and advise clients.', duration: '20 min', video_url: 'https://www.youtube.com/embed/bFSidbI2oSo', content_body: 'Effective client counseling involves active listening, clear communication, empathy, and the ability to translate complex legal issues into understandable advice. Establishing trust is foundational.' },
      { id: 'lc-3', module_id: '4', chapter_number: 3, is_locked: false, title: 'Case Analysis', description: 'Develop the skills to analyze legal cases systematically and thoroughly.', duration: '20 min', video_url: 'https://www.youtube.com/embed/sTIyYbsfgGg', content_body: 'Case analysis requires identifying the key facts, legal issues, applicable rules, and arguments. The IRAC method (Issue, Rule, Application, Conclusion) is a structured framework for legal analysis.' },
      { id: 'lc-4', module_id: '4', chapter_number: 4, is_locked: false, title: 'Legal Documentation', description: 'Learn to draft, review, and manage key legal documents.', duration: '25 min', video_url: 'https://www.youtube.com/embed/guLzPxKWthY', content_body: 'Legal documentation includes contracts, pleadings, briefs, memoranda, and correspondence. Precision, clarity, and structure are essential. Even small errors in documents can have major legal consequences.' },
    ],
    'legal-reasoning': [
      { id: 'lr-1', module_id: '5', chapter_number: 1, is_locked: false, title: 'Deductive Legal Reasoning', description: 'Apply deductive logic to legal arguments and case analysis.', duration: '15 min', video_url: 'https://www.youtube.com/embed/KmW9nhgzEoA', content_body: 'Deductive reasoning moves from a general rule to a specific conclusion. In law, this typically means: (1) state the legal rule, (2) apply the rule to the facts, (3) reach a conclusion. This syllogistic approach is central to legal analysis.' },
      { id: 'lr-2', module_id: '5', chapter_number: 2, is_locked: false, title: 'Inductive Reasoning in Law', description: 'Use specific cases to build general legal principles.', duration: '20 min', video_url: 'https://www.youtube.com/embed/p3NA1RSlXZM', content_body: 'Inductive reasoning moves from specific observations (cases) to general principles. In common law, judges build rules by examining patterns across multiple decisions, gradually forming legal doctrine.' },
      { id: 'lr-3', module_id: '5', chapter_number: 3, is_locked: false, title: 'Analogical Reasoning', description: 'Understand how analogies are used to resolve novel legal problems.', duration: '20 min', video_url: 'https://www.youtube.com/embed/clhP_tVfF30', content_body: 'Analogical reasoning compares the current case to prior decisions or established principles. If the similarity is strong enough, the same rule applies. This is especially valuable when no direct precedent exists.' },
      { id: 'lr-4', module_id: '5', chapter_number: 4, is_locked: false, title: 'Legal Research Methods', description: 'Master the tools and techniques of effective legal research.', duration: '25 min', video_url: 'https://www.youtube.com/embed/guLzPxKWthY', content_body: 'Legal research involves finding and analyzing primary and secondary sources. Key skills include identifying relevant statutes, finding case law, using legal databases, and synthesizing information into coherent legal arguments.' },
    ],
    'career-preparation': [
      { id: 'cp-1', module_id: '6', chapter_number: 1, is_locked: false, title: 'Legal Profession Overview', description: 'Survey the diverse roles and sectors within the legal profession.', duration: '15 min', video_url: 'https://www.youtube.com/embed/FE-ydsVlRa8', content_body: 'The legal profession includes private practice, government service, corporate legal departments, public interest law, and academia. Each path offers different work environments, compensation, and impact opportunities.' },
      { id: 'cp-2', module_id: '6', chapter_number: 2, is_locked: false, title: 'Building Your Legal Career', description: 'Practical strategies for launching and advancing your career in law.', duration: '20 min', video_url: 'https://www.youtube.com/embed/PBbixTgr9hI', content_body: 'Building a legal career requires internships, mentorship, developing a specialty, passing bar exams, and continuously updating your knowledge. A strong professional brand and network are invaluable assets.' },
      { id: 'cp-3', module_id: '6', chapter_number: 3, is_locked: false, title: 'Professional Ethics', description: 'Understand the ethical obligations that govern legal professionals.', duration: '20 min', video_url: 'https://www.youtube.com/embed/GTwZfKRC3y8', content_body: 'Legal ethics encompasses duties of confidentiality, loyalty, competence, and candor. Violations can result in disciplinary action, disbarment, or criminal liability. Ethics is fundamental to maintaining public trust in the legal system.' },
      { id: 'cp-4', module_id: '6', chapter_number: 4, is_locked: false, title: 'Networking in Law', description: 'Leverage professional relationships to grow your legal career.', duration: '25 min', video_url: 'https://www.youtube.com/embed/ikANvtqkzEU', content_body: 'Networking is essential in law. Bar association events, alumni networks, LinkedIn, and informational interviews connect you with opportunities and mentors. Give as much as you receive — relationships are built on mutual value.' },
    ],
  },
  id: {
    'legal-science': [
      {
        id: 'ls-1', module_id: '1', chapter_number: 1, is_locked: false,
        title: 'Pengantar dan Ruang Lingkup Ilmu Hukum',
        description: 'Pengertian & tujuan ilmu hukum, perbedaan dan hubungan PIH dan PHI, serta disiplin hukum.',
        duration: '25 menit', video_url: 'https://www.youtube.com/embed/fu36xULlEpI',
        content_body: `Ilmu hukum pada hakikatnya merupakan cabang ilmu pengetahuan yang menjadikan hukum sebagai objek kajian utamanya. Sebagai sebuah disiplin ilmu yang komprehensif, ilmu hukum bertugas untuk mempelajari dan mengkaji segala seluk-beluk yang berkaitan dengan hukum secara mendalam dan menyeluruh. Cakupan dari kajian ini sangat luas, meliputi penelusuran terhadap asal-mula lahirnya hukum, wujud dan hakikat hukum itu sendiri, asas-asas fundamental yang mendasarinya, sistem hukum yang berlaku, berbagai macam pembagian hukum, sumber-sumber tempat hukum itu ditemukan, perkembangan hukum dari masa ke masa, hingga fungsi dan kedudukan hukum di dalam kehidupan bermasyarakat.

Karena ilmu hukum menelaah hukum sebagai suatu gejala atau fenomena dalam kehidupan manusia di mana pun dan kapan pun di dunia ini, maka ilmu hukum memiliki sifat yang universal. Dari sifat universal inilah dapat dipahami bahwa ilmu hukum memiliki ikatan yang sangat erat dengan sejarah. Siapa saja yang berkeinginan untuk mengetahui dan memahami hukum secara mendalam, mutlak perlu untuk mempelajari bagaimana hukum tersebut lahir, tumbuh, dan berkembang dari masa ke masa, di mana sejarah hukum memegang peranan yang sangat vital dalam proses tersebut. Dalam mempelajari hukum itu sendiri, terdapat beberapa metode pendekatan yang digunakan, seperti metode idealis yang melihat hukum sebagai perwujudan nilai-nilai keadilan tertentu, serta metode normatif analitis yang memandang hukum sebagai sistem aturan abstrak yang otonom.

Sementara itu, dari sisi tujuan pembelajarannya, materi Pengantar Ilmu Hukum bertujuan agar mahasiswa atau pembelajar mampu memahami secara mendalam mengenai pengertian, fungsi, serta kedudukan ilmu hukum. Tujuan utama dari mempelajari materi ini adalah agar seseorang menyadari arti pentingnya kedudukan dasar-dasar ilmu hukum sebagai fondasi yang kokoh dalam studi ilmu hukum lanjutan. Secara lebih spesifik, tujuan mempelajari ilmu hukum mencakup kemampuan untuk mendefinisikan ilmu hukum itu sendiri, memahami berbagai metode yang dapat digunakan untuk mempelajari hukum secara tepat, serta menguraikan kedudukan dan fungsi ilmu hukum sebagai dasar pijakan berpikir yuridis. Melalui pemahaman tujuan ini, diharapkan pembelajar tidak hanya mampu menguasai batasan konseptual objek hukum, tetapi juga dapat berpartisipasi secara aktif dalam dinamika kegiatan belajar-mengajar hukum di tingkat akademik.

### B. Perbedaan dan Hubungan PIH dan PHI
Berdasarkan buku Pengantar Ilmu Hukum oleh J. B. Daliyo, S.H., perbedaan utama antara Pengantar Ilmu Hukum (PIH) dan Pengantar Hukum Indonesia (PHI) terletak pada objek dan fungsinya. PIH memiliki objek hukum pada umumnya yang bersifat universal serta tidak terbatas pada ruang dan waktu, dengan fungsi untuk mendasari setiap orang yang ingin mempelajari ilmu hukum beserta pengertian-pengertian dasarnya. Sebaliknya, PHI berfokus pada hukum positif Indonesia sebagai suatu sistem hukum yang sedang berlaku di Indonesia dalam garis besar, yang berfungsi mengantarkan siapa saja untuk mempelajari hukum yang berlaku secara nyata di Tanah Air. Meskipun memiliki fokus objek yang berbeda, kedua mata kuliah dasar keahlian ini mempunyai hubungan yang sangat erat dan saling menunjang. PIH perlu dipelajari terlebih dahulu untuk memahami konsep serta pengertian dasar hukum sebelum mendalami hukum positif Indonesia, di mana pokok-pokok bahasan dalam PHI sendiri pada dasarnya merupakan bentuk contoh konkrit dari materi yang dikaji di dalam PIH.

### C. Disiplin Hukum (Ilmu Hukum, Filsafat Hukum, dan Manfaat Hukum)
Disiplin hukum merupakan suatu sistem ajaran yang menentukan kenyataan atau gejala-gejala yang dihadapi manusia dalam kehidupan bermasyarakat yang berkaitan dengan hukum. Dalam ruang lingkup kajian hukum, terdapat perbedaan antara ilmu hukum, filsafat hukum, dan manfaat hukum:
1. **Ilmu Hukum**: Bertugas untuk mempelajari dan mengkaji segala seluk-beluk yang berkaitan dengan hukum secara komprehensif, menyeluruh, dan universal, mencakup asal-mula lahirnya hukum, hakikat hukum, asas fundamental, sistem hukum, hingga fungsi hukum dalam masyarakat.
2. **Filsafat Hukum**: Merupakan bagian dari disiplin hukum yang bersifat mendasar dan abstrak, yang mengkaji pertanyaan-pertanyaan mendasar mengenai hakikat, nilai-nilai dasar, serta cita-cita keadilan dari hukum itu sendiri.
3. **Manfaat Hukum**: Berkaitan dengan tujuan praktis dan fungsional dari keberadaan hukum dalam kehidupan bermasyarakat, seperti menjaga ketertiban dan kedamaian, menjadi sarana pengendali sosial (*social control*), mendorong pembaharuan masyarakat (*social engineering*), serta memberikan kepastian dan keadilan bagi warga negara.`,
      },
      {
        id: 'ls-2', module_id: '1', chapter_number: 2, is_locked: false,
        title: 'Norma dan Kaidah Sosial',
        description: 'Macam-macam kaidah sosial (agama, kesusilaan, kesopanan, hukum), penggolongan Prof. Dr. Sudikno Mertokusumo, S.H., dan perbandingan sanksi.',
        duration: '25 menit', video_url: 'https://www.youtube.com/embed/fR9w1VqOny4',
        content_body: `Dalam kehidupan bermasyarakat, manusia berinteraksi satu sama lain dan memerlukan pedoman tingkah laku yang disebut norma atau kaidah sosial. Kaidah-kaidah ini menjaga keteraturan dan keharmonisan hidup bersama.

### Macam-Macam Kaidah Sosial

#### 1. Kaidah Agama
Kaidah agama atau kaidah kepercayaan yaitu kaidah sosial yang asalnya dari Tuhan dan berisikan larangan-larangan, perintah-perintah dan anjuran-anjuran. Kaidah ini merupakan tuntunan hidup manusia untuk menuju ke arah yang baik dan benar. Kaidah agama mengatur tentang kewajiban-kewajiban manusia kepada Tuhan dan kepada dirinya sendiri. Pelanggaran terhadap kaidah agama ada sanksinya, namun sanksi itu akan datang dari Tuhan di akhirat kelak.
Contoh-contoh kaidah agama (diambil dari sepuluh perintah):
1. Jangan memuja berhala, berbaktilah kepada-Ku saja dan cintailah Aku lebih dari segala sesuatu.
2. Hormatilah ibu bapamu.
3. Jangan membunuh.
4. Jangan mencuri.
5. Jangan berbuat cabul.

#### 2. Kaidah Kesusilaan
Kaidah kesusilaan adalah peraturan hidup yang berasal dari suara hati nurani manusia. Suara hati manusia menentukan perbuatan mana yang baik dan perbuatan mana yang buruk, oleh karenanya kaidah kesusilaan bergantung pada pribadi manusia. Manusia berbuat baik atau buruk karena bisikan suara hatinya. Kaidah kesusilaan mendorong manusia untuk kebaikan akhlak pribadinya guna penyempurnaan manusia. Kaidah kesusilaan melarang juga manusia untuk mencuri, berbuat cabul dan lain-lain, karena hal tersebut dirasa bertentangan dengan kaidah kesusilaan yang ada dalam hati nurani setiap manusia normal. Kaidah kesusilaan ditujukan kepada sikap batin manusia, asalnya dari manusia sendiri maka yang mengancam setiap pelanggaran kaidah kesusilaan adalah batin manusia itu sendiri (merasa bersalah, menyesal). Sanksinya bukanlah paksaan dari luar dirinya melainkan dari batinnya sendiri, oleh karena itu kaidah kesusilaan bersifat **otonom**.
Contoh-contoh kaidah kesusilaan:
1. Berbuatlah jujur.
2. Hormatilah sesamamu.
3. Jangan berzina.
4. Jangan mencuri.
5. Jangan membunuh.

#### 3. Kaidah Kesopanan
Kaidah kesopanan adalah peraturan hidup yang timbul dari pergaulan dalam masyarakat tertentu. Oleh karena itu kaidah kesopanan dinamakan pula kaidah sopan santun, tata krama, atau adat. Kaidah sopan santun ditujukan kepada sikap lahir setiap pelakunya demi ketertiban masyarakat dan untuk mencapai suasana keakraban dalam pergaulan, sehingga tujuannya bukan manusia sebagai pribadi melainkan manusia sebagai makhluk sosial yang hidup bersama di tengah masyarakat. Sanksi terhadap setiap pelanggar kaidah kesopanan adalah mendapat celaan atau pengucilan dari masyarakat di mana ia berada. Dengan demikian sanksi itu dipaksakan oleh kekuasaan dari luar yaitu masyarakat, sehingga kaidah kesopanan bersifat **heteronom**.
Contoh-contoh kaidah kesopanan:
1. Orang muda wajib menghormati orang yang lebih tua.
2. Jika seseorang akan memasuki rumah orang lain harus meminta izin lebih dahulu.
3. Mempersilakan duduk seorang wanita hamil yang berada dalam kendaraan umum yang sarat penumpang.
4. Mengenakan pakaian pantas jika menghadiri pesta.
5. Menggunakan barang orang lain harus seizin pemiliknya.

#### 4. Kaidah Hukum
Kaidah hukum adalah peraturan yang dibuat atau yang dipositifkan secara resmi oleh penguasa masyarakat atau penguasa negara, mengikat setiap orang dan berlakunya dapat dipaksakan oleh aparat masyarakat atau aparat negara, sehingga berlakunya kaidah hukum dapat dipertahankan. Kaidah hukum ditujukan kepada sikap lahir manusia atau perbuatan konkret yang dilakukan manusia. Kaidah hukum tidak mempersoalkan apakah sikap batin seseorang itu baik atau buruk; yang diperhatikan adalah bagaimana perbuatan lahiriah orang itu. Kaidah hukum tidak akan memberi sanksi kepada seseorang yang mempunyai sikap batin yang buruk, tetapi yang akan diberi sanksi adalah perwujudan sikap batin yang buruk itu menjadi perbuatan nyata. Namun demikian kaidah hukum tidak hanya memberikan kewajiban saja tetapi juga memberikan hak. Asal mula dan sanksi bagi pelanggar kaidah hukum datang dari luar diri manusia, sehingga bersifat **heteronom**.
Contoh-contoh kaidah hukum:
1. Perkawinan adalah sah, apabila dilakukan menurut hukum masing-masing agamanya dan kepercayaannya (Pasal 2 ayat 1 UU No. 1/1974).
2. Tiap-tiap perikatan adalah untuk memberikan sesuatu, untuk berbuat sesuatu atau untuk tidak berbuat sesuatu (Pasal 1234 KUHPerdata/BW).
3. Apabila suatu persetujuan perburuhan dibuat tertulis maka biaya akte beserta lain-lain biaya tambahan harus dipikul oleh majikan (Pasal 1601d KUHPerdata/BW).
4. Barang siapa sengaja merampas nyawa orang lain tanpa hak, diancam karena pembunuhan, dengan pidana penjara paling lama lima belas tahun (Pasal 338 KUHP).
5. Barang siapa mengambil barang sesuatu, yang seluruhnya atau sebagian kepunyaan orang lain, dengan maksud untuk dimiliki secara melawan hukum, diancam karena pencurian, dengan pidana penjara paling lama lima tahun atau denda (Pasal 362 KUHP).

### Penggolongan Kaidah Sosial (Prof. Dr. Sudikno Mertokusumo, S.H.)
Prof. Dr. Sudikno Mertokusumo, S.H. menggolongkan keempat macam kaidah sosial tersebut menjadi dua golongan besar:
a. **Tata kaidah dengan aspek pribadi**: Meliputi kaidah agama/kepercayaan dan kaidah kesusilaan.
b. **Tata kaidah dengan aspek kehidupan antarpribadi**: Meliputi kaidah kesopanan dan kaidah hukum.

### Tingkatan Sanksi & Mengapa Kaidah Hukum Mutlak Diperlukan
Keempat kaidah sosial tersebut mengandung tingkatan mengenai sanksi yang diterima oleh pelanggar:
- **Kaidah agama**: Sanksinya akan diterima oleh pelanggar nanti di akhirat, sehingga sanksi ini kurang berpengaruh terhadap mereka yang tidak meyakini agama tersebut.
- **Kaidah kesusilaan**: Sanksinya dialami pelanggarnya dalam batin bila kemudian ia sadar, sehingga kurang berpengaruh bagi mereka yang tidak sadar atau tebal rasa malunya.
- **Kaidah kesopanan**: Sanksinya berupa celaan atau pengucilan masyarakat. Namun bagi mereka yang tidak peduli akan celaan demikian, sanksi tersebut tidak berpengaruh untuk memperbaiki perbuatan.

Oleh karena ketiga kaidah sosial tersebut sanksinya kurang tegas dan tidak dapat dipaksakan oleh kekuasaan resmi, maka ketiganya kurang dapat menjamin ketertiban dan keteraturan masyarakat. Oleh karena itu sangat diperlukan **kaidah hukum**. Masalah yang diatur dalam kaidah hukum lebih lengkap jika dibandingkan dengan ketiga kaidah sosial lainnya. Sanksi dari kaidah hukum tegas dan dapat dipaksakan oleh aparat negara, sehingga diharapkan dapat menjamin terciptanya ketertiban, keadilan, keamanan, dan ketenteraman dalam masyarakat.`,
      },
      {
        id: 'ls-3', module_id: '1', chapter_number: 3, is_locked: false,
        title: 'Karakteristik dan Sanksi Kaidah Hukum',
        description: 'Sifat-sifat pengatur kaidah hukum, karakteristik sanksi hukum menurut J.B. Daliyo, dan jenis-jenis sanksi (pidana, perdata, administratif).',
        duration: '20 menit', video_url: 'https://www.youtube.com/embed/8hFJIJOhI-w',
        content_body: `Kaidah hukum adalah peraturan yang dibuat atau ditetapkan secara resmi oleh penguasa masyarakat atau negara, bersifat mengikat setiap orang, dan pelaksanaannya dapat dipaksakan oleh aparat yang berwenang. Tujuannya adalah menciptakan ketertiban, keteraturan, dan keadilan dalam masyarakat.

### Sifat-Sifat yang Mengatur Kaidah Hukum
Berdasarkan materi dalam literatur hukum (J.B. Daliyo, S.H.), karakteristik kaidah hukum dapat dijelaskan sebagai berikut:

**a. Mengatur perbuatan lahiriah manusia**
Kaidah hukum mengatur tindakan atau perbuatan nyata yang dilakukan manusia, bukan sekadar pikiran, niat, atau keadaan batinnya. Seseorang tidak dikenai sanksi hukum hanya karena memiliki niat buruk; yang diperhatikan adalah perbuatan nyata yang dilakukan dan apakah perbuatan tersebut melanggar hukum.
*Contoh:* Seseorang yang hanya merasa kesal kepada orang lain tidak otomatis melanggar hukum. Namun, apabila ia melakukan tindakan fisik atau perusakan yang memenuhi unsur tindak pidana, tindakan tersebut dapat dikenai sanksi sesuai ketentuan hukum.

**b. Bersifat memaksa**
Kaidah hukum memiliki sifat memaksa karena pelaksanaannya dapat dipaksakan oleh penguasa atau aparat yang berwenang. Artinya, seseorang tidak dapat mengabaikan kewajiban hukum hanya karena tidak ingin mematuhinya.
*Contoh:* Setiap pengguna jalan wajib menaati peraturan lalu lintas. Pelanggaran dapat dikenai sanksi tilang atau pidana sesuai ketentuan yang berlaku.

**c. Bersifat heteronom**
Kaidah hukum bersifat heteronom karena aturan dan sanksinya berasal dari luar diri individu, yaitu dari pihak yang memiliki kewenangan untuk menetapkan dan menegakkan hukum. Dengan demikian, keberlakuan hukum tidak semata-mata bergantung pada kehendak pribadi seseorang.
*Contoh:* Kewajiban membayar pajak ditetapkan oleh peraturan perundang-undangan negara, bukan berdasarkan kerelaan atau keinginan pribadi wajib pajak.

**d. Memberikan hak dan kewajiban**
Kaidah hukum tidak hanya menetapkan kewajiban, tetapi juga memberikan hak kepada setiap subjek hukum. Hak dan kewajiban tersebut menciptakan hubungan hukum antara individu, kelompok, atau badan hukum.
*Contoh:* Dalam perjanjian jual beli, penjual berhak menerima pembayaran dan berkewajiban menyerahkan barang, sedangkan pembeli berhak menerima barang dan berkewajiban membayar sesuai kesepakatan.

**e. Dibuat atau ditetapkan secara resmi**
Kaidah hukum memiliki dasar keberlakuan yang diakui dalam sistem hukum. Aturan tersebut ditetapkan oleh pihak yang berwenang atau bersumber dari sumber hukum yang diakui, sehingga berbeda dari aturan pergaulan biasa yang hanya didasarkan pada kebiasaan masyarakat.
*Contoh:* Ketentuan mengenai perkawinan, perjanjian, dan tindak pidana diatur dalam peraturan perundang-undangan resmi yang disahkan oleh lembaga legislatif dan eksekutif.

### Sanksi-Sanksi Terkait Kaidah Hukum
Menurut materi J.B. Daliyo, kaidah hukum memiliki sanksi yang tegas dan dapat dipaksakan oleh penguasa atau aparat yang berwenang. Sanksi ini bertujuan menjaga ketertiban dan keteraturan masyarakat serta mewujudkan keadilan dan keamanan.

#### A. Karakteristik Sanksi Hukum
1. **Bersifat tegas**: Memiliki konsekuensi nyata yang ditetapkan secara pasti berdasarkan ketentuan hukum positif.
2. **Dapat dipaksakan**: Penegakannya tidak bergantung pada kerelaan pelanggar, melainkan ditegakkan melalui aparat berwenang (kepolisian, jaksa, pengadilan, jurusita) sesuai prosedur hukum.
3. **Berasal dari pihak luar individu**: Ditetapkan oleh sistem hukum dan otoritas negara yang sah.
4. **Bertujuan menciptakan ketertiban dan keadilan**: Berfungsi memulihkan hak, menegakkan kepastian aturan, dan melindungi masyarakat.

#### B. Jenis-Jenis Sanksi Hukum
1. **Sanksi Pidana**: Dijatuhkan kepada pelaku tindak pidana berdasarkan ketentuan hukum pidana (misalnya: pidana penjara, kurungan, atau denda).
2. **Sanksi Perdata**: Akibat hukum yang timbul dalam hubungan keperdataan, misalnya kewajiban membayar ganti rugi (kompensasi) karena wanprestasi atau perbuatan melawan hukum (*onrechtmatige daad*).
3. **Sanksi Administratif**: Diberikan oleh pejabat atau badan administrasi pemerintahan yang berwenang akibat pelanggaran aturan tata usaha negara (misalnya: peringatan tertulis, pembekuan izin, atau pencabutan izin usaha).

#### C. Perbedaan Sanksi Kaidah Hukum dengan Kaidah Sosial Lainnya
Dalam perspektif Prof. Dr. Sudikno Mertokusumo, kaidah sosial dibedakan menjadi:
- **Aspek pribadi** (kaidah agama dan kesusilaan): Sanksinya bersifat gaib di akhirat atau penyesalan batin internal.
- **Aspek kehidupan antarpribadi** (kaidah kesopanan dan kaidah hukum): Sanksi kesopanan hanya berupa celaan sosial informal yang tidak dapat dipaksakan secara fisik, sedangkan sanksi kaidah hukum memiliki daya paksa eksternal melalui aparat negara dengan prosedur yang pasti.`,
      },
      {
        id: 'ls-4', module_id: '1', chapter_number: 4, is_locked: false,
        title: 'Konsep Dasar dalam Hukum',
        description: 'Hukum objektif & subjektif, peristiwa hukum (rechtsfeit), perbuatan hukum (rechtshandeling), hubungan hukum (rechtsbetrekking), dan akibat hukum.',
        duration: '30 menit', video_url: 'https://www.youtube.com/embed/HfSUo7FgJcE',
        content_body: `Dalam mempelajari ilmu hukum, terdapat konsep-konsep fundamental yang menjadi instrumen utama dalam menganalisis setiap fenomena yuridis.

### 1. Hukum Objektif dan Hukum Subjektif
Dalam studi hukum, kaidah atau peraturan hukum pada dasarnya dibedakan menjadi dua jenis utama:
- **Hukum Objektif**: Keseluruhan peraturan yang mengatur hubungan antara sesama anggota masyarakat, antara anggota masyarakat dengan masyarakat, antara masyarakat yang satu dengan yang lain, serta antara masyarakat dengan negara. Peraturan ini bersifat umum dan tidak hanya mengatur hubungan orang-orang tertentu saja. Hubungan antaranggota masyarakat yang diatur oleh hukum objektif dinamakan **hubungan hukum**, sedangkan para pihaknya dinamakan **subjek hukum**.
- **Hukum Subjektif**: Kewenangan atau hak yang diperoleh seseorang berdasarkan hukum objektif. Ketika seseorang mengadakan hubungan hukum dengan pihak lain, maka dari hubungan tersebut timbul hak dan kewajiban timbal balik. Hak atau kewajiban yang diperoleh karena interaksi dalam hubungan hukum itulah yang disebut hukum subjektif.
*Contoh:* Dalam perjanjian jual beli tanah antara pihak A dan B, peraturan perundang-undangan yang mengatur perjanjian jual beli merupakan hukum objektif. Sedangkan hak A menerima uang pembayaran dan kewajibannya menyerahkan tanah merupakan hukum subjektif bagi A; sebaliknya hak B menerima tanah dan kewajibannya membayar lunas merupakan hukum subjektif bagi B.

### 2. Peristiwa Hukum (Rechtsfeit)
Peristiwa hukum adalah setiap kejadian atau fakta di dalam masyarakat yang oleh hukum dihubungkan dengan timbulnya suatu akibat hukum (lahirnya, berubahnya, beralihnya, atau hapusnya hak dan kewajiban). Peristiwa hukum diklasifikasikan menjadi dua kelompok utama:

#### A. Peristiwa Hukum karena Perbuatan Manusia (Fakta Volunter)
1. **Perbuatan Hukum**: Tindakan manusia yang akibat hukumnya memang dikehendaki oleh pelakunya dan ditetapkan oleh hukum berdasarkan kemauan para pihak (contoh: pembuatan surat perjanjian, hibah, atau wasiat).
2. **Perbuatan Melanggar Hukum (*Onrechtmatige Daad*)**: Tindakan yang bertentangan dengan hukum, menimbulkan kerugian bagi pihak lain, dan mewajibkan pelaku untuk membayar ganti rugi, meskipun kerugian tersebut tidak diniatkan sejak awal (contoh: kelalaian berkendara yang menyebabkan kecelakaan lalu lintas).

#### B. Peristiwa Hukum karena Bukan Perbuatan Manusia (Fakta Alamiah)
Peristiwa yang terjadi bukan karena tindakan manusia, melainkan karena peristiwa alam yang oleh hukum tetap diberi akibat hukum:
- **Kelahiran**: Lahirnya anak secara otomatis melahirkan hak keperdataan sebagai subjek hukum yang dilindungi undang-undang.
- **Kematian**: Meninggalnya seseorang memicu beralihnya hak dan kewajiban keperdataan kepada para ahli waris (pembukaan warisan).
- **Lewatnya Waktu (Daluwarsa / *Verjaring*)**: Berlalunya waktu tertentu dapat menimbulkan hak baru (misalnya hak milik melalui *possessio usurpatio*) atau menggugurkan hak/tuntutan hukum (kadaluwarsa penuntutan pidana atau perdata).

### 3. Perbuatan Hukum (Rechtshandeling)
Perbuatan hukum adalah setiap tindakan subjek hukum (orang atau badan hukum) yang sengaja dilakukan dan oleh hukum dikehendaki serta ditetapkan untuk menimbulkan akibat hukum tertentu.
Berdasarkan pihak yang terlibat, dibedakan menjadi:
- **Perbuatan Hukum Sepihak (Unilateral)**: Dilakukan oleh satu pihak saja dan telah cukup untuk melahirkan akibat hukum yang sah menurut undang-undang (contoh: pembuatan surat wasiat/*testament*, pengunduran diri, atau pemberian kuasa).
- **Perbuatan Hukum Timbal Balik (Bilateral / Multilateral)**: Dilakukan oleh dua pihak atau lebih berdasarkan kata sepakat (*konsensus*) dan menimbulkan hak serta kewajiban timbal balik (contoh: perjanjian jual beli, sewa-menyewa, kerja, utang-piutang).

### 4. Hubungan Hukum (Rechtsbetrekking)
Hubungan hukum adalah hubungan antara dua atau lebih subjek hukum di mana hak dari subjek hukum yang satu berhadapan dengan kewajiban dari subjek hukum yang lain, dan seluruh interaksi tersebut diatur serta dilindungi oleh hukum objektif.
Sebuah hubungan hukum yang ideal harus memenuhi **tiga unsur utama**:
1. **Adanya Subjek Hukum**: Pihak-pihak yang berhubungan, terdiri dari manusia (*natuurlijke persoon*) dan badan hukum (*rechtspersoon*).
2. **Adanya Objek Hukum**: Pokok perhatian atau sasaran hubungan hukum (benda berwujud/tidak berwujud, hak kekayaan intelektual, jasa, atau uang).
3. **Adanya Ikatan Hak dan Kewajiban**: Pihak pertama memiliki wewenang/hak menuntut prestasi, sedangkan pihak kedua memikul kewajiban (beban prestasi) untuk memenuhinya.

### 5. Akibat Hukum
**Pengertian**: Akibat hukum adalah konsekuensi yang timbul dari suatu perbuatan atau peristiwa yang diatur oleh hukum, berupa timbulnya hak dan kewajiban, perubahan atau berakhirnya status/hubungan hukum, serta munculnya sanksi hukum (R. Soeroso, *Pengantar Ilmu Hukum*, 2011; Sudikno Mertokusumo).

**Tiga Bentuk Akibat Hukum**:
1. Lahir, berubah, atau lenyapnya keadaan hukum (contoh: status perkawinan berubah setelah putusan perceraian).
2. Lahir, berubah, atau lenyapnya hubungan hukum (contoh: perjanjian jual beli yang sah melahirkan hak dan kewajiban).
3. Timbulnya sanksi atau konsekuensi hukum (contoh: wanprestasi memicu tuntutan ganti rugi).

**Dasar Hukum dalam KUHPerdata**:
- **Pasal 1320**: Mengatur 4 syarat sah perjanjian (kesepakatan, kecakapan, objek tertentu, dan sebab yang halal).
- **Pasal 1338**: Perjanjian yang dibuat secara sah berlaku sebagai undang-undang bagi para pihak dan harus dilaksanakan dengan itikad baik.
- **Pasal 1238**: Mengatur tentang keadaan lalai dalam memenuhi perikatan.
- **Pasal 1243**: Mengatur tentang kewajiban ganti rugi akibat wanprestasi.

**Pentingnya Akibat Hukum**:
Memberikan kepastian hukum, melindungi hak masyarakat, memperjelas kewajiban setiap pihak, mencegah terjadinya sengketa, dan menegakkan konsekuensi yuridis yang adil.`,
      },
      {
        id: 'ls-5', module_id: '1', chapter_number: 5, is_locked: false,
        title: 'Sumber-Sumber Hukum',
        description: 'Tujuan pembelajaran, sumber hukum materiil dan formil (UU, kebiasaan, yurisprudensi, traktat, perjanjian, doktrin), asas-asas, dan hierarki perundang-undangan.',
        duration: '35 menit', video_url: 'https://www.youtube.com/embed/QWiga-kPDhY',
        content_body: `Sumber hukum adalah segala sesuatu yang menimbulkan aturan-aturan yang mengikat dan memaksa, sehingga apabila aturan itu dilanggar akan menimbulkan sanksi yang tegas dan nyata bagi pelanggarnya.

### Makna Sumber Hukum (Prof. Dr. Sudikno Mertokusumo, S.H.)
Prof. Dr. Sudikno Mertokusumo, S.H. menjelaskan bahwa istilah sumber hukum digunakan dalam beberapa arti:
1. **Sebagai asas hukum**: Sesuatu yang merupakan permulaan hukum (misalnya kehendak Tuhan, akal manusia, jiwa bangsa).
2. **Menunjukkan sumber hukum terdahulu**: Memberi bahan-bahan bagi hukum yang sekarang berlaku.
3. **Sebagai sumber berlakunya**: Memberi kekuatan formal pada peraturan hukum (penguasa, masyarakat).
4. **Sebagai sumber dari mana hukum dapat diketahui**: Dokumen-dokumen, undang-undang, prasasti, batu bertulis.
5. **Sebagai sumber terbentuknya hukum**: Sumber yang melahirkan norma hukum.

Secara hakiki, sumber hukum dibedakan menjadi dua: **Sumber Hukum Materiil** dan **Sumber Hukum Formal**.

---

### A. Sumber Hukum Materiil
Sumber hukum materiil adalah faktor-faktor yang turut serta menentukan isi hukum. Penelaahannya ditinjau dari berbagai disiplin ilmu seperti sosiologi hukum, sejarah, agama, psikologi, dan ilmu pemerintahan. Faktor penentu isi hukum terdiri atas:
1. **Faktor Idiil**: Patokan-patokan tetap mengenai keadilan yang harus ditaati oleh pembentuk hukum.
2. **Faktor Kemasyarakatan**: Hal-hal yang nyata hidup dalam masyarakat, meliputi:
   - Struktur ekonomi dan kebutuhan masyarakat.
   - Kebiasaan atau adat istiadat yang telah melekat.
   - Hukum yang hidup (*living law*) dalam masyarakat.
   - Tata hukum negara-negara lain.
   - Keyakinan agama dan kesusilaan.
   - Gejala-gejala sosial kemasyarakatan.

---

### B. Sumber Hukum Formil
Sumber hukum formal adalah sumber hukum dengan bentuk tertentu yang merupakan dasar berlakunya hukum secara formal (*causa efficient* dari hukum). Terdiri atas:

#### 1. Undang-Undang
Peraturan negara yang dibentuk oleh alat perlengkapan negara yang berwenang dan mengikat masyarakat.
- **Undang-undang dalam arti materiil**: Setiap peraturan perundang-undangan yang isinya mengikat langsung masyarakat umum.
- **Undang-undang dalam arti formal**: Peraturan yang dibentuk oleh lembaga yang berwenang melalui prosedur resmi (di Indonesia dibentuk oleh Presiden dengan persetujuan DPR, Pasal 5 ayat 1 jo Pasal 20 UUD 1945).

**Asas-Asas Berlakunya Undang-Undang**:
- *Non-retroactive*: Undang-undang tidak berlaku surut.
- *Lex posterior derogat legi priori*: Aturan baru membatalkan aturan lama yang mengatur materi sama.
- *Lex superior derogat legi inferiori*: Aturan tingkat lebih tinggi mengesampingkan aturan tingkat lebih rendah.
- *Lex specialis derogat legi generali*: Aturan khusus mengesampingkan aturan umum.
- Undang-undang tidak dapat diganggu gugat.

**Hierarki Peraturan Perundang-Undangan (TAP MPRS No. XX/MPRS/1966)**:
1. UUD 1945
2. Ketetapan MPR (TAP MPR)
3. Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (PERPU)
4. Peraturan Pemerintah (PP)
5. Keputusan Presiden (Keppres)
6. Peraturan Menteri / Instruksi Menteri
7. Peraturan Pelaksana Lainnya

#### 2. Kebiasaan dan Adat (Custom)
Perbuatan manusia mengenai hal tertentu yang dilakukan berulang-ulang dan diterima masyarakat.
**Syarat agar menjadi sumber hukum formal**:
1. Adanya perbuatan tertentu yang dilakukan berulang-ulang dalam masyarakat tertentu.
2. Adanya keyakinan hukum dari masyarakat bahwa perbuatan itu memang harus ditaati (*opinio necessitatis*).

#### 3. Yurisprudensi
Keputusan pengadilan atau putusan hakim terdahulu. Berdasarkan Pasal 22 AB jo Pasal 14 UU No. 14/1970, hakim tidak boleh menolak perkara dengan dalih hukumnya belum ada atau kurang jelas (*ius curia novit*), melainkan wajib menemukan hukumnya. Hakim bertindak sebagai pembentuk hukum (*judge-made law*).
- **Yurisprudensi Tetap**: Putusan hakim yang diikuti berulang-ulang untuk kasus serupa (*standard arresten*).
- **Yurisprudensi Tidak Tetap**: Putusan hakim yang bukan merupakan *standard arresten*.

#### 4. Traktat (Perjanjian Antarnegara)
Perjanjian yang diadakan oleh dua negara atau lebih. Mengikat negara peserta dan warga negaranya.
- **4 Prosedur**: Penetapan isi perjanjian, Persetujuan badan legislatif (DPR, Pasal 11 UUD 1945), Ratifikasi oleh Presiden, dan Tukar-menukar piagam pengesahan.
- **Jenis**: Bilateral, Multilateral, Kolektif.
- **Treaty vs Agreement**: *Treaty* membutuhkan persetujuan DPR (hal-hal penting seperti wilayah, politik), sedangkan *Agreement* cukup diberitahukan kepada DPR dalam bentuk Keppres.

#### 5. Perjanjian (Overeenkomst)
Peristiwa di mana dua orang atau lebih saling berjanji untuk melakukan atau tidak melakukan perbuatan tertentu, melahirkan perikatan (*verbintenis*).
- **Syarat Sah (Pasal 1320 KUHPerdata)**: Cakap hukum, Kata sepakat (*konsensus*), Objek tertentu (*hal tertentu*), Sebab yang halal (*causa yang halal*).
- **Unsur-Unsur Perjanjian**: *Essentialia* (syarat mutlak), *Naturalia* (melekat alami), *Accidentalia* (klausul khusus tambahan).
- **Asas-Asas Utama**: Asas Konsensualisme, Asas Kebebasan Berkontrak (*freedom of contract*), Asas *Pacta Sunt Servanda* (mengikat sebagai undang-undang bagi para pihak).

#### 6. Doktrin
Pendapat para sarjana hukum terkemuka yang menjadi rujukan hakim dalam pertimbangan putusannya. Dalam hukum internasional, doktrin diakui secara tegas sebagai sumber hukum formal berdasarkan Pasal 38 ayat (1) Mahkamah Internasional.

> **Catatan Kritis Para Ahli:**
> - **L.J. Van Apeldoorn**: Menyatakan yurisprudensi, perjanjian, dan doktrin bukan sumber hukum formal murni, melainkan faktor-faktor pembantu dalam pembentukan hukum.
> - **Bellefroid**: Menyatakan secara tegas bahwa yurisprudensi, perjanjian, dan doktrin adalah sumber hukum formal.`,
      },
      {
        id: 'ls-6', module_id: '1', chapter_number: 6, is_locked: false,
        title: 'Asas-Asas dan Sistem Hukum',
        description: 'Pengertian asas hukum menurut para ahli (Bellefroid, Scholten, Hommes, Satjipto), sistem hukum dunia, serta penggolongan & pembidangan hukum.',
        duration: '25 menit', video_url: 'https://www.youtube.com/embed/jg0QxW6fAok',
        content_body: `Asas-asas hukum merupakan prinsip dasar yang menjadi landasan pembentukan, penerapan, serta penafsiran hukum yang menjadi tumpuan berpikir dalam suatu sistem hukum.

### Pengertian Asas Hukum
Dalam Kamus Besar Bahasa Indonesia (KBBI), terdapat tiga artian asas:
1. Dasar, alas, pedoman (misalnya: batu yang baik untuk alas rumah).
2. Suatu kebenaran yang menjadi pokok atau tumpuan berpikir dan berpendapat.
3. Cita-cita yang menjadi dasar suatu perkumpulan atau negara.

#### Pengertian Menurut Para Ahli:
- **Bellefroid**: Merupakan norma dasar yang dijabarkan dari hukum positif dan tidak berasal dari aturan yang lebih umum, melainkan pengendapan hukum positif dalam masyarakat.
- **P. Scholten**: Merupakan kecenderungan-kecenderungan yang disyaratkan oleh pandangan kesusilaan kita pada hukum, yang merupakan sifat umum pembawaan hukum yang mutlak harus ada.
- **Eikema Hommes**: Asas hukum bukanlah norma-norma hukum konkret, melainkan landasan yang kuat dan paling luas bagi lahirnya peraturan hukum yang berlaku serta penunjuk arah pembentukan hukum positif.
- **Satjipto Rahardjo**: Merupakan unsur pokok dan jantung dari peraturan hukum karena menjadi landasan terluas bagi lahirnya aturan. Asas hukum menjadi jembatan antara peraturan hukum dengan cita-cita sosial dan pandangan etis masyarakat, sehingga peraturan berubah sifatnya menjadi bagian dari tatanan etis.

Asas hukum lahir dari perluasan pemikiran filsafat hukum, kesusilaan, dan kebutuhan tata tertib. Berfungsi sebagai:
1. Landasan pembentukan hukum.
2. Pedoman interpretasi (penafsiran hukum).
3. Pengendali hukum positif agar tetap adil, konsisten, dan sesuai nilai kemasyarakatan.

---

### Sistem Hukum di Dunia
Sistem hukum di dunia terbagi dalam lima rumpun utama:
1. **Civil Law** (Indonesia, Jerman, Prancis, Jepang, Italia): Menekankan kodifikasi aturan tertulis sebagai sumber hukum utama. Hakim bertindak menerapkan hukum (*la bouche de la loi*), bukan menciptakan hukum.
2. **Common Law** (Inggris, Amerika Serikat, Australia, Kanada): Menekankan putusan pengadilan terdahulu (*preseden / stare decisis*) sebagai sumber hukum utama; hakim memiliki peran besar membentuk hukum.
3. **Religious Law** (Arab Saudi, Iran, UEA): Bersumber dari ajaran agama, misalnya hukum Islam/syariat (Al-Qur'an dan Hadis).
4. **Customary Law** (sebagian wilayah Afrika, Papua Nugini): Berdasarkan kebiasaan dan tradisi adat masyarakat setempat.
5. **Mixed Law** (misalnya Nigeria, Indonesia): Menggabungkan dua atau lebih sistem hukum (misalnya *civil law* dipadukan dengan hukum adat dan hukum agama).

---

### Penggolongan & Pembidangan Hukum
Hukum diklasifikasikan berdasarkan beberapa kriteria:

1. **Menurut Bentuk**:
   - *Hukum Tertulis yang Dikodifikasikan*: Disusun lengkap, sistematis, dan teratur dalam satu kitab undang-undang tanpa perlu aturan tambahan (contoh: KUHPerdata, KUHP).
   - *Hukum Tertulis yang Tidak Dikodifikasikan*: Tertulis namun tersebar terpisah dan memerlukan peraturan pelaksanaan (contoh: UU Perdagangan, UU Lingkungan Hidup).
   - *Hukum Tidak Tertulis*: Norma yang hidup dalam adat atau kebiasaan masyarakat tanpa dokumen resmi undang-undang.

2. **Menurut Isi**:
   - *Hukum Publik*: Mengatur kepentingan umum dan hubungan warga negara dengan negara (Hukum Tata Negara, Hukum Administrasi Negara, Hukum Pidana, Hukum Pajak).
   - *Hukum Privat*: Mengatur hubungan antarindividu untuk kepentingan pribadi (Hukum Perdata, Hukum Dagang).

3. **Menurut Waktu**:
   - *Hukum Tetap / Permanen*: Berlaku selamanya sampai dicabut (misalnya UUD 1945).
   - *Hukum Sementara*: Berlaku pada periode tertentu saja.
   - *Ius Constitutum* (Hukum Positif): Hukum yang berlaku saat ini bagi masyarakat tertentu.
   - *Ius Constituendum*: Hukum yang dicita-citakan di masa depan (misalnya RUU dalam proses legislasi).

4. **Menurut Wilayah**:
   - *Hukum Nasional*: Berlaku di dalam wilayah suatu negara tertentu.
   - *Hukum Internasional*: Mengatur hubungan hukum antarnegara di dunia internasional.
   - *Hukum Asing*: Hukum yang berlaku di yurisdiksi negara lain.`,
      },
      {
        id: 'ls-7', module_id: '1', chapter_number: 7, is_locked: false,
        title: 'Dinamika dan Penegakan Hukum',
        description: 'Dinamika regulasi di Indonesia, HAM & demokrasi, penemuan hukum, mazhab-mazhab ilmu hukum, serta teori penegakan hukum Lawrence M. Friedman.',
        duration: '30 menit', video_url: 'https://www.youtube.com/embed/lBqpjoxGyR4',
        content_body: `Dinamika regulasi hukum di Indonesia didasarkan pada keragaman sumber hukum yang mengintegrasikan sistem *civil law*, hukum adat, dan pengaruh *common law*.

### Dinamika Regulasi Hukum di Indonesia
Tantangan utama yang dihadapi Indonesia adalah menciptakan konsistensi, harmonisasi, dan efektivitas regulasi:
- **Tumpang tindih regulasi**: Sering terjadi antara undang-undang di tingkat pusat dan peraturan daerah (*hyper-regulation*), menyebabkan ketidaksinkronan dan ketidakpastian hukum.
- **Kualitas pembentukan regulasi**: Proses pembentukan yang terburu-buru tanpa kajian naskah akademik yang mendalam dan rentan diintervensi kepentingan politik jangka pendek.
- **Kapasitas dan integritas penegakan hukum**: Aparat penegak hukum (kepolisian, kejaksaan, kehakiman) kerap menghadapi godaan korupsi, intervensi, serta kesadaran hukum masyarakat yang masih perlu ditingkatkan.

### Hak Asasi Manusia dan Demokrasi
Hak Asasi Manusia (HAM) dan Demokrasi merupakan konsepsi kemanusiaan dan relasi sosial yang lahir dari sejarah peradaban manusia di dunia. Konsepsi HAM dan demokrasi selalu saling terkait dan tidak dapat dipisahkan dari konsepsi **Negara Hukum (*Rechtsstaat*)**. Segala bentuk hukum dan peraturan perundang-undangan yang berlaku dalam negara hukum tidak boleh bertentangan dengan prinsip-prinsip HAM dan demokrasi.

### Penemuan Hukum (Rechtsvinding)
Ketika hakim memeriksa perkara namun aturan perundang-undangannya belum ada atau kurang jelas, hakim wajib melakukan penemuan hukum (*rechtsvinding*) melalui metode interpretasi (gramatikal, historis, sosiologis, teleologis) atau konstruksi hukum (analogi, *argumentum a contrario*, penyempitan hukum).

---

### Mazhab-Mazhab / Aliran Ilmu Hukum
1. **Mazhab Hukum Alam (*Natural Law*)**:
   Hukum bersumber dari Tuhan (irasional) atau rasio/akal manusia (rasional), bersifat universal, abadi, serta mencerminkan nilai moral dan keadilan sejati. (Tokoh: Thomas Aquinas, Hugo Grotius, Immanuel Kant).
2. **Mazhab Positivisme Hukum**:
   Hukum adalah perintah penguasa yang tertulis (*legal positivism*) dan wajib dipisahkan secara tegas dari moral atau keadilan (*teori hukum murni*). (Tokoh: John Austin, Hans Kelsen).
3. **Utilitarianisme**:
   Hukum bertujuan memberikan kemanfaatan dan kebahagiaan sebesar-besarnya bagi jumlah orang yang terbanyak (*the greatest happiness of the greatest number*). (Tokoh: Jeremy Bentham, John Stuart Mill).
4. **Mazhab Sejarah (*Historical School*)**:
   Hukum tidak dibuat oleh penguasa secara sengaja, melainkan tumbuh dan berkembang bersama jiwa bangsa (*volksgeist*) serta adat istiadat masyarakat. (Tokoh: Friedrich Carl von Savigny, Gustav Hugo).
5. **Sociological Jurisprudence**:
   Hukum yang baik adalah hukum yang hidup di dalam masyarakat (*living law*) dan harus disesuaikan dengan kenyataan sosial. (Tokoh: Eugen Ehrlich, Roscoe Pound).
6. **Realisme Hukum (*Legal Realism*)**:
   Hukum ditekankan pada kenyataan operasional di lapangan, khususnya melalui keputusan hakim dan proses penegakan hukum di peradilan (*law in action*). (Tokoh: Oliver Wendell Holmes, Karl Llewellyn).

---

### Penegakan Hukum dan Sanksi
Sanksi merupakan sarana pemaksa agar kaidah hukum ditaati:

#### 1. Sanksi Pidana
- **Tujuan**: Memberikan nestapa atau hukuman bagi pelanggar berat ketertiban umum guna efek jera dan pencegahan.
- **Pidana Pokok** (berdasarkan KUHP dan UU No. 1 Tahun 2023): Pidana penjara, tutupan, pengawasan, denda, dan kerja sosial (serta pidana mati yang bersifat khusus).
- **Pidana Tambahan**: Pencabutan hak tertentu, perampasan barang tertentu, pengumuman putusan hakim.
- **Penjatuhan**: Mutlak hanya dapat diputuskan oleh hakim melalui proses peradilan pidana yang sah.

#### 2. Sanksi Perdata
- **Tujuan**: Memulihkan hak keperdataan yang dilanggar dan menyelesaikan sengketa antarpihak.
- **Bentuk Putusan**:
  - *Kondemnator*: Menghukum pihak yang kalah membayar ganti rugi atau melakukan suatu prestasi.
  - *Deklarator*: Menegaskan suatu keadaan hukum yang sah.
  - *Konstitutif*: Meniadakan atau menciptakan status hukum baru (misal: putusan pailit atau perceraian).

#### 3. Sanksi Administratif
- **Tujuan**: Menghentikan pelanggaran dan memulihkan keadaan semula (*reparatif*) tanpa harus melalui proses pengadilan.
- **Bentuk**: Peringatan tertulis, paksaan pemerintahan (*bestuursdwang*), uang paksa (*dwangsom*), pencabutan izin usaha, dan denda administratif.

---

### Tiga Unsur Penegakan Hukum (Lawrence M. Friedman)
Menurut teori sosiologi hukum Lawrence M. Friedman, efektivitas penegakan hukum bergantung pada tiga unsur sistem hukum yang harus berjalan harmonis:
1. **Substansi Hukum (*Legal Substance*)**: Isi dan norma peraturan perundang-undangan yang berkualitas, jelas, dan tidak saling bertentangan.
2. **Struktur Hukum (*Legal Structure*)**: Institusi, lembaga, dan aparat penegak hukum (kepolisian, kejaksaan, pengadilan, advokat) yang berintegritas dan profesional.
3. **Budaya Hukum (*Legal Culture*)**: Sikap, nilai, kepatuhan, dan tingkat kesadaran hukum masyarakat dalam menghormati hukum.`,
      },
    ],
    'introduction-to-law': [
      { id: 'itl-1', module_id: '2', chapter_number: 1, is_locked: false, title: 'Apa Itu Hukum?', description: 'Pahami definisi fundamental dan hakikat hukum.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/razlee5kmt8', content_body: 'Hukum adalah sistem aturan yang dibuat dan ditegakkan oleh lembaga sosial atau pemerintah untuk mengatur perilaku. Hukum membentuk politik, ekonomi, sejarah, dan masyarakat dengan berbagai cara, dan berfungsi sebagai mediator sosial utama dalam hubungan antar manusia.' },
      { id: 'itl-2', module_id: '2', chapter_number: 2, is_locked: false, title: 'Fungsi Hukum', description: 'Jelajahi fungsi-fungsi sosial utama yang diemban hukum dalam masyarakat.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/cVwtFrHeskg', content_body: 'Hukum menjalankan beberapa fungsi vital: menjaga ketertiban dan stabilitas sosial, melindungi hak dan kebebasan individu, menyelesaikan sengketa melalui proses yang sah, serta mempromosikan keadilan dan kesetaraan dalam masyarakat.' },
      { id: 'itl-3', module_id: '2', chapter_number: 3, is_locked: false, title: 'Jenis-Jenis Hukum', description: 'Bedakan kategori dan cabang-cabang hukum yang berbeda.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/XrBgaZbkO7g', content_body: 'Hukum dapat dikategorikan dalam berbagai cara: hukum publik (tata negara, administrasi negara, pidana) vs. hukum privat (perdata, dagang, keluarga), hukum materiil vs. hukum formil, serta hukum nasional vs. hukum internasional.' },
      { id: 'itl-4', module_id: '2', chapter_number: 4, is_locked: false, title: 'Sistem Hukum di Dunia', description: 'Bandingkan sistem hukum utama: civil law, common law, dan sistem campuran.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/xaJuFbtuK7E', content_body: 'Sistem hukum utama dunia meliputi civil law (berdasarkan kodifikasi undang-undang, berlaku di Eropa kontinental dan Indonesia), common law (berdasarkan preseden peradilan, digunakan di Inggris dan AS), hukum Islam (Syariah), dan sistem campuran yang menggabungkan unsur-unsur tersebut.' },
    ],
    'criminal-law': [
      { id: 'cl-1', module_id: '3', chapter_number: 1, is_locked: false, title: 'Unsur-Unsur Hukum Pidana', description: 'Pelajari unsur-unsur esensial yang membentuk suatu perbuatan pidana.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/7R5DUxKik2Y', content_body: 'Hukum pidana mensyaratkan pembuktian dua unsur utama: actus reus (perbuatan pidana yang nyata) dan mens rea (niat jahat/kesalahan). Untuk sebagian besar kejahatan, keduanya harus terpenuhi agar tanggung jawab pidana dapat dikenakan.' },
      { id: 'cl-2', module_id: '3', chapter_number: 2, is_locked: false, title: 'Jenis-Jenis Tindak Pidana', description: 'Ulas kategori-kategori utama tindak pidana yang diakui hukum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/cWW4iKzjTuo', content_body: 'Tindak pidana diklasifikasikan menjadi kejahatan dan pelanggaran, atau dikategorikan berdasarkan jenisnya: kejahatan terhadap orang (pembunuhan, penganiayaan), kejahatan harta benda (pencurian, penipuan), kejahatan kerah putih, dan tindak pidana ketertiban umum.' },
      { id: 'cl-3', module_id: '3', chapter_number: 3, is_locked: false, title: 'Hukum Acara Pidana', description: 'Ikuti tahapan perkara pidana dari penangkapan hingga pemidanaan.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/GI79ofCmH5U', content_body: 'Hukum acara pidana mencakup aturan-aturan yang mengatur penyelidikan, penangkapan, dakwaan, persidangan, dan pemidanaan terhadap tersangka/terdakwa. Asas due process menjamin keadilan di setiap tahapan.' },
      { id: 'cl-4', module_id: '3', chapter_number: 4, is_locked: false, title: 'Sanksi Pidana dan Pemidanaan', description: 'Pahami filosofi dan praktik pemidanaan dalam hukum pidana.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/qCITb5zsZm4', content_body: 'Pemidanaan bertujuan untuk mencapai efek jera (deterrence), pembalasan (retribusi), rehabilitasi, dan isolasi. Hakim mempertimbangkan faktor-faktor seperti sifat tindak pidana, riwayat pelaku, serta keadaan yang meringankan atau memberatkan.' },
    ],
    'legal-clinic': [
      { id: 'lc-1', module_id: '4', chapter_number: 1, is_locked: false, title: 'Pengantar Klinik Hukum', description: 'Gambaran umum klinik hukum dan perannya dalam pendidikan hukum.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/Vg5A64wT3vc', content_body: 'Klinik hukum memberikan pengalaman langsung dalam pekerjaan hukum nyata atau simulasi. Mahasiswa mengembangkan keterampilan praktis dengan mendampingi klien nyata di bawah pengawasan dosen, menjembatani teori dan praktik.' },
      { id: 'lc-2', module_id: '4', chapter_number: 2, is_locked: false, title: 'Konsultasi Klien', description: 'Kuasai keterampilan yang diperlukan untuk berkonsultasi dan memberikan saran kepada klien secara efektif.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/bFSidbI2oSo', content_body: 'Konsultasi klien yang efektif melibatkan mendengarkan secara aktif, komunikasi yang jelas, empati, dan kemampuan menerjemahkan masalah hukum yang kompleks menjadi saran yang mudah dipahami. Membangun kepercayaan adalah fondasinya.' },
      { id: 'lc-3', module_id: '4', chapter_number: 3, is_locked: false, title: 'Analisis Kasus', description: 'Kembangkan kemampuan menganalisis kasus hukum secara sistematis dan menyeluruh.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/sTIyYbsfgGg', content_body: 'Analisis kasus mengharuskan identifikasi fakta-fakta kunci, isu-isu hukum, aturan yang berlaku, dan argumen. Metode IRAC (Issue/Isu, Rule/Aturan, Application/Penerapan, Conclusion/Kesimpulan) adalah kerangka terstruktur untuk analisis hukum.' },
      { id: 'lc-4', module_id: '4', chapter_number: 4, is_locked: false, title: 'Dokumentasi Hukum', description: 'Pelajari cara menyusun, menelaah, dan mengelola dokumen-dokumen hukum penting.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/guLzPxKWthY', content_body: 'Dokumentasi hukum mencakup kontrak, surat gugatan, memori banding, memorandum, dan korespondensi. Ketepatan, kejelasan, dan struktur sangat penting. Bahkan kesalahan kecil dalam dokumen dapat berdampak hukum yang besar.' },
    ],
    'legal-reasoning': [
      { id: 'lr-1', module_id: '5', chapter_number: 1, is_locked: false, title: 'Penalaran Hukum Deduktif', description: 'Terapkan logika deduktif pada argumen hukum dan analisis kasus.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/KmW9nhgzEoA', content_body: 'Penalaran deduktif bergerak dari aturan umum ke kesimpulan spesifik. Dalam hukum, ini biasanya berarti: (1) nyatakan aturan hukum, (2) terapkan aturan pada fakta, (3) capai kesimpulan. Pendekatan silogistik ini merupakan inti analisis hukum.' },
      { id: 'lr-2', module_id: '5', chapter_number: 2, is_locked: false, title: 'Penalaran Induktif dalam Hukum', description: 'Gunakan kasus-kasus spesifik untuk membangun prinsip hukum yang umum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/p3NA1RSlXZM', content_body: 'Penalaran induktif bergerak dari pengamatan spesifik (kasus-kasus) ke prinsip-prinsip umum. Dalam common law, hakim membangun aturan dengan memeriksa pola di berbagai putusan, secara bertahap membentuk doktrin hukum.' },
      { id: 'lr-3', module_id: '5', chapter_number: 3, is_locked: false, title: 'Penalaran Analogis', description: 'Pahami bagaimana analogi digunakan untuk menyelesaikan masalah hukum baru.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/clhP_tVfF30', content_body: 'Penalaran analogis membandingkan kasus saat ini dengan putusan-putusan sebelumnya atau prinsip-prinsip yang sudah mapan. Jika kemiripannya cukup kuat, aturan yang sama diterapkan. Ini sangat berharga ketika tidak ada preseden langsung.' },
      { id: 'lr-4', module_id: '5', chapter_number: 4, is_locked: false, title: 'Metode Penelitian Hukum', description: 'Kuasai alat dan teknik penelitian hukum yang efektif.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/guLzPxKWthY', content_body: 'Penelitian hukum melibatkan pencarian dan analisis sumber primer dan sekunder. Keterampilan utama meliputi mengidentifikasi undang-undang yang relevan, menemukan yurisprudensi, menggunakan basis data hukum, dan mensintesis informasi menjadi argumen hukum yang koheren.' },
    ],
    'career-preparation': [
      { id: 'cp-1', module_id: '6', chapter_number: 1, is_locked: false, title: 'Gambaran Umum Profesi Hukum', description: 'Ulas peran dan sektor yang beragam dalam profesi hukum.', duration: '15 menit', video_url: 'https://www.youtube.com/embed/FE-ydsVlRa8', content_body: 'Profesi hukum mencakup praktik swasta, dinas pemerintahan, departemen hukum perusahaan, hukum kepentingan publik, dan akademi. Setiap jalur menawarkan lingkungan kerja, kompensasi, dan peluang dampak yang berbeda.' },
      { id: 'cp-2', module_id: '6', chapter_number: 2, is_locked: false, title: 'Membangun Karier Hukum Kamu', description: 'Strategi praktis untuk memulai dan mengembangkan karier di bidang hukum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/PBbixTgr9hI', content_body: 'Membangun karier hukum memerlukan magang, mentorship, pengembangan spesialisasi, lulus ujian advokat, dan terus memperbarui pengetahuan. Merek profesional yang kuat dan jaringan yang luas adalah aset yang tak ternilai.' },
      { id: 'cp-3', module_id: '6', chapter_number: 3, is_locked: false, title: 'Etika Profesi', description: 'Pahami kewajiban etis yang mengatur para profesional hukum.', duration: '20 menit', video_url: 'https://www.youtube.com/embed/GTwZfKRC3y8', content_body: 'Etika hukum mencakup kewajiban kerahasiaan, loyalitas, kompetensi, dan kejujuran. Pelanggaran dapat mengakibatkan tindakan disiplin, pencabutan izin, atau tanggung jawab pidana. Etika adalah fondasi untuk menjaga kepercayaan publik terhadap sistem hukum.' },
      { id: 'cp-4', module_id: '6', chapter_number: 4, is_locked: false, title: 'Membangun Jaringan di Dunia Hukum', description: 'Manfaatkan hubungan profesional untuk mengembangkan karier hukum kamu.', duration: '25 menit', video_url: 'https://www.youtube.com/embed/ikANvtqkzEU', content_body: 'Membangun jaringan sangat penting dalam dunia hukum. Acara asosiasi advokat, jaringan alumni, LinkedIn, dan wawancara informasional menghubungkan Anda dengan peluang dan mentor. Berikan sebanyak yang Anda terima — hubungan dibangun atas dasar nilai bersama.' },
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

// ─── Video Pembelajaran (Learning Videos) ───────────────────────────────────

export const expertContent: Record<Lang, Array<{
  id: string; title: string; category: string; author: string;
  published_date: string; content_body: string; read_time: string; image: string; video_url: string; tags: string[];
}>> = {
  en: [
    {
      id: '1',
      title: 'Video Lesson: Foundational Legal Reasoning & Juridical Thinking',
      category: 'Legal Theory',
      author: 'Prof. Dr. Sari Winata, S.H., M.H.',
      published_date: '2025-04-12',
      read_time: '18 min video',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/KmW9nhgzEoA',
      tags: ['Video', 'Legal Reasoning', 'Jurisprudence'],
      content_body: `In this comprehensive video lecture, Prof. Dr. Sari Winata breaks down the mechanics of legal reasoning and how judges and legal counsel construct airtight arguments.\n\n### Video Outline & Timestamps\n- **00:00 - 03:15**: Introduction to Juridical Thinking & The Syllogism\n- **03:16 - 08:45**: Deductive vs. Inductive Arguments in Case Law\n- **08:46 - 13:20**: Analogical Reasoning and Distinguishing Precedents\n- **13:21 - 18:00**: Real-world Courtroom Application & Summary\n\n### Key Takeaways\n1. Legal reasoning provides objectivity and protects judicial integrity.\n2. Deductive logic moves from statutory premises to factual conclusions.\n3. Mastery of legal interpretation is paramount for legal drafting and advocacy.`,
    },
    {
      id: '2',
      title: 'Video Lesson: Criminal Liability, Actus Reus & Mens Rea',
      category: 'Criminal Law',
      author: 'Dr. Andi Setiawan, S.H., LL.M.',
      published_date: '2025-04-08',
      read_time: '15 min video',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/Utxw1GArcKo',
      tags: ['Video', 'Criminal Law', 'Penal Code'],
      content_body: `A deep-dive video walkthrough into the core elements required to establish criminal liability under modern penal codes.\n\n### Video Outline & Timestamps\n- **00:00 - 02:30**: Core Principles of Criminal Responsibility\n- **02:31 - 07:15**: Deconstructing Actus Reus (The Prohibited Conduct)\n- **07:16 - 11:40**: Establishing Mens Rea (Intent, Negligence, Malice)\n- **11:41 - 15:00**: Defenses, Justifications & Excuses\n\n### Key Takeaways\n1. Both actus reus and mens rea must concur in criminal offenses.\n2. Strict liability exceptions are narrowly construed.\n3. Mitigating circumstances alter penal outcomes.`,
    },
    {
      id: '3',
      title: 'Video Masterclass: Corporate Practice & Commercial Transactions',
      category: 'Corporate Practice',
      author: 'Rizky Pratama, S.H.',
      published_date: '2025-04-03',
      read_time: '20 min video',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/ocRQfr2Yuhs',
      tags: ['Video', 'Corporate Law', 'Contracts'],
      content_body: `An engaging video session exploring the real-life workflows of corporate lawyers handling commercial agreements and regulatory compliance.\n\n### Video Outline & Timestamps\n- **00:00 - 04:00**: Structure of Top Commercial Agreements\n- **04:01 - 10:30**: Due Diligence Best Practices & Risk Audits\n- **10:31 - 16:15**: Negotiating Reps & Warranties, Indemnities\n- **16:16 - 20:00**: Closing Protocols & Practical Career Advice\n\n### Key Takeaways\n1. Commercial awareness is as vital as black-letter law.\n2. Thorough due diligence mitigates post-transaction liability.\n3. Contract drafting demands absolute linguistic precision.`,
    },
    {
      id: '4',
      title: 'Video Lecture: Constitutional Law & Judicial Review in Indonesia',
      category: 'Constitutional Law',
      author: 'Dr. Maya Lestari, S.H., M.H.',
      published_date: '2025-03-28',
      read_time: '16 min video',
      image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/xaJuFbtuK7E',
      tags: ['Video', 'Constitutional Law', 'Human Rights'],
      content_body: `This video explores how constitutional review safeguards fundamental human rights and democratic checks and balances.\n\n### Video Outline & Timestamps\n- **00:00 - 03:20**: The Supremacy of UUD 1945\n- **03:21 - 08:10**: Jurisdiction of the Constitutional Court (Mahkamah Konstitusi)\n- **08:11 - 12:45**: Landmark Rulings on Fundamental Freedoms\n- **12:46 - 16:00**: Preparing a Constitutional Petition\n\n### Key Takeaways\n1. The constitution is the supreme law of the land.\n2. Judicial review checks statutory overreach against human rights guarantees.\n3. Standing requires demonstrable constitutional impairment.`,
    },
    {
      id: '5',
      title: 'Video Simulation: Civil Litigation & Courtroom Proceedings',
      category: 'Civil Procedure',
      author: 'Prof. Dr. Budi Santoso, S.H., M.S.',
      published_date: '2025-03-22',
      read_time: '22 min video',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/5NPTAI3LX8k',
      tags: ['Video', 'Litigation', 'Courtroom'],
      content_body: `Step inside the courtroom with this step-by-step video simulation of civil dispute proceedings from filing a lawsuit to final execution.\n\n### Video Outline & Timestamps\n- **00:00 - 04:30**: Pre-trial Mediation & Settlement Attempts\n- **04:31 - 10:00**: Drafting Pleadings, Answers, and Counterclaims\n- **10:01 - 16:45**: Evidentiary Stage (Documentary, Witness, Expert)\n- **16:46 - 22:00**: Verdict Delivery & Execution Protocols\n\n### Key Takeaways\n1. Court-mandated mediation must precede trial.\n2. The burden of proof rests on the asserting party.\n3. Judgment execution requires formal writ (*fiat eksekusi*).`,
    },
    {
      id: '6',
      title: 'Video Guide: Legal Tech & Future Career Navigation',
      category: 'Legal Careers',
      author: 'Dimas Aditya, S.H.',
      published_date: '2025-03-15',
      read_time: '14 min video',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/FE-ydsVlRa8',
      tags: ['Video', 'Career', 'Legal Tech'],
      content_body: `Discover how legal technology and artificial intelligence are revolutionizing modern law practice and how students can position themselves for success.\n\n### Video Outline & Timestamps\n- **00:00 - 03:00**: The Changing Landscape of Legal Services\n- **03:01 - 07:30**: AI in Document Review and Legal Research\n- **07:31 - 11:00**: Emerging Practice Areas: Fintech, Privacy, Cyber\n- **11:01 - 14:00**: Actionable Steps to Build Your Legal Brand\n\n### Key Takeaways\n1. Tech literacy is now a baseline requirement for new attorneys.\n2. Specialized knowledge in digital regulation commands premium value.\n3. Early career networking compounds long-term professional growth.`,
    },
  ],
  id: [
    {
      id: '1',
      title: 'Video Pembelajaran: Fondasi Penalaran Hukum & Cara Berpikir Yuridis',
      category: 'Teori Hukum',
      author: 'Prof. Dr. Sari Winata, S.H., M.H.',
      published_date: '12 Apr 2025',
      read_time: '18 menit video',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/KmW9nhgzEoA',
      tags: ['Video', 'Penalaran Hukum', 'Filsafat Hukum'],
      content_body: `Dalam video pembelajaran mendalam ini, Prof. Dr. Sari Winata membedah teknik penalaran hukum, logika silogisme hukum, dan cara menyusun argumen yuridis yang solid.\n\n### Garis Besar Video & Capaian Belajar\n- **00:00 - 03:15**: Pengantar Cara Berpikir Yuridis & Silogisme\n- **03:16 - 08:45**: Perbedaan Argumen Deduktif dan Induktif dalam Kasus Konkret\n- **08:46 - 13:20**: Penalaran Analogis dan Konstruksi Hukum\n- **13:21 - 18:00**: Penerapan Praktis di Pengadilan & Ringkasan Materi\n\n### Poin Kunci Pembelajaran\n1. Penalaran hukum menjamin keadilan objektif dan bebas dari bias emosional.\n2. Logika silogistik menghubungkan aturan umum perundang-undangan dengan fakta kasus.\n3. Penguasaan interpretasi hukum adalah kunci utama dalam pembuatan legal opinion dan advokasi.`,
    },
    {
      id: '2',
      title: 'Video Pembelajaran: Pertanggungjawaban Pidana, Actus Reus & Mens Rea',
      category: 'Hukum Pidana',
      author: 'Dr. Andi Setiawan, S.H., LL.M.',
      published_date: '8 Apr 2025',
      read_time: '15 menit video',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/Utxw1GArcKo',
      tags: ['Video', 'Hukum Pidana', 'KUHP'],
      content_body: `Video tutorial komprehensif yang menguraikan unsur-unsur penting untuk menentukan pertanggungjawaban pidana berdasarkan KUHP baru dan doktrin hukum pidana modern.\n\n### Garis Besar Video & Capaian Belajar\n- **00:00 - 02:30**: Prinsip Dasar Asas Legalitas dan Kesalahan\n- **02:31 - 07:15**: Membedah Unsur Actus Reus (Perbuatan Lahiriah yang Dilarang)\n- **07:16 - 11:40**: Membuktikan Mens Rea (Kesengajaan, Kealpaan/Kelalaian)\n- **11:41 - 15:00**: Alasan Penghapus Pidana (Pembenar dan Pemaaf)\n\n### Poin Kunci Pembelajaran\n1. Tiada pidana tanpa kesalahan (geen straf tanpa schuld).\n2. Unsur objektif dan subjektif wajib terpenuhi secara kumulatif.\n3. Pemahaman alasan pembenar dan pemaaf sangat krusial dalam pembelaan advokat.`,
    },
    {
      id: '3',
      title: 'Video Masterclass: Praktik Corporate Lawyer & Negosiasi Kontrak Bisnis',
      category: 'Hukum Korporasi',
      author: 'Rizky Pratama, S.H.',
      published_date: '3 Apr 2025',
      read_time: '20 menit video',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/ocRQfr2Yuhs',
      tags: ['Video', 'Hukum Bisnis', 'Kontrak'],
      content_body: `Sesi video pembelajaran praktis mengenai rutinitas harian seorang konsultan hukum perusahaan (corporate lawyer), teknik due diligence, dan perancangan kontrak komersial.\n\n### Garis Besar Video & Capaian Belajar\n- **00:00 - 04:00**: Struktur Pokok Perjanjian Komersial Berstandar Internasional\n- **04:01 - 10:30**: Praktik Uji Tuntas Hukum (Legal Due Diligence)\n- **10:31 - 16:15**: Negosiasi Klausul Representasi, Jaminan, dan Ganti Rugi\n- **16:16 - 20:00**: Proses Closing Transaksi & Tips Menembus Firma Hukum Papan Atas\n\n### Poin Kunci Pembelajaran\n1. Pemahaman bisnis klien sama pentingnya dengan penguasaan pasal hukum.\n2. Ketelitian dalam klausul pembatasan tanggung jawab melindungi aset korporasi.\n3. Bahasa hukum kontrak harus lugas, tegas, dan tidak bermakna ganda.`,
    },
    {
      id: '4',
      title: 'Video Pembelajaran: Hukum Tata Negara & Pengujian Undang-Undang di MK',
      category: 'Hukum Tata Negara',
      author: 'Dr. Maya Lestari, S.H., M.H.',
      published_date: '28 Mar 2025',
      read_time: '16 menit video',
      image: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/xaJuFbtuK7E',
      tags: ['Video', 'Hukum Tata Negara', 'Mahkamah Konstitusi'],
      content_body: `Video pembelajaran yang membahas supremasi konstitusi UUD 1945, perlindungan hak konstitusional warga negara, dan mekanisme pengujian undang-undang (judicial review).\n\n### Garis Besar Video & Capaian Belajar\n- **00:00 - 03:20**: Konsep Negara Hukum (Rechtsstaat) & Supremasi Konstitusi\n- **03:21 - 08:10**: Kewenangan Mahkamah Konstitusi dalam UUD 1945\n- **08:11 - 12:45**: Bedah Putusan Penting Terkait Hak Asasi Manusia\n- **12:46 - 16:00**: Cara Menyusun Permohonan Uji Materiil yang Kuat\n\n### Poin Kunci Pembelajaran\n1. Konstitusi adalah hukum tertinggi yang membatasi kesewenang-wenangan penguasa.\n2. Legal standing pemohon wajib membuktikan adanya kerugian konstitusional nyata.\n3. Putusan MK bersifat final and binding serta mengikat umum (erga omnes).`,
    },
    {
      id: '5',
      title: 'Video Simulasi: Praktik Peradilan Perdata dari Gugatan hingga Eksekusi',
      category: 'Hukum Acara Perdata',
      author: 'Prof. Dr. Budi Santoso, S.H., M.S.',
      published_date: '22 Mar 2025',
      read_time: '22 menit video',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/5NPTAI3LX8k',
      tags: ['Video', 'Peradilan', 'Litigasi'],
      content_body: `Saksikan simulasi langkah demi langkah proses persidangan perdata di pengadilan negeri, mulai dari mediasi wajib, pembuktian surat dan saksi, hingga pelaksanaan putusan.\n\n### Garis Besar Video & Capaian Belajar\n- **00:00 - 04:30**: Tahapan Mediasi Wajib Berdasarkan Perma No. 1/2016\n- **04:31 - 10:00**: Penyusunan Gugatan, Jawaban, Eksepsi, dan Rekonvensi\n- **10:01 - 16:45**: Tahap Pembuktian (Surat, Saksi, Ahli, dan Sumpah)\n- **16:46 - 22:00**: Pembacaan Putusan & Prosedur Eksekusi Riil\n\n### Poin Kunci Pembelajaran\n1. Tahap mediasi wajib ditempuh untuk mencari perdamaian para pihak.\n2. Barang siapa mendalilkan sesuatu hak, wajib membuktikannya (Pasal 1865 KUHPerdata).\n3. Eksekusi putusan hanya dapat dilaksanakan melalui penetapan ketua pengadilan.`,
    },
    {
      id: '6',
      title: 'Video Panduan: Legal Tech & Peluang Karier Sarjana Hukum Masa Depan',
      category: 'Karier & Profesi',
      author: 'Dimas Aditya, S.H.',
      published_date: '15 Mar 2025',
      read_time: '14 menit video',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
      video_url: 'https://www.youtube.com/embed/FE-ydsVlRa8',
      tags: ['Video', 'Legal Tech', 'Karier Hukum'],
      content_body: `Video inspiratif mengenai bagaimana kecerdasan buatan (AI) dan digitalisasi mengubah industri hukum, serta keahlian baru yang dibutuhkan sarjana hukum masa depan.\n\n### Garis Besar Video & Capaian Belajar\n- **00:00 - 03:00**: Disrupsi Teknologi dalam Layanan Jasa Hukum\n- **03:01 - 07:30**: Pemanfaatan AI untuk Riset Hukum dan Analisis Berkas\n- **07:31 - 11:00**: Peluang Karier Baru: Legal Tech Engineer, Data Privacy Officer\n- **11:01 - 14:00**: Langkah Konkret Membangun Portofolio & Personal Branding Yuridis\n\n### Poin Kunci Pembelajaran\n1. Sarjana hukum yang melek teknologi memiliki keunggulan kompetitif tinggi.\n2. Etika profesi dan empati manusia tidak dapat digantikan oleh kecerdasan buatan.\n3. Bangun reputasi profesional dan jaringan sedini mungkin di bangku kuliah.`,
    },
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
      { slug: 'legal-science', name: 'Introduction to Legal Science (PIH)', completed: 3, total: 7, status: 'In Progress', last_accessed: '12 Apr 2025' },
      { slug: 'introduction-to-law', name: 'Introduction to Law', completed: 2, total: 4, status: 'In Progress', last_accessed: '10 Apr 2025' },
      { slug: 'criminal-law', name: 'Criminal Law', completed: 1, total: 4, status: 'In Progress', last_accessed: '8 Apr 2025' },
      { slug: 'legal-clinic', name: 'Legal Clinic', completed: 0, total: 4, status: 'Not Started', last_accessed: '-' },
      { slug: 'legal-reasoning', name: 'Legal Reasoning & Research Methodology', completed: 0, total: 4, status: 'Not Started', last_accessed: '-' },
      { slug: 'career-preparation', name: 'Legal Industry & Career Preparation', completed: 0, total: 4, status: 'Not Started', last_accessed: '-' },
    ],
    recent_quizzes: [
      { chapter: 'Chapter 1 – Meaning & Scope of Legal Science', module: 'Introduction to Legal Science (PIH)', date: '10 Apr 2025', score: 80 },
      { chapter: 'Chapter 2 – Legal Concepts', module: 'Introduction to Law', date: '10 Apr 2025', score: 60 },
      { chapter: 'Chapter 5 – Sources of Law', module: 'Introduction to Legal Science (PIH)', date: '8 Apr 2025', score: 100 },
      { chapter: 'Chapter 3 – Elements of Crime', module: 'Criminal Law', date: '3 Apr 2025', score: 70 },
      { chapter: 'Chapter 1 – Legal Clinic', module: 'Legal Clinic', date: '-', score: -1 },
    ],
  },
  id: {
    overall_percentage: 62,
    completed_chapters: 5,
    total_chapters: 7,
    total_hours: '4j 32m',
    quizzes_taken: 4,
    average_score: 80,
    streak_days: 5,
    points: 1250,
    modules: [
      { slug: 'legal-science', name: 'Pengantar Ilmu Hukum (PIH)', completed: 3, total: 7, status: 'Sedang Berjalan', last_accessed: '12 Apr 2025' },
      { slug: 'introduction-to-law', name: 'Pengantar Hukum', completed: 2, total: 4, status: 'Sedang Berjalan', last_accessed: '10 Apr 2025' },
      { slug: 'criminal-law', name: 'Hukum Pidana', completed: 1, total: 4, status: 'Sedang Berjalan', last_accessed: '8 Apr 2025' },
      { slug: 'legal-clinic', name: 'Klinik Hukum', completed: 0, total: 4, status: 'Belum Dimulai', last_accessed: '-' },
      { slug: 'legal-reasoning', name: 'Penalaran Hukum & Metodologi Penelitian', completed: 0, total: 4, status: 'Belum Dimulai', last_accessed: '-' },
      { slug: 'career-preparation', name: 'Industri Hukum & Persiapan Karier', completed: 0, total: 4, status: 'Belum Dimulai', last_accessed: '-' },
    ],
    recent_quizzes: [
      { chapter: 'Bab 1 – Pengantar & Ruang Lingkup', module: 'Pengantar Ilmu Hukum (PIH)', date: '10 Apr 2025', score: 80 },
      { chapter: 'Bab 2 – Konsep Hukum', module: 'Pengantar Hukum', date: '10 Apr 2025', score: 60 },
      { chapter: 'Bab 5 – Sumber-Sumber Hukum', module: 'Pengantar Ilmu Hukum (PIH)', date: '8 Apr 2025', score: 100 },
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
