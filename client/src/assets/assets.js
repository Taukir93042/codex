
 
import heroImg from "./heroImg.png"
import microsoft_logo from "./microsoft_logo.svg"
import walmart_logo from "./walmart_logo.svg"
 
 import js from "./js.png"

 import code from "./code.png"

import paypal_logo from "./paypal_logo.svg"
import accenture_logo from "./accenture_logo.svg"
import adobe_logo from "./adobe_logo.svg"
import profile_img_1 from "./profile_img_1.png"
import profile_img_2 from "./profile_img_2.png"
import profile_img_3 from "./profile_img_3.png"
import profile_img from "./profile_img.png"
import profile_img2 from "./profile_img2.png"
 import favicon from './favicon.svg';
 import instructorAuth1 from './instructorAuth1.png';
 
 
export const assets = {
  heroImg,
  walmart_logo,
  microsoft_logo,
  paypal_logo,
accenture_logo,
adobe_logo,
favicon,
instructorAuth1

}


// ================= HERO =================




export const heroData = {
  title: "Learn Today, Lead Tomorrow.",
  subtitle:
    "Explore top courses, learn new skills and advance your career with CodeCampus.",
  button1: "Explore Courses",
  button2: "How It Works",
};

// ================= STATS =================

export const stats = [
  {
    id: 1,
    number: "10K+",
    title: "Students",
  },
  {
    id: 2,
    number: "150+",
    title: "Courses",
  },
  {
    id: 3,
    number: "50+",
    title: "Expert Mentors",
  },
  {
    id: 4,
    number: "95%",
    title: "Success Rate",
  },
];

// ================= CATEGORIES =================

export const categories = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    courses: 40,
  },
  {
    id: 2,
    title: "Programming",
    icon: "👨‍💻",
    courses: 35,
  },
  {
    id: 3,
    title: "Data Science",
    icon: "📊",
    courses: 18,
  },
  {
    id: 4,
    title: "Cyber Security",
    icon: "🛡️",
    courses: 20,
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: "☁️",
    courses: 15,
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: "🎨",
    courses: 22,
  },
];

// ================= COURSES =================

export const courses = [
  {
    id: 1,
    title: "Complete React JS Bootcamp",
    instructor: "John Doe",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    price: 499,
    rating: 4.9,
    students: 5200,
    lessons: 85,
    duration: "24 Hours",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Node.js & Express Masterclass",
    instructor: "Sarah Khan",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    price: 699,
    rating: 4.8,
    students: 4200,
    lessons: 70,
    duration: "20 Hours",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "MongoDB Complete Guide",
    instructor: "Alex Johnson",
    category: "Database",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    price: 399,
    rating: 4.7,
    students: 3100,
    lessons: 45,
    duration: "15 Hours",
    level: "Beginner",
  },
  {
    id: 4,
    title: "JavaScript From Scratch",
    instructor: "Michael Scott",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    price: 599,
    rating: 4.9,
    students: 7800,
    lessons: 95,
    duration: "30 Hours",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Python for Beginners",
    instructor: "David Brown",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
    price: 449,
    rating: 4.8,
    students: 6200,
    lessons: 65,
    duration: "22 Hours",
    level: "Beginner",
  },
  {
    id: 6,
    title: "UI/UX Design Masterclass",
    instructor: "Emily Watson",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
    price: 799,
    rating: 4.9,
    students: 2100,
    lessons: 55,
    duration: "18 Hours",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Next.js Full Course",
    instructor: "Chris Martin",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    price: 649,
    rating: 4.8,
    students: 3900,
    lessons: 60,
    duration: "19 Hours",
    level: "Intermediate",
  },
  {
    id: 8,
    title: "Tailwind CSS Complete Guide",
    instructor: "Sophia Lee",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600",
    price: 299,
    rating: 4.7,
    students: 4500,
    lessons: 40,
    duration: "12 Hours",
    level: "Beginner",
  },
  {
    id: 9,
    title: "MERN Stack Development",
    instructor: "James Wilson",
    category: "Full Stack",
   image:
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    price: 999,
    rating: 5.0,
    students: 8900,
    lessons: 120,
    duration: "40 Hours",
    level: "Advanced",
  },
  {
    id: 10,
    title: "C++ DSA Masterclass",
    instructor: "Ankit Verma",
    category: "DSA",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
    price: 549,
    rating: 4.8,
    students: 7300,
    lessons: 100,
    duration: "35 Hours",
    level: "Intermediate",
  },
  {
    id: 11,
    title: "Java Programming Complete Course",
    instructor: "Rahul Sharma",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600",
    price: 599,
    rating: 4.7,
    students: 5400,
    lessons: 80,
    duration: "28 Hours",
    level: "Intermediate",
  },
  {
    id: 12,
    title: "Laravel PHP Masterclass",
    instructor: "Mohit Gupta",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600",
    price: 749,
    rating: 4.9,
    students: 3600,
    lessons: 90,
    duration: "26 Hours",
    level: "Intermediate",
  },
];

// ================= FEATURES =================

export const features = [
  {
    id: 1,
    icon: "📚",
    title: "Quality Content",
    subtitle: "Expert Instructors",
  },
  {
    id: 2,
    icon: "🏆",
    title: "Get Certified",
    subtitle: "Boost Your Career",
  },
  {
    id: 3,
    icon: "⏰",
    title: "Learn Anytime",
    subtitle: "Flexible Learning",
  },
  {
    id: 4,
    icon: "🌍",
    title: "Lifetime Access",
    subtitle: "Study Anywhere",
  },
];

// ================= TESTIMONIALS =================

export const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Frontend Developer",
    company: "Google",
    companyLogo: microsoft_logo,
    image: profile_img_1,
    review:
      "CodeCampus helped me go from a beginner to a job-ready developer. The courses are well structured, practical, and beginner-friendly.",
    color: "bg-indigo-100",
    icon: "💜",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Full Stack Developer",
    company: "Microsoft",
    companyLogo: microsoft_logo,
    image: profile_img_2,
    review:
      "The instructors explain complex topics in a simple way. Hands-on projects boosted my confidence and portfolio.",
    color: "bg-green-100",
    icon: "🎓",
  },
  {
    id: 3,
    name: "Arjun Verma",
    role: "Data Analyst",
    company: "Amazon",
    companyLogo:microsoft_logo,
    image: profile_img_3,
    review:
      "Thanks to CodeCampus, I landed my dream job as a Data Analyst. The content is industry-focused and practical.",
    color: "bg-yellow-100",
    icon: "📈",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "UI/UX Designer",
    company: "Adobe",
    companyLogo: microsoft_logo,
    image: profile_img2,
    review:
      "The UI/UX course gave me the confidence to build professional designs and helped me secure freelance projects.",
    color: "bg-pink-100",
    icon: "🎨",
  },
  {
    id: 5,
    name: "Aman Singh",
    role: "Backend Developer",
    company: "PayPal",
    companyLogo: microsoft_logo,
    image: profile_img,
    review:
      "The Node.js and MongoDB courses were amazing. I learned API development from scratch with real-world projects.",
    color: "bg-blue-100",
    icon: "💻",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Software Engineer",
    company: "Netflix",
    companyLogo: microsoft_logo,
    image: profile_img,
    review:
      "Every lesson was practical and easy to understand. The projects made my resume much stronger for interviews.",
    color: "bg-red-100",
    icon: "🚀",
  },
  {
    id: 7,
    name: "Rahul Kumar",
    role: "DevOps Engineer",
    company: "IBM",
    companyLogo: microsoft_logo,
    image: profile_img,
    review:
      "The DevOps roadmap was well structured. Docker, Kubernetes, and AWS were explained with practical examples.",
    color: "bg-cyan-100",
    icon: "⚙️",
  },
  {
    id: 8,
    name: "Anjali Verma",
    role: "Python Developer",
    company: "Infosys",
    companyLogo: microsoft_logo,
    image: profile_img,
    review:
      "The Python Bootcamp was one of the best investments for my career. I cracked my first developer interview.",
    color: "bg-emerald-100",
    icon: "🐍",
  },
  {
    id: 9,
    name: "Mohit Jain",
    role: "MERN Stack Developer",
    company: "TCS",
    companyLogo: microsoft_logo,
    image: profile_img,
    review:
      "Building real-world MERN projects on CodeCampus helped me become job-ready and improve my coding skills.",
    color: "bg-orange-100",
    icon: "🔥",
  },
];

// ================= FAQ =================

export const faqs = [
  {
    id: 1,
    question: "Are the courses lifetime accessible?",
    answer: "Yes, once enrolled, you get lifetime access.",
  },
  {
    id: 2,
    question: "Will I receive a certificate?",
    answer: "Yes, after successfully completing the course.",
  },
  {
    id: 3,
    question: "Can I access courses on mobile?",
    answer: "Yes, the platform is fully responsive.",
  },
];

// ================= FOOTER =================

export const footerLinks = {
  company: [
    "About",
    "Careers",
    "Blog",
    "Contact",
  ],

  support: [
    "Help Center",
    "Terms",
    "Privacy",
    "FAQs",
  ],

  courses: [
    "React",
    "JavaScript",
    "Python",
    "Node.js",
    "MongoDB",
  ],
};