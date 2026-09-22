import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Code2,
  Users,
  Users2,
  Award,
  Sparkles,
  Target,
  Eye,
  HeartHandshake,
  Compass,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Terminal,
  GraduationCap,
  Zap,
  Rocket,
  GitBranch,
  GitPullRequest,
  GitCommit,
  Laptop,
  Flame,
  Check,
  X,
  Star,
  Globe,
  TrendingUp,
  Layers,
  Cpu,
  PlayCircle,
  Clock,
  BookOpen,
  MessageSquare,
  HelpCircle,
  CheckSquare,
  Building2,
  Server,
  Database,
  Shield,
  Activity,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomCTABanner from "../components/BottomCTABanner";
import { assets } from "../assets/assets.js";

// ================= DATA CONSTANTS =================

const IMPACT_METRICS = [
  {
    id: 1,
    value: "10,000+",
    label: "Active Engineers Trained",
    desc: "Across 45+ countries worldwide",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    borderGlow: "group-hover:border-cyan-500/50",
    bgTint: "bg-cyan-500/10 text-cyan-400",
  },
  {
    id: 2,
    value: "95.4%",
    label: "Career Transition Rate",
    desc: "Hired within 120 days of graduation",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    borderGlow: "group-hover:border-emerald-500/50",
    bgTint: "bg-emerald-500/10 text-emerald-400",
  },
  {
    id: 3,
    value: "50+",
    label: "Senior Tech Mentors",
    desc: "From Google, Meta, Microsoft & AWS",
    icon: Award,
    color: "from-indigo-500 to-purple-500",
    borderGlow: "group-hover:border-indigo-500/50",
    bgTint: "bg-indigo-500/10 text-indigo-400",
  },
  {
    id: 4,
    value: "4.92 / 5",
    label: "Alumni Satisfaction Rating",
    desc: "Based on 3,400+ verified reviews",
    icon: Star,
    color: "from-amber-500 to-orange-500",
    borderGlow: "group-hover:border-amber-500/50",
    bgTint: "bg-amber-500/10 text-amber-400",
  },
];

const IMPACT_FEATURES = [
  {
    id: 1,
    title: "200+ Production Modules",
    description: "Enterprise-grade curriculum",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: 2,
    title: "Real Microservices",
    description: "Not toy 'todo' demo apps",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    id: 3,
    title: "Verified Credentials",
    description: "LinkedIn shareable proof",
    icon: <Award className="w-5 h-5 text-amber-400" />,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
  {
    id: 4,
    title: "Browser Sandboxes",
    description: "Zero-config cloud dev",
    icon: <Laptop className="w-5 h-5 text-emerald-400" />,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: 5,
    title: "1-on-1 Code Reviews",
    description: "Line-by-line PR feedback",
    icon: <Users2 className="w-5 h-5 text-purple-400" />,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
  {
    id: 6,
    title: "Direct Job Referrals",
    description: "Top hiring partner access",
    icon: <Rocket className="w-5 h-5 text-rose-400" />,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/30",
  },
];

const WHY_CODECAMPUS = [
  {
    id: 1,
    icon: Layers,
    title: "Production-Scale Curriculum",
    badge: "Zero Toy Apps",
    desc: "Build real distributed microservices with multi-tenant databases, Redis caching, Kafka message queues, and resilient cloud architectures.",
    points: [
      "Distributed microservices & caching",
      "Multi-tenant PostgreSQL & Redis",
      "Kafka event queues & resilience",
    ],
    color: "text-cyan-400",
    glow: "bg-cyan-500/10 border-cyan-500/30",
    gradient: "from-cyan-500/15 via-blue-500/5 to-transparent",
  },
  {
    id: 2,
    icon: GitPullRequest,
    title: "1-on-1 Staff Code Reviews",
    badge: "FAANG Mentors",
    desc: "Submit your code as GitHub Pull Requests and receive in-depth line-by-line audits from Senior & Staff Engineers at top tech firms.",
    points: [
      "Line-by-line PR feedback",
      "Clean architecture & code audits",
      "Algorithmic speed & memory checks",
    ],
    color: "text-blue-400",
    glow: "bg-blue-500/10 border-blue-500/30",
    gradient: "from-blue-500/15 via-indigo-500/5 to-transparent",
  },
  {
    id: 3,
    icon: Laptop,
    title: "Zero-Config Cloud Sandboxes",
    badge: "Browser Cloud IDE",
    desc: "Spin up complete containerized Linux & Docker development environments directly in your browser with zero local machine friction.",
    points: [
      "Instant in-browser Docker sandboxes",
      "Live cloud hot-reloading",
      "Two-way personal GitHub sync",
    ],
    color: "text-emerald-400",
    glow: "bg-emerald-500/10 border-emerald-500/30",
    gradient: "from-emerald-500/15 via-teal-500/5 to-transparent",
  },
  {
    id: 4,
    icon: GitBranch,
    title: "Real Automated CI/CD Pipelines",
    badge: "DevOps Native",
    desc: "Practice professional Git branching workflows, automated testing suites, GitHub Actions CI/CD, and live deployments on AWS & Vercel.",
    points: [
      "Automated testing suites",
      "GitHub Actions CI/CD pipelines",
      "Live deploys to AWS EKS & Edge",
    ],
    color: "text-purple-400",
    glow: "bg-purple-500/10 border-purple-500/30",
    gradient: "from-purple-500/15 via-pink-500/5 to-transparent",
  },
  {
    id: 5,
    icon: Clock,
    title: "Lifetime Access & Updates",
    badge: "Lifetime ROI",
    desc: "Enroll once and get permanent lifetime access to all learning tracks, community forums, and rolling curriculum upgrades at zero extra cost.",
    points: [
      "No recurring subscriptions",
      "Free future stack & framework updates",
      "Lifelong engineering network",
    ],
    color: "text-amber-400",
    glow: "bg-amber-500/10 border-amber-500/30",
    gradient: "from-amber-500/15 via-orange-500/5 to-transparent",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Career Launchpad & Referrals",
    badge: "95.4% Placement",
    desc: "Get hired faster with live mock technical interviews, system design drills, portfolio reviews, and direct referrals to 80+ hiring partners.",
    points: [
      "Live 1-on-1 mock interview rounds",
      "Direct partner referrals & hiring access",
      "180% average alumni salary increase",
    ],
    color: "text-rose-400",
    glow: "bg-rose-500/10 border-rose-500/30",
    gradient: "from-rose-500/15 via-red-500/5 to-transparent",
  },
];

const VALUES = [
  {
    icon: <Target className="w-6 h-6 text-cyan-400" />,
    title: "Our Mission",
    subtitle: "Real Skills for Tangible Impact",
    desc: "Empower ambitious developers around the globe by providing accessible, rigorous, and high-yield software engineering education that turns motivated learners into high-impact builders.",
    points: [
      "Zero fluff: 100% production-tested curriculum",
      "Architectural thinking over syntax memorization",
      "Democratizing elite tech education globally",
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentBorder: "group-hover:border-cyan-500/50",
    badge: "Purpose-Driven",
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-400" />,
    title: "Our Vision",
    subtitle: "The Definitive Standard for Tech Mastery",
    desc: "To be the world’s most trusted, outcome-driven tech academy where practical skills, real-world sandboxes, and problem-solving replace obsolete theory and passive video watching.",
    points: [
      "Bridge the industry-readiness gap permanently",
      "Continuous curriculum updates with modern stacks",
      "Foster a lifelong alumni community of innovators",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentBorder: "group-hover:border-blue-500/50",
    badge: "Future-Proof",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-indigo-400" />,
    title: "Our Core Values",
    subtitle: "Excellence, Rigor & Radical Transparency",
    desc: "We stand for uncompromising curriculum quality, relentless technical rigor, continuous innovation, inclusive community support, and honest learner-first mentorship.",
    points: [
      "Learner-first: No misleading marketing claims",
      "Code quality: High standards in every pull request",
      "Empathy & community: Growing stronger together",
    ],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accentBorder: "group-hover:border-indigo-500/50",
    badge: "Integrity",
  },
];

const FAQS = [
  {
    id: 1,
    question: "How is CodeCampus different from watching YouTube tutorials or standard bootcamps?",
    answer:
      "Standard tutorials keep you in 'tutorial hell' by spoon-feeding toy demos without testing your architectural instincts. CodeCampus puts you inside real distributed codebases with real Git workflows, multi-tenant databases, CI/CD automated test suites, and 1-on-1 code reviews from Senior Staff Engineers.",
  },
  {
    id: 2,
    question: "How do 1-on-1 Senior Tech Lead code reviews work?",
    answer:
      "Whenever you build a capstone or enterprise module project, you submit your work as a GitHub Pull Request. A dedicated Senior Engineer audits your code for performance, edge cases, memory optimization, system scalability, and clean design patterns, giving you actionable line-by-line feedback.",
  },
  {
    id: 3,
    question: "Do I need prior coding experience to join CodeCampus programs?",
    answer:
      "We offer structured tracks starting from fundamentals up to staff-engineer level distributed systems. Whether you are a beginner looking for a strong foundation or an experienced developer aiming for high-growth tech roles, our roadmaps adapt to your skill level.",
  },
  {
    id: 4,
    question: "Is lifetime access really included with all future updates?",
    answer:
      "Yes! When you enroll in any CodeCampus comprehensive roadmap, you receive lifetime access to all course materials, future updates, community forums, and updated project templates at zero extra cost.",
  },
  {
    id: 5,
    question: "How does the career placement and referral network assist graduates?",
    answer:
      "Our Career Launchpad includes live 1-on-1 mock technical rounds, system design interview prep, portfolio review, resume crafting, and direct referrals to our network of 80+ hiring partners across top tech firms and high-growth startups.",
  },
];

// ================= COMPONENT =================

const AboutUs = () => {
  // Active FAQ
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500 selection:text-black flex flex-col font-sans relative overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ================= 1. THIN HERO BANNER SECTION WITH IMAGE ================= */}
        <section className="relative w-full overflow-hidden bg-[#030712] border-b border-slate-800/80">
          {/* Background Image with Crisp Contrast */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${assets.about_us_workspace || assets.courses_banner_hero || assets.banner_img})`,
            }}
          />

          {/* Light Subtle Tint For High Image Clarity & Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

          {/* Ambient Neon Cyan / Blue Subtle Glow Behind Centered Text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-28 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Banner Content Container (Centered & Thin) */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-11 z-10 flex flex-col items-center justify-center text-center">
            
            {/* Section Tag */}
            <div className="flex items-center justify-center gap-3 mb-2 drop-shadow-md">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                ABOUT CODECAMPUS
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              About Us
            </h2>
              
            {/* Breadcrumb Navigation with Home Link */}
            <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-200 mt-2.5 sm:mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <Link
                to="/"
                className="text-slate-200 hover:text-cyan-400 font-semibold transition-colors"
              >
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-300" />
              <span className="text-cyan-400 font-bold">About Us</span>
            </nav>

          </div>
        </section>

        {/* ================= 2. LIVE IMPACT FEATURE TICKER ================= */}
        <section className="w-full bg-[#04081c]/90 border-b border-slate-800/80 py-4 sm:py-5 relative z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-3 items-center">
              {IMPACT_FEATURES.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 group transition-transform duration-200 hover:-translate-y-0.5 ${
                    index !== 0 ? "lg:pl-3" : ""
                  } ${
                    index !== IMPACT_FEATURES.length - 1
                      ? "lg:border-r lg:border-slate-800/60"
                      : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-normal leading-tight truncate">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. COMMAND CENTER & MANIFESTO (2-COLUMN: LEFT IMAGE, RIGHT TEXT) ================= */}
        <section className="relative w-full overflow-hidden bg-[#030712] py-14 sm:py-18 lg:py-20 border-b border-slate-800/80">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

          {/* Ambient Multi-Color Glowing Orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            
            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Image Frame */}
              <div className="lg:col-span-6 relative flex flex-col items-center w-full">
                <div className="relative w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-[0_0_50px_rgba(6,182,212,0.18)] group bg-[#080d26]">
                  <div className="relative h-[280px] sm:h-[380px] lg:h-[450px] w-full overflow-hidden">
                    <img
                      src={assets.about_mission_lab || assets.about_us_workspace || assets.courses_banner_hero}
                      alt="CodeCampus Engineering Workspace & Lab"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Contrast gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

                    {/* Floating Badge Top Left */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-950/85 border border-cyan-500/40 backdrop-blur-md shadow-lg">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="text-left">
                        <p className="text-[11px] font-extrabold text-white">CodeCampus Engineering Lab</p>
                        <p className="text-[10px] text-cyan-300 font-medium">Live Distributed Sandboxes Active</p>
                      </div>
                    </div>

                    {/* Floating Badge Bottom Right */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#080e2a]/90 border border-slate-700/80 backdrop-blur-md shadow-2xl">
                      <div className="flex -space-x-2">
                        <img src={assets.profile_img_1} alt="Learner" className="w-7 h-7 rounded-full border border-cyan-400 object-cover" />
                        <img src={assets.profile_img_2} alt="Learner" className="w-7 h-7 rounded-full border border-cyan-400 object-cover" />
                        <img src={assets.profile_img_3} alt="Learner" className="w-7 h-7 rounded-full border border-cyan-400 object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-black text-white">10,000+ Alumni</p>
                        <p className="text-[10px] text-slate-400">Deployed at Top Tech Firms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Section Tag (Matching Image 1 Style) */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                    NEXT-GEN ENGINEERING ACADEMY
                  </span>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
                </div>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight text-white leading-[1.16] drop-shadow-md">
                  We’re On A Mission To Transform{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Passive Watchers
                  </span>{" "}
                  Into{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Production-Ready Engineers
                  </span>
                </h2>

                {/* Subtitle Description */}
                <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                  CodeCampus was built to bridge the chasm between basic toy tutorials and enterprise software engineering. We believe real engineering is mastered by designing, deploying, and breaking real distributed systems.
                </p>

                {/* Quick Action CTAs */}
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full">
                  <Link
                    to="/course-list"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Explore Tech Roadmaps</span>
                    <ArrowRight size={16} className="stroke-[2.5]" />
                  </Link>
                  
                  <a
                    href="#philosophy"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <Terminal size={16} className="text-cyan-400" />
                    <span>Our Philosophy</span>
                  </a>
                </div>
              </div>

            </div>

            {/* 4 Floating Glass KPI Badges Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mt-12 sm:mt-16 w-full">
              {IMPACT_METRICS.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div
                    key={metric.id}
                    className={`group p-4 sm:p-5 rounded-2xl bg-[#080e28]/80 border border-slate-800/90 ${metric.borderGlow} backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 text-left relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${metric.bgTint} shadow-inner`}>
                        <IconComponent size={18} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-800">
                        Verified
                      </span>
                    </div>

                    <div className={`text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white mt-1">
                      {metric.label}
                    </h4>

                    <p className="text-[11px] text-slate-400 mt-1 leading-tight font-normal">
                      {metric.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 4. WHY CHOOSE CODECAMPUS CARDS ================= */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#030712] border-t border-b border-slate-800/80 overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto z-10">
            
            {/* Section Tag & Title */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                  WHY CODECAMPUS
                </span>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Why Learn Software Engineering <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  With CodeCampus?
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
                Everything you need to graduate from tutorial hell into building, shipping, and leading scalable enterprise systems.
              </p>
            </div>

            {/* 6 Clean Why Us Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {WHY_CODECAMPUS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-6 sm:p-7 rounded-3xl bg-[#080e2a]/95 border border-slate-800/90 shadow-xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0c153d] hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group"
                  >
                    <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${item.gradient} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                    <div>
                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl bg-slate-900 border flex items-center justify-center ${item.glow} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={22} className={item.color} />
                        </div>
                        <span className={`text-[11px] font-bold border px-2.5 py-1 rounded-full uppercase tracking-wider ${item.glow} ${item.color}`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                        {item.desc}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2 pt-4 border-t border-slate-800/80">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-[11px]">
                        <CheckCircle2 size={14} />
                        <span>CodeCampus Standard</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                        0{item.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 5. MISSION, VISION & VALUES ================= */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#04081c] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                  OUR GUIDING PURPOSE
                </span>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Mission, Vision & Core Values
              </h2>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400">
                The core convictions that shape our engineering curriculum, mentor selections, and student outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {VALUES.map((v, idx) => (
                <div
                  key={idx}
                  className={`p-7 sm:p-8 rounded-3xl bg-[#080e2a]/95 border border-slate-800 ${v.accentBorder} shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${v.gradient} rounded-full blur-3xl pointer-events-none`} />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md">
                        {v.icon}
                      </div>
                      <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {v.badge}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                      {v.subtitle}
                    </span>

                    <h3 className="text-2xl font-black text-white mb-3">
                      {v.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                      {v.desc}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-4 border-t border-slate-800/80">
                      {v.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>Non-negotiable CodeCampus Standard</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 6. COMPREHENSIVE FREQUENTLY ASKED QUESTIONS (FAQ) ================= */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#030712] border-t border-slate-800/80">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Everything You Need to Know
              </h2>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400">
                Got questions about CodeCampus roadmaps, 1-on-1 code reviews, browser sandboxes, or career placement? We've got you covered.
              </p>
            </div>

            {/* Accordion List (5 Questions) */}
            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-[#080e2a] border-cyan-500/40 shadow-lg"
                        : "bg-[#05091e] border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                        <HelpCircle size={18} className="text-cyan-400 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal border-t border-slate-800/60 mt-1">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          

          </div>
        </section>

      </main>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <BottomCTABanner />

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default AboutUs;
