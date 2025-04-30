import placeholderPhoto from "../assets/mentors/placeholder.png";


import berkAtilPhoto from "../assets/mentors/berk-atil.jpeg";
import basakOnderPhoto from "../assets/mentors/basak-onder.jpg";
import omerBenzerPhoto from "../assets/mentors/omer-benzer.jpeg";
import hamzaIsiktasPhoto from "../assets/mentors/hamza-isiktas.jpg";
import demetYaylaPhoto from "../assets/mentors/demet-yayla.jpeg";
import ahmetGedemenliPhoto from "../assets/mentors/ahmet-gedemenli.jpeg";
import abdurrahimEskiPhoto from "../assets/mentors/abdurrahim-eski.jpg";
import berkCaliskanPhoto from "../assets/mentors/berk-caliskan.jpg";
import furkanAtasoyPhoto from "../assets/mentors/furkan-atasoy.png";
import anilSeyrekPhoto from "../assets/mentors/anil-seyrek.jpeg";
import ekinGungorPhoto from "../assets/mentors/ekin-gungor.jpg";
import muhammetBatuhanIlhanPhoto from "../assets/mentors/muhammet-batuhan-ilhan.jpg";



export type Mentor = {
  name: string;
  shortDescription: string;
  description: string;
  interests: string;
  offerings: string[];
  expectations: string;
  photo: string;
};

export const mentors: Mentor[] = [
  {
    name: "Berk Atıl",
    shortDescription: "PhD student in NLP at Penn State, with experience in bioinformatics and machine learning research.",
    description: `
I’m a third-year PhD student in NLP at Pennsylvania State University. 
I’ve been actively involved in research for over five years, focusing on NLP and bioinformatics. 
During my Bachelor's studies at Bogazici University, I worked on bioinformatics (drug-protein interaction predictions) and presented at RECOMB. 
I also did research at University of Twente, predicting new web links for efficient web crawling.
Currently, my research focuses on offensiveness detection and mitigation in large language models.`,
    interests: `
Social sciences, machine learning, NLP research, traveling, hiking, beach volleyball.`,
    offerings: [
      "Academic paths advice (MSc, PhD, research internships)",
      "Motivation letter and CV preparation",
      "Research discussions in NLP, machine learning, bioinformatics"
    ],
    expectations: `
Curiosity, eagerness to explore research topics, commitment to growth.`,
    photo: berkAtilPhoto,
  },
  {
    name: "Başak Önder",
    shortDescription: "Quantitative Technologist at Qube Research & Technologies, ex-Meta intern, systems and algorithms engineer.",
    description: `
I'm a Quantitative Technologist at Qube Research & Technologies, building high-frequency trading systems. 
Previously interned at Meta and Turkcell, focused on C++ and low-latency software development.`,
    interests: `
Problem-solving, algorithmic trading, traveling, gaming, knitting, TV series.`,
    offerings: [
      "Technical interview preparation",
      "Quant and finance system engineering insights",
      "Career guidance abroad in tech or finance"
    ],
    expectations: `
Curiosity, dedication to problem-solving, openness to feedback.`,
    photo: basakOnderPhoto,
  },
  {
    name: "Ömer Benzer",
    shortDescription: "MSc Informatics student at TUM, frontend developer, systems programmer.",
    description: `
I'm completing my MSc Informatics degree at Technical University of Munich. 
My research is in AMD remote attestation emulation, and I also work at Avelios GmbH as a frontend developer.`,
    interests: `
Systems programming, GUIs, HPC, C++, snowboarding, hiking.`,
    offerings: [
      "Career and research path advice (especially in Europe)",
      "Software building, deployment, low-level programming help",
      "Internship advice for Germany"
    ],
    expectations: `
Curiosity, motivation especially toward system-level programming.`,
    photo: omerBenzerPhoto,
  },
  {
    name: "Hamza Işıktaş",
    shortDescription: "Senior Software Engineer, specialized in mobile apps and product development lifecycle.",
    description: `
Senior Software Engineer experienced in mobile app development and product management, working at Sociable, Anadolu Sigorta, and Codeway Studios.`,
    interests: `
Mobile app development, AI integration into applications, movies, books, gaming.`,
    offerings: [
      "Mobile application development advice",
      "Building product roadmaps using user feedback"
    ],
    expectations: `
Curiosity, proactiveness, willingness to grow in mobile software development.`,
    photo: hamzaIsiktasPhoto,
  },
  {
    name: "Demet Yayla",
    shortDescription: "Software Engineer at Tradeware, focused on HFT systems, C++ and Linux internals.",
    description: `
Software Engineer specialized in low-latency, high-frequency trading systems, with prior experience at TÜBİTAK Bilgem.`,
    interests: `
High-frequency trading systems, healthcare technology, game programming, swimming, sailing, yoga.`,
    offerings: [
      "Insights into HFT engineering and C++ programming",
      "Linux synchronization, memory management expertise",
      "Career mentoring and interview preparation"
    ],
    expectations: `
Curiosity, proactivity, motivation to specialize in real-time systems.`,
    photo: demetYaylaPhoto,
  },
  {
    name: "Ahmet Gedemenli",
    shortDescription: "Senior Software Engineer at Xata, former Microsoft (Citus) engineer, database systems specialist.",
    description: `
Senior Software Engineer working on distributed databases at Xata, former engineer at Microsoft Turkey (Citus Data team).`,
    interests: `
Database design, Postgres internals, distributed systems, competitive programming, motorcycles, cocktails.`,
    offerings: [
      "Building distributed database systems",
      "Postgres internals, storage engines",
      "Career advice for remote software engineering jobs"
    ],
    expectations: `
Curiosity about databases, strong software engineering commitment.`,
    photo: ahmetGedemenliPhoto,
  },
  {
    name: "Furkan Atasoy",
    shortDescription: "Software Engineer at HubSpot, focused on backend development, infrastructure, and distributed systems.",
    description: `
  I’m a Software Engineer with experience in developing and managing high-scale software systems, focusing on infrastructure, cloud, and distributed systems.
  
  Currently, I’m based in London and working at HubSpot as a Software Engineer, focusing on backend development and infrastructure.`,
    interests: `
  Software engineering, cloud-based distributed systems, climbing, hiking, football.`,
    offerings: [
      "Interview preparation for technical and behavioral interviews (especially Big Tech)",
      "Effective communication in corporate settings",
      "Understanding the tech industry landscape in Europe (Germany, UK)",
      "Insights into MSc Software Engineering at TUM (pros/cons, academic experience)"
    ],
    expectations: `
  Curiosity, proactiveness, openness to feedback, and motivation to grow consistently as a Software Engineer.`,
    photo: furkanAtasoyPhoto,
  },
  {
    name: "Berke Çalışkan",
    shortDescription: "MSc student at Politecnico di Milano, with experience in research and industry across deep learning, simulations, and data systems.",
    description: `
  Hi! I’m Berke, a first-year MSc student in Computer Science and Engineering at Politecnico di Milano. Over the past few years, I’ve been fortunate to explore both academic research and industry.
  
  I spent a summer at Yonsei University’s Intelligence Networking Lab in South Korea, working on deep learning approaches for transmitter localization problems. Before that, I interned at Amazon’s European HQ in Luxembourg, where I worked on business intelligence systems and data-driven projects that directly impacted operations.
  
  During my Bachelor's studies at Boğaziçi University, I took part in research projects around deep learning and simulation. One of these projects was even presented at the 2023 European Headache Congress.`,
    interests: `
  Machine learning, simulations, networking, interdisciplinary research, drums, swimming, photography, soccer.`,
    offerings: [
      "Guidance on academic and career paths (MSc, PhD, internships)",
      "Help with applications, CVs, and motivation letters",
      "Insights into research topics like ML, simulation, and networked systems",
      "Advice on balancing academic research and industry experience"
    ],
    expectations: `
  Curiosity, openness to feedback, and motivation to explore and grow.`,
    photo: berkCaliskanPhoto,
  },
  {
    name: "Ekin Güngör",
    shortDescription: "Software Project Manager with dual background in Computer Engineering and Mathematics, building web-based SCADA systems and exploring interdisciplinary projects.",
    description: `
  I’m a 25 years old Software Project Manager with a double major in Computer Engineering and Mathematics. Currently, I’m leading a small team of three to build a web-based SCADA system from scratch for industrial factories. I took over the project from the investor and developed it from an initial idea into a fully functioning system.
  
  In my current role, I started with requirement elicitation and budget planning. I then handled hiring, team formation, and workflow setup. After building the team, I designed the software architecture, organized task management, established daily processes, and supported the development process through hands-on coding when needed. I also oversee UI/UX decisions, gather user feedback, and ensure the team is satisfied with their workflow.
  
  Previously, I interned at CBOT, the leading chatbot development company in Turkey, working on Automatic Spell Correction. Later, I worked on Speaker Diarization as a Machine Learning Intern at Corti (Denmark), and continued remotely as a Machine Learning Analyst, contributing to ASR models and backend ETL processes.
  
  I’m currently based in Istanbul, working remotely at ATARA while we establish our startup. I also plan to pursue a Master’s in Cognitive Science or Philosophy next winter semester.`,
    interests: `
  Human mind, psychology, language, intelligence, communication, philosophy, digital art, acting, tennis, writing.`,
    offerings: [
      "Building a software product from scratch (idea to execution)",
      "Philosophical resources to reshape perspectives",
      "Networking and finding collaborators for your ideas",
      "Project collaboration (apps, art, research, content)"
    ],
    expectations: `
  Open-mindedness, proactivity, communication, willingness to collaborate on specific creative or technical projects. I believe mentorship works best as a natural, inspiring collaboration.`,
    photo: ekinGungorPhoto,
  },
  {
    name: "Anıl Seyrek",
    shortDescription: "CTO and co-founder at Olympos, building AI-driven analytics infrastructure for startup markets with strong startup and data systems experience.",
    description: `
  I'm a CTO with experience in robust data crawling/processing systems and data-driven venture capital/investment analytics. I'm the co-founder of my current company Olympos and it has been active for 3 years. We're building an AI infrastructure system and service to provide our clients with cutting-edge deep-dive analytics on the startup market.
  
  Before Olympos, I started my career as an entrepreneur and tried to found another company, BlockLearn, an educational technology company. I couldn't make BlockLearn financially profitable and the technology+market ecosystem became less interesting to me, so I switched focus. Thanks to my two startup experiences, I can say that I know enough about how a startup or a technology would succeed/fail in a competitive market.
  
  Currently, I'm based in İstanbul/Turkey, and I'm leading a team of 4 engineers. Our company is based in the United States and our team consists of people working from multiple cities such as İstanbul, San Francisco, İzmir, Munich. I mostly work with Python, MongoDB, Postgres and have experience with data scraping tools and distributed data systems. I use Cursor as a code editor and see it as an indicator of engineering personality. I enjoy building robust systems through fast sprints and constantly push myself to explore state-of-the-art technologies.`,
    interests: `
  Engineering as a lifestyle, debugging and fixing systems, turbojet engines, computer science, building data infrastructure, agentic systems, music (drums and bağlama), music theory, art appreciation, traveling, hosting gatherings.`,
    offerings: [
      "Building and deploying a minimum viable product (MVP) for a startup",
      "Handling data ingestion and distributed processing problems",
      "Managing successful engineering teams and systems",
      "Understanding the startup landscape in Türkiye and the US",
      "Competing in high-intensity engineering fields"
    ],
    expectations: `
  Honesty, curiosity, and resourcefulness. I value philosophical and conscientious engagement with engineering. If you're motivated to grow as both an engineer and a human — and see engineering as a way to improve society — I’d be glad to mentor you.`,
    photo: anilSeyrekPhoto,
  }
];
