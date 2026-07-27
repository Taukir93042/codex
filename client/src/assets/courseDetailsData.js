// Mock details for the course list
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import profile_img from "./profile_img.png";

export const courseDetailedMetadata = {
  // Course 1: Complete React JS Bootcamp
  1: {
    subtitle: "Master React 19, Hooks, Redux, Context API, React Router, and build 5 real-world projects from scratch.",
    whatYouWillLearn: [
      "Understand and implement component-based architectures in React",
      "Master modern state management with Hooks (useState, useEffect, useMemo, useCallback)",
      "Manage complex application-wide state using Redux Toolkit and Context API",
      "Build dynamic routing using React Router DOM",
      "Deploy production-ready React applications on Vercel and Netlify",
      "Integrate RESTful APIs and handle asynchronous data flows cleanly"
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and modern JavaScript (ES6+)",
      "A computer (Windows, Mac, or Linux) with internet access",
      "No prior React JS experience is required!"
    ],
    description: "Welcome to the Complete React JS Bootcamp! This course is designed to take you from absolute beginner to a confident React Developer. We'll start with fundamental concepts like JSX, state, props, and components. Next, we'll dive deep into state management, custom hooks, context, and performance optimization.\n\nThroughout this bootcamp, you will build 5 real-world applications including a full e-commerce dashboard, a chat application, and a weather application. By the end of this course, you will have a solid portfolio to show to potential employers.",
    instructor: {
      name: "John Doe",
      title: "Senior Frontend Engineer & Author",
      avatar: profile_img_1,
      coursesCount: 12,
      studentsCount: 45200,
      rating: 4.8,
      bio: "John is a senior frontend developer with over 10 years of experience. He has worked at top companies including Amazon and Netflix. He loves teaching and simplifies complex JavaScript/React concepts into bite-sized lessons."
    },
    curriculum: [
      {
        title: "Section 1: Course Introduction & Setup",
        duration: "45m",
        lectures: [
          { title: "Course Welcome & Overview", duration: "05:12", isPreview: true },
          { title: "Setting up your Development Environment", duration: "12:30", isPreview: true },
          { title: "Hello World: Your First React Component", duration: "15:40", isPreview: false },
          { title: "Understanding React Project Structure", duration: "11:20", isPreview: false }
        ]
      },
      {
        title: "Section 2: Deep Dive into JSX & Components",
        duration: "2h 15m",
        lectures: [
          { title: "JSX Syntax rules", duration: "18:45", isPreview: true },
          { title: "Creating Reusable Components", duration: "25:10", isPreview: false },
          { title: "Working with Props and Default Values", duration: "22:15", isPreview: false },
          { title: "Rendering Lists & the 'key' prop", duration: "32:10", isPreview: false },
          { title: "Styling React Components (CSS & Tailwind)", duration: "36:12", isPreview: false }
        ]
      },
      {
        title: "Section 3: State Management & Hooks",
        duration: "3h 40m",
        lectures: [
          { title: "Introduction to State in React", duration: "24:12", isPreview: true },
          { title: "Mastering useState Hook", duration: "32:45", isPreview: false },
          { title: "Side Effects with useEffect Hook", duration: "45:10", isPreview: false },
          { title: "Handling Forms & Controlled Inputs", duration: "38:20", isPreview: false },
          { title: "Rules of Hooks & Custom Hooks", duration: "40:15", isPreview: false }
        ]
      },
      {
        title: "Section 4: Context API & Redux Toolkit",
        duration: "5h 10m",
        lectures: [
          { title: "Why State Management Matters", duration: "18:30", isPreview: false },
          { title: "Context API for Global State", duration: "48:15", isPreview: false },
          { title: "Introduction to Redux & Redux Toolkit", duration: "55:40", isPreview: false },
          { title: "Creating Slices, Actions, and Selectors", duration: "1h 12m", isPreview: false },
          { title: "Redux Async Thunks & API integration", duration: "1h 15m", isPreview: false }
        ]
      }
    ],
    faqs: [
      { question: "Is this course up-to-date with React 19?", answer: "Yes! The course is fully recorded using React 19 standards including the new compiler features and hook improvements." },
      { question: "Can I get help if I get stuck?", answer: "Absolutely. We have a dedicated QA section and a Discord community where mentors respond to questions within 24 hours." },
      { question: "Is there a certificate at the end?", answer: "Yes, you will receive a verifiable digital certificate upon completing all lessons and assignments." }
    ],
    reviews: [
      { name: "Sarah Connor", rating: 5, date: "2 weeks ago", text: "This is hands-down the best React course on the web. John explains everything with great clarity. The portfolio projects alone are worth the price." },
      { name: "Michael Cheng", rating: 4, date: "1 month ago", text: "Very comprehensive. I really liked the Redux Toolkit section. Just wish there was a bit more detail on server-side rendering, but overall outstanding." },
      { name: "Emily Watson", rating: 5, date: "2 months ago", text: "Brilliant explanation of useEffect and hooks! Everything clicked after watching the custom hooks section. Highly recommended." }
    ]
  },
  // Course 9: MERN Stack Development
  9: {
    subtitle: "Build and deploy full-stack production applications using MongoDB, Express, React, and Node.js from absolute scratch.",
    whatYouWillLearn: [
      "Design and implement RESTful APIs using Express and Node.js",
      "Perform database modeling, querying, and schema definition in MongoDB & Mongoose",
      "Secure applications using JSON Web Tokens (JWT) and cookie-based auth",
      "Manage frontend global state with Redux Toolkit and integrate it with backend services",
      "Deploy MERN applications on AWS and Render with SSL configurations",
      "Write clean, componentized code for real-world production setups"
    ],
    requirements: [
      "Solid knowledge of JavaScript, HTML, and CSS",
      "Familiarity with basic React components is highly recommended",
      "No backend experience is needed. We start Node/Express from absolute zero."
    ],
    description: "Take your development skills to the ultimate level with this comprehensive MERN Stack Development course. You will learn the exact workflows used by top engineering teams to build, secure, and deploy full-stack websites.\n\nOver this course, we will build a complete social-media network, an e-commerce hub, and a live tracking application. You will learn database aggregation, security practices, performance tuning, and how to configure client-server deployments.",
    instructor: {
      name: "James Wilson",
      title: "Principal Architect & Educator",
      avatar: profile_img_2,
      coursesCount: 8,
      studentsCount: 38900,
      rating: 4.9,
      bio: "James is a software architect with over 12 years of industry experience. He has helped scale systems at startups and Fortune 500 companies. His teaching style is practical and focused on industry patterns."
    },
    curriculum: [
      {
        title: "Section 1: Course Introduction & Architecture",
        duration: "30m",
        lectures: [
          { title: "MERN Stack Overview and Architecture", duration: "10:15", isPreview: true },
          { title: "Project Setup & Monorepo vs Polyrepo structure", duration: "12:45", isPreview: true },
          { title: "Installing Tools & Environment config", duration: "07:20", isPreview: false }
        ]
      },
      {
        title: "Section 2: Node.js & Express Fundamentals",
        duration: "3h 10m",
        lectures: [
          { title: "Introduction to Node.js & Event Loop", duration: "25:30", isPreview: true },
          { title: "Building your first HTTP server in Express", duration: "32:15", isPreview: false },
          { title: "Express Routing & Middleware creation", duration: "42:10", isPreview: false },
          { title: "Handling Request/Response Objects and JSON payloads", duration: "38:40", isPreview: false },
          { title: "Error Handling practices", duration: "31:40", isPreview: false }
        ]
      },
      {
        title: "Section 3: Database & Mongoose Integration",
        duration: "4h 25m",
        lectures: [
          { title: "SQL vs NoSQL: Why MongoDB?", duration: "22:10", isPreview: true },
          { title: "Setting up MongoDB Atlas and Local Compass", duration: "28:15", isPreview: false },
          { title: "Mongoose Schemas & Data Validation", duration: "45:30", isPreview: false },
          { title: "CRUD Operations & Advanced Aggregations", duration: "1h 10m", isPreview: false },
          { title: "Relationships: Referencing vs Embedding data", duration: "38:50", isPreview: false }
        ]
      },
      {
        title: "Section 4: Authentication & Security",
        duration: "5h 15m",
        lectures: [
          { title: "Understanding Stateless Authentication", duration: "15:40", isPreview: true },
          { title: "Password Hashing with bcrypt", duration: "32:10", isPreview: false },
          { title: "JWT Generation, Verification, & Storage", duration: "55:30", isPreview: false },
          { title: "Creating Auth Middleware & Protected Routes", duration: "48:20", isPreview: false },
          { title: "CORS & Security Headers configuration", duration: "34:10", isPreview: false }
        ]
      }
    ],
    faqs: [
      { question: "Will we deploy both frontend and backend?", answer: "Yes, we will deploy the Node/Express backend to Render and the React frontend to Vercel, linking them via environment variables." },
      { question: "Is this course suitable for beginners?", answer: "It is perfect for those who know JavaScript and basic React and want to make the jump to building their own full-stack projects." }
    ],
    reviews: [
      { name: "John Davis", rating: 5, date: "1 week ago", text: "This is the most exhaustive MERN stack course I have taken. The auth and security section is worth the price alone." },
      { name: "Emma Watson", rating: 5, date: "3 weeks ago", text: "Outstanding! Explains complex concepts with so much ease. The projects are clean and robust." }
    ]
  }
};

// Generates dynamic premium fallback data for any course to ensure visual completeness
export const generateCourseFallbackDetails = (course) => {
  const defaultInstructor = {
    name: course.instructor || "Expert Mentor",
    title: `Senior ${course.category || "Technology"} Instructor`,
    avatar: profile_img,
    coursesCount: 5,
    studentsCount: course.students || 1200,
    rating: course.rating || 4.7,
    bio: `${course.instructor || "Our expert mentor"} is a software specialist with extensive experience in the technology field. They specialize in building clean code architectures and delivering high-quality education to students worldwide.`
  };

  const learnPoints = [
    `Master the fundamental and advanced concepts of ${course.title}.`,
    `Build strong foundational and practical skills in ${course.category || "this domain"}.`,
    "Implement real-world best practices and patterns used in the software industry.",
    "Solve complex coding challenges and complete hands-on assignments.",
    "Develop a fully functional portfolio project to showcase to recruiters.",
    "Gain confidence and prepare effectively for technical developer interviews."
  ];

  const reqPoints = [
    "Basic knowledge and logic of computer operations.",
    `Familiarity with general coding concepts is helpful but not strictly required.`,
    "A computer with internet access and visual studio code installed."
  ];

  const genericDescription = `Unlock your potential with this comprehensive course on ${course.title}. Designed by industry experts, this curriculum takes you from core concepts to advanced techniques with structured lessons, practical code challenges, and live project build sessions.\n\nWhether you are a developer looking to expand your skills, a freelancer aiming for high-end gigs, or a computer science student getting ready for job placements, this course is tailored to give you exactly what you need. By the end, you'll have hands-on experience and a verifiable portfolio.`;

  const curriculumSections = [
    {
      title: "Section 1: Getting Started & Fundamentals",
      duration: "1h 15m",
      lectures: [
        { title: `Introduction to ${course.category || "Course"} Concept`, duration: "08:12", isPreview: true },
        { title: "Tools Installation & Environment Setup", duration: "12:30", isPreview: true },
        { title: "Basic Syntax and Fundamentals", duration: "25:40", isPreview: false },
        { title: "First Project Showcase & Run", duration: "28:50", isPreview: false }
      ]
    },
    {
      title: "Section 2: Core Concepts Deep Dive",
      duration: "3h 45m",
      lectures: [
        { title: "Working with Core APIs and Methods", duration: "32:15", isPreview: true },
        { title: "Handling State & Data structures", duration: "45:20", isPreview: false },
        { title: "Structuring project directories and configurations", duration: "38:40", isPreview: false },
        { title: "Common pitfalls and how to debug errors", duration: "50:10", isPreview: false }
      ]
    },
    {
      title: "Section 3: Advanced Concepts & Optimization",
      duration: "4h 20m",
      lectures: [
        { title: "Designing Advanced Functions and Classes", duration: "42:15", isPreview: false },
        { title: "Performance tuning and optimization techniques", duration: "55:30", isPreview: false },
        { title: "Securing APIs and data flows", duration: "44:10", isPreview: false },
        { title: "Deployment checklist and configuration settings", duration: "38:20", isPreview: false }
      ]
    }
  ];

  const genericFAQs = [
    { question: `Who is this course for?`, answer: `This course is built for students, professionals, and hobbyists wishing to gain mastery in ${course.title}.` },
    { question: "Is there a discussion forum for questions?", answer: "Yes, you will get access to the course discussion boards where other students and mentors answer questions daily." },
    { question: "Are the resources downloadable?", answer: "Yes! All slides, source codes, checklists, and cheat sheets are 100% downloadable." }
  ];

  const genericReviews = [
    { name: "Amit Kumar", rating: 5, date: "3 weeks ago", text: `Exceptional course! The sections on ${course.category || "technology"} are extremely well explained. Recommending this to all developers.` },
    { name: "John Smith", rating: 4, date: "1 month ago", text: "Great material, explained very step-by-step. The mentor keeps a very friendly and encouraging tone throughout the course." }
  ];

  return {
    subtitle: course.subtitle || `Get started with the best ${course.title} curriculum to fast-track your learning journey and build real-world software.`,
    whatYouWillLearn: learnPoints,
    requirements: reqPoints,
    description: genericDescription,
    instructor: defaultInstructor,
    curriculum: curriculumSections,
    faqs: genericFAQs,
    reviews: genericReviews
  };
};

export const getCourseDetails = (course) => {
  if (!course) return null;
  const metadata = courseDetailedMetadata[course.id];
  if (metadata) {
    // Merge base course fields with details
    return {
      ...course,
      ...metadata,
      instructor: {
        ...metadata.instructor,
        name: course.instructor || metadata.instructor.name
      }
    };
  }
  
  // Return dynamically generated values
  const fallback = generateCourseFallbackDetails(course);
  return {
    ...course,
    ...fallback
  };
};
