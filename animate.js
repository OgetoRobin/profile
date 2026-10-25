/* animate.js - scroll reveal: content fades and slides in as it enters the screen.
   (Skipped automatically for people who prefer reduced motion.) */

(function () {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    window.__rv = 1;                                   /* tells the page this script is running */

    const items = [...document.querySelectorAll('.eyebrow, h2, .lead, .sub, .card, .time > div, .svc-banner, .contact, .auth-box')];
    const seen = new Map();

    items.forEach(el => {
        const n = seen.get(el.parentNode) || 0;        /* stagger siblings: 0, 1, 2 ... */
        seen.set(el.parentNode, n + 1);
        el.style.setProperty('--i', Math.min(n, 6));
    });

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            io.unobserve(el);
            el.classList.add('in');
            setTimeout(() => {                          /* animation finished: hand hover effects back to CSS */
                el.classList.remove('in');
                el.classList.add('done');
            }, 1900);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => io.observe(el));
})();
