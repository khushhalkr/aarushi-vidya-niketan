<?php
require_once __DIR__ . '/config.php';

// Define section data
$WHY_CARDS = [
    [
        'eyebrow' => 'Expert Faculty',
        'title' => 'Best Teachers',
        'text' => 'At AARUSHI VIDYA NIKETAN, students learn from experienced, passionate, and highly qualified educators.',
    ],
    [
        'eyebrow' => 'Top Results',
        'title' => 'Academic Excellence',
        'text' => 'A curriculum designed to challenge young minds and prepare students for global success.',
    ],
    [
        'eyebrow' => 'Smart Campus',
        'title' => 'Infrastructure',
        'text' => 'Smart classrooms, modern labs, digital learning tools, library, and sports facilities.',
    ],
    [
        'eyebrow' => 'Beyond Books',
        'title' => 'Holistic Development',
        'text' => 'We nurture leadership, creativity, confidence, values, and character beyond academics.',
    ],
];

$STATS = [
    ['value' => '20+', 'label' => 'Years of Leadership'],
    ['value' => '5000+', 'label' => 'Students Guided'],
    ['value' => '30+', 'label' => 'Educators'],
    ['value' => '100%', 'label' => 'Commitment'],
];

$SCHOOL_PULSE = [
    'announcements' => [
        ['label' => 'Admissions', 'title' => 'Applications are open for the 2026-27 session.', 'text' => 'Explore the admission process and speak with the school office for guidance.'],
        ['label' => 'Campus', 'title' => 'A safe, active and welcoming learning environment.', 'text' => 'Discover our classrooms, labs, library, sports spaces and student activities.'],
        ['label' => 'Values', 'title' => 'Character and confidence grow alongside academics.', 'text' => 'Our programs encourage discipline, empathy, creativity and responsible leadership.'],
    ],
    'events' => [
        ['label' => 'Academic', 'title' => 'Learning beyond the classroom', 'text' => 'Project work, practical labs and collaborative activities keep curiosity moving.'],
        ['label' => 'Creative', 'title' => 'Art, music and activity sessions', 'text' => 'Students get regular opportunities to explore their talents and express ideas.'],
        ['label' => 'Community', 'title' => 'A school community that participates together', 'text' => 'Assemblies, celebrations and sports build belonging and teamwork.'],
    ],
    'achievements' => [
        ['label' => 'Growth', 'title' => 'Confident learners', 'text' => 'Students are encouraged to ask questions, take initiative and lead with purpose.'],
        ['label' => 'Excellence', 'title' => 'Strong academic foundations', 'text' => 'A structured CBSE learning journey prepares students for the next stage.'],
        ['label' => 'Future', 'title' => 'Skills for tomorrow', 'text' => 'Digital learning, communication and problem-solving support lifelong success.'],
    ],
];

$EVENTS = [
    ['title' => 'Morning Assembly', 'img' => '/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (1).jpeg'],
    ['title' => 'Dance & Activity Session', 'img' => '/images/WhatsApp Image 2026-08-19 at 10.56.25 AM (1).jpeg'],
    ['title' => 'Art & Craft Competition', 'img' => '/images/WhatsApp Image 2026-08-19 at 10.56.26 AM.jpeg'],
];

$CARE = [
    [
        'title' => 'Safety & Security',
        'text' => 'CCTV monitored campus, trained security staff and strict visitor protocols keep every child protected throughout the school day.',
    ],
    [
        'title' => 'Health & Wellness',
        'text' => 'Regular health check-ups, first-aid support and professional counselling services focus on both physical and emotional well-being of students.',
    ],
    [
        'title' => 'Hygiene & Cleanliness',
        'text' => 'A clean and hygienic campus with daily sanitization routines, purified drinking water and well-maintained washrooms for boys and girls.',
    ],
];

$PLEDGE = [
    [
        'title' => 'WE BELIEVE',
        'text' => 'In a holistic approach to education that fosters intellectual curiosity, emotional resilience, and respect for all individuals, enabling students to become thoughtful and responsible citizens.',
    ],
    [
        'title' => 'WE PLEDGE',
        'text' => 'To nurture students\' self-worth, dignity, and a strong sense of fairness. We encourage respect for diversity and empathy for all, creating a safe, inclusive, and supportive environment.',
    ],
    [
        'title' => 'WE WANT',
        'text' => 'Our students to be confident, innovative, and kind. We aim to instill leadership qualities, social responsibility, and a lifelong love for learning.',
    ],
];

$FACILITIES = [
    [
        'eyebrow' => 'Qualified & Dedicated',
        'title' => 'Experienced Teachers',
        'text' => 'Highly qualified educators who focus on concept clarity, discipline and individual student growth.',
    ],
    [
        'eyebrow' => 'Healthy Lifestyle',
        'title' => 'Physical Activity',
        'text' => 'Daily sports and fitness activities to ensure a healthy body, active mind and positive energy.',
    ],
    [
        'eyebrow' => 'Safe & Reliable',
        'title' => 'Transportation',
        'text' => 'GPS enabled safe transportation system covering all major routes with trained staff.',
    ],
    [
        'eyebrow' => 'Coming Soon',
        'title' => 'Hostel Facility',
        'text' => 'Comfortable, hygienic and secure hostel facilities for students from distant locations.',
    ],
    [
        'eyebrow' => 'Personal Attention',
        'title' => 'Love & Care',
        'text' => 'Every child receives personal attention, emotional care and a nurturing school environment.',
    ],
    [
        'eyebrow' => 'Coming Soon',
        'title' => 'Digital Class',
        'text' => 'Smart classrooms with digital boards, modern tools and interactive learning methods.',
    ],
];

$TESTIMONIALS = [
    [
        'name' => 'Amit Sharma',
        'role' => 'Parent',
        'img' => 'https://randomuser.me/api/portraits/men/32.jpg',
        'quote' => 'This school has transformed my child\'s learning experience!',
    ],
    [
        'name' => 'Priya Verma',
        'role' => 'Student',
        'img' => 'https://randomuser.me/api/portraits/women/45.jpg',
        'quote' => 'The teachers here are so supportive and encouraging. I love coming to school',
    ],
    [
        'name' => 'Ravi Kumar',
        'role' => 'Alumni',
        'img' => 'https://randomuser.me/api/portraits/men/12.jpg',
        'quote' => 'This school prepared me for life, not just exams. Best decision ever.',
    ],
    [
        'name' => 'Neha Gupta',
        'role' => 'Parent',
        'img' => 'https://randomuser.me/api/portraits/women/67.jpg',
        'quote' => 'Amazing infrastructure, great activities, and a safe environment for kids.',
    ],
    [
        'name' => 'Suresh Singh',
        'role' => 'Parent',
        'img' => 'https://randomuser.me/api/portraits/men/76.jpg',
        'quote' => 'I\'ve seen tremendous improvement in my child\'s confidence and academics.',
    ],
    [
        'name' => 'Anjali Mehta',
        'role' => 'Student',
        'img' => 'https://randomuser.me/api/portraits/women/23.jpg',
        'quote' => 'The extra-curricular activities are awesome! I\'ve learned skills.',
    ],
];

$GALLERY = [
    ['img' => '/images/buildig.jpeg', 'title' => 'School Building', 'cat' => 'Campus'],
    ['img' => '/images/campus garden.jpeg', 'title' => 'Green Campus', 'cat' => 'Campus'],
    ['img' => '/images/campus.jpeg', 'title' => 'School Campus', 'cat' => 'Campus'],
    ['img' => '/images/chool campus.jpeg', 'title' => 'Campus View', 'cat' => 'Campus'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (1).jpeg', 'title' => 'Smart Class', 'cat' => 'Classrooms'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (2).jpeg', 'title' => 'Mathematics Lab', 'cat' => 'Classrooms'],
    ['img' => '/images/physics lab.jpeg', 'title' => 'Physics Lab', 'cat' => 'Classrooms'],
    ['img' => '/images/chemistry lab.jpeg', 'title' => 'Chemistry Lab', 'cat' => 'Classrooms'],
    ['img' => '/images/computer lab.jpeg', 'title' => 'Computer Lab', 'cat' => 'Classrooms'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.24 AM.jpeg', 'title' => 'Computer Science Class', 'cat' => 'Classrooms'],
    ['img' => '/images/library.jpeg', 'title' => 'Library', 'cat' => 'Classrooms'],
    ['img' => '/images/staff room.jpeg', 'title' => 'Staff Room', 'cat' => 'Classrooms'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.25 AM (1).jpeg', 'title' => 'Dance / Activity Room', 'cat' => 'Activities'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.25 AM.jpeg', 'title' => 'Music Room', 'cat' => 'Activities'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.26 AM (1).jpeg', 'title' => 'Music Practice', 'cat' => 'Activities'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.26 AM.jpeg', 'title' => 'Art & Craft Room', 'cat' => 'Activities'],
    ['img' => '/images/WhatsApp Image 2026-08-19 at 10.56.23 AM (1).jpeg', 'title' => 'Play Room', 'cat' => 'Activities'],
    ['img' => '/images/principal.jpeg', 'title' => 'Principal\'s Office', 'cat' => 'Campus'],
    ['img' => '/images/director.jpeg', 'title' => 'Director\'s Office', 'cat' => 'Campus'],
    ['img' => '/images/logo.png', 'title' => 'School Emblem', 'cat' => 'Campus'],
];

$GALLERY_CATS = ['All', 'Campus', 'Classrooms', 'Activities'];
?>

<!-- Intro Section -->
<section id="intro" class="section bg-accent/40">
    <div class="container mx-auto max-w-4xl px-4 text-center">
        <p class="section-subtitle">AARUSHI VIDYA NIKETAN</p>
        <h2 class="section-title mt-4">Where Learning Meets Excellence</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            AARUSHI VIDYA NIKETAN is committed to creating a positive and inspiring environment where
            every student can learn, grow and build a confident future.
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
            <?php foreach (['Semara Bargon Deoraj', 'CBSE Curriculum', 'Holistic Education'] as $tag): ?>
                <span class="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-green-deep shadow-soft sm:px-5 sm:py-2 sm:text-sm">
                    <?php echo $tag; ?>
                </span>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- School Life Dashboard -->
<section id="school-pulse" class="section school-pulse-section">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="school-pulse-header">
            <div>
                <p class="section-subtitle">School Life</p>
                <h2 class="section-title mt-4">The pulse of our campus</h2>
                <p class="mt-4 max-w-2xl text-muted-foreground">
                    A quick view of the ideas, activities and values that shape everyday life at AARUSHI VIDYA NIKETAN.
                </p>
            </div>
            <a href="/pages/contact.php" class="btn btn-secondary school-pulse-action">Talk to the school</a>
        </div>

        <div class="school-pulse-panel">
            <div class="school-pulse-tabs" role="tablist" aria-label="School life categories">
                <button type="button" class="school-pulse-tab is-active" role="tab" aria-selected="true" aria-controls="pulse-announcements" data-pulse-tab="announcements">Announcements</button>
                <button type="button" class="school-pulse-tab" role="tab" aria-selected="false" aria-controls="pulse-events" data-pulse-tab="events">Campus Life</button>
                <button type="button" class="school-pulse-tab" role="tab" aria-selected="false" aria-controls="pulse-achievements" data-pulse-tab="achievements">Achievements</button>
            </div>

            <?php foreach ($SCHOOL_PULSE as $category => $items): ?>
                <div id="pulse-<?php echo $category; ?>" class="school-pulse-content<?php echo $category === 'announcements' ? ' is-active' : ''; ?>" role="tabpanel" data-pulse-panel="<?php echo $category; ?>">
                    <?php foreach ($items as $item): ?>
                        <article class="school-pulse-item">
                            <span><?php echo $item['label']; ?></span>
                            <h3><?php echo $item['title']; ?></h3>
                            <p><?php echo $item['text']; ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Info Center Section -->
<section id="info" class="section">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Information Center</p>
            <h2 class="section-title mt-4">School Highlights</h2>
            <p class="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Stay updated with school announcements, academic schedules, student activities and
                important information.
            </p>
        </div>

        <div class="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            <article class="card p-5 sm:p-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-gold-deep sm:h-9 sm:w-9">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <p class="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase sm:mt-5">
                    Session 2026-27
                </p>
                <h3 class="mt-1 text-lg text-green-deep sm:text-xl">Academic Calendar</h3>
                <ul class="mt-3 space-y-2 text-xs text-muted-foreground sm:mt-4 sm:text-sm">
                    <li>• Holidays and vacations</li>
                    <li>• Examination periods</li>
                    <li>• Annual functions & events</li>
                </ul>
                <p class="mt-4 text-xs font-bold text-gold-deep sm:mt-6 sm:text-sm">Explore Calendar →</p>
            </article>

            <article class="card p-5 sm:p-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-gold-deep sm:h-9 sm:w-9">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                <p class="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase sm:mt-5">
                    School Updates
                </p>
                <h3 class="mt-1 text-lg text-green-deep sm:text-xl">Latest News</h3>
                <div class="mt-4 rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground sm:mt-6 sm:p-6 sm:text-sm">
                    No notices available
                </div>
            </article>

            <article class="bg-green-gradient rounded-xl p-5 text-secondary-foreground shadow-card sm:p-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-gold sm:h-9 sm:w-9">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <p class="mt-4 text-xs font-bold tracking-wider uppercase opacity-80 sm:mt-5">
                    Leadership Program
                </p>
                <h3 class="mt-1 text-lg sm:text-xl">Student Council</h3>
                <p class="mt-4 text-sm leading-relaxed opacity-90">
                    Empowering students with leadership, confidence, responsibility and teamwork through
                    activities, elections and programs.
                </p>
                <span class="mt-6 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-primary-foreground">
                    Coming Soon
                </span>
            </article>
        </div>
    </div>
</section>

<script>
    document.querySelectorAll('[data-pulse-tab]').forEach(function(tab) {
        tab.addEventListener('click', function() {
            const category = tab.dataset.pulseTab;
            document.querySelectorAll('[data-pulse-tab]').forEach(function(item) {
                const active = item === tab;
                item.classList.toggle('is-active', active);
                item.setAttribute('aria-selected', active ? 'true' : 'false');
            });
            document.querySelectorAll('[data-pulse-panel]').forEach(function(panel) {
                panel.classList.toggle('is-active', panel.dataset.pulsePanel === category);
            });
        });
    });
</script>

<!-- About School Section -->
<section id="about" class="section bg-accent/40">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="about-card-layout">
            <article class="about-overview-card">
                <h2 class="section-title">
                    AARUSHI VIDYA NIKETAN
                    <br>
                    <span class="text-gold-deep">Semara Ramnagar</span>
                </h2>
                <p class="mt-6 leading-relaxed text-muted-foreground">
                    AARUSHI VIDYA NIKETAN provides state-of-the-art infrastructure designed to
                    support high-quality education and holistic student development. The school strongly
                    emphasizes moral values, discipline, and human ethics while nurturing students' overall
                    personality growth alongside academic excellence.
                </p>
                <a href="/pages/about.php" class="btn btn-primary mt-8 inline-block">
                    Learn More
                </a>
            </article>

            <div class="why-cards-grid">
                <?php foreach ($WHY_CARDS as $card): ?>
                    <article class="card why-card p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-gold-deep">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <p class="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                            <?php echo $card['eyebrow']; ?>
                        </p>
                        <h3 class="mt-1 text-lg text-green-deep"><?php echo $card['title']; ?></h3>
                        <p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo $card['text']; ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- Principal Section -->
<section id="principal" class="section">
    <div class="message-layout container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div class="message-copy">
            <p class="section-subtitle">Principal's Message</p>
            <h2 class="section-title mt-4">
                Educating Minds. Shaping Character. Building the Future.
            </h2>
            <div class="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                    True education is a journey that transforms learners into leaders. At our institution,
                    we go beyond academics to cultivate discipline, integrity, confidence, and purpose in
                    every student.
                </p>
                <p>
                    Our academic framework blends time-tested values with modern pedagogy, ensuring that
                    students develop critical thinking, adaptability, and a lifelong love for learning.
                </p>
                <p>
                    With committed educators and supportive parents, we create an environment where
                    excellence is nurtured, effort is respected, and success is achieved with humility.
                </p>
            </div>
            <a href="/pages/principal.php" class="btn btn-primary mt-8 inline-block">
                Read More
            </a>
        </div>
        <div class="message-media">
            <img src="<?php echo IMAGES['principal']; ?>" alt="Principal">
        </div>
    </div>
</section>

<!-- Chairman Section -->
<section id="chairman" class="section bg-accent/40">
    <div class="message-layout container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div class="message-media order-2 lg:order-1">
            <img src="<?php echo IMAGES['chairman']; ?>" alt="Chairman">
        </div>
        <div class="message-copy order-1 lg:order-2">
            <p class="section-subtitle">Chairman's Message</p>
            <h2 class="section-title mt-4">
                Building Tomorrow's Leaders Today
            </h2>
            <div class="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                    Education is the foundation upon which we build our future. At AARUSHI VIDYA NIKETAN,
                    we are committed to providing an environment that fosters intellectual growth,
                    character development, and social responsibility.
                </p>
                <p>
                    Our vision is to create a learning community where every student is valued,
                    challenged, and inspired to reach their full potential. We believe in holistic
                    education that goes beyond textbooks.
                </p>
            </div>
            <a href="/pages/chairman.php" class="btn btn-primary mt-8 inline-block">
                Read More
            </a>
        </div>
    </div>
</section>

<!-- Director Section -->
<section id="director" class="section">
    <div class="message-layout container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div class="message-copy">
            <p class="section-subtitle">Director's Message</p>
            <h2 class="section-title mt-4">
                Innovation in Education, Excellence in Life
            </h2>
            <div class="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                    In today's rapidly changing world, education must evolve to meet new challenges.
                    Our school embraces innovative teaching methods while maintaining strong traditional values.
                </p>
                <p>
                    We focus on developing critical thinking, creativity, and problem-solving skills
                    that prepare students for success in the 21st century.
                </p>
            </div>
            <a href="/pages/director.php" class="btn btn-primary mt-8 inline-block">
                Read More
            </a>
        </div>
        <div class="message-media">
            <img src="<?php echo IMAGES['director']; ?>" alt="Director">
        </div>
    </div>
</section>

<!-- Events Section -->
<section id="events" class="section bg-accent/40">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Events & Activities</p>
            <h2 class="section-title mt-4">Recent Activities</h2>
        </div>
        <div class="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-3">
            <?php foreach ($EVENTS as $event): ?>
                <article class="card overflow-hidden">
                    <img src="<?php echo $event['img']; ?>" alt="<?php echo $event['title']; ?>" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-green-deep"><?php echo $event['title']; ?></h3>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Care Section -->
<section id="care" class="section">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Safety & Care</p>
            <h2 class="section-title mt-4">Student Well-being</h2>
        </div>
        <div class="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-3">
            <?php foreach ($CARE as $item): ?>
                <article class="card p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-gold-deep">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                    <h3 class="mt-4 text-lg font-bold text-green-deep"><?php echo $item['title']; ?></h3>
                    <p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo $item['text']; ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Aim Section -->
<section id="aim" class="section bg-accent/40">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Our Mission</p>
            <h2 class="section-title mt-4">Our Aim & Pledge</h2>
        </div>
        <div class="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-3">
            <?php foreach ($PLEDGE as $item): ?>
                <article class="card p-6">
                    <h3 class="text-lg font-bold text-gold-deep"><?php echo $item['title']; ?></h3>
                    <p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo $item['text']; ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Facilities Section -->
<section id="facilities" class="section">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Our Facilities</p>
            <h2 class="section-title mt-4">School Facilities</h2>
        </div>
        <div class="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <?php foreach ($FACILITIES as $facility): ?>
                <article class="card p-6">
                    <p class="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        <?php echo $facility['eyebrow']; ?>
                    </p>
                    <h3 class="mt-1 text-lg font-bold text-green-deep"><?php echo $facility['title']; ?></h3>
                    <p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo $facility['text']; ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section id="gallery" class="section bg-accent/40">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Gallery</p>
            <h2 class="section-title mt-4">Photo Gallery</h2>
        </div>
        <div class="gallery-grid mt-8 sm:mt-12">
            <?php foreach ($GALLERY as $item): ?>
                <div class="gallery-item">
                    <img src="<?php echo $item['img']; ?>" alt="<?php echo $item['title']; ?>" loading="lazy">
                    <div class="gallery-caption">
                        <h4 class="font-bold"><?php echo $item['title']; ?></h4>
                        <p class="text-sm opacity-75"><?php echo $item['cat']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section id="testimonials" class="section">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="text-center">
            <p class="section-subtitle">Testimonials</p>
            <h2 class="section-title mt-4">What People Say</h2>
        </div>
        <div class="testimonial-grid mt-8 sm:mt-12">
            <?php foreach ($TESTIMONIALS as $testimonial): ?>
                <div class="testimonial-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-gold mb-4">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031"></path>
                    </svg>
                    <p class="text-muted-foreground italic">"<?php echo $testimonial['quote']; ?>"</p>
                    <div class="testimonial-author">
                        <img src="<?php echo $testimonial['img']; ?>" alt="<?php echo $testimonial['name']; ?>" class="testimonial-avatar">
                        <div>
                            <p class="testimonial-name"><?php echo $testimonial['name']; ?></p>
                            <p class="testimonial-role"><?php echo $testimonial['role']; ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
// Section scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
</script>