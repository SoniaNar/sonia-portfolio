# sonianardinocchi.com

Personal portfolio site. Plain HTML, CSS and JavaScript — no build step, no
dependencies, no framework.

> **You don't have to do any of this by hand.**
> If you have Claude Code, open a terminal in this folder, type `claude`, and
> just ask — "add these photos", "put this online", "make the gold warmer".
> It already knows how this site is put together and will make the changes for
> you. Everything below is the manual version, for reference or for anyone
> helping you without it.

## Opening it

Double-click `index.html`. That's it — it opens in your browser and everything
works: styling, fonts, the menu, the fade-ins, and every link between pages.

The one likely exception is the TikTok / Instagram videos. Once you add those,
they may refuse to load from a file opened directly, because the browser treats
a local file as having no web address. If that happens, run this from inside
this folder:

    python3 -m http.server 8765

...and open <http://127.0.0.1:8765> instead. This only matters while previewing
on your own computer — once the site is online, the videos work normally.

## Pages

    index.html          home — hero, stats, intro, featured work
    about.html          bio, languages, the five-country path, resume link
    portfolio.html      four case cards + the "In Motion" video band
    interests.html      travel, swimming, dancing
    contact.html        email, socials, message form
    work/               one page per case study
      k-expo-mexico.html
      zipiderm.html
      eeseol.html
      loewe.html

    assets/css/style.css   all styling — colours live at the very top
    assets/js/main.js      nav, scroll reveals, contact form
    assets/js/reels.js     the three TikTok / Instagram videos
    assets/img/            your photos — see README.txt in that folder

## Your to-do list

1. **Photos** — every image is a styled placeholder right now.
   `assets/img/README.txt` lists each filename and how to swap one in
   (delete one line, uncomment the next).

2. **Videos** — open `assets/js/reels.js` and paste in three post IDs.
   Instructions and examples are at the top of that file.

3. **Case study numbers** — each page in `work/` has a gold "Draft note" box
   and `[ bracketed ]` gaps for real figures. Fill them in, then delete the
   note box. Nothing on those pages should stay a guess.

4. **Your email** — currently `hello@sonianardinocchi.com` in three places:
   `contact.html` (the big link, the form's `data-mailto`, the footer).

5. **Social links** — the LinkedIn / Instagram / TikTok links in
   `contact.html` are `#` placeholders.

6. **Resume** — save your CV as `assets/Sonia-Nardinocchi-Resume.pdf`.
   It's already linked from the about and contact pages.

7. **Contact form** — it opens the visitor's mail app as-is. For messages
   straight to your inbox, make a free form at formspree.io and paste the URL
   into the form's `action` attribute in `contact.html`.

## Changing the colours

Everything comes from six variables at the top of `assets/css/style.css`:

    --bg        #0B0B0C   near-black background
    --text      #EDE9E3   warm off-white
    --gold      #C9A227   antique gold
    --gold-soft #E0C46A   lighter gold, used in headings
    --muted     #8A8578   stone grey
    --line      #2A2724   hairline borders

Change those and the whole site follows.

## Putting it online

Any static host works, free:

- **Netlify** — drag this whole folder onto app.netlify.com/drop. Done.
- **Vercel** — same idea, or connect a Git repo.
- **GitHub Pages** — push the folder, enable Pages in repo settings.

All three let you point your own domain at it afterwards.

## Notes

- Works with JavaScript disabled — the fade-ins are an enhancement only.
- Responsive down to 320px; the nav collapses to a menu under 760px.
- Fonts are Cormorant Garamond and Inter, loaded from Google Fonts.
