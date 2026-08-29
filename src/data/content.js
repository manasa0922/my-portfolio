// Central content store. Every field here reflects existing portfolio
// content — nothing invented (no fabricated metrics, employers, or skills).

export const profile = {
  name: "Manasa S S",
  title: "Software Developer",
  tagline: "MCA Graduate",
  eyebrow: "SOFTWARE DEVELOPER • AI/ML ENGINEER",
  headline: "Building intelligent experiences with code.",
  intro:
    "I'm a software developer who builds web applications with ASP.NET, Django and React, and AI/ML systems using RAG pipelines and vector search. I enjoy shipping user-friendly software and continuously picking up new tools along the way.",
  github: "https://github.com/manasa0922",
  linkedin: "https://www.linkedin.com/in/manasa-s-s-4951b4256",
};

export const aboutStats = [
  { label: "1.9+ Years", sub: "Software Development" },
  { label: "AI / ML", sub: "RAG, FAISS, Embeddings" },
  { label: "Full-Stack", sub: "ASP.NET, Django, React" },
  { label: "C++ Plugins", sub: "InDesign SDK" },
];

export const skillGroups = [
  {
    group: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Python", "Django", "ASP.NET", "ASP.NET Core MVC"],
  },
  {
    group: "AI / ML",
    items: ["RAG Pipelines", "FAISS", "Vector Embeddings", "Tokenization"],
  },
  {
    group: "Database",
    items: ["MySQL", "SQL Server"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Visual Studio"],
  },
];

export const experience = [
  {
    company: "TechMust Software Private Ltd",
    role: "Software Developer",
    duration: "~1.7 years",
    points: [
      "AI/ML development — building RAG pipelines with FAISS vector search, embeddings, and tokenization",
      "C++ plugin development using the InDesign SDK",
      "Web application development with ASP.NET and SQL Server",
    ],
    tech: ["Python", "RAG", "FAISS", "C++", "InDesign SDK", "ASP.NET", "SQL Server"],
  },
  {
    company: "Acmegrade Private Limited",
    role: "Full Stack Web Development Intern",
    duration: "Internship",
    points: ["Completed a full stack web development internship."],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const projects = [
  {
    name: "Career Hub",
    description:
      "Online job portal built for job seekers and recruiters — listings, applications and role management.",
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQL"],
    size: "large",
  },
  {
    name: "Employee Attendance Tracking System",
    description:
      "Attendance management application with employee login, attendance tracking, and reporting.",
    tech: ["ASP.NET", "MySQL", "Telerik UI"],
    size: "small",
  },
  {
    name: "JavaScript Calculator",
    description: "Responsive calculator with full keyboard support.",
    tech: ["HTML", "CSS", "JavaScript"],
    size: "small",
  },
];

export const aiProject = {
  name: "Resume Checker",
  description:
    "A resume analysis tool that helps job seekers evaluate and improve their resumes.",
  tech: ["Python", "React.js"],
  status: "In progress",
};

export const aiPipeline = [
  { label: "User", detail: "Query input" },
  { label: "Retrieval", detail: "Relevant context lookup" },
  { label: "Embeddings", detail: "Vector representation" },
  { label: "Vector DB", detail: "FAISS similarity search" },
  { label: "LLM", detail: "Reasoning over context" },
  { label: "Response", detail: "Grounded answer" },
];

export const aiConcepts = ["RAG", "FAISS", "Vector Embeddings", "Tokenization", "Vector Search"];

export const learning = [
  "Machine Learning Fundamentals",
  "Data Preprocessing",
  "Model Training",
  "Stock Price Prediction",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-lab", label: "AI Lab" },
  { href: "#contact", label: "Contact" },
];
