# Unison — Project Page

Project page for **Unison: Harmonizing Motion, Speech, and Sound for
Human-Centric Audio-Video Generation** (ECCV 2026).

- Paper: https://arxiv.org/abs/2605.08729
- Live page: https://shihao-cheng.github.io/unison/

## Structure

```
.
├── index.html            # the single-page site
├── static/
│   ├── css/index.css     # styles
│   └── js/index.js       # BibTeX copy button
├── assets/               # put figures / videos here (see assets/README.md)
└── .nojekyll             # serve files as-is on GitHub Pages
```

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

Pages is served from the `main` branch root. After pushing, the site is
available at `https://shihao-cheng.github.io/unison/`.

## Editing

- Replace the dashed `.figure-placeholder` blocks in `index.html` with real
  `<img>` / `<video>` tags pointing at files in `assets/`.
- Update author affiliations and the Code link (marked with `EDIT:` comments).
