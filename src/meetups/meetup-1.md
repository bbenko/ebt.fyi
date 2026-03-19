---
title: "EBT #1: GPT-5.4, Anthropic 4.6, Agents, and AI Trust"
meetupId: 1
meetupDate: 2026-03-20
meetupTime: 4:00 PM
location: Lafayette, California
summary: A practical East Bay AI roundtable on model releases, agent reliability, infrastructure, and trust.
agendaIntro: "We compare what AI is actually changing in product, operations, and infrastructure, and what still breaks in real workflows."
highlights:
  - Which new model releases create real leverage, not just hype.
  - Where agents and infrastructure fail in production, and how teams are mitigating it.
  - How trust, user backlash, and market signals are shaping adoption faster than benchmarks.
sessionPlan:
  - Read the short packet in advance if you want the context; it is optional and should take about 15 to 30 minutes.
  - Bring one workflow, experiment, lesson, or open question from your own work.
  - Discussion-first format, no slide decks, no spectators.
---
## Topics

### Model releases

### [Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)

- OpenAI positions GPT-5.4 as its most capable and efficient model for professional work.
- The release bundles reasoning, coding, agent workflows, and better tool use into one mainline model.
- Useful prompt for discussion: what actually changes when frontier models optimize for real work instead of benchmark theater?

### [Introducing Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)

- Anthropic describes Sonnet 4.6 as a full upgrade across coding, computer use, long reasoning, planning, knowledge work, and design.
- This is a direct competitor in the same "AI for professional work" lane as GPT-5.4.
- Good comparison topic: where should teams prefer Anthropic, OpenAI, or a mixed stack?

### [Gemini 3.1 Flash-Lite: Built for intelligence at scale](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/)

- Google frames Flash-Lite as the fastest and most cost-efficient Gemini 3 series model yet.
- The pitch is high-volume production use: moderation, translation, dashboards, wireframes, and other cost-sensitive workloads.
- Discussion angle: when is "cheap and fast" the winning model strategy, and when is it just false economy?

### Infrastructure and agents

### [OpenClaw 3.13: Mobile Redesign, 2x Memory Fix, and 70+ Stability Patches](https://openclaws.io/blog/openclaw-3-13-release)

- This release is mostly about stability, not flashy new features.
- The biggest fix is a memory regression that had roughly doubled Plugin-SDK memory usage.
- Good practical question: for agent products, how often is reliability more important than model upgrades?

### [Compute Conference by Daytona](https://compute.daytona.io/)

- Daytona is framing the agent era around infrastructure: fast environment creation, sandboxes, and production-ready compute for AI coding systems.
- The speaker lineup is also a useful map of where serious agent builders think the bottlenecks now live.
- Good room question: what part of the agent stack becomes the real moat, models, workflow, or infrastructure?

### [NVIDIA GTC Keynote 2026](https://www.youtube.com/watch?v=jw_o0xr8MWU)

- NVIDIA’s keynote frames the next wave around agentic AI, AI factories, physical AI, and accelerated computing.
- It is a useful snapshot of how infrastructure vendors want to shape the AI narrative, not just supply chips.
- Worth discussing which keynote themes feel real today versus still mostly strategic storytelling.

### Company moves and market signals

### [OpenAI Tops $25 Billion in Annualized Revenue as Anthropic Narrows Gap](https://archive.ph/C9uc9#selection-1103.8-1103.52)

- The piece says OpenAI topped $25 billion in annualized revenue at the end of last month, up from $21.4 billion at year-end.
- Anthropic reportedly topped $19 billion in annualized revenue, shrinking the revenue gap much faster than many people expected.
- Good question for the room: if Anthropic is catching up this quickly on coding-heavy workloads, what does durable moat actually look like?

### [Anthropic vs. the Pentagon](https://techcrunch.com/2026/03/13/the-biggest-ai-stories-of-the-year-so-far/#:~:text=Anthropic%20vs)

- TechCrunch frames 2026 so far as a mix of acquisitions, indie wins, public backlash, and high-stakes contracts.
- The meta-story is that AI competition is no longer just about model quality; it is also about policy, distribution, and public trust.
- Good roundup piece for asking what has actually mattered this year versus what only felt loud online.

### [ChatGPT uninstalls surged by 295% after DoD deal](https://techcrunch.com/2026/03/02/chatgpt-uninstalls-surged-by-295-after-dod-deal/#:~:text=U,as%20the%20Department%20of%20War)

- TechCrunch reports a sharp user backlash after OpenAI’s DoD deal, including a 295% jump in U.S. app uninstalls.
- Claude downloads rose while ChatGPT reviews turned more negative, suggesting values can move market behavior.
- Useful discussion topic: how much does AI product adoption depend on trust, politics, and institutional alignment?

### [OpenAI Unveils $110B in Funding, Expands AWS Partnership](https://aibusiness.com/foundation-models/openai-unveils-110billion-funding-expands-aws-partnership)

- The headline ties model progress directly to massive infrastructure scale and capital intensity.
- The AWS expansion suggests frontier model competition is increasingly a compute and distribution game, not just a research game.
- Good question for the room: does this strengthen OpenAI, or deepen dependence on a small set of hyperscalers?

### [Nvidia Devises a More Secure OpenClaw Stack for Enterprises](https://aibusiness.com/agentic-ai/nvidia-devises-secure-openclaw-stack-for-enterprises)

- AI Business says Nvidia is packaging OpenClaw with a governance and safety layer for enterprise use.
- The pitch is simple: companies want personal agents, but not the raw security posture of consumer-first agent stacks.
- Worth discussing whether the winning agent platforms will be open, enterprise-hardened wrappers around open systems, or closed vertical stacks.

### [Peter Steinberger: OpenClaw is becoming a foundation](https://x.com/steipete/status/2023154018714100102)

- Peter Steinberger says he is joining OpenAI, while OpenClaw becomes an open and independent foundation.
- That creates an interesting split between commercial frontier labs and open governance around agent tooling.
- Good discussion angle: does open governance make agent infrastructure more trustworthy, or just slower?

### [Vincent Koc: 6.7k commits in 2 months](https://x.com/vincent_koc/status/2032938140516938156)

- Vincent Koc highlights 6.7k commits in two months, with a peak day of 413 contributions and 50+ PRs shipped.
- Even if you discount some of the headline energy, it points to how fast modern agent and open-source workflows can compound output.
- Good question for the room: what is a healthy velocity metric in the age of AI-assisted software work?

### Public trust and politics

### [People really hate AI](https://archive.ph/Uc4nT)

- Fortune cites polling showing only 26% of respondents had a positive view of AI, while 46% were negative.
- The article connects that skepticism to trust, privacy, social responsibility, and labor anxiety.
- Good closing question: if public sentiment stays this negative, what does sustainable AI adoption actually look like?
