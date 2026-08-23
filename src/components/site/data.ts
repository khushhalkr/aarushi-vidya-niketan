export const SITE = {
  name: "AARUSHI VIDYA NIKETAN",
  tagline: "Inspire to Dream... Learn to Lead with Excellence",
  phone: "9625126057",
  whatsapp: "919625126057",
  email: "asa082994@gmail.com",
  address: "Mujara, Ramnagar, West Champaran, Bihar, 845106",
  udise: "10011210002",
  regNo: "20310142021107130432",
};

// Using direct image paths from public/images directory

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our School", href: "/our-school" },
      { label: "Principal's Message", href: "/principal" },
      { label: "Chairman's Message", href: "/chairman" },
      { label: "Director's Message", href: "/director" },
      { label: "Our Aim", href: "/our-aim" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Smart Classes", href: "/smart-classes" },
      { label: "Science Labs", href: "/science-labs" },
      { label: "Computer Lab", href: "/computer-lab" },
      { label: "Library", href: "/library" },
      { label: "Mathematics Lab", href: "/mathematics-lab" },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      { label: "Admission Process", href: "/admission-process" },
      { label: "Fee Structure", href: "/fee-structure" },
      { label: "Prospectus", href: "/prospectus" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      { label: "Transportation", href: "/transportation" },
      { label: "Sports & Playground", href: "/sports" },
      { label: "Music & Dance", href: "/music-dance" },
      { label: "Art & Craft", href: "/art-craft" },
      { label: "Safety & Care", href: "/safety-care" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Campus", href: "/campus" },
      { label: "Classrooms & Labs", href: "/classrooms-labs" },
      { label: "Activities", href: "/activities" },
    ],
  },
  {
    label: "Extra Curriculum",
    href: "/extra-curriculum",
    children: [
      { label: "Events & Activities", href: "/events-activities" },
      { label: "Music Room", href: "/music-room" },
      { label: "Dance / Activity Room", href: "/dance-activity-room" },
      { label: "Play Room", href: "/play-room" },
    ],
  },
  { label: "Mandatory Details", href: "/mandatory-details" },
  { label: "Contact Us", href: "/contact" },
];

export const IMAGES = {
  logo: "/images/logo.png",
  hero: "/images/campus.jpeg",
  principal: "/images/principal.jpeg",
  chairman: "/images/director.jpeg",
  director: "/images/director.jpeg",
  hygiene: "/images/campus garden.jpeg",
};

export const HERO_SLIDER = [
  "/images/buildig.jpeg",
  "/images/campus.jpeg",
  "/images/chool campus.jpeg",
  "/images/campus garden.jpeg",
];

export const GALLERY = [
  { img: "/images/buildig.jpeg", title: "School Building", cat: "Campus" },
  { img: "/images/campus garden.jpeg", title: "Green Campus", cat: "Campus" },
  { img: "/images/campus.jpeg", title: "School Campus", cat: "Campus" },
  { img: "/images/chool campus.jpeg", title: "Campus View", cat: "Campus" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (1).jpeg", title: "Smart Class", cat: "Classrooms" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (2).jpeg", title: "Mathematics Lab", cat: "Classrooms" },
  { img: "/images/physics lab.jpeg", title: "Physics Lab", cat: "Classrooms" },
  { img: "/images/chemistry lab.jpeg", title: "Chemistry Lab", cat: "Classrooms" },
  { img: "/images/computer lab.jpeg", title: "Computer Lab", cat: "Classrooms" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.24 AM.jpeg", title: "Computer Science Class", cat: "Classrooms" },
  { img: "/images/library.jpeg", title: "Library", cat: "Classrooms" },
  { img: "/images/staff room.jpeg", title: "Staff Room", cat: "Classrooms" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.25 AM (1).jpeg", title: "Dance / Activity Room", cat: "Activities" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.25 AM.jpeg", title: "Music Room", cat: "Activities" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.26 AM (1).jpeg", title: "Music Practice", cat: "Activities" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.26 AM.jpeg", title: "Art & Craft Room", cat: "Activities" },
  { img: "/images/WhatsApp Image 2026-08-19 at 10.56.23 AM.jpeg", title: "Play Room", cat: "Activities" },
  { img: "/images/principal.jpeg", title: "Principal's Office", cat: "Campus" },
  { img: "/images/director.jpeg", title: "Director's Office", cat: "Campus" },
  { img: "/images/logo.jpeg", title: "School Emblem", cat: "Campus" },
];

export const GALLERY_CATS = ["All", "Campus", "Classrooms", "Activities"] as const;

export const WHY_CARDS = [
  {
    eyebrow: "Expert Faculty",
    title: "Best Teachers",
    text: "At Aryabhatta National Public, students learn from experienced, passionate, and highly qualified educators.",
  },
  {
    eyebrow: "Top Results",
    title: "Academic Excellence",
    text: "A curriculum designed to challenge young minds and prepare students for global success.",
  },
  {
    eyebrow: "Smart Campus",
    title: "Infrastructure",
    text: "Smart classrooms, modern labs, digital learning tools, library, and sports facilities.",
  },
  {
    eyebrow: "Beyond Books",
    title: "Holistic Development",
    text: "We nurture leadership, creativity, confidence, values, and character beyond academics.",
  },
];

export const STATS = [
  { value: "20+", label: "Years of Leadership" },
  { value: "5000+", label: "Students Guided" },
  { value: "30+", label: "Educators" },
  { value: "100%", label: "Commitment" },
];

export const EVENTS = [
  { title: "Morning Assembly", img: "/images/WhatsApp Image 2026-08-19 at 10.56.23 AM.jpeg" },
  { title: "Dance & Activity Session", img: "/images/WhatsApp Image 2026-08-19 at 10.56.25 AM (1).jpeg" },
  { title: "Art & Craft Competition", img: "/images/WhatsApp Image 2026-08-19 at 10.56.26 AM.jpeg" },
];

export const CARE = [
  {
    title: "Safety & Security",
    text: "CCTV monitored campus, trained security staff and strict visitor protocols keep every child protected throughout the school day.",
  },
  {
    title: "Health & Wellness",
    text: "Regular health check-ups, first-aid support and professional counselling services focus on both physical and emotional well-being of students.",
  },
  {
    title: "Hygiene & Cleanliness",
    text: "A clean and hygienic campus with daily sanitization routines, purified drinking water and well-maintained washrooms for boys and girls.",
  },
];

export const PLEDGE = [
  {
    title: "WE BELIEVE",
    text: "In a holistic approach to education that fosters intellectual curiosity, emotional resilience, and respect for all individuals, enabling students to become thoughtful and responsible citizens.",
  },
  {
    title: "WE PLEDGE",
    text: "To nurture students' self-worth, dignity, and a strong sense of fairness. We encourage respect for diversity and empathy for all, creating a safe, inclusive, and supportive environment.",
  },
  {
    title: "WE WANT",
    text: "Our students to be confident, innovative, and kind. We aim to instill leadership qualities, social responsibility, and a lifelong love for learning.",
  },
];

export const FACILITIES = [
  {
    eyebrow: "Qualified & Dedicated",
    title: "Experienced Teachers",
    text: "Highly qualified educators who focus on concept clarity, discipline and individual student growth.",
  },
  {
    eyebrow: "Healthy Lifestyle",
    title: "Physical Activity",
    text: "Daily sports and fitness activities to ensure a healthy body, active mind and positive energy.",
  },
  {
    eyebrow: "Safe & Reliable",
    title: "Transportation",
    text: "GPS enabled safe transportation system covering all major routes with trained staff.",
  },
  {
    eyebrow: "Coming Soon",
    title: "Hostel Facility",
    text: "Comfortable, hygienic and secure hostel facilities for students from distant locations.",
  },
  {
    eyebrow: "Personal Attention",
    title: "Love & Care",
    text: "Every child receives personal attention, emotional care and a nurturing school environment.",
  },
  {
    eyebrow: "Coming Soon",
    title: "Digital Class",
    text: "Smart classrooms with digital boards, modern tools and interactive learning methods.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Amit Sharma",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "This school has transformed my child's learning experience!",
  },
  {
    name: "Priya Verma",
    role: "Student",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "The teachers here are so supportive and encouraging. I love coming to school",
  },
  {
    name: "Ravi Kumar",
    role: "Alumni",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    quote: "This school prepared me for life, not just exams. Best decision ever.",
  },
  {
    name: "Neha Gupta",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    quote: "Amazing infrastructure, great activities, and a safe environment for kids.",
  },
  {
    name: "Suresh Singh",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    quote: "I've seen tremendous improvement in my child's confidence and academics.",
  },
  {
    name: "Anjali Mehta",
    role: "Student",
    img: "https://randomuser.me/api/portraits/women/23.jpg",
    quote: "The extra-curricular activities are awesome! I've learned skills.",
  },
];
