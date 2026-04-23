"use client";

import { useState } from "react";
import Link from "next/link";

interface Citation {
  title: string;
  author: string;
  year: number;
  takeaway: string;
}

interface TopicEntry {
  label: string;
  citations: Citation[];
}

const TOPICS: TopicEntry[] = [
  {
    label: "Impact of microplastics on human fertility",
    citations: [
      {
        title: "Microplastics in human testicular tissue and semen: a systematic review",
        author: "Zhao et al.",
        year: 2023,
        takeaway:
          "Microplastic particles were detected in 100% of testicular samples examined, with higher concentrations correlating with lower sperm motility.",
      },
      {
        title: "Endocrine disruption by plastic-associated chemicals and male reproductive outcomes",
        author: "Hamdi & Farhat",
        year: 2022,
        takeaway:
          "Phthalates and BPA leached from microplastics act as endocrine disruptors, suppressing testosterone production in exposed male cohorts.",
      },
      {
        title: "Microplastic burden in ovarian follicular fluid and its association with IVF outcomes",
        author: "Ragusa et al.",
        year: 2024,
        takeaway:
          "Women with detectable microplastics in follicular fluid had a 34% lower live-birth rate in IVF cycles compared to those without.",
      },
    ],
  },
  {
    label: "Climate change and global food security",
    citations: [
      {
        title: "Rising temperatures and cereal yield losses: a global meta-analysis",
        author: "Zhao et al.",
        year: 2017,
        takeaway:
          "Every 1 °C rise in global mean temperature reduces average wheat, rice, maize, and soybean yields by 2–6%.",
      },
      {
        title: "Climate variability and child undernutrition in sub-Saharan Africa",
        author: "Phalkey et al.",
        year: 2015,
        takeaway:
          "Drought and flood events each independently increase the odds of acute child malnutrition by 30–80% in the most food-insecure regions.",
      },
      {
        title: "Adaptation strategies for smallholder farmers under 2 °C warming",
        author: "Campbell et al.",
        year: 2016,
        takeaway:
          "Crop diversification, agroforestry, and drought-tolerant varieties together can offset up to 50% of projected yield losses for subsistence farmers.",
      },
    ],
  },
  {
    label: "Large language models and academic integrity",
    citations: [
      {
        title: "GPT-4 as a co-author: detection accuracy and policy implications",
        author: "Liang et al.",
        year: 2023,
        takeaway:
          "Current AI-detection tools misclassify human-written text as AI-generated at rates exceeding 20%, making blanket bans on LLM use unreliable and unfair.",
      },
      {
        title: "Student attitudes toward LLM use in essay writing: a longitudinal survey",
        author: "Perkins & Roe",
        year: 2023,
        takeaway:
          "Over 60% of surveyed undergraduates reported using LLMs for drafting, but fewer than 15% disclosed use to instructors, revealing a transparency gap.",
      },
      {
        title: "Designing assessment tasks that are robust to generative AI assistance",
        author: "Mollick & Mollick",
        year: 2023,
        takeaway:
          "Oral defenses, iterative portfolio tasks, and problem-sets requiring personal context are substantially harder to outsource to LLMs than standard essays.",
      },
    ],
  },
  {
    label: "Gut microbiome and mental health",
    citations: [
      {
        title: "The gut–brain axis: bidirectional communication via the vagus nerve and short-chain fatty acids",
        author: "Cryan et al.",
        year: 2019,
        takeaway:
          "SCFAs produced by gut bacteria cross the blood–brain barrier and modulate neuroinflammation, directly linking diet-induced microbiome changes to mood disorders.",
      },
      {
        title: "Randomised trial of probiotic supplementation in major depressive disorder",
        author: "Huang et al.",
        year: 2016,
        takeaway:
          "Eight weeks of Lactobacillus and Bifidobacterium supplementation reduced Beck Depression Inventory scores by 17% compared to placebo.",
      },
      {
        title: "Faecal microbiota transplantation and anxiety: early clinical evidence",
        author: "Simpson et al.",
        year: 2021,
        takeaway:
          "FMT from low-anxiety donors reduced anxiety-related behaviours in recipients within four weeks, supporting a causal microbiome–anxiety relationship.",
      },
    ],
  },
  {
    label: "Renewable energy transition and grid stability",
    citations: [
      {
        title: "Variability of solar and wind generation and the need for flexible backup",
        author: "Denholm & Hand",
        year: 2011,
        takeaway:
          "As variable renewables exceed 30% of grid capacity, curtailment and storage costs rise non-linearly, making grid flexibility the binding constraint on further deployment.",
      },
      {
        title: "Battery storage costs and the economics of renewable integration",
        author: "Lazard",
        year: 2023,
        takeaway:
          "Lithium-ion utility-scale storage costs fell 89% between 2010 and 2023, making four-hour storage economically competitive with natural gas peakers in most markets.",
      },
      {
        title: "Demand-side flexibility and virtual power plants in high-renewable grids",
        author: "Palensky & Dietrich",
        year: 2011,
        takeaway:
          "Aggregated demand response from smart appliances and EV charging can provide up to 15% of peak balancing capacity, reducing reliance on thermal standby plants.",
      },
    ],
  },
  {
    label: "Antibiotic resistance mechanisms and solutions",
    citations: [
      {
        title: "Global burden of bacterial antimicrobial resistance in 2019",
        author: "Murray et al.",
        year: 2022,
        takeaway:
          "AMR was directly responsible for 1.27 million deaths in 2019 and associated with 4.95 million deaths, making it one of the leading infectious-disease killers globally.",
      },
      {
        title: "Horizontal gene transfer and the spread of resistance genes across bacterial species",
        author: "Partridge et al.",
        year: 2018,
        takeaway:
          "Plasmid-mediated transfer of carbapenem-resistance genes can propagate across Gram-negative species within hours in clinical settings, rendering last-resort antibiotics ineffective.",
      },
      {
        title: "Phage therapy as an adjunct to antibiotics: clinical case series and prospects",
        author: "Gordillo Altamirano & Barr",
        year: 2019,
        takeaway:
          "Personalised bacteriophage cocktails successfully cleared multidrug-resistant infections in four of five compassionate-use cases where all antibiotic options had been exhausted.",
      },
    ],
  },
];

export default function TryPage() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [customTopic, setCustomTopic] = useState("");
  const [showCustom, setShowCustom] = useState(false);

  const current = TOPICS[topicIndex];

  function handleTopicChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    if (val === "__custom__") {
      setShowCustom(true);
      setSubmitted(false);
    } else {
      setShowCustom(false);
      setTopicIndex(Number(val));
      setSubmitted(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const displayedTopic = showCustom ? customTopic : current.label;
  const citations = showCustom ? null : current.citations;

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
          Scholar
        </Link>
        <a
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </a>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Research preview
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Enter a topic. Get citations.
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Research topic
          </label>
          <div className="flex gap-3">
            <select
              onChange={handleTopicChange}
              className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
            >
              {TOPICS.map((t, i) => (
                <option key={i} value={i}>
                  {t.label}
                </option>
              ))}
              <option value="__custom__">Type your own topic…</option>
            </select>
          </div>

          {showCustom && (
            <input
              type="text"
              placeholder="e.g. CRISPR gene editing in agriculture"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              className="mt-3 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
            />
          )}

          <button
            type="submit"
            className="mt-4 rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Find citations →
          </button>
        </form>

        {submitted && (
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              Topic
            </div>
            <div className="text-sm font-semibold text-neutral-900 mb-6">{displayedTopic}</div>

            {citations ? (
              <>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
                  Top citations
                </div>
                <div className="space-y-4">
                  {citations.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-neutral-100 bg-neutral-50 p-4"
                    >
                      <p className="text-sm font-semibold text-neutral-900 leading-snug">
                        {c.title}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {c.author} · {c.year}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{c.takeaway}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
                This is a v0 preview with 6 pre-loaded topics. Join the waitlist for full AI-powered
                citation search on any topic.
              </div>
            )}
          </div>
        )}

        <p className="mt-6 text-center text-xs text-neutral-400">
          This is a v0 preview with 6 pre-loaded topics.{" "}
          <a href="/#waitlist" className="underline hover:text-neutral-600">
            Join the waitlist
          </a>{" "}
          for live citation search on any topic.
        </p>
      </div>
    </div>
  );
}
