/* Shared behaviour: mobile nav, scroll reveal, footer year, contact form. */

(function () {
  'use strict';

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reveals.length) {
    /* nothing to do */
  } else if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    Array.prototype.forEach.call(reveals, function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
      io.observe(el);
    });
  }

  /* ---- footer year ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- contact form ----------------------------------------------------
     By default this falls back to opening the visitor's mail app.
     To receive messages straight to your inbox instead, create a free
     form endpoint (formspree.io works well), then put the URL in the
     form's action attribute in contact.html. No other change needed.
     -------------------------------------------------------------------- */
  var form = document.querySelector('.form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      var endpointSet = action.indexOf('http') === 0;

      if (endpointSet) return; /* let the real endpoint handle it */

      e.preventDefault();
      var name = (form.elements.name && form.elements.name.value) || '';
      var email = (form.elements.email && form.elements.email.value) || '';
      var message = (form.elements.message && form.elements.message.value) || '';
      var to = form.dataset.mailto || 'hello@example.com';

      var body = message + '\n\n— ' + name + ' (' + email + ')';
      window.location.href =
        'mailto:' + to +
        '?subject=' + encodeURIComponent('Portfolio enquiry from ' + (name || 'the website')) +
        '&body=' + encodeURIComponent(body);

      if (status) status.textContent = 'Opening your mail app…';
    });
  }
})();
