import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Youtube, 
  Instagram, 
  Mail, 
  Stethoscope, 
  Plane, 
  ArrowRight, 
  Play, 
  Heart,
  Menu,
  X,
  BookOpen,
  Users,
  Coffee,
  CheckCircle,
  Star,
  Globe,
  GraduationCap,
  Baby,
  Home,
  Car,
  Calendar,
  Utensils,
  Sprout,
  Compass,
  Camera
} from 'lucide-react';

// --- REAL DATA FROM YOUTUBE & SCREENSHOTS ---
const featuredVideos = [
  {
    id: 1,
    category: "The Real Talk",
    title: "How Easy is it to Relocate? Australia vs America 🇦🇺🇺🇸",
    thumbnail: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: "Highly Requested",
    url: "https://youtu.be/5N-2MaPB5vQ?si=A1En7sxh3kpbFkdf",
    desc: "The honest truth about visas, cost of living, and nursing work in both countries. Which one is right for you?"
  },
  {
    id: 2,
    category: "Kenyan Comforts",
    title: "Kenyan Grocery Haul in America: Finding Home 🥘",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: "Foodie Vlog",
    url: "https://youtu.be/TjvWP5j_or8?si=HMg9nbNiRHIoml0B",
    desc: "Missing unga? Craving Royco? Come with me to find the best African ingredients in the USA."
  },
  {
    id: 3,
    category: "Career Inspiration",
    title: "Meet the Immigrant Nurse Who Secured a Doctorate 🎓",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-21878bf72a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    views: "Inspirational",
    url: "https://youtu.be/2dMYtLFBMO0?si=DntLU4bRZSEEL9XT",
    desc: "Proof that the sky is the limit. From immigrant nurse to top US university doctorate student."
  }
];

const travelVlogs = [
  {
    id: 1,
    title: "Las Vegas: The Sin City Experience",
    location: "Nevada",
    url: "https://www.youtube.com/@Journeyinscrub/videos",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "New York & Washington DC Tour",
    location: "East Coast",
    url: "https://www.youtube.com/@Journeyinscrub/videos",
    image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Cruising America: Utah to Idaho",
    location: "Road Trip",
    url: "https://youtu.be/eTqkqAP5dpE?si=Zc5VoFRqMz7Ikv51",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const resources = [
  {
    id: 1,
    title: "The DV Lottery Success Guide",
    price: "$20.00",
    type: "Digital Guide",
    desc: "Step-by-step application process, avoiding common mistakes, and interview prep.",
    icon: <Globe className="w-6 h-6 text-fuchsia-500" />
  },
  {
    id: 2,
    title: "Nurse to Doctorate Roadmap",
    price: "$45.00",
    type: "Masterclass",
    desc: "How to apply for advanced degrees in the US as an international nurse.",
    icon: <GraduationCap className="w-6 h-6 text-teal-500" />
  },
  {
    id: 3,
    title: "1:1 Migration Consultation",
    price: "$80.00",
    type: "Video Call",
    desc: "Personalized strategy for nurses moving from Kenya/Australia to the USA.",
    icon: <Coffee className="w-6 h-6 text-rose-500" />
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-gradient-to-r from-teal-500 to-fuchsia-500 p-0.5 rounded-lg shadow-lg transform group-hover:rotate-3 transition-transform">
               <div className="bg-white p-1.5 rounded-md">
                 <Stethoscope className="w-5 h-5 text-slate-900" />
               </div>
            </div>
            <span className={`font-extrabold text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Journey<span className="text-fuchsia-500">In</span><span className="text-teal-400">Scrubs</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-8 items-center font-bold text-sm tracking-wide ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>
            <a href="#home" className="hover:text-fuchsia-500 transition-colors">HOME</a>
            <a href="#about" className="hover:text-fuchsia-500 transition-colors">ABOUT ME</a>
            <a href="#lifestyle" className="hover:text-fuchsia-500 transition-colors">LIFESTYLE</a>
            <a href="#videos" className="hover:text-fuchsia-500 transition-colors">VLOGS</a>
            <a href="https://www.youtube.com/@Journeyinscrub/videos" target="_blank" rel="noreferrer" className="bg-white text-slate-900 hover:bg-fuchsia-500 hover:text-white px-6 py-2.5 rounded-full transition-all shadow-lg flex items-center space-x-2 transform hover:-translate-y-0.5">
              <Youtube className="w-4 h-4" />
              <span>SUBSCRIBE</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7 text-slate-800" /> : <Menu className={`w-7 h-7 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl p-6 flex flex-col space-y-6 border-t border-slate-100 animate-fade-in">
             <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-bold text-xl">Home</a>
             <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-bold text-xl">About Me</a>
             <a href="#lifestyle" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-bold text-xl">Lifestyle & Shamba</a>
            <a href="#videos" onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-bold text-xl">Vlogs</a>
            <a href="#resources" onClick={() => setIsMenuOpen(false)} className="text-fuchsia-600 font-bold text-xl">Shop Guides</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Vibrant & Bold) --- */}
      <header id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* UPDATED: Adjusted crop position to center_25% */}
          <img 
            src="/hero-image.png" 
            alt="Nurse in Scrubs" 
            className="w-full h-full object-cover object-[center_25%] opacity-90"
          />
          {/* Gradient Overlay - Punchier colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-fuchsia-900/30"></div>
        </div>

        <div className="relative z-10 text-left px-4 max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/10 shadow-xl animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
              </span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Living Life Loud & Proud</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              Nurse. Mom. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400">Global Citizen.</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md">
              From the hills of Meru to the Outback of Australia, and now building my dream life in Texas. I share the style, the struggle, and the success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-fuchsia-600/30 flex items-center justify-center space-x-2 transform hover:-translate-y-1">
                <Play className="w-5 h-5 fill-current" />
                <span>Watch the Vibe</span>
              </a>
              <a href="#resources" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center">
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- ABOUT ME: THE PERSONALITY (New Section for Her Pictures) --- */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left: The Portrait */}
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute inset-0 bg-teal-500 rounded-[3rem] rotate-6 transform group-hover:rotate-3 transition-all duration-500"></div>
               <div className="absolute inset-0 bg-fuchsia-500 rounded-[3rem] -rotate-3 transform group-hover:rotate-0 transition-all duration-500 opacity-50"></div>
               
               {/* UPDATED: Uses your local about-portrait.png */}
               <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/about-portrait.png" 
                    alt="Portrait of You showing tattoos/style" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Overlay */}
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                     <p className="font-black text-slate-900 text-lg">The Face Behind The Scrubs</p>
                     <div className="flex items-center text-fuchsia-600 font-bold text-xs uppercase tracking-wider mt-1">
                       <Camera className="w-3 h-3 mr-1" /> Content Creator
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: The Bio */}
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">Meru Girl • Aussie Grad • Texas Wife</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                 Unapologetically <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-teal-600">Bold & Authentic.</span>
               </h2>
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                 They say nurses should be quiet. I say, why whisper when you have a story this loud? 
               </p>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 I love my Meru culture, I love my tattoos, and I love showing that you can be a professional while still being 100% yourself. Whether I'm rocking a new outfit, harvesting maize in my backyard, or saving lives in the ER, I bring the same energy.
               </p>
               <div className="flex gap-4">
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center w-32">
                    <p className="text-3xl font-black text-teal-600">3+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">Continents</p>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center w-32">
                    <p className="text-3xl font-black text-fuchsia-600">100%</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">Realness</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PERSONALITY & LIFESTYLE --- */}
      <section id="lifestyle" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-48 -left-24 w-72 h-72 bg-fuchsia-100 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-fuchsia-600 font-black uppercase tracking-widest text-sm mb-3">More Than Just Scrubs</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">The Shamba, The Style, The Soul.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: The Shamba */}
            <div className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 relative">
               {/* Tiny Avatar Overlay */}
               <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                 {/* UPDATED: Uses your portrait again as a small avatar */}
                 <img src="/about-portrait.png" alt="Me" className="w-full h-full object-cover" />
               </div>

              <div className="h-64 overflow-hidden relative">
                 <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center">
                    <Sprout className="w-3 h-3 mr-1" /> Gardening
                 </div>
                 {/* PLACEHOLDER: GARDEN PHOTO */}
                 <img src="https://images.unsplash.com/photo-1622383563227-0440113a6101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Maize Garden" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-xl">My Texas Shamba</h4>
                 </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-4">Yes, we grow maize in America! 🌽 Bringing the village to the suburbs. Watch how we protect our crops and harvest fresh food.</p>
                <a href="https://www.youtube.com/@Journeyinscrub/videos" className="text-green-600 font-bold text-sm hover:underline flex items-center">Watch Gardening Vlogs <ArrowRight className="w-4 h-4 ml-1" /></a>
              </div>
            </div>

            {/* Card 2: The Kitchen */}
            <div className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 relative">
               {/* Tiny Avatar Overlay */}
               <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                 <img src="/about-portrait.png" alt="Me" className="w-full h-full object-cover" />
               </div>

              <div className="h-64 overflow-hidden relative">
                 <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center">
                    <Utensils className="w-3 h-3 mr-1" /> Cooking
                 </div>
                 {/* PLACEHOLDER: FOOD PHOTO */}
                 <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="African Food" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-xl">Taste of Home</h4>
                 </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-4">From healthy porridge in 10 mins to Nigerian Egusi soup. I show you where to find the best African groceries in the US.</p>
                <a href="https://youtu.be/TjvWP5j_or8?si=HMg9nbNiRHIoml0B" className="text-orange-600 font-bold text-sm hover:underline flex items-center">Get the Recipes <ArrowRight className="w-4 h-4 ml-1" /></a>
              </div>
            </div>

             {/* Card 3: The Travels */}
             <div className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 relative">
                {/* Tiny Avatar Overlay */}
               <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                 <img src="/about-portrait.png" alt="Me" className="w-full h-full object-cover" />
               </div>
               
              <div className="h-64 overflow-hidden relative">
                 <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center">
                    <Compass className="w-3 h-3 mr-1" /> Travel
                 </div>
                 {/* PLACEHOLDER: TRAVEL PHOTO */}
                 <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Road Trip" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-xl">On The Move</h4>
                 </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-4">Vegas, NOLA, The Grand Canyon. We work hard so we can play hard. Join the family on our next road trip adventure.</p>
                <a href="https://youtu.be/qeNnhUUWCY0?si=34VpvGYCeF-_6D6L" className="text-blue-600 font-bold text-sm hover:underline flex items-center">See the World <ArrowRight className="w-4 h-4 ml-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE: THE DR. HORTON HOME --- */}
      <section id="texas" className="py-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="md:w-1/2 z-10">
              <div className="flex items-center space-x-2 text-teal-400 mb-4 font-bold tracking-wide uppercase text-sm">
                <Home className="w-5 h-5" />
                <span>The American Dream</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                We Built Our Dream Home with <span className="text-teal-400 underline decoration-wavy decoration-fuchsia-500">Dr. Horton</span>! 🏡
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                It's been a long journey from renting in Australia to holding the keys to our brand new <strong>Dr. Horton</strong> home in Forney, Texas. God is faithful! Watch the full empty house tour and see how we customized our space.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://youtu.be/GFWoxRl98zg?si=_yfEfnloBj-0WYas" target="_blank" rel="noreferrer" className="inline-flex items-center bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20">
                  <Play className="w-5 h-5 mr-2 fill-current" /> Watch House Tour
                </a>
                <button className="inline-flex items-center bg-transparent border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-bold hover:border-fuchsia-500 hover:text-fuchsia-500 transition-colors">
                  See the Backyard
                </button>
              </div>
            </div>
            
            {/* Image Placeholder - Tilted for "Album" look */}
            <div className="md:w-1/2 w-full relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 group">
                 {/* PLACEHOLDER: FAMILY PHOTO WITH SOLD SIGN */}
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Replace with: Family holding Sold Sign in front of new home" 
                  className="w-full object-cover h-[400px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <p className="text-white font-black text-2xl">"We said Yes to the Address!"</p>
                  <p className="text-teal-400 font-medium">Forney, Texas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT LIBRARY --- */}
      <section id="videos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">On The Tube</h2>
              <h3 className="text-4xl font-black text-slate-900">Most Requested Videos</h3>
            </div>
            <a href="https://www.youtube.com/@Journeyinscrub/videos" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-slate-600 font-bold hover:text-fuchsia-600 transition-colors mt-4 md:mt-0 group">
              View full channel <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Featured Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredVideos.map((video) => (
              <a href={video.url} key={video.id} target="_blank" rel="noreferrer" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col h-full border border-slate-100">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm z-20 shadow-lg">
                    {video.category}
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all z-10"></div>
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 duration-300">
                    <div className="bg-red-600 text-white rounded-full p-4 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-snug">{video.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">{video.desc}</p>
                  <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider border-t border-slate-100 pt-4">
                    <Youtube className="w-4 h-4 mr-2 text-red-500" />
                    {video.views}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Travel Diaries Scroller */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Car className="w-6 h-6 mr-2 text-fuchsia-500" /> Travel Diaries
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {travelVlogs.map((trip) => (
                <a href={trip.url} key={trip.id} className="relative rounded-xl overflow-hidden h-48 group cursor-pointer">
                  <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold text-fuchsia-400 uppercase mb-1">{trip.location}</p>
                    <h4 className="font-bold text-lg leading-tight">{trip.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- RESOURCES / SHOP --- */}
      <section id="resources" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-fuchsia-600 font-bold uppercase tracking-widest text-sm mb-2">Empower Yourself</h2>
             <h3 className="text-4xl font-black text-slate-900 mb-4">Resources for Your Journey</h3>
             <p className="text-slate-600 text-lg">I get so many questions about the DV Lottery and Nursing School. I've created these resources to give you the detailed answers you need.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((item) => (
              <div key={item.id} className="border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300 group bg-white hover:-translate-y-2">
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm mb-8 h-12 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-3xl font-black text-slate-900">{item.price}</span>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-fuchsia-600 transition-colors shadow-lg">
                    Get Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="bg-teal-500 p-1 rounded">
                 <Stethoscope className="w-4 h-4 text-slate-900" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Journey<span className="text-fuchsia-500">In</span><span className="text-teal-500">Scrubs</span>
              </span>
            </div>
            <p className="text-sm max-w-xs">Empowering nurses from Kenya to the World. From the ward to the world stage.</p>
          </div>

          <div className="flex space-x-4">
             <a href="https://www.youtube.com/@Journeyinscrub/videos" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
             <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-fuchsia-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
             <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Journey in Scrubs. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with <Heart className="w-3 h-3 inline text-red-500 mx-1" /> for the Culture.</p>
        </div>
      </footer>
    </div>
  );
}