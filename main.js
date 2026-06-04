/* ============================================================
   GS Hospitality — Main JavaScript
   ============================================================ */

'use strict';

/* ── Progress Bar ─────────────────────────────────────────── */
(function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── Navigation ───────────────────────────────────────────── */
(function initNav() {
  const nav = document.querySelector('.site-nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');

  // Scroll shrink
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Mobile toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile nav on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        if (hamburger) hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active page detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefFile = href.split('/').pop();
    if (hrefFile === currentPath || (currentPath === '' && hrefFile === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Entry Gate ───────────────────────────────────────────── */
(function initEntryGate() {
  const gate = document.getElementById('entry-gate');
  if (!gate) return;

  // Check session storage
  if (sessionStorage.getItem('gs-agreed') === '1') {
    gate.remove();
    return;
  }

  gate.style.display = 'flex';
  const checkbox = gate.querySelector('#agree-checkbox');
  const enterBtn = gate.querySelector('#enter-btn');

  if (checkbox && enterBtn) {
    checkbox.addEventListener('change', () => {
      enterBtn.classList.toggle('enabled', checkbox.checked);
    });
    enterBtn.addEventListener('click', () => {
      if (!checkbox.checked) return;
      sessionStorage.setItem('gs-agreed', '1');
      gate.style.opacity = '0';
      gate.style.transition = 'opacity 0.4s';
      setTimeout(() => gate.remove(), 400);
    });
  }
})();

/* ── Reveal on Scroll ─────────────────────────────────────── */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal, .stagger');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();

/* ── Counter Animation ────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = easeOut(progress) * target;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── Countdown Timer ──────────────────────────────────────── */
(function initCountdown() {
  const TARGET = new Date('2027-01-19T08:00:00+01:00').getTime();

  function update() {
    const now = Date.now();
    const diff = TARGET - now;
    if (diff <= 0) {
      document.querySelectorAll('[data-countdown]').forEach(el => {
        el.textContent = 'WEF 2027 is live!';
      });
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    function pad(n) { return String(n).padStart(2, '0'); }

    // Block countdown (big units)
    const daysEl = document.querySelector('[data-cd="days"]');
    const hoursEl = document.querySelector('[data-cd="hours"]');
    const minsEl = document.querySelector('[data-cd="mins"]');
    const secsEl = document.querySelector('[data-cd="secs"]');
    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(mins);
    if (secsEl) secsEl.textContent = pad(secs);

    // Inline countdown (urgency strip)
    const inlineDays = document.querySelector('[data-cd-inline="days"]');
    const inlineHours = document.querySelector('[data-cd-inline="hours"]');
    const inlineMins = document.querySelector('[data-cd-inline="mins"]');
    if (inlineDays) inlineDays.textContent = days;
    if (inlineHours) inlineHours.textContent = pad(hours);
    if (inlineMins) inlineMins.textContent = pad(mins);

    // Days-only elements
    document.querySelectorAll('[data-cd-days]').forEach(el => {
      el.textContent = days;
    });
  }

  update();
  setInterval(update, 1000);
})();

/* ── FAQ Accordion ────────────────────────────────────────── */
(function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all siblings
      const parent = item.parentElement;
      parent.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });
})();

/* ── Testimonial Slider ───────────────────────────────────── */
(function initSlider() {
  const sliders = document.querySelectorAll('.testimonial-slider');
  sliders.forEach(slider => {
    const track = slider.querySelector('.testimonial-track');
    const slides = slider.querySelectorAll('.testimonial-slide');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const dotsContainer = slider.querySelector('.slider-dots');
    if (!track || slides.length < 2) return;

    let current = 0;
    let autoTimer;
    const total = slides.length;

    // Create dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
      });
    }

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
      resetAuto();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(next, 5000);
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    resetAuto();
  });
})();

/* ── Smooth Scroll ────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ── Toast Notifications ──────────────────────────────────── */
window.GSToast = function(message, type = 'info', duration = 4000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

/* ── Contact Form ─────────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || '';
    const service = form.querySelector('[name="service"]')?.value || 'General Inquiry';
    const message = form.querySelector('[name="message"]')?.value || '';
    const phone = '+41795489025';
    const text = encodeURIComponent(`Hello GS Hospitality,\n\nMy name is ${name}.\nService Interest: ${service}\n\n${message}\n\nThank you.`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    GSToast('Redirecting to WhatsApp — our team responds in under 2 hours!', 'success');
  });
})();

/* ── WhatsApp Links ───────────────────────────────────────── */
(function initWALinks() {
  const phone = '41795489025';
  const defaultMsg = encodeURIComponent('Hello GS Hospitality, I am interested in your WEF 2027 services. Could you please provide more information?');
  document.querySelectorAll('[data-wa-msg]').forEach(el => {
    const msg = encodeURIComponent(el.dataset.waMsg);
    const href = `https://wa.me/${phone}?text=${msg}`;
    if (el.tagName === 'A') {
      el.href = href;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  });
  // FAB default
  const fab = document.querySelector('.wa-fab');
  if (fab && !fab.getAttribute('href').includes('wa.me')) {
    fab.href = `https://wa.me/${phone}?text=${defaultMsg}`;
  }
})();

/* ── Rating Bars Animation ────────────────────────────────── */
(function initRatingBars() {
  const bars = document.querySelectorAll('.rating-bar-fill[data-width]');
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
})();
