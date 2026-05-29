---
title: "EBT #3: Practical AI for Founders, Developers & Operators"
meetupId: 3
meetupDate: 2026-05-22
meetupTime: 6:00 PM
location: Lafayette, California
summary: A curated East Bay gathering for founders, developers, and operators exploring practical AI, emerging technology, and new business opportunities.
agendaIntro: "Agent Skills, model launches, and practical AI workflow lessons for builders and operators."
highlights:
  - Meet smart people building, shipping, and improving real work with AI.
  - Share practical AI use cases across industries like healthcare, legal, real estate, operations, and software.
  - Explore partnerships, projects, and business opportunities with strong local operators.
sessionPlan:
  - Curated local conversation, not a pitch night or generic networking event.
  - Practical examples, real questions, and useful lessons from the room.
  - Respectful, concise discussion with no aggressive selling or constant self-promotion.
luma:
  eventId: evt-sOcbxW1B9ATdqkR
  eventUrl: https://luma.com/vw0qvd9x
heroArt:
  - /assets/artificialanalysis-intelligence-vs-cost-2026-05-22.svg
  - /assets/ai-workflow-models-marcel-velica-2026-05-22.jpg
  - /assets/agents-by-domain-tool-calls-2026.svg
---
East Bay Tech brings founders, developers, and operators together for practical AI conversations grounded in real work.

## Workflow Showcases

### [Agent Skills](https://agentskills.io/home)

- Agent Skills are a lightweight way to give an LLM or agent runner reusable expertise: instructions, scripts, references, templates, and workflow context packaged in a small folder.
- The theme: make your agent better at real work by adding skills instead of rewriting prompts every time.

<figure>
  <img src="/assets/neo-i-know-kung-fu-agent-skills.jpg" alt="Neo from The Matrix with the subtitle: I know kung fu." />
  <figcaption>Agent Skills are the practical version of "I know kung fu": package the workflow once, then let the agent load it when needed.</figcaption>
</figure>

### Workflow 1: Multiple calendar management

- Multiple calendar management using different skills.

### [Workflow 2: mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)

- This skill researches a topic across Reddit, X, YouTube, Hacker News, Polymarket, GitHub, and the web, then synthesizes what people actually engaged with.

## Topics

### [Current model snapshot: Artificial Analysis](https://artificialanalysis.ai/)

- May 22 snapshot, compared with the April 16 chart from meetup #2.
- Biggest changes: more models, GPT-5.5 at the OpenAI frontier, DeepSeek V4 Flash and Pro in the attractive quadrant, and Claude Opus 4.7 on the high-cost frontier.
- Good room question: when should teams pay for the frontier model, and when should they route work to cheaper open or hosted alternatives?

<figure>
  <img src="/assets/artificialanalysis-intelligence-vs-cost-2026-05-22.svg" alt="Artificial Analysis chart from May 22, 2026 comparing intelligence versus cost to run across frontier AI models." />
  <figcaption>Artificial Analysis model snapshot, captured May 22, 2026.</figcaption>
</figure>

### Frontier models, benchmarks, and research

### [Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)

- OpenAI is positioning GPT-5.5 as its smartest and most intuitive model yet, with stronger agentic coding, computer use, knowledge work, and early scientific research.
- The practical claim is that it can carry more of a messy, multi-step task while matching GPT-5.4 per-token latency and using fewer tokens on Codex tasks.
- Good room question: when a model can plan, use tools, check its work, and keep going longer, what should teams actually delegate end-to-end?

### [Qwen3.6-27B](https://x.com/Alibaba_Qwen/status/2046939764428009914)

- Qwen announced Qwen3.6-27B as a dense, open-source model with flagship-level coding performance in a much smaller package.
- The notable claim is outstanding agentic coding, including performance above Qwen3.5-397B-A17B across major coding benchmarks.
- Good room question: how much pressure do smaller strong open models put on closed frontier models for everyday engineering work?

### [DeepSeek V4 Preview](https://api-docs.deepseek.com/news/news260424)

- DeepSeek-V4 Preview is live with open weights, a 1M context length, and two main variants: V4-Pro for top-tier reasoning and coding, and V4-Flash for faster, cheaper usage.
- The release is especially relevant for agentic coding because DeepSeek calls out OpenClaw, OpenCode, and Claude Code integrations, plus support for both OpenAI Chat Completions and Anthropic APIs.
- Good room question: if open-weight models now combine long context, strong coding, and drop-in API compatibility, what keeps teams locked into closed-model workflows?

### [Arena AI Model Elo History](https://mayerwin.github.io/AI-Arena-History/)

- This tracker plots the public Elo lifecycle of flagship AI models over time using Arena leaderboard data.
- The useful angle is not just "which model is winning today," but whether post-launch updates, product wrappers, quantization, or safety changes appear to affect perceived quality.
- Good room question: how should teams monitor model drift when the model name stays the same but the behavior may not?

<figure>
  <img src="/assets/ai-arena-history-2026-05-22.png" alt="Screenshot of the Arena AI Model Elo History chart showing public Elo timelines for flagship AI models from 2024 through 2026." />
  <figcaption>Arena AI Model Elo History visualizes how each lab's flagship model rating changes over time.</figcaption>
</figure>

### [OpenAI solved an 80-year math problem by disproving it](https://www.theneurondaily.com/p/openai-solved-an-80-year-math-problem-by-disproving-it)

- The Neuron summarizes OpenAI's claim that an internal reasoning model found a counterexample to the Erdos unit distance conjecture.
- The important signal is that this is closer to expert-checkable research output than a normal benchmark result, with companion mathematical remarks and follow-up sharpening from Will Sawin.
- Good room question: what would make AI-generated scientific or mathematical work trustworthy enough to change how research teams operate?

### Platform distribution and model access

### [Google I/O 2026 made one thing clear: Gemini is becoming impossible to avoid](https://www.techradar.com/ai-platforms-assistants/google-i-o-2026-made-one-thing-clear-gemini-is-becoming-impossible-to-avoid)

- TechRadar frames Google I/O as a sweeping Gemini expansion across Search, Android, shopping, productivity, and agents.
- The product strategy matters as much as the model news: Gemini can become ambient because Google already owns many of the surfaces people use every day.
- Good room question: when does deep platform integration make an AI product useful, and when does it start to feel intrusive or unavoidable?

<figure>
  <img src="/assets/google-io-2026-gemini-techradar.jpg" alt="Google Gemini collage showing Gemini 3.5 Flash, Gemini on macOS, Gemini Omni, Gemini Spark, and daily brief surfaces." />
  <figcaption>TechRadar's Google I/O image captures the breadth of Gemini's product-surface push.</figcaption>
</figure>

### [NVIDIA's free hosted AI model APIs](https://x.com/dhruvtwt_/status/2047006444701274380)

- Dhruv highlights NVIDIA offering roughly 80 hosted AI model APIs for free, including MiniMax M2.7, GLM 5.1, Kimi 2.5, DeepSeek 3.2, GPT-OSS-120B, and Sarvam-M.
- This is useful because it turns model choice into a practical integration question for coding tools and agent workflows, not just a leaderboard discussion.
- Good room question: if model access keeps getting cheaper and easier, where does the real bottleneck move, evaluation, workflow design, or distribution?

### Agents, workflows, and enterprise adoption

### [3 AI Workflow Models That Will Change Business Forever](https://x.com/MarcelVelica/status/2057852277428506821)

- Marcel Velica breaks AI workflows into three practical buckets: traditional LLMs for answers and content, agents for tool-using tasks, and agentic systems for full workflows.
- It is a useful framing because many teams are still using one vocabulary for very different levels of autonomy, risk, and operational change.
- Good room question: where are people in the room actually using agents today, and what would have to be true before they trust agentic systems?

<figure>
  <img src="/assets/ai-workflow-models-marcel-velica-2026-05-22.jpg" alt="Diagram comparing traditional LLM systems, AI agents, and agentic AI systems across inputs, tools, memory, and execution." />
  <figcaption>Marcel Velica's workflow diagram is a quick vocabulary check for LLMs, agents, and agentic systems.</figcaption>
</figure>

### [Most enterprises are trying to scale AI on top of organizational chaos](https://www.reddit.com/r/artificial/comments/1tevqds/most_enterprises_are_trying_to_scale_ai_on_top_of/)

- This Reddit discussion argues that many enterprise AI programs fail because the organization does not have a clear representation of its own operations.
- The practical bottleneck is fragmented data, unclear system ownership, and workflows held together by tribal knowledge rather than clean process.
- Good room question: before adding AI, which parts of a business need better data, ownership, and workflow clarity first?

### Compute, costs, and company moves

### [OpenClaw creator burned through $1.3 million in OpenAI API tokens in a single month](https://www.tomshardware.com/tech-industry/artificial-intelligence/openclaw-creator-burns-through-1-3-million-in-openai-api-tokens-in-a-single-month)

- Tom's Hardware reports that Peter Steinberger's OpenClaw work used about $1.3 million in OpenAI API spend over 30 days across 603 billion tokens, 7.6 million requests, and roughly 100 Codex instances.
- Even with caveats around Fast Mode and OpenAI covering the bill, the numbers make agentic software development economics much more concrete.
- Good room question: what happens to software teams when agent fleets become technically useful before they become financially normal?

<figure>
  <img src="/assets/openclaw-openai-api-costs-tomshardware.jpg" alt="OpenAI logo displayed on a phone next to a keyboard and mouse under blue and red lighting." />
  <figcaption>Tom's Hardware's OpenAI image anchors the agent-cost discussion around real API spend.</figcaption>
</figure>

### [Every AI Subscription Is a Ticking Time Bomb for Enterprise](https://www.thestateofbrand.com/news/ai-subscription-time-bomb)

- State of Brand argues that $20-per-seat AI subscriptions are masking much higher underlying inference costs, especially for power users and agentic workflows.
- The piece is a useful CFO-facing prompt: enterprises may be building daily operations on subsidized pricing that later shifts to caps, credits, or consumption billing.
- Good room question: how should companies budget for AI when today's subscription price may not reflect tomorrow's operating cost?

### [Anthropic is paying SpaceX $15 billion per year](https://www.axios.com/2026/05/20/anthropic-spacex-compute)

- Axios reports that Anthropic is paying SpaceX $1.25 billion per month through May 2029 as part of a compute deal tied to Colossus capacity.
- The story is a sharp reminder that frontier AI competition is constrained by compute access, not only research talent or model quality.
- Good room question: if compute commitments get this large, do frontier labs start looking more like infrastructure companies than software companies?

### [Andrej Karpathy joins Anthropic's pre-training team](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/)

- TechCrunch reports that Andrej Karpathy has joined Anthropic to work on pre-training and start a team focused on using Claude to accelerate pre-training research.
- This is notable because it connects frontier-lab talent movement with the idea that AI can improve the research process itself, not just downstream products.
- Good room question: will the next frontier-model advantage come more from raw compute, elite researchers, or AI-assisted research loops?

## Come To

- Meet smart people in the East Bay.
- Share real use cases around practical AI.
- Explore partnerships, projects, and business opportunities.
- Connect with founders, developers, and operators across industries.

## Format

- Practical, thoughtful conversations for strong local connections.
- Signal over hype.
- Not a pitch night.
- No aggressive selling or constant self-promotion.
