const projectsData = [
    {
        title: "Advanced To-Do App",
        desc: "Feature-rich task manager with creation, deletion, editing, filtering all/completed/pending, and persistent localStorage storage.",
        tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
        icon: "✅",
        repoLink: "https://github.com/sagesakshi27/apexplanet-task4-todo-app",
        demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
    },
    {
        title: "Interactive Quiz App",
        desc: "Engaging quiz application with start screen, randomized questions, dynamic answer handling, and final score display.",
        tech: ["JavaScript", "DOM Manipulation", "CSS Grid"],
        imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop",
        icon: "❓",
        repoLink: "https://github.com/sagesakshi27/task3-quiz-app",
        demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop"
    },
    {
        title: "Responsive Profile Website",
        desc: "Personal profile website built during internship demonstrating clean structure, modern styling, and interactivity.",
        tech: ["HTML", "CSS", "Flexbox/Grid"],
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
        icon: "👤",
        repoLink: "https://github.com/sagesakshi27/apexplanet-task1-profile-website",
        demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
    },
    {
        title: "Contact Form with Validation",
        desc: "Responsive contact form with client-side validation, real-time feedback, and clean UI design.",
        tech: ["HTML", "CSS", "JavaScript", "Form Validation"],
        imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
        icon: "📧",
        repoLink: "https://github.com/sagesakshi27/apexplanet-task2-contact-form",
        demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop"
    },
    {
        title: "Responsive Design Showcase",
        desc: "Demonstrates Flexbox, CSS Grid, and media queries for seamless adaptation across all device sizes.",
        tech: ["CSS3", "Media Queries", "Responsive Design"],
        imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
        icon: "📱",
        repoLink: "https://github.com/sagesakshi27/task3-responsive-design",
        demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop"
    }
];

const skillsData = [
    { name: "HTML5", tooltip: "Semantic markup, SEO friendly, Accessibility" },
    { name: "CSS3", tooltip: "Flexbox, Grid, Animations, Transitions" },
    { name: "JavaScript ES6+", tooltip: "Async/Await, DOM, Events, Modules" },
    { name: "React.js", tooltip: "Components, Hooks, State Management" },
    { name: "Responsive Design", tooltip: "Mobile-first, Media Queries" },
    { name: "Git & GitHub", tooltip: "Version control, Collaboration" },
    { name: "LocalStorage API", tooltip: "Client-side storage" },
    { name: "VS Code", tooltip: "Primary IDE with extensions" },
    { name: "Chrome DevTools", tooltip: "Debugging & Performance" },
    { name: "Figma", tooltip: "UI/UX Design prototyping" },
    { name: "Bootstrap 5", tooltip: "Rapid responsive prototyping" },
    { name: "REST APIs", tooltip: "Fetch, Axios, JSON handling" }
];

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    container.innerHTML = '';
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-img';

        const img = document.createElement('img');
        img.src = project.imageUrl;
        img.alt = project.title;
        img.loading = 'lazy';
        imgDiv.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        const titleEl = document.createElement('h3');
        titleEl.textContent = project.title;

        const descEl = document.createElement('p');
        descEl.textContent = project.desc;
        descEl.style.margin = '0.5rem 0';

        const techContainer = document.createElement('div');
        project.tech.forEach(tech => {
            const badge = document.createElement('span');
            badge.className = 'tech-badge';
            badge.textContent = tech;
            techContainer.appendChild(badge);
        });

        const linksDiv = document.createElement('div');
        linksDiv.className = 'project-links';
        const repoLink = document.createElement('a');
        repoLink.href = project.repoLink;
        repoLink.target = '_blank';
        repoLink.rel = 'noopener noreferrer';
        repoLink.className = 'project-link';
        repoLink.textContent = '🔗 GitHub →';
        linksDiv.appendChild(repoLink);

        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(descEl);
        contentDiv.appendChild(techContainer);
        contentDiv.appendChild(linksDiv);
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        container.appendChild(card);
    });
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    container.innerHTML = '';
    skillsData.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.className = 'skill-item';
        skillSpan.textContent = skill.name;
        skillSpan.setAttribute('data-tooltip', skill.tooltip);
        container.appendChild(skillSpan);
    });
}

function renderDemoVideos() {
    const container = document.getElementById('demoGrid');
    if (!container) return;
    container.innerHTML = '';
    projectsData.forEach((project, index) => {
        const demoCard = document.createElement('div');
        demoCard.className = 'demo-card';

        const videoDiv = document.createElement('div');
        videoDiv.className = 'demo-video';

        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = project.thumbnail;
        thumbnailImg.alt = `${project.title} thumbnail`;
        thumbnailImg.loading = 'lazy';

        const playIcon = document.createElement('div');
        playIcon.className = 'demo-play';
        playIcon.textContent = '▶';

        videoDiv.appendChild(thumbnailImg);
        videoDiv.appendChild(playIcon);

        videoDiv.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = project.demoVideo;
            iframe.title = `${project.title} Demo`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            videoDiv.innerHTML = '';
            videoDiv.appendChild(iframe);
        });

        const contentDiv = document.createElement('div');
        contentDiv.className = 'demo-content';

        const titleEl = document.createElement('h3');
        titleEl.textContent = project.title;

        const watchLink = document.createElement('a');
        watchLink.href = project.demoVideo;
        watchLink.target = '_blank';
        watchLink.className = 'demo-link';
        watchLink.textContent = '📺 Watch Full Demo →';

        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(watchLink);
        demoCard.appendChild(videoDiv);
        demoCard.appendChild(contentDiv);
        container.appendChild(demoCard);
    });
}

let savedMessages = [];
try {
    const stored = localStorage.getItem('sakshi_portfolio_messages');
    if (stored) savedMessages = JSON.parse(stored);
} catch (e) { }

const contactForm = document.getElementById('contactForm');
const feedbackDiv = document.getElementById('formFeedback');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            feedbackDiv.textContent = '❌ Please fill all fields.';
            feedbackDiv.style.color = '#ef4444';
            return;
        }
        const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (!emailRegex.test(email)) {
            feedbackDiv.textContent = '❌ Please enter a valid email address.';
            feedbackDiv.style.color = '#ef4444';
            return;
        }

        const newMsg = { id: Date.now(), name, email, message, date: new Date().toLocaleString() };
        savedMessages.push(newMsg);
        if (savedMessages.length > 5) savedMessages.shift();
        localStorage.setItem('sakshi_portfolio_messages', JSON.stringify(savedMessages));

        feedbackDiv.textContent = '✅ Message sent successfully! Sakshi will connect soon.';
        feedbackDiv.style.color = '#10b981';
        contactForm.reset();
        setTimeout(() => {
            if (feedbackDiv) feedbackDiv.textContent = '';
        }, 3000);
    });
}

const menuBtn = document.getElementById('mobileMenuBtn');
const navLinksElem = document.getElementById('navLinks');
if (menuBtn && navLinksElem) {
    menuBtn.addEventListener('click', () => {
        const expanded = navLinksElem.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', expanded);
    });
    const navAnchors = navLinksElem.querySelectorAll('a');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinksElem.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href');
        if (hash === "#" || hash === "") return;
        const target = document.querySelector(hash);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, null, hash);
        }
    });
});

const sections = document.querySelectorAll('section, #home');
const navItems = document.querySelectorAll('.nav-link');
function highlightNav() {
    let current = '';
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(item => {
        const href = item.getAttribute('href')?.substring(1);
        if (href === current) {
            item.style.color = '#d97706';
            item.style.fontWeight = 'bold';
        } else {
            item.style.color = '';
            item.style.fontWeight = 'normal';
        }
    });
}
window.addEventListener('scroll', () => requestAnimationFrame(highlightNav));
highlightNav();

const repoCountSpan = document.getElementById('repoCount');
if (repoCountSpan) {
    repoCountSpan.textContent = '5';
}

renderProjects();
renderSkills();
renderDemoVideos();

window.addEventListener('touchstart', () => { }, { passive: true });
