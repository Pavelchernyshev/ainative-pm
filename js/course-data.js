/* ============================================================
   The AI-Native PM — course content
   Single source of truth. The landing page renders the curriculum
   from this file; course.html renders the full lessons.
   All quotes are attributed; sources link to the primary material.
   ============================================================ */

window.COURSE = {
  title: "The AI-Native PM",
  modules: [

    /* ============ MODULE 1 ============ */
    {
      id: "m1",
      num: "01",
      title: "Think AI-native",
      tagline: "The mindset shift that precedes every skill.",
      lessons: [
        {
          id: "m1l1",
          title: "The role just got rewritten",
          minutes: 7,
          content: "<p>In 2023, ‘AI PM’ was a niche title. By 2026 it is simply where the product job moved. Shopify said it in a company memo that went around the world: <strong>“using AI is now a baseline expectation.”</strong> Meta added a dedicated <em>Product Sense with AI</em> stage to its PM interviews. And OpenAI — a company shipping some of the most-used products on earth — runs its entire portfolio with roughly <strong>25 product managers</strong>.</p><p>Read those three facts together and the shape of the new role appears. Companies are not hiring more PMs to do the old job; they are hiring fewer, more leveraged PMs to do a new one. Marily Nika’s episode title on Lenny’s Podcast says the quiet part out loud: <em>“PMs who use AI will replace those who don’t.”</em></p><p>The good news is that this is a leverage story, not a doom story. The market data backs it up: Lenny’s <em>State of the Product Job Market</em> (March 2026) counted 7,300+ open PM roles — a three-year high, 75% above the 2023 low — with AI PM demand “hockey-sticking.” The demand is there. What’s scarce is people with the working habits this course teaches: shipping prototypes instead of documents, writing evals instead of vibe-checking, and delegating real work to agents.</p><blockquote>“Using AI is now a baseline expectation.” <cite>— Tobi Lütke, Shopify, via Peter Yang’s adoption playbook</cite></blockquote>",
          exercise: { title: "Audit one week of your calendar", body: "Open last week’s calendar and task list. Label every block one of three ways: <strong>automate</strong> (an agent could do it), <strong>accelerate</strong> (AI makes it 2–5x faster), or <strong>uniquely human</strong> (judgment, relationships, taste). Count the hours in each bucket. Keep the list — Module 5 turns the ‘automate’ column into working agents." },
          sources: [
            { label: "State of the product job market in early 2026 — Lenny’s Newsletter", url: "https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9" },
            { label: "PMs who use AI will replace those who don’t — Marily Nika", url: "https://www.lennysnewsletter.com/p/pms-who-use-ai-will-replace-those" },
            { label: "25 proven tactics to accelerate AI adoption — Peter Yang", url: "https://www.lennysnewsletter.com/p/25-proven-tactics-to-accelerate-ai" }
          ]
        },
        {
          id: "m1l2",
          title: "Model maximalism: build for where models are going",
          minutes: 8,
          content: "<p>Kevin Weil, OpenAI’s CPO, compresses the single most useful planning heuristic in AI product work into one sentence: today’s models are <strong>“the worst you’ll ever use for the rest of your life.”</strong> Every capability you test today is the floor, not the ceiling.</p><p>That heuristic has a name in the ecosystem — <strong>model maximalism</strong> — and it changes roadmap math. Cat Wu, who runs product for Claude Code at Anthropic, describes deliberately building products that <em>don’t fully work yet</em>, so that the next model release closes the gap and the product suddenly snaps into place — while competitors are still scoping. Investor Sarah Guo calls the same posture <em>“riding the capability curve of improving models.”</em></p><p>The opposite failure mode is just as common: teams test an idea once, watch the model stumble, and shelve the idea permanently. Six months later a competitor ships it. Tal Raviv and Aman Khan describe the skill you actually want as the ability to <em>“anticipate the technology instead of chasing it.”</em></p><p>Practically, model maximalism means three habits: re-test shelved ideas on every major model release; spec features against where models will be at launch time, not where they are at kickoff; and keep a ‘blocked by capability’ list that you actively re-run rather than a graveyard you never revisit.</p>",
          exercise: { title: "Resurrect one shelved idea", body: "Find a feature idea your team shelved 6+ months ago because ‘the model wasn’t good enough.’ Re-test it against a current frontier model for 30 minutes. Write three sentences: what changed, what still fails, and the date you’ll re-test next. You now have a capability watchlist — the model-maximalist habit." },
          sources: [
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" },
            { label: "How Anthropic’s product team moves — Cat Wu", url: "https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves" },
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" }
          ]
        },
        {
          id: "m1l3",
          title: "Beyond the bolt-on",
          minutes: 6,
          content: "<p>Sarah Guo names the most common first mistake teams make with AI: <blockquote>“It takes time to think AI-native. The first-pass product is often a bolt-on or simple chat experience. The high-value experience is a deeper rethink…”</blockquote></p><p>You’ve seen the bolt-on: a sparkle-icon button in the corner, a chat sidebar grafted onto a ten-year-old workflow, ‘summarize’ sprinkled on every surface. It demos well and changes nothing, because it asks the user to keep doing the old job with an assistant nearby.</p><p>The AI-native rethink starts from a different question: <strong>if the model could do the whole job, what would this product even be?</strong> Sometimes the answer removes screens rather than adding them. The user states intent; the system does the work; the human reviews the result. That reframe — from ‘tool the user operates’ to ‘work the system does’ — is what separates products that feel inevitable from products that feel decorated.</p><p>You won’t always ship the full rethink — constraints are real. But you should always <em>design</em> from it and walk backwards to what’s feasible, rather than decorating the status quo and calling it strategy.</p>",
          exercise: { title: "Sketch the no-UI version", body: "Pick your product’s core user journey. Write a one-page sketch of the version where the model does the entire job — the user only states intent and reviews output. List which screens disappear. Then mark the one step where human judgment genuinely must stay. That step is your product’s new center of gravity." },
          sources: [
            { label: "Counterintuitive advice for building AI products — Sarah Guo", url: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building" },
            { label: "How AI will impact product management — Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management" }
          ]
        },
        {
          id: "m1l4",
          title: "Your new operating loop",
          minutes: 7,
          content: "<p>The classic PM operating loop was <strong>document-first</strong>: write the PRD, align stakeholders, hand off to design, wait for engineering, learn the truth months later. Every step optimized for persuasion, because building was expensive.</p><p>Building is no longer expensive. The AI-native loop is <strong>prototype-first</strong>: state intent → generate a working prototype → eval it against real cases → ship a slice behind a preview label → learn → repeat. Persuasion still matters, but the most persuasive artifact is now a thing that works.</p><p>Lenny describes the PM’s place in this loop with a phrase worth memorizing: PMs become <strong>“editors of super-intelligent suggestions.”</strong> The model drafts — code, copy, analysis, options. You edit — with judgment about users, taste about quality, and accountability for outcomes. The scarce skill moves from production to selection.</p><p>The rest of this course walks the loop end to end: sense (Module 2), prototype (Module 3), eval (Module 4), delegate (Module 5), speak the technical language (Module 6), ship fast with taste (Module 7), and scale it through your org (Module 8). Each module leaves you holding an artifact. By the end you have a portfolio, not a certificate.</p>",
          exercise: { title: "Write your operating principles", body: "Draft five bullet points titled ‘How I work now.’ Force specificity: ‘I bring a prototype to every product review’ beats ‘I embrace AI.’ Post them where your team can see — Module 8 is about making them contagious. You’ll revise this list in the final lesson." },
          sources: [
            { label: "How AI will impact product management — Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management" },
            { label: "Lenny × Maven — AI-Native PM track", url: "https://maven.com/x/ai-native-pm-lenny" }
          ]
        }
      ]
    },

    /* ============ MODULE 2 ============ */
    {
      id: "m2",
      num: "02",
      title: "Build AI product sense",
      tagline: "Know what the model can do — and exactly where it fails.",
      lessons: [
        {
          id: "m2l1",
          title: "Capabilities and constraints",
          minutes: 8,
          content: "<p>Marily Nika defines <strong>AI product sense</strong> as “understanding what a model can do and where it fails, and working within those constraints.” It’s now formally tested: Meta added a <em>Product Sense with AI</em> interview stage, and every serious AI PM loop probes for it.</p><p>Start with a working map of what current models are reliably good at: <strong>generation</strong> (drafts, code, UI, copy), <strong>transformation</strong> (summarize, translate, rewrite, restructure), <strong>extraction</strong> (pulling structure out of mess), <strong>classification and triage</strong>, <strong>tool use</strong> (calling APIs and taking actions), and increasingly <strong>multi-step agentic work</strong>.</p><p>Then hold the constraint list with equal weight: models hallucinate confidently, degrade over long contexts, vary run to run, cost real money per call, add latency, and fail in ways that are statistical rather than deterministic. A feature that works 95% of the time is a triumph or a lawsuit depending entirely on the use case — drafting an email versus filing a tax return.</p><p>AI product sense is the habit of holding both lists at once and asking: for <em>this</em> user, in <em>this</em> workflow, at <em>this</em> failure rate — is the experience magical or maddening?</p>",
          exercise: { title: "Build a capability map", body: "List your product’s five most valuable jobs-to-be-done. For each, answer: can a frontier model do this today — yes, partly, or no? Attach evidence: a 10-minute hands-on test per job, not a hunch. The ‘partly’ column is where your next AI feature almost certainly lives." },
          sources: [
            { label: "Building AI product sense, part 2 — Marily Nika", url: "https://www.lennysnewsletter.com/p/building-ai-product-sense-part-2" },
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" }
          ]
        },
        {
          id: "m2l2",
          title: "Failure modes: where models break",
          minutes: 8,
          content: "<p>Nika’s warning is precise: models <strong>“confidently invent structure.”</strong> They don’t fail like software — no stack trace, no error state. They fail like a smooth-talking intern: fluently, plausibly, and with total conviction.</p><p>Learn the taxonomy so you can name what you’re seeing: <strong>hallucination</strong> (invented facts, citations, APIs), <strong>format drift</strong> (the JSON was fine for 50 runs, then wasn’t), <strong>instruction loss</strong> (rules from the top of a long context quietly stop applying — ‘context rot’), <strong>sycophancy</strong> (the model agrees with your framing instead of the truth), and <strong>tool misuse</strong> (right intention, wrong action). Each one has different product mitigations — citations and retrieval for hallucination, schema validation for drift, context discipline for instruction loss.</p><p>Cat Wu adds a genuinely underrated debugging move: <strong>ask the model to introspect on its own mistakes.</strong> Paste the failure back and ask “why might you have gotten this wrong, and what instruction would have prevented it?” The answer is often a better prompt fix than anything you’d write cold — and it builds your intuition about <em>why</em> the failure happened.</p><p>PMs who can name failure modes make better calls on everything downstream: which features are safe to ship, which need human review, and which evals to write — the subject of Module 4.</p>",
          exercise: { title: "Break something on purpose", body: "Take your product’s AI feature (or a competitor’s). Spend 20 minutes trying to make it fail five different ways. Classify each failure with the taxonomy above. Then run Wu’s move: ask the model to explain one failure and propose the instruction that would prevent it. Save all five — they become eval cases in Module 4." },
          sources: [
            { label: "Building AI product sense, part 2 — Marily Nika", url: "https://www.lennysnewsletter.com/p/building-ai-product-sense-part-2" },
            { label: "How Anthropic’s product team moves — Cat Wu", url: "https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves" }
          ]
        },
        {
          id: "m2l3",
          title: "Feasible × impactful",
          minutes: 7,
          content: "<p>Raviv and Khan give the cleanest definition of the skill this module builds: <blockquote>“AI product sense [is] the ability to correctly anticipate what will be truly impactful for users and also feasible with AI.” <cite>— Raviv & Khan, Lenny’s Newsletter, Feb 2026</cite></blockquote></p><p>Two axes, four quadrants. <strong>Impactful + feasible</strong>: build now. <strong>Impactful + not-yet-feasible</strong>: the model-maximalist watchlist from Module 1 — re-test on every release, and consider building ahead of the capability. <strong>Feasible + low-impact</strong>: the demo-ware trap. This quadrant is where most AI roadmaps quietly die, because feasibility is seductive — it feels like progress to ship what’s easy. <strong>Neither</strong>: ignore.</p><p>What makes this a <em>sense</em> rather than a framework is calibration, and calibration only comes from reps: hands-on testing (your capability map), watching real users hit real failures, and re-scoring as models move. The PMs Raviv and Khan describe “anticipate the technology instead of chasing it” — they’re rarely surprised by a model release, because their backlog was already priced for it.</p>",
          exercise: { title: "Score your backlog", body: "Take the top ten ideas in your backlog. Score each 1–5 on user impact and 1–5 on AI feasibility today (use your Module 2 tests as evidence, not vibes). Plot the 2×2. Kill one demo-ware idea publicly, and promote one watchlist idea to a dated re-test. Share the grid with your team — it’s a conversation-starter artifact." },
          sources: [
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" },
            { label: "Becoming an AI PM — Aman Khan", url: "https://www.lennysnewsletter.com/p/becoming-an-ai-pm-aman-khan" }
          ]
        },
        {
          id: "m2l4",
          title: "Measure value, not engagement",
          minutes: 6,
          content: "<p>Mike Krieger, Anthropic’s CPO, draws the line that should govern every AI metric you define: measure <strong>“actual value delivered,”</strong> not engagement. The distinction bites harder in AI products than anywhere else, because AI features generate engagement even when they fail — retries, rephrasings, and curiosity clicks all look like usage.</p><p>Consider the classic trap: your AI assistant’s ‘sessions per user’ doubles. Celebration? Maybe the assistant is so unreliable that every task takes three attempts. The engagement went up <em>because</em> value went down. Time-in-product, messages sent, feature clicks — in AI products these are all ambiguous at best.</p><p>Value-delivered metrics ask a harder question: did the user’s job actually get done? <strong>Task completion rate</strong> (the draft got sent, the ticket got resolved, the code got merged), <strong>acceptance rate</strong> (AI suggestions kept, not dismissed), <strong>time-to-outcome</strong> versus the pre-AI baseline, and <strong>escalation rate</strong> (how often the human had to take over). These are harder to instrument — completion often lives outside your product — which is exactly why teams default to vanity engagement and exactly why you shouldn’t.</p><p>Module 4 makes these measurable at the model level with evals. For now, lock in the principle: <strong>if the metric would improve when the product gets worse, it’s the wrong metric.</strong></p>",
          exercise: { title: "Define one value metric", body: "For one AI feature you know well, write down: the job the user is hiring it for, the observable event that proves the job got done, and how you’d instrument that event. Then audit the feature’s current dashboard: which of its metrics would improve if the feature got worse? Propose the swap." },
          sources: [
            { label: "Anthropic’s CPO on what comes next — Mike Krieger", url: "https://www.lennysnewsletter.com/p/anthropics-cpo-heres-what-comes-next" }
          ]
        }
      ]
    },

    /* ============ MODULE 3 ============ */
    {
      id: "m3",
      num: "03",
      title: "Prototype first",
      tagline: "Working software beats a perfect document.",
      lessons: [
        {
          id: "m3l1",
          title: "From PRD to prototype in an afternoon",
          minutes: 8,
          content: "<p>Colin Matthews’ guide to AI prototyping (Lenny’s Newsletter, Jan 2025) made a claim that would have sounded absurd two years earlier: a PM with no engineering background can have a <strong>working prototype in minutes</strong> using Claude or ChatGPT plus tools like Replit, Bolt, v0, Lovable, and Cursor.</p><p>The tools sort into three tiers, and picking the right one is most of the skill. <strong>UI generators</strong> (v0, Lovable): describe a screen, get a polished interactive interface — fastest path to something clickable for design conversations. <strong>App builders</strong> (Bolt, Replit): full working apps with logic and data — right when the value you’re testing is in the flow, not the pixels. <strong>Coding agents</strong> (Claude Code, Cursor): work inside a real codebase — heavier, but the only tier that can prototype against your actual product.</p><p>The point is not that the code is good. It usually isn’t. The point is that <strong>the learning loop collapses from weeks to minutes.</strong> Document-first PMs debate what users might want; prototype-first PMs watch users touch the thing on Tuesday and know. Speed of learning is the entire advantage — everything else about prototyping is detail.</p>",
          exercise: { title: "The 60-minute build", body: "Pick the next feature on your roadmap. Set a one-hour timer. Build one screen of it in v0 or Lovable — describe, generate, iterate, don’t fuss. When the timer ends, write down two things: what the prototype taught you that the spec didn’t, and what you’d test with a user first. That’s your artifact for the module." },
          sources: [
            { label: "A guide to AI prototyping for product managers — Colin Matthews", url: "https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product" }
          ]
        },
        {
          id: "m3l2",
          title: "Vibe coding, properly",
          minutes: 7,
          content: "<p>Kevin Weil is precise about where vibe coding belongs at OpenAI: <strong>“for prototyping and demos instead of static designs.”</strong> Not for production. That boundary — enthusiastically building, and knowing exactly what the build is for — is what separates PMs who gain credibility from prototyping from PMs who lose it.</p><p>Three rules keep you on the right side. <strong>One: throwaway by default.</strong> The prototype’s job is to answer a question. Once answered, the code has done its work; resist the sunk-cost pull to ‘just ship it.’ <strong>Two: the prompt is the artifact.</strong> Keep the prompts, context, and iterations that produced the prototype — that history is your real spec, and it hands off to engineering far better than the generated code does. <strong>Three: hand off the question, not the codebase.</strong> Engineering should inherit ‘users completed the flow 3x faster when we removed the config step,’ not four thousand lines of unreviewed generated code with your name on it.</p><p>Handled this way, vibe coding makes you <em>more</em> credible with engineers, not less: you show up with evidence, you respect the difference between a demo and a system, and you stop asking them to build things just to find out if the things are worth building.</p>",
          exercise: { title: "Write the prototype ≠ product one-pager", body: "Rebuild yesterday’s screen in a second tool (if you used v0, try Lovable or Bolt) and note what each tool assumed differently. Then write a half-page team agreement: what prototypes are for, what never ships, and what gets handed to engineering (the question + the evidence + the prompt history). Share it with your EM." },
          sources: [
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" },
            { label: "A guide to AI prototyping — Colin Matthews", url: "https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product" }
          ]
        },
        {
          id: "m3l3",
          title: "Prototypes as influence",
          minutes: 6,
          content: "<p>Marily Nika uses prototypes <strong>“as influence tools in stakeholder product reviews.”</strong> That sentence is worth sitting with, because it names the second — often larger — payoff of prototyping. The first audience for your prototype isn’t users. It’s the room.</p><p>A deck proposes; a prototype <em>demonstrates</em>. When you put something clickable in a VP’s hands, three things change at once. The debate moves from abstract (‘will users want this?’) to concrete (‘this third step feels slow’). The perceived cost of your idea collapses — it half-exists already. And you shift, in the room’s eyes, from someone who requests resources to someone who ships. That last shift compounds across every future ask you make.</p><p>There’s an honesty discipline here too: a slick prototype can over-persuade. Label what’s real and what’s faked, show a failure case on purpose, and let the room push on the weak parts — you want commitment to the validated idea, not to the demo’s choreography. Influence built on a rigged demo is debt.</p>",
          exercise: { title: "Demo, don’t deck", body: "You have a review, planning meeting, or stakeholder sync in the next two weeks. Commit now: bring a working prototype instead of (or alongside) the usual document. Afterwards, write down which objections dissolved on contact with the demo, and which new — better — objections appeared. That delta is the influence effect, measured." },
          sources: [
            { label: "PMs who use AI will replace those who don’t — Marily Nika", url: "https://www.lennysnewsletter.com/p/pms-who-use-ai-will-replace-those" }
          ]
        },
        {
          id: "m3l4",
          title: "Ship your first real build",
          minutes: 10,
          content: "<p>Capstone lesson. Everything so far becomes one artifact: a working prototype of a real feature, tested on real colleagues, with written learnings. Here is the run of show.</p><p><strong>1. Pick a real problem (10 min).</strong> Not a toy — take the top ‘impactful + feasible’ idea from your Module 2 backlog grid. Write the intent in one sentence: who, what job, what better looks like.</p><p><strong>2. Build end-to-end (60–90 min).</strong> Input → model → output, in whichever tier fits (UI generator for a flow, app builder for logic, coding agent if it must touch real data). End-to-end matters more than polish: a scrappy complete loop teaches more than a beautiful fragment.</p><p><strong>3. Test with two colleagues (30 min).</strong> No setup speech beyond one sentence. Watch where they hesitate, what they try that you didn’t build, and where the model output makes them frown. Take notes verbatim — frowns are data.</p><p><strong>4. Write the five-line memo.</strong> What I built · what I learned · what surprised me · what I’d build next · what I’d kill. Send it to your team. The memo is the deliverable; the prototype is just the evidence.</p><p>Keep the prototype and the failure notes. In Module 4 you’ll write evals against this exact build — including for the frowns.</p>",
          exercise: { title: "The five-line memo", body: "Complete the four steps above and ship the memo to your actual team. If you’re between teams, post it publicly. The bar is honesty, not perfection: ‘the model invented account names and both testers noticed’ is a great line in this memo — and a perfect eval case for the next module." },
          sources: [
            { label: "A guide to AI prototyping — Colin Matthews", url: "https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product" },
            { label: "Lenny × Maven — AI-Native PM track", url: "https://maven.com/x/ai-native-pm-lenny" }
          ]
        }
      ]
    },

    /* ============ MODULE 4 ============ */
    {
      id: "m4",
      num: "04",
      title: "Write evals",
      tagline: "The defining skill of the AI PM era.",
      lessons: [
        {
          id: "m4l1",
          title: "Evals decide whether your product lives",
          minutes: 8,
          content: "<p>If this course taught only one skill, it would be this module. Aman Khan’s guide — the ecosystem’s canonical text — opens with the line: <blockquote>“Prompts may make headlines, but evals quietly decide whether your product thrives or dies.” <cite>— Aman Khan, Lenny’s Newsletter, Apr 2025</cite></blockquote> Lenny adds that eval-writing “is quickly becoming a core skill for anyone building AI products (which will soon be everyone),” and Kevin Weil goes further: eval quality <strong>“effectively caps the potential of AI products.”</strong> Your product cannot be better than your ability to measure it.</p><p>So what is an eval? Three parts. A <strong>dataset</strong>: real inputs your product must handle, including the ugly ones. An <strong>expectation</strong>: what good output looks like for each input. A <strong>grader</strong>: something — human, code, or model — that scores actual output against the expectation. Run it every time anything changes: prompt, model version, retrieval setup, temperature.</p><p>The alternative is the <strong>vibe check</strong>: try three inputs, feel good, ship. Vibe checks fail for a reason PMs should find familiar — it’s sampling bias. You test the happy path with the context fresh in your head; your users bring the other 10,000 cases without it. And because model behavior shifts with every change, yesterday’s vibe tells you nothing about today’s build. Evals are how AI products get regression tests, acceptance criteria, and launch gates — the quality infrastructure the rest of software has had for decades.</p>",
          exercise: { title: "Write ten golden cases", body: "Take the AI behavior from your Module 3 prototype (or any AI feature you own). Write ten input → expected-output pairs: five typical, three edge cases, two from the failures you logged in Module 2. Keep them in a plain spreadsheet — columns: input, expected, actual, pass/fail. Congratulations: that’s an eval dataset." },
          sources: [
            { label: "Beyond vibe checks: a PM’s complete guide to evals — Aman Khan", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" }
          ]
        },
        {
          id: "m4l2",
          title: "The three graders",
          minutes: 8,
          content: "<p>Every eval needs a grader, and there are exactly three kinds. Choosing correctly per case is most of the craft.</p><p><strong>Code-based graders</strong> — assertions a script can check: the output is valid JSON, contains the required disclaimer, matches the expected answer, stays under the length limit, never mentions a competitor. Cheap, instant, perfectly consistent. Use them for everything verifiable, which is more than you’d think.</p><p><strong>Human graders</strong> — people scoring outputs, ideally blind and side-by-side (‘which draft is better, A or B?’). The gold standard for taste, tone, and ‘would I send this?’ — and far too expensive to run on every change. Use humans to define quality and to calibrate the third grader.</p><p><strong>LLM-as-judge</strong> — a model grading the model, against a rubric you write: ‘Score 1–5 for factual grounding. A 5 cites only facts present in the source. A 1 invents facts.’ This is the workhorse that makes evals scale, with one iron rule: <strong>calibrate the judge against human ratings first.</strong> Grade 20 cases yourself, run the judge on the same 20, and check agreement. An uncalibrated judge automates your blind spots at scale.</p><p>In practice you layer them: code catches the objective failures for free, the judge scores the fuzzy qualities on every run, and humans audit a sample weekly to keep the judge honest.</p>",
          exercise: { title: "Assign graders and write one rubric", body: "Go through your ten golden cases and mark each: code / judge / human. For the judge cases, write one rubric prompt with explicit descriptions of what a 5 and a 1 look like. Then calibrate: score five outputs yourself before running the judge, and compare. Note where you and the judge disagree — that disagreement is your rubric’s to-do list." },
          sources: [
            { label: "Beyond vibe checks — Aman Khan", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
            { label: "Becoming an AI PM — Aman Khan", url: "https://www.lennysnewsletter.com/p/becoming-an-ai-pm-aman-khan" }
          ]
        },
        {
          id: "m4l3",
          title: "Metrics that catch real failures",
          minutes: 7,
          content: "<p>With datasets and graders in place, you need to decide <em>what to measure</em>. The standard battery from Khan’s guide covers most products:</p><p><strong>Hallucination rate</strong> — of outputs that state facts, how many state facts that aren’t in the source or aren’t true? The single most important metric for anything that summarizes, answers, or cites. <strong>Retrieval relevance</strong> — for RAG products: did the system fetch the right context before generating? A huge share of ‘hallucinations’ are actually retrieval misses, and the fix is completely different. <strong>Toxicity and safety</strong> — does the product stay inside policy even under adversarial input? <strong>Task pass rate</strong> — the blunt end-to-end number: what fraction of golden cases fully succeed? That’s the one that belongs in your launch review.</p><p>Two habits turn these numbers into decisions. <strong>Baseline before, diff after:</strong> every change — prompt tweak, model upgrade, retrieval change — gets a before/after eval run. No diff, no verdict. <strong>Thresholds as launch gates:</strong> decide in advance what blocks a ship (‘hallucination above 2% on the golden set’) so the argument happens once, in the abstract, instead of at 6pm on launch day with a demo everyone loves.</p><p>And remember the metric can lie: a 100% pass rate usually means your dataset is too easy. Feed it fresh failures from production continuously — an eval set that never grows is a vibe check with a spreadsheet.</p>",
          exercise: { title: "Set your launch gates", body: "For your feature, pick the two or three metrics that matter, define pass/fail per golden case, and write the threshold that would block a launch. Put it in writing where your team plans launches. You’ve just given your AI product acceptance criteria — most teams still don’t have them." },
          sources: [
            { label: "Beyond vibe checks — Aman Khan", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" }
          ]
        },
        {
          id: "m4l4",
          title: "Build your eval suite",
          minutes: 10,
          content: "<p>Hands-on lesson. You have ten golden cases, assigned graders, one rubric, and thresholds. Now run the loop for real — the Maven track’s workshop title is the right banner for the hour: <strong>“No vibes, just evals.”</strong></p><p><strong>1. Run the baseline (20 min).</strong> Feed all ten inputs to your prototype exactly as it is. Record outputs. Grade each — code checks by inspection, judge cases with your rubric, and note your own human score alongside. Compute the pass rate. This number is your product’s truth today; most people who do this are surprised, in one direction or the other.</p><p><strong>2. Change one thing (10 min).</strong> Pick your worst failure and edit the prompt to fix it — add the missing constraint, the format example, the ‘if the source doesn’t say, say you don’t know’ rule. One change. Resist the urge to rewrite everything; you’re learning attribution, not just fixing.</p><p><strong>3. Re-run and diff (20 min).</strong> All ten cases again. Where did the pass rate move? Crucially: did fixing case 7 break case 2? Feeling a regression happen under your hands — a fix over here breaking something over there — is the moment evals stop being a compliance idea and become the only sane way to build. </p><p><strong>4. Write the eval report (10 min).</strong> Three lines: baseline X/10 → after change Y/10; what regressed and why; next change queued. This format is reusable forever — it’s how eval results show up in Slack at the best AI teams.</p>",
          exercise: { title: "Ship the eval report", body: "Complete the four steps and post the three-line report where your team will see it. Then add one production failure to your golden set — establishing the habit that the dataset grows every week. Ten cases is a start; fifty well-chosen ones are a moat." },
          sources: [
            { label: "Beyond vibe checks — Aman Khan", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
            { label: "Lenny × Maven — AI-Native PM track", url: "https://maven.com/x/ai-native-pm-lenny" }
          ]
        },
        {
          id: "m4l5",
          title: "Evals as a habit, not a project",
          minutes: 6,
          content: "<p>The failure mode after a lesson like the last one: the eval suite gets built, admired, and abandoned. Evals compound only as a <em>habit</em> — wired into how the team decides, not filed as an artifact.</p><p>Four wirings make it stick. <strong>Evals as acceptance criteria:</strong> AI features don’t get a ‘done’ state in your tracker without an eval attached — the eval is the spec, executable. <strong>Evals on every change:</strong> prompt edits, model upgrades, retrieval tweaks — all get a before/after run. Model migrations especially: a new model that’s better on average can still be worse on <em>your</em> cases, and only your suite will tell you. <strong>Eval results in reviews:</strong> bring the pass-rate diff to product reviews the way you learned to bring prototypes in Module 3 — ‘hallucination fell from 6% to 1.5% on the golden set’ ends debates that opinions can’t. <strong>The dataset grows weekly:</strong> every interesting production failure becomes a case. The suite is a living map of everything that has ever gone wrong — which is exactly what makes it stop going wrong.</p><p>Notice what this does to your standing as a PM: you become the person who can say, with evidence, whether the product got better this week. Weil’s line was that eval quality caps product potential. It caps PM careers the same way now.</p>",
          exercise: { title: "Wire it into the checklist", body: "Add an ‘Evals’ section to your team’s definition-of-done or launch checklist: eval set exists · baseline recorded · thresholds set · diff attached to this change. Get one engineer and your EM to agree to it. Small bureaucratic move, permanent cultural shift." },
          sources: [
            { label: "Beyond vibe checks — Aman Khan", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" }
          ]
        }
      ]
    },

    /* ============ MODULE 5 ============ */
    {
      id: "m5",
      num: "05",
      title: "Run agents",
      tagline: "Delegate the mundane. Keep the judgment.",
      lessons: [
        {
          id: "m5l1",
          title: "The junior-intern test",
          minutes: 7,
          content: "<p>Tal Raviv’s essay ‘Make product management fun again with AI agents’ starts from an emotional truth most PM content ignores: a huge fraction of the job is drudgery — synthesizing notes, chasing status, formatting updates, triaging tickets, summarizing research. His delegation rule: hand to agents anything <strong>“a junior intern”</strong> could do with clear instructions.</p><p>The test is sharper than it sounds. Could an intelligent intern with no company history do this task, given a written brief? If yes — the task runs on instructions, not judgment — it’s agent work. If it needs organizational memory, political sense, or taste, it stays with you. Meeting synthesis, first-draft PRDs from a template, competitive sweeps, support-ticket clustering, release notes: intern-shaped. Deciding what the roadmap says, reading the room in a tense review, choosing what <em>not</em> to build: yours.</p><p>Notice the payoff isn’t only hours. Raviv’s framing — fun again — is about attention: every intern-shaped task you delegate returns focus to the work that made you want this job. And the discipline of writing the brief (what, from what inputs, in what format, to what quality bar) is the same skill as writing a good spec. PMs are, it turns out, well-trained for managing agents — the brief is a PRD for a very fast, very literal report.</p>",
          exercise: { title: "Run the test on your list", body: "Take the ‘automate’ column from your Module 1 calendar audit (or list ten recurring tasks now). Apply the junior-intern test to each. Pick the three clearest passes and, for the top one, write a one-page brief: inputs, steps, output format, quality bar, and what to do when unsure. That brief is tomorrow’s lesson." },
          sources: [
            { label: "Make product management fun again with AI agents — Tal Raviv", url: "https://www.lennysnewsletter.com/p/make-product-management-fun-again" }
          ]
        },
        {
          id: "m5l2",
          title: "Your agent stack",
          minutes: 8,
          content: "<p>Claire Vo — CPO-turned-founder and host of How I AI — runs her company’s operations with <strong>nine OpenClaw agents</strong>, each with a name, a job, and a standing brief. The Maven ecosystem sells the same idea at entry level: <em>“Operate at 10x Capacity With 1 AI Assistant.”</em> Between those two poles is a ladder you climb one rung at a time.</p><p><strong>Rung one: a single assistant with standing context.</strong> One tool (Claude, ChatGPT, or a coding agent), loaded with a context document about your product, customers, tone, and current priorities — so every session starts warm instead of cold. Most PMs never even do this, and it alone changes daily output.</p><p><strong>Rung two: recurring jobs.</strong> The same assistant, running your Lesson 1 brief on a schedule: the Monday competitor digest, the Friday metrics narrative, the meeting-notes synthesis after every user call. The brief stays fixed; only the inputs change. Reliability comes from the brief, which you tune like a prompt — because it is one.</p><p><strong>Rung three: a roster.</strong> Multiple agents with distinct jobs and distinct contexts — research agent, triage agent, drafting agent — the Vo pattern. Only climb here when rung two is boringly reliable: a roster of flaky agents is a part-time job managing flaky agents; a roster of reliable ones is a staff.</p>",
          exercise: { title: "Stand up one recurring agent", body: "Take your Lesson 1 brief and make it real: set up the assistant with your standing context, run the job manually twice to tune the brief, then schedule it (calendar reminder counts — the recurrence matters, not the plumbing). Ship one output from it to your team this week, labeled as agent-produced." },
          sources: [
            { label: "How OpenClaw changed my life — Claire Vo", url: "https://www.lennysnewsletter.com/p/how-openclaw-changed-my-life-claire-vo" },
            { label: "Lenny × Maven — AI-Native PM track", url: "https://maven.com/x/ai-native-pm-lenny" },
            { label: "Product management is dead — Claire Vo (ChatPRD)", url: "https://www.chatprd.ai/blog/product-management-is-dead" }
          ]
        },
        {
          id: "m5l3",
          title: "Orchestration patterns",
          minutes: 7,
          content: "<p>One agent doing one job is delegation. The next level — what Alexander Embiricos (OpenAI Codex) calls <strong>parallel agent workflows</strong> — is orchestration: multiple agents, or multiple runs, arranged so the structure itself improves the output. Three patterns cover most PM work.</p><p><strong>The pipeline: draft → critique → revise.</strong> One agent produces, a second reviews against a checklist (‘flag every claim without a source; flag every section over 200 words’), the first revises. Splitting drafting from critique beats one mega-prompt because each role gets a clean, single-purpose context — the same reason human editors aren’t the authors.</p><p><strong>The fan-out: many options → one judge.</strong> Generate five positioning statements, five roadmap framings, five email drafts — in parallel, with varied instructions — then have a judge agent (or you, in five minutes) rank them against criteria. You’ve turned generation into <em>selection</em>, which is exactly the ‘editor of super-intelligent suggestions’ posture from Module 1.</p><p><strong>The watchdog: monitor → alert.</strong> An agent that checks a source on schedule — competitor changelogs, app-store reviews, your own product’s error dashboards — and messages you only when something crosses a threshold you defined. Attention flows to exceptions instead of patrols.</p><p>Every pattern keeps a human gate where it counts: agents produce and filter; you decide what leaves the building. That gate is the next lesson.</p>",
          exercise: { title: "Build a two-step pipeline", body: "Upgrade your recurring agent from Lesson 2 into a pipeline: after the draft step, add a critique pass with an explicit checklist, then a revision. Compare a pipelined output to last week’s single-pass one, side by side. Note what the critique caught — that’s the pattern earning its complexity." },
          sources: [
            { label: "A full software engineering teammate — Embiricos on Codex", url: "https://www.lennysnewsletter.com/p/a-full-software-engineering-teammate" },
            { label: "Make product management fun again — Tal Raviv", url: "https://www.lennysnewsletter.com/p/make-product-management-fun-again" }
          ]
        },
        {
          id: "m5l4",
          title: "Trust, verify, measure",
          minutes: 7,
          content: "<p>Delegation to agents fails the same way delegation to people fails — silently, at the seams — except agents fail <em>fluently</em>. A junior teammate who doesn’t know says so, or at least looks unsure. An agent that doesn’t know produces confident, well-formatted, wrong output. Module 2’s failure modes apply to every agent you run.</p><p>So you manage agents the way good managers manage: with verification proportional to stakes. <strong>Require receipts:</strong> agent briefs should demand links, quotes, and sources for every claim — ‘cite the ticket number’ turns hallucinated synthesis into checkable synthesis. <strong>Spot-check samples:</strong> read 2 of 10 outputs deeply each week rather than skimming all 10; deep reading catches the fluent errors skimming can’t. <strong>Gate the irreversible:</strong> agents draft, humans send — anything external (customer emails, public posts), anything binding (commitments, pricing), and anything political routes through you. This is the same launch-gate thinking as Module 4, applied to your own operation.</p><p>Then measure it like a product: hours reclaimed per week, error rate at spot-check, and — Krieger’s line again — <em>value delivered</em>, not activity. An agent that produces twelve documents nobody reads is engagement, not value. After a month you’ll know which agents earn their keep; kill the ones that don’t, exactly as you’d kill a feature.</p>",
          exercise: { title: "Run the one-week delegation log", body: "For one week, track your agents like a portfolio: task · time you’d have spent · time spent reviewing · errors caught at review · verdict (keep / fix brief / kill). At week’s end, total the reclaimed hours and write one sentence on where you reinvested them. That sentence is the entire point of this module." },
          sources: [
            { label: "Anthropic’s CPO on what comes next — Mike Krieger", url: "https://www.lennysnewsletter.com/p/anthropics-cpo-heres-what-comes-next" },
            { label: "Make product management fun again — Tal Raviv", url: "https://www.lennysnewsletter.com/p/make-product-management-fun-again" }
          ]
        }
      ]
    },

    /* ============ MODULE 6 ============ */
    {
      id: "m6",
      num: "06",
      title: "Get technical, fast",
      tagline: "Fluency, not engineering.",
      lessons: [
        {
          id: "m6l1",
          title: "Live inside a coding agent",
          minutes: 7,
          content: "<p>Raviv and Khan’s advice for building technical intuition is deliberately unglamorous: do your <strong>everyday PM work inside Cursor or Claude Code</strong>. Not to write production code — to marinate. Notes, PRDs, analysis, planning docs: move the work you already do into the tool engineers use, and the concepts this module covers stop being vocabulary and start being muscle memory.</p><p>Why does the venue matter? Because coding agents expose the machinery that chat interfaces hide. You watch the agent read files to build context, watch it call tools, watch it lose the thread when the session runs long, watch it do something brilliant and then something inexplicably dumb in the same minute. Each of those moments is a lesson in model behavior you cannot get from a polished chat UI — and each maps directly to a product decision you will someday make about context, tools, or failure handling in your own product.</p><p>There’s a second payoff: shared reality with your engineers. When you’ve personally watched an agent mangle a refactor, ‘let’s just have AI do it’ leaves your vocabulary — replaced by an honest sense of what’s a ten-minute agent task versus a real project. That calibration, Raviv and Khan argue, is what ‘technical enough’ actually means for a PM now.</p>",
          exercise: { title: "The one-week immersion", body: "For five working days, do all your document work — notes, PRDs, analyses — inside Cursor or Claude Code, with your files in a real folder (bonus: a git repo). Keep a friction log: every time the tool surprises you, delights you, or fails you, one line. Friday, reread the log — it’s your personal syllabus for the rest of this module." },
          sources: [
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" }
          ]
        },
        {
          id: "m6l2",
          title: "Context engineering",
          minutes: 8,
          content: "<p>If prompt engineering was 2023’s skill, <strong>context engineering</strong> — deciding what information surrounds the model when it works — is the durable version. Embiricos lists it among the core skills for working with serious coding agents; Raviv and Khan put its vocabulary on the AI PM’s required list. Four concepts carry most of the weight.</p><p><strong>The context window</strong> is the model’s working memory — everything it can see right now: instructions, documents, conversation history. Finite, and everything competes for it. <strong>Context rot</strong> is what happens as sessions run long: early instructions get diluted, the model drifts, quality decays. The practitioner’s fix is unglamorous — fresh sessions per task, not one immortal thread. <strong>Agent memory</strong> is persistence engineered across sessions: standing documents the agent always loads (who we are, what we’re building, how we write). If you built a standing-context assistant in Module 5, you’ve already done this. <strong>Curation beats volume:</strong> models perform better with the <em>right</em> five documents than with fifty — dumping everything in is context pollution and costs quality, latency, and money at once.</p><p>The PM translation: garbage context, garbage output — and most ‘the model is dumb’ complaints in your team are actually context failures. The PM who asks ‘what exactly was in the context when it failed?’ debugs half of AI product problems before engineering touches them.</p>",
          exercise: { title: "Write the CONTEXT.md", body: "Write one page that makes any AI instantly useful for your product: what it is, who it’s for, current priorities, key vocabulary, tone rules, things to never do. Test it: run the same three prompts with and without the page attached, and compare. Ship the winning version to your team as a shared standing file — then keep it updated like the infrastructure it is." },
          sources: [
            { label: "A full software engineering teammate — Embiricos on Codex", url: "https://www.lennysnewsletter.com/p/a-full-software-engineering-teammate" },
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" }
          ]
        },
        {
          id: "m6l3",
          title: "Subagents, tool calling, and MCP",
          minutes: 8,
          content: "<p>Three more pieces of load-bearing vocabulary, each of which quietly encodes a product decision.</p><p><strong>Tool calling</strong> is how a model stops being a text generator and starts being an actor: you hand it a menu of functions — search the docs, query the database, create the ticket — and it decides when to invoke which. The product questions hiding inside: which actions do we expose, which require confirmation, and what happens when the model picks wrong? (Module 2’s ‘tool misuse’ failure mode lives here.) When you scope an AI feature, you are largely scoping its tool menu.</p><p><strong>Subagents</strong> are scoped workers a lead agent spawns for subtasks — one researches, one drafts, one checks — each with its own clean context. This is the architecture behind the orchestration patterns you ran by hand in Module 5, and the reason they work: small contexts with single purposes beat one overloaded thread. When engineers propose subagent designs, you now recognize it as division-of-labor, with the same management questions (who verifies? who decides?).</p><p><strong>MCP — Model Context Protocol</strong> — is the standardization layer: an open protocol for connecting models to tools and data sources, so each integration is built once rather than once per AI product. The strategic PM question it raises: if models can reach any tool through a standard port, is your product the thing being orchestrated, or the thing doing the orchestrating? Your integration roadmap and your defensibility story both hang on that answer.</p>",
          exercise: { title: "Draft your product’s tool menu", body: "List the five actions in your product a model should be able to take on a user’s behalf. For each, write a plain-English tool definition: name, what it does, inputs, and whether it needs human confirmation. Mark which would be MCP-exposed to outside agents. Thirty minutes — and you’ll never read an agent-integration spec passively again." },
          sources: [
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" },
            { label: "A full software engineering teammate — Embiricos on Codex", url: "https://www.lennysnewsletter.com/p/a-full-software-engineering-teammate" }
          ]
        },
        {
          id: "m6l4",
          title: "Read the diff, work near the model",
          minutes: 7,
          content: "<p>How technical is technical enough? Here’s a workable bar: <strong>you can read a diff and ask a real question about it.</strong> Not write the code — read the change, have AI explain what it does, and come back with ‘why did we add a retry here but not on the other call?’ PMs who engage at that level get invited into technical decisions; PMs who can’t are handed conclusions. And with a coding agent beside you, the explaining is free — the only real rule is <em>never bluff</em>: ‘explain it to me like I don’t know the codebase’ earns more respect than vocabulary theater.</p><p>Then aim the fluency where the leverage is. Mike Krieger’s observation from inside Anthropic: embedding PMs directly with researchers — at the model layer, where capabilities are being shaped — yields roughly <strong>10x the impact</strong> of PMs who stay at the application surface. And his sharper warning: <em>“if you’re building something anyone could build with public APIs, you’re missing the opportunity.”</em> Your differentiation lives in proprietary context, data, evals, and workflow — the things generic wrappers can’t copy.</p><p>You may not have researchers to embed with. You do have the nearest equivalent: the engineers tuning prompts, retrieval, and evals on your product. Sit with them — physically or in their PRs. The PM who knows <em>why</em> the model behaves as it does ships different, better roadmaps than the one who knows only <em>that</em> it does.</p>",
          exercise: { title: "Explain the last merged PR", body: "Take the most recent merged pull request in your product (any repo you can access). Have AI walk you through it: what changed, why it might have been done, what could break. Write three questions worth asking the author, and ask them. Repeat weekly — this is the single cheapest technical-credibility habit that exists." },
          sources: [
            { label: "Anthropic’s CPO on what comes next — Mike Krieger", url: "https://www.lennysnewsletter.com/p/anthropics-cpo-heres-what-comes-next" },
            { label: "How to build AI product sense — Raviv & Khan", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" }
          ]
        }
      ]
    },

    /* ============ MODULE 7 ============ */
    {
      id: "m7",
      num: "07",
      title: "Ship at AI speed",
      tagline: "Speed is the strategy. Taste is the filter.",
      lessons: [
        {
          id: "m7l1",
          title: "Speed is the strategy",
          minutes: 7,
          content: "<p>Cat Wu’s account of how Anthropic’s product team works contains the module’s thesis in a phrase: <strong>why speed matters more than strategy now.</strong> Her team ships features in <em>days</em>. Kevin Weil’s OpenAI ships by <strong>“iterative deployment”</strong> — release early, learn in public, improve continuously — with ~25 PMs across everything.</p><p>Why would speed outrank strategy? Because strategy is a bet about an environment, and this environment resets every few months. A twelve-month plan built on today’s model capabilities is fiction by Q2 — you know this from Module 1. When the ground moves that fast, the winning posture is not a better long-range forecast; it’s a faster learning loop. Strategy becomes something you <em>discover by shipping</em>, not something you finish before you start.</p><p>This doesn’t abolish direction — Wu’s team is intensely deliberate about <em>what</em> to pursue (that’s Lesson 3 and 4). It abolishes the queue: the quarter-long initiative that must be fully specified before anyone builds. The unit of planning shrinks to the largest thing you can ship and learn from in about a week. Compounding weekly learning beats confident quarterly plans, and it isn’t close.</p>",
          exercise: { title: "Design the 5-day version", body: "Take one initiative on your roadmap currently scoped in months. Design the version that ships a real slice to real users in five days: what’s the thinnest end-to-end path, what gets faked, what gets cut? Write it as a one-pager. Even if you don’t run it, you’ve located the actual risk — it’s wherever the 5-day version felt impossible." },
          sources: [
            { label: "How Anthropic’s product team moves — Cat Wu", url: "https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves" },
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" }
          ]
        },
        {
          id: "m7l2",
          title: "The Research Preview mindset",
          minutes: 7,
          content: "<p>Shipping in days sounds reckless until you see the machinery that makes it safe. At Anthropic, Cat Wu describes two pieces: an <strong>“evergreen launch room”</strong> — launching is a standing operation, not a special event that requires spinning up a war room each time — and <strong>“Research Preview”</strong> labels, which change the contract with users: <em>this is early, it may fail, tell us everything.</em></p><p>The label is doing sophisticated work. It resets expectations (users forgive a preview what they’d punish in a launch), it recruits (preview users self-select into exactly the tolerant early adopters you want feedback from), and it protects the brand while the product earns its way to the full badge. It’s model maximalism made operational — the sanctioned way to ship the product that ‘doesn’t fully work yet’ while the model curve catches up.</p><p>A preview is not an excuse, though. The honest version has four parts you write down <em>before</em> shipping: the <strong>label</strong> (what promise are we making?), the <strong>guardrails</strong> (who can access it, what’s rate-limited, what’s walled off), the <strong>feedback channel</strong> (where do reports actually go, and who reads them daily?), and the <strong>kill criteria</strong> (what evidence graduates it — or kills it — and by when). Without the fourth, previews become where products go to linger; the point of shipping early is deciding early.</p>",
          exercise: { title: "Write a Research Preview one-pager", body: "For your 5-day slice from Lesson 1 (or any early feature), write the four parts: label, guardrails, feedback channel, kill criteria — one page total. Include the eval thresholds from Module 4 in the graduation bar. You now have a reusable template for every early ship your team does." },
          sources: [
            { label: "How Anthropic’s product team moves — Cat Wu", url: "https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves" },
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" }
          ]
        },
        {
          id: "m7l3",
          title: "Precise direction, autonomous teams",
          minutes: 7,
          content: "<p>Here’s the paradox of AI-speed teams: the faster the execution, the more the PM’s value concentrates in <em>direction</em>. Cat Wu is specific about what direction means at Anthropic: define the <strong>exact segment, the exact problem, and the exact use case</strong> — so precisely that engineers can act autonomously without checking in. Kevin Weil’s version is a hiring bar: OpenAI selects PMs for <strong>“high agency and comfort with ambiguity”</strong> — people who create clarity rather than request it.</p><p>Vague direction is invisible at slow speeds; at AI speed it’s catastrophic, because the team builds the wrong thing <em>fast</em>. Compare: ‘improve onboarding with AI’ — an invitation to build anything — versus ‘solo data analysts abandon setup at the connect-your-warehouse step because they don’t know their credentials; make that step self-serve for them.’ The second sentence is management by intent: constraint enough that ten autonomous decisions a day get made correctly without you, freedom enough that you haven’t designed the solution.</p><p>This is also, not coincidentally, the same skill as briefing agents well (Module 5) and writing precise context (Module 6). Direction-writing is becoming the PM’s highest-leverage output across every scale — human teams, agent rosters, and single prompts. The formats converge: <em>who exactly, what problem exactly, what better looks like, what’s out of bounds.</em></p>",
          exercise: { title: "Rewrite one brief to the Wu standard", body: "Take a current project brief and rewrite its direction as one paragraph: exact segment, exact problem (with evidence), exact use case, and what’s explicitly out of scope. Test it on an engineer: ‘if I disappeared for two weeks, what would you build from this?’ If their answer surprises you, the paragraph isn’t done." },
          sources: [
            { label: "How Anthropic’s product team moves — Cat Wu", url: "https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves" },
            { label: "Kevin Weil (CPO, OpenAI) on Lenny’s Podcast", url: "https://www.lennysnewsletter.com/p/kevin-weil-open-ai" }
          ]
        },
        {
          id: "m7l4",
          title: "Taste: the scarcest skill",
          minutes: 8,
          content: "<p>Cat Wu, running product for one of the most successful AI dev tools on earth, says that as code generation gets cheap, <strong>product taste is “the scarcest PM skill.”</strong> Mike Krieger says the same from the CPO seat. The economics are simple: when building was expensive, the constraint was execution. Now that a prototype costs an afternoon and a feature costs days, the constraint is <em>knowing which of the hundred buildable things deserves to exist.</em> Lenny’s phrase from Module 1 completes the thought — PMs as “editors of super-intelligent suggestions.” Editors are exactly what cheap production makes scarce.</p><p>Taste sounds innate. It isn’t — it’s trained, and the training has a shape. <strong>Study greatness deliberately:</strong> pull apart products you admire and articulate <em>why</em> they’re right — ‘it’s good’ is not an answer; ‘it collapses three decisions into one default the user never sees’ is. <strong>Keep contact with users:</strong> taste decays into self-indulgence without a live feed of real people struggling with real workflows; your Module 3 usability tests are taste training in disguise. <strong>Write ‘why not’ memos:</strong> for things you chose not to build — articulating the no is where judgment gets sharp and visible. <strong>Hold a quality line in reviews:</strong> the difference between shipped-fast and shipped-sloppy is a hundred small vetoes; every veto you can justify from first principles is taste, exercised in public.</p><p>Speed without taste floods the product with plausible mediocrity — the failure mode of every team that learned Lesson 1 but skipped this one. Taste without speed loses to the market. The AI-native PM is the combination: fast hands, slow judgment.</p>",
          exercise: { title: "Write the kill list", body: "Write down three things your team could easily build with AI right now — plausible, feasible, demo-able — that you will NOT build, each with two sentences of first-principles reasoning. Share it in your next planning meeting. A public, well-argued no is the fastest way anyone learns you have taste." },
          sources: [
            { label: "How Anthropic’s product team moves — Cat Wu", url: "https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves" },
            { label: "Anthropic’s CPO on what comes next — Mike Krieger", url: "https://www.lennysnewsletter.com/p/anthropics-cpo-heres-what-comes-next" },
            { label: "How AI will impact product management — Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management" }
          ]
        }
      ]
    },

    /* ============ MODULE 8 ============ */
    {
      id: "m8",
      num: "08",
      title: "Multiply your org",
      tagline: "Your adoption is table stakes. Theirs is your multiplier.",
      lessons: [
        {
          id: "m8l1",
          title: "The adoption multiplier",
          minutes: 6,
          content: "<p>Everything before this module made <em>you</em> faster. The final skill is different in kind: making everyone around you faster. Peter Yang’s adoption playbook names the real obstacle: <strong>“the biggest barrier to AI adoption isn’t technology; it’s organizational change.”</strong> The tools are bought; the licenses sit idle; the gap is human.</p><p>That gap is a career-defining opening for PMs specifically, because org change through influence-without-authority is already the job description. Yang’s core tactic is a compounding one: <strong>“turn enthusiasts into teachers.”</strong> One-to-one evangelism doesn’t scale; one enthusiast converted into a teacher creates more teachers, and adoption goes exponential instead of additive.</p><p>Map your org honestly before you act: <strong>enthusiasts</strong> (already deep — need a stage, not persuasion), the <strong>curious majority</strong> (would use AI if someone showed them how, on their real work), and <strong>skeptics</strong> (some burned by a bad first experience, some making a fair critique you should actually hear — both are converted by usefulness, never by hype). Different audiences, different moves — and the next two lessons are the moves. One more reason to care, from the Shopify memo onward: AI usage is entering performance expectations. The PM who raises a team’s baseline isn’t just being generous — they’re visibly doing next year’s job early.</p>",
          exercise: { title: "Map your org", body: "List ten colleagues you work with weekly. Mark each: enthusiast, curious, or skeptic. Pick one of each and write a single sentence for how you’ll engage them this month — the enthusiast gets a stage, the curious gets a demo on their real task, the skeptic gets listened to first. Keep the map; you’ll execute against it in the capstone." },
          sources: [
            { label: "25 proven tactics to accelerate AI adoption — Peter Yang", url: "https://www.lennysnewsletter.com/p/25-proven-tactics-to-accelerate-ai" }
          ]
        },
        {
          id: "m8l2",
          title: "“Want me to show you how I solve this with AI?”",
          minutes: 7,
          content: "<p>Hilary Gridley — product leader at Whoop, author of one of Lenny’s six most popular posts ever (<em>How to become a supermanager with AI</em>) — has a go-to move so simple it’s easy to underestimate: when someone brings her a problem, she asks, <blockquote>“Want me to show you how I solve this with AI?” <cite>— Hilary Gridley, via Peter Yang, Aug 2025</cite></blockquote> Then she shares her screen and solves <em>their actual problem</em>, live.</p><p>Every load-bearing choice in that sentence is worth copying. It’s <strong>an offer, not a mandate</strong> — curiosity opens where obligation closes. It’s <strong>their problem, not a canned demo</strong> — relevance is what converts the curious majority, who have all already seen impressive-but-irrelevant AI demos. And it’s <strong>live, warts included</strong> — the prompt that needs a retry, the output that needs editing. The warts are a feature: a flawless demo says ‘this person has a gift’; a bumpy one says ‘I could do that,’ which is the belief you’re actually trying to install.</p><p>The through-line of Gridley’s whole approach — and her ‘Couch-to-5K for AI’ framing — is that people don’t adopt AI from arguments or all-hands decks. They adopt it the moment they watch a real workflow, near their own, get visibly better. Fifteen minutes of live screen-share beats an hour of advocacy, every time. Do it weekly and you become the org’s de facto AI mentor without anyone appointing you.</p>",
          exercise: { title: "Run one live demo this week", body: "The next time a colleague mentions a tedious task, use the Gridley line verbatim: ‘Want me to show you how I solve this with AI?’ Screen-share for 15 minutes on their actual work, warts included. Afterwards, send them the prompt or setup you used so they can run it alone tomorrow. One demo, one convert — repeat weekly." },
          sources: [
            { label: "25 proven tactics to accelerate AI adoption — Peter Yang", url: "https://www.lennysnewsletter.com/p/25-proven-tactics-to-accelerate-ai" },
            { label: "Your Couch-to-5K for AI — Hilary Gridley", url: "https://www.lennysnewsletter.com/p/your-couch-to-5k-for-ai" }
          ]
        },
        {
          id: "m8l3",
          title: "Programs that stick",
          minutes: 7,
          content: "<p>Demos convert individuals; <strong>programs</strong> convert organizations. The ecosystem’s named examples form a menu you can pull from directly.</p><p><strong>Gridley’s ‘30 Days of GPT’</strong> (later rebuilt as a Claude Code program): one small AI task per day for a month — low floor, daily cadence, visible streaks; her ‘Couch-to-5K for AI’ framing captures the design philosophy, meeting non-runners where they are and ramping gently. <strong>Duolingo</strong> gives employees <strong>$300 AI budgets</strong> — removing the ‘can I expense this?’ friction and signaling institutional permission. <strong>Whoop</strong> runs streak challenges — borrowing its own product mechanics for internal adoption. <strong>Intercom</strong> set a company goal of <strong>‘2x productivity with AI’</strong> — a number leadership tracks. <strong>Shopify</strong> made it structural: AI usage is a baseline expectation reflected in performance reviews.</p><p>Notice the shared design principles: <strong>low floor</strong> (day one is ten minutes, not a course), <strong>real work</strong> (tasks come from people’s actual jobs — a lesson you’ve now met in every module), <strong>social proof</strong> (wins are shared publicly, streaks are visible), and <strong>permission from the top</strong> (budget, goals, or an explicit memo). A program with all four keeps running when the launch energy fades; a program missing ‘real work’ becomes a compliance exercise everyone quietly abandons by week two.</p>",
          exercise: { title: "Draft your 30-day challenge", body: "Design a 30-day AI challenge for your team on one page: a theme per week (weeks: automate a task · prototype an idea · eval something · teach someone), one 15-minute demo slot per week, a visible tracker, and a closing show-and-tell. Borrow shamelessly from the menu above. You’ll pressure-test it in the capstone." },
          sources: [
            { label: "Your Couch-to-5K for AI — Hilary Gridley", url: "https://www.lennysnewsletter.com/p/your-couch-to-5k-for-ai" },
            { label: "25 proven tactics to accelerate AI adoption — Peter Yang", url: "https://www.lennysnewsletter.com/p/25-proven-tactics-to-accelerate-ai" }
          ]
        },
        {
          id: "m8l4",
          title: "Capstone: measure it, then make it your story",
          minutes: 9,
          content: "<p>Peter Yang closes the adoption playbook with the discipline that separates a vibe program from a business program: <strong>“track inputs — who’s using AI — and outputs — what business value it’s creating.”</strong> Inputs: active usage of the tools, demos run, challenge participation. Outputs: cycle time on real workflows, support tickets resolved per person, prototypes tested per quarter, reclaimed hours from your Module 5 delegation logs. Report both, monthly, in the same doc — inputs prove adoption happened; outputs prove it mattered. (Krieger’s rule one final time: value delivered, not activity.)</p><p><strong>Your capstone</strong> assembles the whole course into one rollout plan for your team or org: the org map (8.1), a weekly live-demo cadence (8.2), the 30-day challenge (8.3), and the input/output scorecard (this lesson). One page per section, dated, with your name on it.</p><p>Then take inventory of what you’re holding after eight modules: a capability map and failure log · a backlog scored on the impact-feasibility grid · a shipped prototype with a five-line memo · a living eval suite with launch gates · a running agent with a delegation log · a CONTEXT.md and a tool menu · a 5-day slice and a Research Preview template · a kill list · and now a rollout plan. That is a <strong>portfolio</strong> — the evidence AI PM interviews and promotion cases actually ask for. Nobody can take a course away from you, but nobody hires you for one either. They hire you for this stack of artifacts and the habits that produced them.</p><p>Last step: reopen the five operating principles you wrote in Module 1, Lesson 4. Rewrite them as the PM you are now. Ship something this week.</p>",
          exercise: { title: "Ship the rollout plan", body: "Assemble the four-part rollout plan and send it to your manager or team lead with a one-line cover note: ‘I’d like to run this for the team — here’s how we’ll measure it.’ Then update your Module 1 operating principles and post them next to the originals. Course complete — the loop, however, doesn’t close: it compounds." },
          sources: [
            { label: "25 proven tactics to accelerate AI adoption — Peter Yang", url: "https://www.lennysnewsletter.com/p/25-proven-tactics-to-accelerate-ai" },
            { label: "How to become a supermanager with AI — Hilary Gridley", url: "https://www.lennysnewsletter.com/p/your-couch-to-5k-for-ai" },
            { label: "State of the product job market in early 2026 — Lenny’s Newsletter", url: "https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9" }
          ]
        }
      ]
    }
  ]
};
