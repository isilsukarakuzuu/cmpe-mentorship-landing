import placeholderPhoto from "../assets/mentors/placeholder.png";


import berkAtilPhoto from "../assets/mentors/berk-atil.jpeg";
import basakOnderPhoto from "../assets/mentors/basak-onder.jpg";
import omerBenzerPhoto from "../assets/mentors/omer-benzer.jpg";
import hamzaIsiktasPhoto from "../assets/mentors/hamza-isiktas.jpg";
import demetYaylaPhoto from "../assets/mentors/demet-yayla.jpg";
import ahmetGedemenliPhoto from "../assets/mentors/ahmet-gedemenli.jpg";

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
    photo: placeholderPhoto,
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
    photo: placeholderPhoto,
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
    photo: placeholderPhoto,
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
    photo: placeholderPhoto,
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
    photo: placeholderPhoto,
  },
];
