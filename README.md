  12-status-pages.css    # 404, 500 and maintenance pages
# ABBANK – banking website template

```
index.html            # HTML only (6 commented blocks)
css/
  01-base.css         # tokens (colors, gradients, shadows, dark mode), reset
  02-layout.css       # top bar, header, nav, sections, footer
  03-components.css   # buttons, cards, forms, tabs, tables
  04-sections.css     # hero, page header, strip, CTA
  05-widgets.css      # quick links, chat, robo-dove
  06-animations.css   # keyframes
  07-responsive.css   # media queries, reduced motion
  08-theme-modern.css # modern flat theme layer + icon system (delete to revert)
  09-page-org.css     # organization chart page
  10-page-timeline.css# development timeline page
  11-page-awards.css  # awards page
js/
  data.js             # categories, products, news, rates, quick-access items
  icons.js            # duotone line icon set: ico("card")
  views.js            # page templates
  org.js              # organization chart page (#org)
  timeline.js         # development timeline page (#timeline)
  awards.js           # awards page (#awards)
  app.js              # state (mode/segment), menu, router
  quick-link.js       # quick-link widget
  chat.js             # chat widget
build.py              # optional: bundle to dist/index.html
```
Open `index.html` directly in a browser. Brand colors: `--brand` (#008789), `--accent` (#f58220) in `css/01-base.css`.

## GitHub Pages deployment

Before the first deployment, open **Settings → Pages** and set **Source** to
**GitHub Actions**. The workflow deploys on pushes to `main` or can be run manually
from **Actions → Deploy static site → Run workflow**.

Alternatively, to let the workflow enable Pages automatically, add a repository
Actions secret named `PAGES_SETUP_TOKEN` containing a fine-grained personal access
token scoped to this repository with **Pages: Read and write** permission.
The default `GITHUB_TOKEN` can deploy an existing Pages site but cannot create one.
After the site is enabled, remove the setup secret; subsequent deployments use
`GITHUB_TOKEN`. Without either setup option, the first deployment cannot succeed.
