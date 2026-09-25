export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  flow?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: string; tag?: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  category: string;
  badgeColor: string;
  skillsCovered: string[];
  issueDate?: string;
  badgeType?: 'CCNA Blue Badge' | 'Palo Alto Certified' | 'Cisco Blue Badge';
}

export interface JourneyItem {
  year: string;
  title: string;
  institution: string;
  detail: string;
  score?: string;
  badge?: string;
  type: 'education' | 'achievement' | 'milestone';
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Bhumika Kumari",
    primaryRole: "AI ENGINEER × FULL-STACK DEVELOPER",
    secondaryRole: "× CYBERSECURITY & CLOUD",
    positioning: "AI/ML • Full-Stack Web Development • Backend Engineering • Cybersecurity • SOC & Detection • DevOps & Cloud (AWS, Docker, K8s)",
    statement: "Building intelligent, scalable, and security-focused software systems at the intersection of AI, full-stack web development, cybersecurity, and cloud infrastructure.",
    bio: "I am a Computer Science and Engineering student at GL Bajaj Institute of Technology and Management, as well as a skilled Full-Stack Web Developer and AI Engineer. My technical domain spans Artificial Intelligence, Machine Learning, Generative AI, RAG architectures, full-stack web applications, backend engineering, cybersecurity (SOC, SIEM, Detection Engineering, Incident Response), and Cloud/DevOps (AWS, Docker, Kubernetes).",
    education: {
      degree: "B.Tech Computer Science and Engineering",
      institution: "GL Bajaj Institute of Technology and Management",
      period: "2023 — 2027",
      cgpa: "8.08 / 10",
      location: "Hathras, Uttar Pradesh, India"
    },
    contact: {
      email: "bhumikakumari0802@gmail.com",
      github: "https://github.com/Bhumika-0204",
      linkedin: "https://linkedin.com/in/bhumikakumari",
      leetcode: "https://leetcode.com/u/Bhumika_0204/",
      resumeUrl: "/Bhumika-Kumari-Resume.pdf"
    }
  },

  stats: [
    { label: "DSA Problems Solved", value: "1000+", numeric: 1000 },
    { label: "Major Engineering Projects", value: "7+", numeric: 7 },
    { label: "Current CGPA", value: "8.08", numeric: 8.08 },
    { label: "Graduation Year", value: "2027", numeric: 2027 }
  ],

  projects: [
    {
      id: "motherboard-ai",
      number: "01",
      title: "Motherboard AI",
      subtitle: "Agentic AI Semiconductor EDA & Digital Twin Platform",
      category: "AI + SOFTWARE + HARDWARE EDA",
      description: "An AI-assisted semiconductor engineering platform integrating logical design, 2D PCB floorplanning, and 3D Digital Twin workspaces for intelligent motherboard design, validation, optimization, and engineering analysis.",
      problem: "Traditional EDA tools suffer from fragmented design workflows, manual signal routing, lack of real-time thermal/signal feedback, and disconnects between 2D schematics and 3D physical constraints.",
      solution: "Engineered an end-to-end Agentic AI system that pairs an LLM Engineering Copilot (local Ollama/Qwen3) with multi-objective optimization algorithms (NSGA-II & PSO), automated Dijkstra routing, and interactive 3D WebGL Digital Twin visualization.",
      technologies: [
        "React.js", "Vite", "TypeScript", "Tailwind CSS", "FastAPI",
        "Python", "SQLAlchemy", "Oracle SQL", "Ollama / Qwen3",
        "Scikit-learn", "SHAP", "NSGA-II", "PSO", "Three.js", "React Three Fiber"
      ],
      highlights: [
        "AI Engineering Copilot with Local Ollama/Qwen3 integration",
        "Component recommendation & compatibility reasoning",
        "Automated design workflows & Dijkstra-based trace routing",
        "Multi-objective NSGA-II & Particle Swarm Optimization (PSO)",
        "DRC (Design Rule Checking) & ERC validation engine",
        "SHAP explainable AI for engineering trade-offs",
        "Thermal simulation & 3D Digital Twin workspace synchronization",
        "Automated comprehensive engineering reports generation"
      ],
      flow: [
        "LOGICAL DESIGN",
        "2D PCB FLOORPLANNING",
        "AI MULTI-OBJECTIVE OPTIMIZATION",
        "DRC / ERC VALIDATION",
        "3D DIGITAL TWIN SYNCHRONIZATION"
      ],
      githubUrl: "https://github.com/Bhumika-0204/Motherboard-AI",
      demoUrl: "",
      featured: true,
      accentColor: "#8B5CF6"
    },
    {
      id: "niyanta-ai",
      number: "02",
      title: "Niyanta AI",
      subtitle: "Autonomous AI Traffic Intelligence & Security Gateway",
      category: "CYBERSECURITY + DISTRIBUTED SYSTEMS",
      description: "Autonomous API Traffic Intelligence and Security Gateway providing real-time DDoS mitigation, payload inspection, and adaptive RL traffic routing.",
      problem: "High-throughput API infrastructure faces zero-day bot attacks, volumetric DDoS floods, and complex malicious payload injections that static web application firewalls fail to detect at low latency.",
      solution: "Built a distributed API gateway with Kafka telemetry, Redis Lua rate limiting, and an Isolation Forest & PPO Reinforcement Learning model to inspect payloads, fingerprint bots, and enforce adaptive security policies under tight latency SLAs.",
      technologies: [
        "Python", "FastAPI", "PyTorch", "Scikit-learn",
        "Redis Lua", "Kafka", "ChromaDB", "React"
      ],
      highlights: [
        "PPO Reinforcement Learning traffic optimization engine",
        "High-performance distributed API Gateway architecture",
        "Real-time Kafka telemetry streaming pipeline",
        "Isolation Forest ML model for volumetric & anomaly DDoS detection",
        "Deep WAF payload scanning & JA4 TLS bot fingerprinting",
        "GraphQL query depth analysis & adaptive Circuit Breakers",
        "Multi-region GLB Anycast routing simulation & Chaos Engineering",
        "ChromaDB RAG integration for natural-language security audit logs"
      ],
      metrics: [
        { label: "SLA Target Accuracy", value: "98.4%" },
        { label: "P95 Latency", value: "<5ms" },
        { label: "DDoS Detection F1-score", value: "95.9%" }
      ],
      flow: [
        "CLIENT REQUEST",
        "API GATEWAY",
        "WAF SCANNER",
        "JA4 BOT DETECTION",
        "ISOLATION FOREST ANOMALY",
        "POLICY ENGINE",
        "BACKEND SERVICES",
        "KAFKA TELEMETRY & RAG"
      ],
      githubUrl: "https://github.com/Bhumika-0204/Niyanta-AI",
      demoUrl: "",
      featured: true,
      accentColor: "#10B981"
    },
    {
      id: "orvexa",
      number: "03",
      title: "ORVΞXA",
      subtitle: "Next-Generation Hybrid Video & Social Media Platform",
      category: "FULL-STACK • DISTRIBUTED MEDIA & SOCIAL",
      description: "A disruptive full-stack web application designed to break the boundary between isolated content consumption and active social engagement by seamlessly merging long-form video streaming with high-paced real-time continuous tweet threads.",
      problem: "Traditional video platforms isolate users from real-time social discussions, forcing content consumers to context-switch away from video streams to interact on social feeds.",
      solution: "Architected a decoupled React & Node.js/Express MVC hybrid social engine where users watch HD videos while simultaneously publishing, liking, and threading real-time tweets alongside the active video stream.",
      technologies: [
        "React.js", "Redux Toolkit", "React Router DOM", "Tailwind CSS",
        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Cloudinary", "Multer"
      ],
      highlights: [
        "Hybrid Social Engine: Simultaneous HD video playback & real-time tweet feed side-by-side",
        "Performant video processing pipeline with Cloudinary global CDN media ingestion & Multer chunking",
        "Granular engagement system: Likes, threaded comments, tweet updates, channel subscriptions",
        "State-of-the-art JWT & BCrypt cryptographic authentication and session management",
        "Modularized MVC backend API architecture deployed on Vercel Edge & Render infrastructure",
        "Pixel-perfect glassmorphic responsive UI optimized for mobile, tablet, and desktop"
      ],
      metrics: [
        { label: "CDN Latency", value: "<15ms" },
        { label: "Architecture", value: "MVC Micro-Monolith" },
        { label: "Security Flow", value: "JWT + BCrypt" }
      ],
      flow: [
        "USER CLIENT",
        "REDUX STATE / SPA ROUTER",
        "EXPRESS MVC API GATEWAY",
        "JWT AUTH & BCYPT HASH",
        "MULTER STREAM / CLOUDINARY CDN",
        "MONGODB CLUSTER"
      ],
      githubUrl: "https://github.com/Bhumika-0204/Orvexa",
      demoUrl: "https://orvexa-iota.vercel.app/",
      featured: true,
      accentColor: "#06B6D4"
    },
    {
      id: "khoj-ai",
      number: "04",
      title: "Khoj AI",
      subtitle: "Intelligent Multi-Document Research & Knowledge Assistant",
      category: "ADVANCED RAG • NLP & LLM ORCHESTRATION",
      description: "A production-grade, multi-stage conversational Retrieval-Augmented Generation (RAG) research workspace built with Python, Streamlit, ChromaDB, BM25, Cross-Encoder reranking, Groq LLM API, and ReportLab.",
      problem: "Standard dense vector search chatbots suffer from vocabulary mismatches, out-of-bounds hallucinated citations, and poor ranking accuracy for complex technical research queries.",
      solution: "Engineered a dual-retrieval pipeline featuring Reciprocal Rank Fusion (RRF), Cross-Encoder (ms-marco-MiniLM-L-6-v2) joint attention re-scoring, pre-generation evidence confidence verification, and automated citation sanitization.",
      technologies: [
        "Python", "Streamlit", "ChromaDB", "BM25 (rank_bm25)", "Sentence-Transformers",
        "Cross-Encoder", "Groq LLM API (llama-3.3-70b)", "PyPDF", "Pandas", "ReportLab"
      ],
      highlights: [
        "Multi-format document ingestion (PDF, CSV, TXT) with SHA-256 hash deduplication",
        "Dual Hybrid Rank Fusion: Weighted Min-Max & Reciprocal Rank Fusion (RRF)",
        "Cross-Encoder joint-attention re-scoring achieving 1.000 MRR & NDCG@5 benchmark",
        "Evidence Confidence & Grounded Abstention engine to eliminate LLM hallucinations",
        "Conversational Query Rewriting to resolve ambiguous pronoun follow-up queries",
        "RAG Telemetry & Observability tracker (latency breakdown per stage & token usage)",
        "Quantitative RAG Evaluation Suite comparing 5 retrieval strategies over 20 ground-truth tests",
        "ReportLab PDF Export generating styled research reports with verified inline citations"
      ],
      metrics: [
        { label: "Hybrid Rerank MRR", value: "1.000" },
        { label: "NDCG@5 Score", value: "1.000" },
        { label: "Recall@5", value: "100%" }
      ],
      flow: [
        "USER QUERY",
        "CONVERSATIONAL QUERY REWRITER",
        "DUAL RETRIEVAL (CHROMADB + BM25)",
        "RRF / MIN-MAX FUSION",
        "CROSS-ENCODER RERANKING",
        "EVIDENCE CONFIDENCE CHECK",
        "GROQ LLM (LLAMA 3.3-70B)",
        "CITATION SANITIZATION & PDF EXPORT"
      ],
      githubUrl: "https://github.com/Bhumika-0204/Khoj-AI",
      demoUrl: "",
      featured: true,
      accentColor: "#A855F7"
    },
    {
      id: "aarogya-ai",
      number: "05",
      title: "Aarogya AI",
      subtitle: "AI Healthcare Diagnostics & Wellness Management Platform",
      category: "AI HEALTHCARE • FULL-STACK & FIREBASE",
      description: "A modern, comprehensive web application for managing healthcare needs using advanced AI technologies, offering wellness tracking, doctor consultations, and intelligent chatbot diagnostics.",
      problem: "Patients struggle to get immediate initial health query resolution, track daily wellness metrics, and securely connect with medical professionals through a unified interface.",
      solution: "Built a high-performance React 18 + Vite healthcare workspace powered by AI diagnostic chatbots, Firebase authentication, React Query data fetching, and Zustand state management.",
      technologies: [
        "React 18", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui",
        "Radix UI", "Framer Motion", "Node.js", "Firebase Auth & Storage", "Zustand", "React Query"
      ],
      highlights: [
        "Personalized Healthcare Dashboard for daily wellness tracking and vitals metrics",
        "AI-Powered Diagnostics Chatbot for initial health assessments and query resolution",
        "Doctor Directory & Seamless Appointment Booking System",
        "Secure Firebase Authentication & Cloud Storage user data management",
        "High-performance responsive UI built with Vite, Tailwind CSS, and shadcn/ui primitives"
      ],
      flow: [
        "PATIENT CLIENT",
        "FIREBASE AUTH",
        "WELLNESS DASHBOARD / DIAGNOSTIC BOT",
        "REACT QUERY / ZUSTAND STATE",
        "DOCTOR DIRECTORY & APPOINTMENTS"
      ],
      githubUrl: "https://github.com/Bhumika-0204/Aarogya-AI",
      demoUrl: "https://cgg5ufe23i.c38.airoapp.ai/",
      featured: true,
      accentColor: "#EC4899"
    },
    {
      id: "agrisense-mrv",
      number: "06",
      title: "AgriSenseMRV",
      subtitle: "Intelligent Crop Disease Detection & Soil Intelligence System",
      category: "AI / ML • GEOSPATIAL & AGRICULTURE",
      description: "An intelligent agriculture monitoring and crop disease detection system that leverages deep learning, geospatial data, and soil intelligence APIs to assist farmers and agricultural stakeholders.",
      problem: "Farmers face delayed crop disease diagnoses and lack real-time soil parameter insights tailored to their specific geolocation coordinates.",
      solution: "Developed an AI system that takes plant leaf images and GPS coordinates as input, automatically fetches soil data from external geospatial APIs, and runs TensorFlow crop disease classification models to generate health recommendations.",
      technologies: [
        "Python", "FastAPI / Flask", "TensorFlow / Keras", "React", "Next.js",
        "Vite", "Tailwind CSS", "Soil Intelligence APIs", "Geospatial APIs"
      ],
      highlights: [
        "AI Plant Leaf Disease Classification using custom TensorFlow deep learning models",
        "Geolocation Soil Intelligence: Automatic soil parameter fetching from external APIs",
        "RESTful FastAPI prediction endpoints for high-throughput inference",
        "Responsive web-based dashboard for farmers and agricultural analysts",
        "Cloud-ready modular architecture designed for serverless ML hosting"
      ],
      flow: [
        "PLANT LEAF IMAGE + GPS",
        "FASTAPI BACKEND",
        "SOIL API FETCH",
        "TENSORFLOW MODEL INFERENCE",
        "HEALTH RECOMMENDATIONS DASHBOARD"
      ],
      githubUrl: "https://github.com/Bhumika-0204/AgriSenseMRV",
      demoUrl: "https://agri-sense-mrv.vercel.app/",
      featured: true,
      accentColor: "#F59E0B"
    },
    {
      id: "blue-carbon-mrv",
      number: "07",
      title: "Blue Carbon MRV System",
      subtitle: "Blockchain-based Blue Carbon Registry & MRV System",
      category: "PATENTED SYSTEM • BLOCKCHAIN + AI",
      description: "Blockchain-enabled MRV platform for secure blue carbon credit tracking, verification, issuance, and lifecycle management.",
      problem: "Carbon credit markets suffer from double counting, opaque verification processes, greenwashing, and inaccurate manual land/coastal ecosystem measurement.",
      solution: "Designed a multi-modal MRV architecture combining satellite imagery analysis, drone data, and IoT sensor telemetry fed into AI models, with verified outputs recorded immutably on blockchain using ERC-1155 tokens.",
      technologies: [
        "Blockchain", "ERC-1155", "Solidity", "AI/ML",
        "IoT Telemetry", "IPFS", "Python", "React"
      ],
      highlights: [
        "ERC-1155 smart contracts for fractional carbon credit tokens",
        "Automated credit issuance, trading, and permanent retirement",
        "Verifiable asset ownership on decentralized ledger",
        "Multi-modal AI/ML monitoring of coastal ecosystems",
        "Fusion of IoT, drone, and high-resolution satellite imagery",
        "IPFS-backed tamper-proof MRV verification reports"
      ],
      flow: [
        "SATELLITE + DRONE + IOT",
        "AI / ML ECOSYSTEM ANALYSIS",
        "MRV ENGINE",
        "BLOCKCHAIN SMART CONTRACTS",
        "ERC-1155 CARBON CREDIT",
        "DECENTRALIZED VERIFICATION"
      ],
      githubUrl: "https://github.com/Bhumika-0204/Blue-Carbon-MRV",
      demoUrl: "",
      featured: true,
      accentColor: "#3B82F6"
    }
  ],

  skillCategories: [
    {
      title: "Cloud & DevOps Infrastructure",
      iconName: "Cloud",
      description: "Cloud computing, container orchestration, AWS services, and CI/CD pipelines.",
      skills: [
        { name: "AWS (EC2, S3, IAM, CloudWatch, Lambda)", level: "Advanced", tag: "Cloud Computing" },
        { name: "Docker", level: "Advanced", tag: "Containerization" },
        { name: "Kubernetes", level: "Proficient", tag: "Orchestration" },
        { name: "Linux Administration & Bash", level: "Advanced", tag: "OS Kernel" },
        { name: "CI/CD & GitHub Actions", level: "Proficient", tag: "Automation" },
        { name: "Vercel & Render Edge Deployments", level: "Advanced", tag: "Edge CDN" }
      ]
    },
    {
      title: "Full-Stack Web Development",
      iconName: "Layout",
      description: "Modern, dynamic web applications, state management, and responsive interfaces.",
      skills: [
        { name: "React.js & React 18", level: "Advanced", tag: "Frontend Framework" },
        { name: "Next.js", level: "Proficient", tag: "SSR & Full-Stack" },
        { name: "Node.js & Express.js", level: "Advanced", tag: "Backend Core" },
        { name: "TypeScript & JavaScript (ES6+)", level: "Advanced", tag: "Typed Logic" },
        { name: "Tailwind CSS & shadcn/ui", level: "Advanced", tag: "Modern UI" },
        { name: "Redux Toolkit & Zustand", level: "Advanced", tag: "State Management" },
        { name: "HTML5 & CSS3 Glassmorphism", level: "Mastered", tag: "Styling" }
      ]
    },
    {
      title: "Programming & Foundations",
      iconName: "Code2",
      description: "Core computer science fundamentals, algorithm design, and strong typed languages.",
      skills: [
        { name: "C++", level: "Advanced", tag: "Competitive Programming" },
        { name: "Python", level: "Advanced", tag: "AI & Backend" },
        { name: "JavaScript", level: "Proficient", tag: "Full-Stack" },
        { name: "TypeScript", level: "Proficient", tag: "Typed Frontend/Node" },
        { name: "SQL", level: "Advanced", tag: "Relational Queries" },
        { name: "Data Structures & Algorithms", level: "Mastered", tag: "1000+ Solved" },
        { name: "Object-Oriented Programming", level: "Advanced", tag: "Design Patterns" }
      ]
    },
    {
      title: "AI / Machine Learning",
      iconName: "BrainCircuit",
      description: "Intelligent systems, deep neural networks, LLM agents, RAG, and explainable AI.",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "PyTorch & TensorFlow", level: "Advanced" },
        { name: "Scikit-learn & Keras", level: "Advanced" },
        { name: "Generative AI & LLMs", level: "Advanced" },
        { name: "RAG Architecture", level: "Advanced" },
        { name: "Agentic AI", level: "Advanced" },
        { name: "ChromaDB & Vector DBs", level: "Advanced" },
        { name: "BM25 & Cross-Encoder Reranking", level: "Advanced" },
        { name: "SHAP (Explainable AI)", level: "Proficient" },
        { name: "Reinforcement Learning (PPO)", level: "Intermediate" }
      ]
    },
    {
      title: "Backend & Systems",
      iconName: "Server",
      description: "Scalable microservices, real-time event streaming, and API architecture.",
      skills: [
        { name: "FastAPI", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs & MVC Architecture", level: "Advanced" },
        { name: "Redis & Redis Lua", level: "Proficient" },
        { name: "Apache Kafka", level: "Intermediate" },
        { name: "WebSockets", level: "Proficient" },
        { name: "Distributed Systems", level: "Proficient" },
        { name: "Asynchronous Programming", level: "Advanced" }
      ]
    },
    {
      title: "Databases & Storage",
      iconName: "Database",
      description: "Relational, spatial, vector, and key-value database management systems.",
      skills: [
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "Oracle SQL", level: "Advanced" },
        { name: "PostgreSQL / PostGIS", level: "Proficient" },
        { name: "Firebase (Auth & Firestore)", level: "Advanced" },
        { name: "ChromaDB Vector Store", level: "Advanced" },
        { name: "Redis In-Memory Cache", level: "Proficient" }
      ]
    },
    {
      title: "Cybersecurity & SOC Operations",
      iconName: "ShieldCheck",
      description: "Threat detection, incident response, SOC telemetry, and cloud defense.",
      skills: [
        { name: "Cybersecurity Fundamentals", level: "Advanced" },
        { name: "Security Operations Center (SOC)", level: "Advanced" },
        { name: "SIEM & Splunk Log Analysis", level: "Advanced" },
        { name: "Detection Engineering & Rules", level: "Advanced" },
        { name: "Incident Response & Lifecycle", level: "Advanced" },
        { name: "Cloud Security & Zero Trust", level: "Advanced" },
        { name: "Threat Intelligence & MITRE ATT&CK", level: "Advanced" },
        { name: "Vulnerability Assessment & WAF", level: "Advanced" }
      ]
    },
    {
      title: "Network Security & Protocols",
      iconName: "Network",
      description: "Network architecture, protocol analysis, packet inspection, and perimeter defense.",
      skills: [
        { name: "OSI & TCP/IP Stack", level: "Mastered" },
        { name: "CCNA 1: Introduction to Networks", level: "Mastered", tag: "Cisco Verified" },
        { name: "CCNA 2: Switching, Routing & Wireless", level: "Mastered", tag: "Cisco Verified" },
        { name: "CCNA 3: Enterprise Networking & Security", level: "Mastered", tag: "Cisco Verified" },
        { name: "DNS, HTTP/HTTPS, TCP/UDP, TLS/SSL", level: "Advanced" },
        { name: "Firewalls, IDS/IPS, VPN, NAT", level: "Advanced" },
        { name: "Network Traffic Analysis & Wireshark", level: "Advanced" },
        { name: "Nmap Scanning & Snort Rules", level: "Advanced" }
      ]
    }
  ],

  detectionPipeline: [
    { step: "01", title: "LOGS", desc: "Ingestion of raw system, network & API events" },
    { step: "02", title: "COLLECTION", desc: "Distributed streaming via Kafka pipelines" },
    { step: "03", title: "NORMALIZATION", desc: "Parsing into unified JSON schema" },
    { step: "04", title: "DETECTION", desc: "Isolation Forest + Sigma rule engines" },
    { step: "05", title: "ALERT", desc: "Prioritized severity scoring & tagging" },
    { step: "06", title: "TRIAGE", desc: "Automated IOC enrichment & threat context" },
    { step: "07", title: "INVESTIGATION", desc: "Deep log trace & behavioral analytics" },
    { step: "08", title: "RESPONSE", desc: "Automated IP block, circuit breaker & isolation" }
  ],

  certifications: [
    {
      title: "CCNA 1: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      category: "CISCO NETWORKING",
      badgeColor: "#0284C7",
      skillsCovered: ["Network Architecture", "IPv4/IPv6 Subnetting", "Ethernet & Switches", "Cisco IOS Commands"],
      issueDate: "Mar 16, 2026",
      badgeType: "CCNA Blue Badge"
    },
    {
      title: "CCNA 2: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      category: "CISCO NETWORKING",
      badgeColor: "#0284C7",
      skillsCovered: ["VLANs & Inter-VLAN Routing", "STP & EtherChannel", "WLAN Security", "Static & Dynamic Routing"],
      issueDate: "May 05, 2026",
      badgeType: "CCNA Blue Badge"
    },
    {
      title: "CCNA 3: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      category: "CISCO NETWORKING",
      badgeColor: "#0284C7",
      skillsCovered: ["OSPFv2 Routing", "WAN & VPN Architecture", "ACLs & Network Security", "Network Automation & REST APIs"],
      issueDate: "Jun 04, 2026",
      badgeType: "CCNA Blue Badge"
    },
    {
      title: "Cisco Verified: Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      category: "PROGRAMMING & ALGORITHMS",
      badgeColor: "#0284C7",
      skillsCovered: ["Control Flow & Data Structures", "OOP & Class Design", "Module & Package Management", "Exception Handling"],
      issueDate: "Apr 25, 2026",
      badgeType: "Cisco Blue Badge"
    },
    {
      title: "Cisco Verified: Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      category: "DATA & ANALYTICS",
      badgeColor: "#0284C7",
      skillsCovered: ["Data Wrangling", "Statistical Analysis", "Data Visualization", "SQL & Querying"],
      issueDate: "Jun 09, 2026",
      badgeType: "Cisco Blue Badge"
    },
    {
      title: "Cisco Verified: Operating Systems Support",
      issuer: "Cisco Networking Academy",
      category: "SYSTEMS & OS",
      badgeColor: "#0284C7",
      skillsCovered: ["Linux System Administration", "OS Kernel & Memory", "Process Management", "Command Line Interface"],
      issueDate: "Mar 16, 2026",
      badgeType: "Cisco Blue Badge"
    },
    {
      title: "Cybersecurity Foundation",
      issuer: "Palo Alto Networks",
      category: "CYBERSECURITY",
      badgeColor: "#8B5CF6",
      skillsCovered: ["Threat Vectors", "Security Architecture", "Network Defense", "Cyber Hygiene"],
      badgeType: "Palo Alto Certified"
    },
    {
      title: "Network Security Fundamentals",
      issuer: "Palo Alto Networks",
      category: "NETWORK SECURITY",
      badgeColor: "#06B6D4",
      skillsCovered: ["Next-Gen Firewalls", "Packet Inspection", "Segmentation", "VPN Architecture"],
      badgeType: "Palo Alto Certified"
    },
    {
      title: "Cloud Security Fundamentals",
      issuer: "Palo Alto Networks",
      category: "CLOUD SECURITY",
      badgeColor: "#EC4899",
      skillsCovered: ["Identity & Access", "Shared Responsibility", "Microsegmentation", "Compliance"],
      badgeType: "Palo Alto Certified"
    },
    {
      title: "Security Operations Fundamentals",
      issuer: "Palo Alto Networks",
      category: "SOC & SIEM",
      badgeColor: "#10B981",
      skillsCovered: ["SOC Workflow", "SIEM Analytics", "Alert Triage", "Incident Response"],
      badgeType: "Palo Alto Certified"
    },
    {
      title: "Firewall Essentials",
      issuer: "Palo Alto Networks",
      category: "NETWORK DEFENSE",
      badgeColor: "#F59E0B",
      skillsCovered: ["Policy Management", "NAT Configuration", "Threat Prevention", "SSL Decryption"],
      badgeType: "Palo Alto Certified"
    }
  ],

  patent: {
    title: "Blockchain-based Blue Carbon Registry & MRV System",
    status: "Published Patent",
    category: "AI + BLOCKCHAIN + ENVIRONMENTAL SYSTEMS",
    description: "An AI-driven Monitoring, Reporting & Verification (MRV) platform designed for secure, transparent, and traceable blue carbon credit data tracking, verification, issuance, and lifecycle management.",
    innovations: [
      "Multi-layer data fusion combining satellite optical imagery, drone photogrammetry, and coastal IoT sensors",
      "AI computer vision models for automated biomass & carbon sequestration rate estimations",
      "Smart contract-governed ERC-1155 token minting tied to cryptographic proof-of-verification",
      "Immutable, audit-ready storage of verification reports on InterPlanetary File System (IPFS)"
    ]
  },

  journey: [
    {
      year: "2020",
      title: "High School (Class X)",
      institution: "Secondary Education",
      detail: "Achieved 89% with strong distinction in Mathematics and Science fundamentals.",
      score: "89%",
      type: "education"
    },
    {
      year: "2022",
      title: "Intermediate PCM (Class XII)",
      institution: "Higher Secondary Education",
      detail: "Specialized in Physics, Chemistry, and Mathematics scoring 89%. Developed early interest in algorithmic problem solving.",
      score: "89%",
      type: "education"
    },
    {
      year: "2023",
      title: "B.Tech Computer Science & Engineering",
      institution: "GL Bajaj Institute of Technology and Management",
      detail: "Enrolled in B.Tech CSE. Focused on Full-Stack Web Development, Software Engineering, Data Structures, AI/ML models, Cybersecurity, and Cloud Systems.",
      score: "CGPA 8.08 / 10",
      badge: "CURRENT DEGREE",
      type: "education"
    },
    {
      year: "2024 — Present",
      title: "Major Engineering Systems & Published Patent",
      institution: "Engineering Accomplishments",
      detail: "Published official patent on Blockchain Blue Carbon MRV System. Architected Motherboard AI, Niyanta AI, ORVΞXA, Khoj AI, Aarogya AI, and AgriSenseMRV. Qualified internal rounds for Smart India Hackathon.",
      badge: "ACHIEVEMENT",
      type: "achievement"
    }
  ],

  dsa: {
    solvedCount: "1000+",
    languages: ["C++", "Python"],
    topics: [
      { name: "Arrays & Strings", description: "Two pointers, sliding window, prefix sums" },
      { name: "Linked Lists", description: "Singly, doubly, fast & slow pointers" },
      { name: "Trees & Binary Search Trees", description: "Traversals, LCA, balanced BSTs" },
      { name: "Graphs", description: "BFS, DFS, Dijkstra, Topological Sort, Disjoint Set Union" },
      { name: "Dynamic Programming", description: "1D/2D DP, Knapsack, LCS, State Compression" },
      { name: "Greedy Algorithms", description: "Interval scheduling, Huffman coding, optimal choices" },
      { name: "Binary Search", description: "Search spaces, lower/upper bounds, monotonic functions" },
      { name: "Hashing & Maps", description: "Hash functions, collision resolution, frequency counting" },
      { name: "Recursion & Backtracking", description: "N-Queens, permutation generation, pruning" }
    ]
  },

  architectureLayers: [
    {
      id: "user",
      name: "USER INTERFACE LAYER",
      tech: "React.js • Vite • TypeScript • Tailwind CSS • Three.js",
      desc: "Responsive high-performance glassmorphic SPA with 3D WebGL Digital Twin previews and real-time dashboard telemetry."
    },
    {
      id: "frontend",
      name: "API GATEWAY & SECURITY PERIMETER",
      tech: "FastAPI • Express.js • Redis Lua • WAF Engine • JA4 Bot Fingerprinting",
      desc: "Distributed edge entry with rate limiting, circuit breaker pattern, and zero-trust payload sanitization."
    },
    {
      id: "backend",
      name: "APPLICATION & SERVICE LAYER",
      tech: "Python FastAPI • Node.js Express • WebSockets • Redux Toolkit • Zustand",
      desc: "Decoupled microservices managing core domain logic, asynchronous background tasks, and real-time bidirectional messaging."
    },
    {
      id: "ai",
      name: "AI & ML INFERENCE PIPELINE",
      tech: "PyTorch • TensorFlow • Scikit-learn • Ollama/Qwen3 • ChromaDB • RRF Hybrid",
      desc: "Local agentic copilot reasoning, multi-stage RAG dual search (ChromaDB + BM25), Cross-Encoder reranking, and crop disease neural networks."
    },
    {
      id: "data",
      name: "DATA & PERSISTENCE LAYER",
      tech: "MongoDB • Oracle SQL • PostgreSQL • ChromaDB Vector DB • Redis Cache",
      desc: "Relational and NoSQL document storage paired with vector embeddings for semantic RAG search and in-memory session caching."
    },
    {
      id: "security",
      name: "SECURITY & TELEMETRY STREAM",
      tech: "Apache Kafka • Splunk SIEM • MITRE ATT&CK • CloudWatch • Security Groups",
      desc: "Event stream ingestion, automated IOC/IOA log normalization, threat scoring, and audit logging."
    },
    {
      id: "infrastructure",
      name: "DEVOPS, CLOUD & CONTAINER INFRASTRUCTURE",
      tech: "AWS (EC2, S3, IAM) • Docker • Kubernetes • IPFS • Vercel • Render",
      desc: "Containerized Kubernetes deployment environments enforced by strict RBAC policies, least privilege, and encrypted key management."
    }
  ]
};
