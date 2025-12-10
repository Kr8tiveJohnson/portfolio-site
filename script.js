// Homepage interactions: hero intro, reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  // hero intro reveal
  const heroLeft = document.querySelector('.hero-left');
  const heroRight = document.querySelector('.hero-right');
  setTimeout(()=> { heroLeft && heroLeft.classList.add('visible'); }, 220);
  setTimeout(()=> { heroRight && heroRight.classList.add('visible'); }, 480);

  // reveal on scroll for other elements
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    for (let el of reveals) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) el.classList.add('visible');
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Scroll Reveal
window.addEventListener('scroll', revealSections);

function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add('active');
  });
}

// Testimonial Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === n);
    dots[i].classList.toggle('active', i === n);
  });
}

dots.forEach((dot, i) => dot.addEventListener('click', () => {
  slideIndex = i;
  showSlide(i);
}));

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 4000);

// Theme Toggle
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// ===== SERVICE MODAL LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('service-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close-btn');

  const services = {
    branding: {
      title: 'Brand Identity Design',
      desc: 'Every brand has a story — I bring yours to life with visual systems that express personality, clarity, and emotion. Includes logo, palette, and brand strategy visuals.',
      img: ''
    },
    flyer: {
      title: 'Flyer & Poster Design',
      desc: 'Impactful and attention-grabbing promotional visuals tailored for both print and digital. Perfect for marketing campaigns and events.',
      img: 'samples work/images poster thumb 2.jpg'
    },
    uiux: {
      title: 'UI/UX Design',
      desc: 'Interactive interfaces that combine user experience with stunning visuals, making digital products both beautiful and easy to use.',
      img: 'images/service-uiux.jpg'
    },
    social: {
      title: 'Social Media Design',
      desc: 'A cohesive set of social media graphics that maintain your brand’s tone while maximizing engagement and reach.',
      img: 'images/service-social.jpg'
    },
    consult: {
      title: 'Creative Consultation',
      desc: 'Let’s brainstorm, refine, and elevate your creative ideas into actionable designs that inspire and deliver impact.',
      img: 'images/service-consult.jpg'
    },
    type: {
      title: 'Custom Typography',
      desc: 'Exclusive hand-crafted or digital typography that gives your visual project a distinctive identity.',
      img: 'images/service-type.jpg'
    }
    
  };

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.service;
      modalTitle.textContent = services[key].title;
      modalDesc.textContent = services[key].desc;
      modalImg.src = services[key].img;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
// Reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// ABOUT PAGE: reveal on scroll, skill bar animation, theme toggle
document.addEventListener('DOMContentLoaded', () => {

  // Reveal on scroll (generic)
  const revealEls = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    for (const el of revealEls) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) el.classList.add('active');
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Skill bars: animate when skills section visible
  const skillsSection = document.querySelector('.skills-section');
  const progressEls = document.querySelectorAll('.progress');

  const animateSkills = () => {
    if (!skillsSection) return;
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      progressEls.forEach(p => {
        const value = p.dataset.progress || p.getAttribute('data-progress') || p.style.width || 0;
        // value may be a number or string
        const num = parseInt(value, 10);
        p.style.width = num + '%';
      });
      // remove listener after animation to avoid repeats
      window.removeEventListener('scroll', animateSkills);
    }
  };
  window.addEventListener('scroll', animateSkills);
  animateSkills();

  // Theme toggle (dark/light)
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    const saved = localStorage.getItem('site-theme');
    if (saved === 'dark') document.body.classList.add('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    });
  }

});

// Animate skills when visible
document.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-item").forEach(item => {
    const bar = item.querySelector(".progress");
    const target = bar.getAttribute("data-progress");
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = target + "%";
    }
  });
});

// SCROLL REVEAL ANIMATIONS
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .blog-card");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // initial check

// TESTIMONIAL SLIDER
const testimonials = document.querySelectorAll(".testimonial-card");
let current = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
}

document.getElementById("nextTestimonial").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

document.getElementById("prevTestimonial").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});
// ==== LOAD RECENT WORKS ====
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("recentGallery");
  if (gallery && typeof recentWorks !== "undefined") {
    gallery.innerHTML = recentWorks.map((item, index) => `
      <div class="recent-card glass">
        <img src="${item.image}" alt="${item.title}" class="recent-img">
        <div class="recent-info">
          <h3>${item.title}</h3>
          <p>${item.caption}</p>
          <button class="like-btn" data-index="${index}">❤️ ${item.likes}</button>
        </div>
      </div>
    `).join("");

    // Like button logic
    gallery.addEventListener("click", e => {
      if (e.target.classList.contains("like-btn")) {
        const i = e.target.dataset.index;
        recentWorks[i].likes++;
        e.target.innerHTML = `❤️ ${recentWorks[i].likes}`;
      }
    });
  }
});
// BLOG DYNAMIC LOADER
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (typeof blogPosts !== "undefined" && blogContainer) {
    renderPosts(blogPosts);

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const category = btn.dataset.category;
        const filtered = category === "All"
          ? blogPosts
          : blogPosts.filter(post => post.category === category);
        renderPosts(filtered);
      });
    });
  }

  function renderPosts(posts) {
    blogContainer.innerHTML = posts.map(post => `
      <article class="blog-card glass">
        <img src="${post.image}" alt="${post.title}" class="blog-thumb" />
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="blog-meta">
            <span class="category">${post.category}</span>
            <button class="like-btn" onclick="this.classList.toggle('liked')">❤️</button>
          </div>
          <a href="${post.link}" class="btn btn-outline">Read More</a>
        </div>
      </article>
    `).join("");
  }
});
// SCROLL REVEAL ANIMATIONS
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .blog-card");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // initial check

// === BLOG SCRIPT ===

// make sure blogPosts exists
if (!Array.isArray(blogPosts)) {
  console.error("blogPosts not loaded");
}

const container = document.getElementById("blog-container");
const filterBtns = document.querySelectorAll(".filter-btn");

// Default view: show all
let activeCategory = "All";

// Render posts
function renderPosts() {
  container.innerHTML = "";

  let filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = `<p class="empty">No posts found.</p>`;
    return;
  }

  filtered.forEach((post) => {
    container.innerHTML += `
      <article class="blog-card">
        <h2>${post.title}</h2>
        <p class="meta">${post.date} • ${post.category}</p>
        <p>${post.excerpt}</p>
        <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
      </article>
    `;
  });
}

// Category buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    activeCategory = btn.dataset.category;
    renderPosts();
  });
});

// Initial load
renderPosts();
