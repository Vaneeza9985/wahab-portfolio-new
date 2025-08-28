export const siteConfig = {
  name: "Abdul Wahab ",
  title: "Mechanical Engineer —",
  tagline: "Engineer by training, craftsperson at heart.",
  description: "Mechanical Engineer specializing in Aircraft Structures & Systems. Turning complex assemblies into safe, serviceable machines.",
  location: "Pakistan (UTC+5)",
  locationShort: "Pakistan — open to opportunities worldwide",
  email: "abdulwahab@gmail.com",
  phone: "+923114741021",
  resumeUrl: "/resume.pdf",
  
  social: {
    linkedin: "https://linkedin.com/in/abdulwahab-me",
    github: "https://github.com/abdulwahab",
    email: "abdulwahab@gmail.com",
  },
  
  hero: {
    headline: "Mechanical Engineer specializing in Aircraft Structures & Systems.",
    subhead: "Turning complex assemblies into safe, serviceable machines.",
    cta: {
      primary: "View Projects",
      secondary: "Download Resume",
    },
  },
  
  about: {
    bio: "Passionate mechanical engineer with specialized experience in aircraft structures and systems. During my internship at Pakistan Aeronautical Complex, I contributed to critical fighter jet rebuild and overhaul workflows, gaining hands-on experience with aerospace manufacturing and maintenance protocols.",
    highlights: [
      "Safety-first approach to engineering design",
      "Reliability engineering and failure analysis",
      "Maintainability optimization",
      "Design for manufacturability (DFM/DFA)",
    ],
    stats: [
      { label: "Years Experience", value: 2, suffix: "+" },
      { label: "Projects Completed", value: 15, suffix: "" },
      { label: "Tools Mastered", value: 8, suffix: "" },
      { label: "Certifications", value: 5, suffix: "" },
    ],
  },
  
  experience: [
    {
      id: 1,
      company: "Pakistan Aeronautical Comp",
      location: "Kamra Air Base",
      position: "Mechanical Engineering Intern",
      duration: "1 month",
      period: "2023",
      description: "Assisted in fighter jet rebuild & overhaul workflows under supervision. Contributed to disassembly/inspection, tolerance checks, NDT coordination, and re-assembly documentation.",
      highlights: [
        "Created checklist for fastener torque specs & safety wire verification",
        "Helped update BOM and part traceability logs",
        "Observed FOD control, ESD protocols, and safety briefings",
        "Prepared a mini-report on fatigue-critical components & inspection intervals",
      ],
      tags: ["Aerospace", "Manufacturing", "Quality Control", "Documentation"],
    },
  ],
  
  projects: [
    {
      id: 1,
      title: "Modular Control Surface Jig",
      description: "CAD fixture enabling repeatable alignment within ±0.2°",
      longDescription: "Designed and developed a modular jig system for precise control surface alignment during manufacturing and maintenance operations. The solution improved assembly accuracy and reduced setup time significantly.",
      image: "/projects/control-surface-jig.jpg",
      tags: ["CAD", "SolidWorks", "Manufacturing", "Precision"],
      category: "Manufacturing",
      year: "2023",
      status: "Completed",
      results: [
        "Improved alignment accuracy to ±0.2°",
        "Reduced setup time by 40%",
        "Enhanced repeatability across production runs",
      ],
      techStack: ["SolidWorks", "GD&T", "Manufacturing", "Quality Control"],
    },
    {
      id: 2,
      title: "Lightweight Bracket Topology Optimization",
      description: "38% mass reduction validated via FEA (ANSYS)",
      longDescription: "Performed comprehensive topology optimization on aircraft mounting brackets to reduce weight while maintaining structural integrity. Used advanced FEA techniques to validate the design under various load conditions.",
      image: "/projects/topology-optimization.jpg",
      tags: ["FEA", "ANSYS", "Optimization", "Weight Reduction"],
      category: "Analysis",
      year: "2023",
      status: "Completed",
      results: [
        "38% mass reduction achieved",
        "Maintained factor of safety > 2.0",
        "Validated through extensive FEA analysis",
      ],
      techStack: ["ANSYS", "MATLAB", "Topology Optimization", "FEA"],
    },
    {
      id: 3,
      title: "Ground Support Equipment Redesign",
      description: "Improved MTTR by 22% with better access & safety guards",
      longDescription: "Redesigned ground support equipment to improve maintainability and safety. Focused on reducing mean time to repair (MTTR) through better component accessibility and enhanced safety features.",
      image: "/projects/gse-redesign.jpg",
      tags: ["Design", "Safety", "Maintenance", "Ergonomics"],
      category: "Design",
      year: "2024",
      status: "In Progress",
      results: [
        "22% reduction in MTTR",
        "Improved safety compliance",
        "Enhanced ergonomic access",
      ],
      techStack: ["SolidWorks", "Ergonomics", "Safety Analysis", "DFM"],
    },
  ],
  
  skills: {
    cad: {
      title: "CAD & Design",
      items: [
        { name: "SolidWorks", level: 90 },
        { name: "CATIA", level: 75 },
        { name: "Fusion 360", level: 80 },
        { name: "AutoCAD", level: 85 },
      ],
    },
    analysis: {
      title: "Analysis & Simulation",
      items: [
        { name: "ANSYS", level: 85 },
        { name: "MATLAB", level: 80 },
        { name: "FEA", level: 85 },
        { name: "Tolerance Analysis", level: 90 },
      ],
    },
    manufacturing: {
      title: "Manufacturing",
      items: [
        { name: "CNC Basics", level: 70 },
        { name: "DFM/DFA", level: 85 },
        { name: "GD&T", level: 90 },
        { name: "Quality Control", level: 85 },
      ],
    },
    tools: {
      title: "Tools & Documentation",
      items: [
        { name: "Technical Writing", level: 90 },
        { name: "Project Management", level: 80 },
        { name: "BOM Management", level: 85 },
        { name: "Process Documentation", level: 90 },
      ],
    },
  },
  
  certifications: [
    {
      id: 1,
      title: "SolidWorks Certified Professional",
      issuer: "Dassault Systèmes",
      year: "2023",
      pdfUrl: "/certificates/solidworks-professional.pdf",
    },
    {
      id: 2,
      title: "ANSYS Certified User",
      issuer: "ANSYS Inc.",
      year: "2023",
      pdfUrl: "/certificates/ansys-certified.pdf",
    },
    {
      id: 3,
      title: "GD&T Fundamentals",
      issuer: "ASME",
      year: "2022",
      pdfUrl: "/certificates/gdt-fundamentals.pdf",
    },
  ],
  
  testimonials: [
    {
      id: 1,
      quote: "Ahmed demonstrated exceptional attention to detail and a strong understanding of aerospace manufacturing processes during his internship.",
      author: "Dr. Muhammad Ali",
      role: "Senior Engineer, Pakistan Aeronautical Complex",
      avatar: "/testimonials/dr-ali.jpg",
    },
    {
      id: 2,
      quote: "His ability to quickly grasp complex technical concepts and apply them practically made him a valuable team member.",
      author: "Eng. Sarah Khan",
      role: "Manufacturing Manager",
      avatar: "/testimonials/sarah-khan.jpg",
    },
  ],
};