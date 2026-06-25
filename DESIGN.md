# Template A: Tactical Command Center

## Design Overview
A data-dense, Linear-inspired strategy game guide site. Designed for strategy RPGs, turn-based tactics, and MOBA tier lists. Precision over decoration. Sharp corners, grid backgrounds, terminal accents.

## Design Read
- **Kind**: Strategy game guide with tactical dashboard
- **Audience**: Competitive players who want data fast
- **Vibe**: Linear-style precision + cockpit density
- **Dials**: VARIANCE=5 / MOTION=3 / DENSITY=8

## Color System
| Token | Hex | Usage |
|---|---|---|
| `abyss` | `#0d1117` | Page background |
| `abyss-light` | `#161b22` | Card / table surface |
| `tactical-blue` | `#58a6ff` | Primary accent, links |
| `warning-orange` | `#db6d28` | Warnings, S-tier indicators |
| `terminal-green` | `#3fb950` | Success, online status |
| `terminal-red` | `#f85149` | Negative numbers, danger |
| `text-primary` | `#e6edf3` | Body text |
| `text-secondary` | `#8b949e` | Secondary text |
| `text-muted` | `#484f58` | Muted labels |
| `border-subtle` | `#30363d` | Borders |

## Typography
- **Display/Heading**: Space Grotesk (600-700 weight)
- **Body**: Inter (400)
- **Data/Mono**: JetBrains Mono (500-600 for numbers)

Typography scale uses `font-display` / `font-body` / `font-mono` CSS variables.

## Layout Structure
```
[Sidebar 240px fixed] [Header: Stats Bar (h-14)]
                       [Main Content (scrollable, grid bg)]
                       [Footer]
```

- Sidebar: Fixed left, collapses to hamburger menu on mobile (`< lg` breakpoint)
- Stats Bar: 4 metrics in a row, status indicator on right
- Main content: 32px grid background pattern, max-width 6xl (72rem)
- All corners: `rounded-none` or `rounded-sm` (2px)
- No shadows beyond `border` hairline

## Key Components
- `.stat-card` - Compact data card, border only
- `.data-row` - Table row with hover highlight
- `.sidebar-link` - Left border accent on active
- `.tag` / `.tag-warn` / `.tag-info` / `.tag-success` - Status badges
- `.terminal-block` - Console-style code block
- `.cursor-blink` - Animated terminal cursor
- `.section-divider` - Hairline section break

## How to Use This Template

### 1. Install and Build
```bash
cd templates/A-tactical
npm install
npm run dev       # Development
npm run export    # Static export to out/ (same as build with output:'export')
```

### 2. Replace Placeholders
Search for `REPLACE_WITH_` across all files and replace with your content:

| Placeholder Pattern | What to insert |
|---|---|
| `REPLACE_WITH_SITE_NAME` | Full site name (e.g. "Fire Emblem Tactics") |
| `REPLACE_WITH_SITE_NAME_SHORT` | Short name for sidebar (e.g. "FET") |
| `REPLACE_WITH_SITE_SLUG` | URL slug in package.json |
| `REPLACE_WITH_SITE_DESCRIPTION` | Meta description |
| `REPLACE_WITH_SITE_URL` | Production URL |
| `REPLACE_WITH_GSC_VERIFICATION_CODE` | Google Search Console verification code |
| `REPLACE_WITH_NAV_*` | Navigation label text |
| `REPLACE_WITH_STAT_*` | Stats bar numbers |
| `REPLACE_WITH_CHAR_*` | Tier list character data |
| `REPLACE_WITH_SECTION_*` | Section titles and subtitles |
| `REPLACE_WITH_CARD_*` | Stat card labels and values |
| `REPLACE_WITH_DATE_*` / `REPLACE_WITH_UPDATE_*` | Recent update entries |
| `REPLACE_WITH_VERSION` | Site version number |
| `REPLACE_WITH_PATCH` | Game patch number |
| `REPLACE_WITH_UPDATE_FREQ` | Data update frequency |

### 3. GA4 and GSC
- GA4 Measurement ID: `G-ET6778V62K` (pre-configured)
- GSC verification: Replace `REPLACE_WITH_GSC_VERIFICATION_CODE` with your actual code
- GSC HTML file: `google4cd6cdf221ea7b0b.html` (place in `public/` directory)

### 4. Afdian Footer
The "SUPPORT ON AFDIAN" link points to `https://afdian.com/a/gameguidehub`. Update if you have a different page.

### 5. Adding Pages
Create new routes under `app/`:
```
app/
  tier-list/page.tsx
  builds/page.tsx
  guides/page.tsx
  database/page.tsx
```

Use the same layout - the RootLayout wraps everything automatically.

### 6. Customization Tips
- **Change accent color**: Edit `tactical-blue` in `tailwind.config.ts` and `globals.css`
- **Add more stats**: Edit the `STATS` array in `page.tsx`
- **Modify tier list**: Edit `TIER_DATA` array
- **Change grid size**: Edit `background-size` in `globals.css` (default: 32px)

## Anti-AI Design Decisions
- No gradient hero sections
- No bento grids
- No purple (the LLM default)
- No Inter as heading font (Space Grotesk instead)
- No rounded corners except 2px
- No centered layouts
- No card shadows (borders only)
- Asymmetric sidebar + content layout breaks the centered-grid pattern
- Terminal aesthetic replaces generic "modern" look
