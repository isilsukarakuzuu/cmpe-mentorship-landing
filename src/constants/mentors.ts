import placeholderPhoto from "../assets/mentors/placeholder.png";


import berkAtilPhoto from "../assets/mentors/berk-atil.jpeg";
import basakOnderPhoto from "../assets/mentors/basak-onder.jpg";
import omerBenzerPhoto from "../assets/mentors/omer-benzer.jpeg";
import hamzaIsiktasPhoto from "../assets/mentors/hamza-isiktas.jpg";
import demetYaylaPhoto from "../assets/mentors/demet-yayla.jpeg";
import ahmetGedemenliPhoto from "../assets/mentors/ahmet-gedemenli.jpeg";
import dogukanTurksoyPhoto from "../assets/mentors/dogukan-turksoy.jpg";
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
  linkedin?: string;
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
    linkedin: "https://www.linkedin.com/in/berk-at%C4%B1l-7316b5133/",
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
    linkedin: "https://www.linkedin.com/in/basak-onder/",

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
    linkedin: "https://www.linkedin.com/in/ocebenzer/",
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
    linkedin: "https://www.linkedin.com/in/isiktashamza/",
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
    linkedin: "https://www.linkedin.com/in/demetyayla/",
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
    linkedin: "https://www.linkedin.com/in/ahmet-gedemenli-78170b199/"
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
    linkedin: "https://www.linkedin.com/in/atasoyfurkan/",
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
    linkedin: "https://www.linkedin.com/in/berkecaliskan/",
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
    linkedin: "https://www.linkedin.com/in/ekin-gungor/",
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
    linkedin: "https://www.linkedin.com/in/anilseyrek/",
  },
  {
    name: "Muhammet Batuhan İlhan",
    shortDescription: "Full-Stack Engineer at Workmate Labs, experienced in modern web technologies and AI integrations.",
    description: `
  I’m a Full-Stack Engineer with experience in building and scaling modern web applications and integrations that solve real-world problems. I started my career working on diverse engineering challenges, eventually contributing to projects involving AI integrations, particularly using tools like Next.js and FastAPI.
  
  Currently, I live in İstanbul and work at Workmate Labs, a New York based AI start-up.`,
    interests: `
  Web development, AI integrations, full-stack technologies, sports, table tennis (former Boğaziçi team member).`,
    offerings: [
      "Professional life guidance for students",
      "Social life and adaptation support for new university students (as a recent graduate)"
    ],
    expectations: `-`,
    photo: muhammetBatuhanIlhanPhoto,
    linkedin: "https://www.linkedin.com/in/batuhan-ilhan-150416241/"
  },
  {
    name: "Doğukan Türksoy",
    shortDescription: "Software Developer with 4 years of experience, currently working at Migros on backend systems and supporting a new startup’s technical growth.",
    description: `
  I’m a Software Developer with 4 years of experience, mainly working with Java, Spring Boot, React, and MySQL. I began my career at IBM, where I helped solve technical challenges for international clients using IBM technologies. Later, I played a key role in expanding a U.S.-based e-commerce company into major marketplaces like Amazon, Walmart, and Home Depot.
  
  Currently, I live in Bostancı, Istanbul, and I’m working at Migros, focusing on backend systems for product stock and campaign management. I’m also the only experienced developer at a newly founded startup, which gives me the chance to support and shape the technical direction from the ground up.`,
    interests: `
  Music (especially guitar), board games, indie video games, basketball, traveling, remote work lifestyle, and enjoying Marmaris when visiting family.`,
    offerings: [
      "Balancing academic and professional life based on my own experience",
      "Sharing insights and stories from various university-side projects",
      "Fresh tips on interviews and navigating job changes",
      "Thoughtful listening and helping you reflect on your own path"
    ],
    expectations: `
  I expect you to feel comfortable giving me feedback too, and know that I’m aware my own path isn’t set in stone either.
  
  I hope our time together reduces your stress—not adds to it.
  
  Remind me of the joy and spirit of student life.
  
  I believe this program can help both of us see our paths ahead more clearly.`,
    photo: dogukanTurksoyPhoto, 
    linkedin: "https://www.linkedin.com/in/dogukanturksoy/"
  }
];
