/* ============================================================================
   IN MOTION — the three social videos on each case study page.

   HOW TO ADD YOUR VIDEOS
   ----------------------
   Each case has its own group of three below, keyed by the same name as its
   page (e.g. "k-expo-mexico" for work/k-expo-mexico.html). Fill in one entry
   per video. You need the post's ID, not the whole URL.

   TikTok
     URL:  https://www.tiktok.com/@someone/video/7412345678901234567
     id:   '7412345678901234567'        <- the long number at the end
     platform: 'tiktok'

   Instagram (Reel or post)
     URL:  https://www.instagram.com/reel/C8xYz1AbCdE/
     id:   'C8xYz1AbCdE'                <- the code between /reel/ and the last /
     platform: 'instagram'
     type:  'reel'  (default)  or  'p'  if the URL says /p/ instead of /reel/

   YouTube Shorts also work:
     platform: 'youtube', id: 'dQw4w9WgXcQ'

   Leave id as '' and the slot keeps showing its placeholder.
   ========================================================================== */

var REELS_BY_CASE = {
  'lab89': [
    { platform: 'tiktok', id: '7655428695737322782', user: 's.a.v.an.na.h', title: 'Video one', meta: '' },
    { platform: 'tiktok', id: '7658443396263972110', user: 'junlama_', title: 'Video two', meta: '' },
    { platform: 'tiktok', id: '7652767175899385102', user: 'ambermccalmon', title: 'Video three', meta: '' },
    { platform: 'tiktok', id: '7656891127517170957', user: 'its.jackie.d', title: 'Video four', meta: '' },
    { platform: 'tiktok', id: '7663132341283474691', user: '.mae.jm', title: 'Video five', meta: '' },
    { platform: 'tiktok', id: '7666168720577793293', user: 'alexa_canales_', title: 'Video six', meta: '' },
    { platform: 'tiktok', id: '7656482629419568398', user: 'erinmurphyeq', title: 'Video seven', meta: '' },
    { platform: 'tiktok', id: '7676555534849314061', user: 'emmackrol', title: 'Video eight', meta: '' },
    { platform: 'tiktok', id: '7660167058285448478', user: 'lilirioss', title: 'Video nine', meta: '' }
  ],
  'k-expo-mexico': [
    { platform: 'tiktok', id: '7680399285690699016', user: 'crisxt20', title: 'Video one', meta: '' },
    { platform: 'tiktok', id: '7680721613892996373', user: 'la_alice_3000', title: 'Video two', meta: '' },
    { platform: 'tiktok', id: '7680760298147433735', user: 'nubiaadri', title: 'Video three', meta: '' },
    { platform: 'tiktok', id: '7681439026825661714', user: 'cupidsclubdc', title: 'Video four', meta: '' },
    { platform: 'tiktok', id: '7680003547378830613', user: 'itsnati_nati', title: 'Video five', meta: '' },
    { platform: 'tiktok', id: '7680752164649569544', user: 'luqeno', title: 'Video six', meta: '' }
  ],
  'zipiderm': [
    { platform: 'instagram', id: 'DcvgTraBDM5', type: 'p', title: 'Video zero', meta: '' },
    { platform: 'instagram', id: 'Dc0p3qDy499', type: 'p', title: 'Video one', meta: '' },
    { platform: 'instagram', id: 'Dc0dMUeTdkS', type: 'p', title: 'Video two', meta: '' },
    { platform: 'instagram', id: 'DcxuoLHTu26', type: 'p', title: 'Video three', meta: '' },
    { platform: 'instagram', id: 'Dc0Xp0dJvJa', type: 'p', title: 'Video four', meta: '' },
    { platform: 'instagram', id: 'DcvFFcQp0u7', type: 'p', title: 'Video five', meta: '' },
    { platform: 'instagram', id: 'DclDX4WTlXn', type: 'p', title: 'Video ten', meta: '' },
    { platform: 'instagram', id: 'Dcvg_mqTRJv', type: 'p', title: 'Video eleven', meta: '' },
    { platform: 'instagram', id: 'DclOP3zBmPO', type: 'p', title: 'Video twelve', meta: '' },
    { platform: 'instagram', id: 'DclCD4DywGi', type: 'p', title: 'Video thirteen', meta: '' },
    { platform: 'instagram', id: 'DclXharzoef', type: 'p', title: 'Video fourteen', meta: '' },
    { platform: 'instagram', id: 'DdBo668TIt3', type: 'p', title: 'Video fifteen', meta: '' },
    { platform: 'instagram', id: 'Dcn1H6BCdIL', type: 'p', title: 'Video sixteen', meta: '' },
    { platform: 'instagram', id: 'Dc3VE7aSuUy', type: 'p', title: 'Video seventeen', meta: '' },
    { platform: 'tiktok', id: '', title: 'Video eighteen', meta: '' }
  ],
  'eeseol': [
    { platform: 'tiktok', id: '7663986818538360094', user: 'randa.rosa', title: 'Video one', meta: '' },
    { platform: 'tiktok', id: '7667068089158110478', user: 'giannamjoyce', title: 'Video two', meta: '' },
    { platform: 'tiktok', id: '7665431350027029791', user: '.jessealvarez', title: 'Video three', meta: '' },
    { platform: 'tiktok', id: '7665357139531140366', user: 'jaimeadler', title: 'Video four', meta: '' },
    { platform: 'tiktok', id: '7668429294716161310', user: 'nazyfarnoosh', title: 'Video five', meta: '' },
    { platform: 'tiktok', id: '7664367314246110478', user: 'imdjlivia', title: 'Video six', meta: '' },
    { platform: 'instagram', id: 'DbYuFevz1rq', type: 'reel', title: 'Video seven', meta: '' },
    { platform: 'instagram', id: 'DbV1EjVRT1g', type: 'p', title: 'Video eight', meta: '' },
    { platform: 'instagram', id: 'DbOIonPPfqP', type: 'p', title: 'Video nine', meta: '' },
    { platform: 'instagram', id: 'DbLkw9asaAG', type: 'p', title: 'Video ten', meta: '' },
    { platform: 'instagram', id: 'DbeEe_qhWVU', type: 'p', title: 'Video eleven', meta: '' },
    { platform: 'instagram', id: 'DbXhXSjtWKV', type: 'p', title: 'Video twelve', meta: '' },
    { platform: 'instagram', id: 'DbYmVY0B2t_', type: 'p', title: 'Video thirteen', meta: '' },
    { platform: 'instagram', id: 'DbLi_bWgCQz', type: 'p', title: 'Video fourteen', meta: '' },
    { platform: 'instagram', id: 'DbUe0MJtARA', type: 'p', title: 'Video fifteen', meta: '' }
  ],
  'lewkin': [
    { platform: 'tiktok', id: '7705546549559938317', user: 'itsjudyshin', title: 'Video one', meta: 'Advent Calendar' },
    { platform: 'tiktok', id: '7705507821420432670', user: 'heyitsmelaura_lou', title: 'Video two', meta: 'Advent Calendar' },
    undefined, // Advent Calendar · Video three — not added yet, keeps the slots below lined up
    { platform: 'tiktok', id: '7707091674450709791', user: 'melguber', title: 'Video four', meta: 'Black Friday' },
    { platform: 'tiktok', id: '7705697961975663879', user: 'rosiefleurrs', title: 'Video five', meta: 'Black Friday' },
    { platform: 'tiktok', id: '7705816498291494151', user: 'tjargaille', title: 'Video six', meta: 'Black Friday' },
    { platform: 'tiktok', id: '7708559231921736968', user: 'serenasurena', title: 'Video seven', meta: 'Black Friday' }
    // Add more entries here as you get them, in the same order the slots
    // appear on the page (Advent Calendar, then Black Friday, then Boxing Day).
  ],
  'loewe': [
    { platform: 'tiktok', id: '', title: 'Video one', meta: 'Loewe · Global' },
    { platform: 'instagram', id: '', type: 'reel', title: 'Video two', meta: 'Loewe · Global' },
    { platform: 'tiktok', id: '', title: 'Video three', meta: 'Loewe · Global' }
  ]
};

/* -------------------------------------------------------------------------- */

(function () {
  'use strict';

  function embedSrc(reel) {
    switch (reel.platform) {
      case 'youtube':
        return 'https://www.youtube.com/embed/' + encodeURIComponent(reel.id);
      default:
        return null;
    }
  }

  /* Both platforms' own embed scripts size each post to its real height —
     no fixed pixel guess, so nothing is ever cropped. */
  function loadEmbedScript(scriptId, src, onReady) {
    var existing = document.getElementById(scriptId);
    if (existing) { existing.addEventListener('load', onReady); return; }
    var script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = src;
    script.addEventListener('load', onReady);
    document.body.appendChild(script);
  }

  function loadInstagramEmbedScript(onReady) {
    if (window.instgrm) { onReady(); return; }
    loadEmbedScript('ig-embed-script', 'https://www.instagram.com/embed.js', onReady);
  }

  function loadTikTokEmbedScript(onReady) {
    loadEmbedScript('tt-embed-script', 'https://www.tiktok.com/embed.js', onReady);
  }

  var caseKey = document.body.getAttribute('data-case');
  var REELS = REELS_BY_CASE[caseKey] || [];

  var slots = document.querySelectorAll('[data-reel]');
  var hasInstagram = false;
  var hasTikTok = false;

  Array.prototype.forEach.call(slots, function (slot, i) {
    var reel = REELS[i];
    if (!reel) return;

    var cap = slot.parentNode.querySelector('.reel__cap');
    if (cap && reel.title) {
      cap.querySelector('b').textContent = reel.title;
      cap.querySelector('span').textContent = reel.meta || '';
    }

    if (!reel.id) { slot.parentNode.style.display = 'none'; return; }

    if (reel.platform === 'instagram') {
      hasInstagram = true;
      slot.classList.add('reel__frame--capped');
      var permalink = 'https://www.instagram.com/' + (reel.type === 'p' ? 'p' : 'reel') +
                       '/' + encodeURIComponent(reel.id) + '/';
      slot.innerHTML =
        '<blockquote class="instagram-media" data-instgrm-permalink="' + permalink + '" ' +
        'data-instgrm-captioned data-instgrm-version="14" style="margin:0;width:100%"></blockquote>';
      return;
    }

    if (reel.platform === 'tiktok') {
      hasTikTok = true;
      var cite = 'https://www.tiktok.com/@' + encodeURIComponent(reel.user || '') +
                 '/video/' + encodeURIComponent(reel.id);
      slot.innerHTML =
        '<blockquote class="tiktok-embed" cite="' + cite + '" data-video-id="' +
        encodeURIComponent(reel.id) + '" style="margin:0;width:100%"><section></section></blockquote>';
      return;
    }

    var src = embedSrc(reel);
    if (!src) return;

    var frame = document.createElement('iframe');
    frame.src = src;
    frame.title = reel.title || 'Campaign video';
    frame.loading = 'lazy';
    frame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.setAttribute('allowfullscreen', '');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';

    slot.innerHTML = '';
    slot.appendChild(frame);
  });

  if (hasInstagram) {
    loadInstagramEmbedScript(function () {
      if (window.instgrm) window.instgrm.Embeds.process();
    });
  }

  if (hasTikTok) {
    loadTikTokEmbedScript(function () {});
  }
})();
