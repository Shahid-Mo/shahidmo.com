# Mo Flow - Personal AI Blog

## Project Overview
- **Site Name**: Mo Flow
- **Domain**: shahidmo.com
- **Purpose**: Multi-purpose professional site (AI blog + personal website + portfolio)
- **Content Strategy**: Practical AI solutions over pure technical depth ("what people want vs showing how smart I am")
- **Architecture**: SvelteKit static site with blog-first landing page
- **Styling**: Pico CSS foundation + Tailwind utilities for brand polish
- **Launch Strategy**: Own domain as authority hub + cross-post to Medium/Dev.to for reach

## Site Structure
```
/ (Landing) = Blog list with brief personal intro
/about = Extended personal story
/projects = Portfolio items (minimal)
/blog/[slug] = Individual blog posts
/contact = Social links, email
```

## Technical Stack
- **Framework**: SvelteKit with static adapter
- **Content**: Markdown files with frontmatter
- **Styling**: Pico CSS + Tailwind utilities (via custom.css)
- **Processing**: MDSveX for markdown rendering
- **Deployment**: Cloudflare Pages (FREE with unlimited bandwidth)

## File Structure
```
mo-flow/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte        # Global layout (header/nav)
│   │   ├── +page.svelte          # Landing page (blog list)
│   │   ├── about/+page.svelte    # About me
│   │   ├── projects/+page.svelte # Projects
│   │   ├── contact/+page.svelte  # Contact
│   │   └── blog/[slug]/+page.svelte # Individual posts
│   ├── lib/
│   │   ├── components/
│   │   │   ├── BlogCard.svelte   # Custom blog cards with images
│   │   │   ├── Header.svelte     # Navigation
│   │   │   ├── TagFilter.svelte  # Tag filtering component
│   │   │   └── PostContent.svelte # Post display
│   │   ├── utils/
│   │   │   ├── markdown.js       # Markdown processing
│   │   │   └── posts.js          # Post loading logic
│   │   └── styles/
│   │       └── custom.css        # Tailwind utilities + brand colors
│   ├── posts/                    # Markdown blog posts
│   └── static/                   # Images, assets
├── package.json
├── svelte.config.js
└── CLAUDE.md                     # This file
```

## Custom Features Needed

### Phase 1 (Core)
- [ ] Blog cards with cover images (left side)
- [ ] Colab/GitHub links for posts with code
- [ ] Tag filtering system with color coding
- [ ] RSS feed (auto-generated)
- [ ] Reading time estimates

### Phase 2 (Polish)
- [ ] Search functionality (simple client-side)
- [ ] Dark/light theme toggle
- [ ] Social sharing buttons (Twitter, LinkedIn, Hacker News)
- [ ] Newsletter subscription (Kit/ConvertKit integration - Day 1 launch)
- [ ] Comments system (Disqus - simple integration)
- [ ] Table of contents with heading navigation

## Tag System & Visual Identity
```markdown
---
title: "Advanced LLM Reasoning"
tags: ["research", "code-heavy", "experience"]
category: "deep-dive"
difficulty: "advanced"
---
```

**Tag Categories with Colors:**
- **Research** (Blue) - Deep, heavily researched articles
- **Code-Heavy** (Green) - Implementation focused, lots of code
- **Experience** (Orange) - Personal insights, lessons learned
- **Tutorial** (Purple) - Step-by-step guides
- **News** (Red) - AI industry updates, quick takes

**Visual Implementation:**
- Different colored borders on blog cards
- Tag badges with category colors
- Filter buttons by category
- Maybe icons for each type

## RSS Feed Explanation
**What is RSS?** Really Simple Syndication
- Readers subscribe to your feed
- They get notified of new posts automatically
- Shows up in feed readers (Feedly, etc.)
- **SvelteKit can auto-generate** this from your posts

## Search Implementation Options
1. **Simple**: Client-side search through post titles/descriptions
2. **Advanced**: Use service like Algolia (free tier available)
3. **DIY**: Build search index at build time

For Phase 1: Simple client-side search is fine!

## SEO Strategy (Your SEO Learning Lab)
### Technical SEO
- [ ] Structured data (Schema.org markup)
- [ ] Meta tags (title, description, og:image)
- [ ] Sitemap.xml generation
- [ ] Fast loading (static site advantage)
- [ ] Mobile-first responsive design

### Content SEO
- [ ] Target specific AI keywords per post
- [ ] Internal linking between related posts
- [ ] Consistent publishing schedule
- [ ] Long-form, valuable content
- [ ] Code examples that rank for technical searches

### Off-page SEO
- [ ] Share on Twitter, LinkedIn with good descriptions
- [ ] Submit to AI/ML communities
- [ ] Link building through quality content

## Deployment Strategy - Cloudflare Pages
### Why Cloudflare Pages
- **Cost**: FREE with unlimited bandwidth (perfect for viral traffic)
- **Performance**: Massive global CDN, enterprise-grade
- **Integration**: Domain already on Cloudflare = seamless setup
- **Scalability**: Can handle Reddit/HN front page traffic
- **Learning**: Web infrastructure, CDN, edge computing concepts

### Setup Process
1. Build SvelteKit site with static adapter
2. Push to GitHub repository
3. Connect GitHub to Cloudflare Pages
4. Point shahidmo.com DNS to Pages
5. Auto-deploy on every git push

### Limits (Free Tier - More Than Sufficient)
- 20,000 files (we need ~2,000 max)
- 500 builds/month (2 posts/week = 8 builds/month)
- 100 custom domains (we need 1)
- Unlimited bandwidth and requests

## Development Tasks
- [ ] Initialize SvelteKit project with static adapter
- [ ] Set up Pico CSS + Tailwind configuration
- [ ] Create basic routing structure
- [ ] Implement markdown processing with MDSveX
- [ ] Build BlogCard component with images & tag colors
- [ ] Create tag filtering system
- [ ] Create global layout and navigation
- [ ] Style landing page (blog list)
- [ ] Implement individual post pages
- [ ] Add about/projects/contact pages
- [ ] Add table of contents/heading navigation
- [ ] Generate RSS feed
- [ ] Add SEO meta tags and structured data
- [ ] Test responsive design
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domain (shahidmo.com)

## Commands to Remember
```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# SEO audit
npm run lighthouse
```

## Content Migration & Strategy
### Existing Content Foundation
- **4 complete posts** ready from Hugo TensorTunes blog
- **6 draft posts** in final stages
- **Total**: 10 posts ready for Mo Flow launch

### Content Strategy Pivot
**Previous approach**: Heavily technical, low-level concepts (no traction)
**New approach**: Practical AI solutions that people actually search for

### Content Transformation Examples
- **Before**: "Mathematical Analysis of Attention Mechanisms"
- **After**: "Why Your LLM Requests are Expensive (Attention Costs Explained)"
- **Before**: "Quantization Mathematics Deep Dive"
- **After**: "How to Run Llama 3 on a $200 GPU (Quantization Guide)"

### Weekly Content Rhythm (100 posts/year goal)
- **Monday**: Technical deep-dive (research/code-heavy)
- **Thursday**: Experience/tutorial (practical insights)

**Content Categories:**
- 🔬 **Research Breakdowns** (20/year) - Paper summaries with business context
- 💻 **Implementation Guides** (30/year) - Code tutorials that solve real problems
- 🎯 **Experience Reports** (25/year) - "What worked/failed in production"
- 📰 **Industry Analysis** (15/year) - AI news with expert takes
- 🛠️ **Tool Reviews** (10/year) - Framework comparisons from actual use

## Newsletter Strategy (Kit/ConvertKit)
### Launch Strategy
- **Week 1**: Newsletter signup form on site launch
- **Lead magnet**: "AI Production Checklist" (from Solutions Engineer experience)
- **Welcome sequence**: 3 emails featuring best existing posts

### Newsletter Format
```
Mo Flow Weekly:
1. Featured new post deep-dive
2. AI news with professional takes
3. Tool/framework currently testing
4. Production tip from work experience
```

**Value proposition**: "Production AI insights you can't get anywhere else"

### Platform Strategy
- **Primary**: shahidmo.com (owned authority)
- **Syndication**: Cross-post to Medium, Dev.to, LinkedIn for reach
- **Always**: Link back to original on Mo Flow for SEO/brand building

## SEO Goals
- **Target**: Rank top 10 for "[specific AI topic] tutorial/guide"
- **Strategy**: Long-form, practical posts solving real Google searches
- **Unique advantage**: Solutions Engineer experience = business context + technical depth
- **Metrics**: Track with Google Search Console
- **Timeline**: 6-12 months for meaningful SEO results with consistent publishing

## Notes
- Landing page = blog list (blog-first approach)
- Semantic HTML with meaningful class names
- Pico handles base styling, Tailwind for brand touches
- Static site = blazing fast, cheap hosting, great SEO
- Focus on content quality for SEO success