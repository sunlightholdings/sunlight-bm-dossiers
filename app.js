/* Sunlight — Wage & Hour Lead Dossiers (prepared for Berger Montague)
   Static prototype: lead data, card rendering, drawer, accessible drilldown.
   Demand-generation framing: showcase, not negotiation. */

const LEADS = [
  {
    id: "northwestern",
    rank: 1,
    name: "Northwestern Medicine",
    shelf: "Regular-rate",
    why: "Clean Illinois hospital-system parallel to the Anstead / Ascension pattern. Epic clinical + Kronos operations signal. IL treble plus 5% monthly penalty overlay.",
    exposure: "$50M – $90M+",
    bmFit: "Anstead parallel",
    posture: "Lead candidate",
    postureKind: "priority",
    classSize: "~25,000 (est.)",
    state: "Illinois",
    payroll: "Epic clinical + Kronos operations",
    targetScore: "69 (CLEAR) — internal estimate",
    modeled: "~$91.4M gross — internal estimate",
    estimateNote: "Class size and modeled gross are Sunlight prototype estimates, not adjudicated figures. Epic is publicly verified through NM EpicCare materials; Kronos is a thinner operations-labor signal confirmed through NMH job-posting language.",
    damagesHtml: `
      <p class="d-note"><strong>Screening only</strong> Not an actuarial opinion, expert testimony, or damages disclosure. Gross = class size × OT weeks/yr × avg uncompensated premium per OT week × lookback. Every input is adjustable.</p>
      <p><strong>Anchor:</strong> 25,000 in-scope workers · 30 OT weeks/yr · $40.60 avg uncompensated premium per OT week · 3-year IMWL lookback. <strong>25,000 × 30 × $40.60 × 3 = $91.4M.</strong></p>
      <p><strong>3x3 sensitivity:</strong> premium per OT week (rows) × OT weeks per worker per year (columns). Class held at 25,000, lookback 3 years.</p>
      <table class="d-table">
        <thead><tr><th>$/OT-week ↓ weeks →</th><th>22 weeks</th><th>30 weeks</th><th>38 weeks</th></tr></thead>
        <tbody>
          <tr><th>$30</th><td>$49.5M</td><td>$67.5M</td><td>$85.5M</td></tr>
          <tr><th>$40</th><td>$66.0M</td><td><strong>$91.4M anchor</strong></td><td>$114.0M</td></tr>
          <tr><th>$55</th><td>$90.8M</td><td>$123.8M</td><td>$156.8M</td></tr>
        </tbody>
      </table>
      <p><strong>Class-size sensitivity</strong> at $40 × 30 weeks: 18,000 = $65.7M · 25,000 = <strong>$91.4M</strong> · 32,000 = $116.9M.</p>
      <table class="d-table">
        <thead><tr><th>Haircut step</th><th>Factor</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>Gross theoretical</td><td>—</td><td>$91.4M</td></tr>
          <tr><td>Participation rate</td><td>65%</td><td>$59.4M</td></tr>
          <tr><td>Realization factor</td><td>55%</td><td>$32.7M</td></tr>
          <tr><td>Settlement discount</td><td>35%</td><td><strong>$11.4M net</strong></td></tr>
        </tbody>
      </table>
      <p>Implied net per class member: <strong>~$457</strong>. State-law multipliers, including Illinois treble and 5% monthly penalty leverage, are not embedded in gross; they sit on top as case-strategy variables.</p>
    `,
    thesis: [
      "Northwestern Medicine is the cleanest healthcare regular-rate target on the Sunlight shelf. It carries the fact pattern Berger Montague has already worked: hospital-system non-exempt workers, critical-staffing / shift-differential / weekend-premium remuneration, and regular-rate undercalculation risk.",
      "Sunlight's internal wage-hour prototype scores Northwestern as a CLEAR Illinois Sig#1 hospital candidate, with approximately 40,000 U.S. employees, an estimated 25,000-person class headcount, an Epic clinical + Kronos operations signal, and modeled exposure of approximately <strong>$91.4M</strong> before case-specific haircuts. These figures are internal estimates."
    ],
    bmCare: [
      "Berger's Anstead page describes the Ascension settlement: non-exempt healthcare professionals alleging that critical staffing bonuses were excluded from the regular rate when overtime was calculated. Northwestern reads as a straight-line extension — same industry, same compensation architecture, same regular-rate doctrine.",
      "Berger's public miscalculated-overtime page identifies nondiscretionary bonuses and shift differentials as compensation that must be considered when calculating overtime. That is precisely the fact-pattern hypothesis here: RNs, CNAs, techs, and other non-exempt clinical workers receiving shift differentials, weekend premiums, and critical-staffing or incentive pay that may not have been included in the regular rate."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA regular-rate underpayment plus Illinois Minimum Wage Law claims.",
      "<strong>Pattern signature:</strong> Sig#1 hospital.",
      "<strong>Pay-practice signal:</strong> shift differentials, weekend premiums, charge / coverage premiums, critical-staffing incentives.",
      "<strong>State-law leverage:</strong> Illinois — IMWL is materially stronger than a federal-only case.",
      "<strong>Operational proof path:</strong> named-worker paystubs plus corresponding time records, job-posting / policy support for differential categories, Kronos / Epic payroll logic."
    ],
    has: [
      "Internal target score: <strong>69</strong> in the Sunlight prototype despite a conservative defensibility placeholder.",
      "Exclusion status: <strong>CLEAR</strong>.",
      "Class estimate: ~25,000 potentially in-scope workers (internal estimate).",
      "Modeled gross exposure: ~$91.4M before realization and settlement haircut (internal estimate).",
      "Payroll signal: Epic clinical + Kronos operations; Kronos should be treated as a medium-confidence public signal pending paystub or worker confirmation.",
      "Dossier note: \"IL-only system; clean Anstead-parallel candidate under IMWL; primary IL Sig#1 anchor.\""
    ],
    gaps: [
      "<strong>Named worker:</strong> at least one current or former non-exempt RN, CNA, tech, or similar with overtime weeks.",
      "<strong>Paystub proof:</strong> paystub showing overtime week plus premium / differential pay.",
      "<strong>Formula proof:</strong> whether the overtime rate excluded the premium from the regular-rate denominator.",
      "<strong>Arbitration / class waiver:</strong> current employment agreement and onboarding materials.",
      "<strong>LMRA risk:</strong> determine whether the named worker is in a CBA unit and whether the CBA actually bargains the regular-rate formula. A CBA that only lists differentials is manageable; a CBA that defines the regular-rate formula is higher risk."
    ],
    intake: [
      "What was your role and location at Northwestern Medicine?",
      "Were you hourly or salaried non-exempt?",
      "Did you work more than 40 hours in any week during the last three years?",
      "Did you receive shift differential, weekend differential, critical-staffing pay, charge pay, incentive pay, or bonus pay?",
      "On weeks where you worked overtime and received one of those payments, did your overtime rate increase to reflect the extra pay?",
      "Do you have paystubs from those weeks?",
      "Did you sign arbitration, class waiver, or union paperwork?"
    ],
    redteam: {
      issue: "Arbitration / class waiver; possible CBA / LMRA issue.",
      neutralize: "Screen named workers for agreement status; prefer non-union or CBA-silent workers; use paystubs to keep the formula dispute statutory."
    },
    hook: "The cleanest headline in the set: same case type Berger already resolved against Ascension, in a stronger damages state, against a major hospital system with a repeatable pay-practice signal."
  },

  {
    id: "abbvie",
    rank: 2,
    name: "AbbVie",
    shelf: "Regular-rate",
    why: "Illinois pharma manufacturing shift-differential case. Workday signal. Cleaner LMRA profile than larger union-heavy alternatives.",
    exposure: "$30M – $60M+",
    bmFit: "IL math case · low LMRA",
    posture: "Lead candidate",
    postureKind: "priority",
    classSize: "~12,500 (est.)",
    state: "Illinois",
    payroll: "Workday",
    targetScore: "70 (CLEAR) — internal estimate",
    modeled: "~$60.3M gross — internal estimate",
    estimateNote: "Class size and modeled gross are Sunlight prototype estimates, not adjudicated figures.",
    damagesHtml: `
      <p class="d-note"><strong>Screening only</strong> Not an actuarial opinion, expert testimony, or damages disclosure. Gross = class size × OT weeks/yr × avg uncompensated premium per OT week × lookback. Every input is adjustable.</p>
      <p><strong>Anchor:</strong> 12,500 in-scope workers · 32 OT weeks/yr · $50.25 avg uncompensated premium per OT week · 3-year IMWL lookback. <strong>12,500 × 32 × $50.25 × 3 = $60.3M.</strong></p>
      <p><strong>3x3 sensitivity:</strong> premium per OT week (rows) × OT weeks per worker per year (columns). Class held at 12,500, lookback 3 years.</p>
      <table class="d-table">
        <thead><tr><th>$/OT-week ↓ weeks →</th><th>24 weeks</th><th>32 weeks</th><th>40 weeks</th></tr></thead>
        <tbody>
          <tr><th>$35</th><td>$31.5M</td><td>$42.0M</td><td>$52.5M</td></tr>
          <tr><th>$50</th><td>$45.0M</td><td><strong>$60.3M anchor</strong></td><td>$75.0M</td></tr>
          <tr><th>$65</th><td>$58.5M</td><td>$78.0M</td><td>$97.5M</td></tr>
        </tbody>
      </table>
      <p><strong>Class-size sensitivity</strong> at $50 × 32 weeks: 8,000 = $38.4M · 12,500 = <strong>$60.3M</strong> · 18,000 = $86.4M.</p>
      <table class="d-table">
        <thead><tr><th>Haircut step</th><th>Factor</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>Gross theoretical</td><td>—</td><td>$60.3M</td></tr>
          <tr><td>Participation rate</td><td>65%</td><td>$39.2M</td></tr>
          <tr><td>Realization factor</td><td>55%</td><td>$21.6M</td></tr>
          <tr><td>Settlement discount</td><td>35%</td><td><strong>$7.6M net</strong></td></tr>
        </tbody>
      </table>
      <p>Implied net per class member: <strong>~$604</strong>. Illinois treble and 5% monthly penalty leverage are not embedded in gross; they sit on top as case-strategy variables.</p>
    `,
    thesis: [
      "AbbVie is the cleaner non-healthcare regular-rate lead: Illinois manufacturing / pharma operations, Workday signal, large in-state workforce, and shift-differential remuneration that fits the regular-rate math problem.",
      "Sunlight's prototype scores AbbVie at <strong>70</strong>, labels it CLEAR, estimates an in-scope class of roughly 12,500, and models approximately <strong>$60.3M</strong> in gross exposure. These figures are internal estimates."
    ],
    bmCare: [
      "Berger's public miscalculated-overtime page frames shift differentials as a regular-rate input — varying pay rates must be included when calculating overtime. AbbVie is not a hospital-system parallel, but it is a strong manufacturing shift-differential case in the highest-leverage damages state.",
      "Why AbbVie over a Caterpillar-style alternative as the second regular-rate lead: defense risk. UAW-heavy plant profiles raise a more obvious LMRA §301 preemption issue. AbbVie preserves the Illinois damages upside while reducing the risk that the lead reads as a CBA fight."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA regular-rate underpayment plus Illinois Minimum Wage Law.",
      "<strong>Pattern signature:</strong> Sig#3 manufacturing shift-differential.",
      "<strong>Pay-practice signal:</strong> second-shift, third-shift, weekend, production, or coverage differentials paid to non-exempt pharma manufacturing / operations workers.",
      "<strong>State-law leverage:</strong> Illinois treble and monthly penalty leverage.",
      "<strong>Operational proof path:</strong> paystub showing overtime week with differential pay, Workday payroll artifact, job-posting / policy showing shift-premium structure, worker confirmation of overtime formula."
    ],
    has: [
      "Internal target score: <strong>70</strong> (internal estimate).",
      "Exclusion status: <strong>CLEAR</strong>.",
      "Class estimate: ~12,500 potentially in-scope workers (internal estimate).",
      "Modeled gross exposure: ~$60.3M before haircut (internal estimate).",
      "Payroll signal: Workday.",
      "Dossier note: \"North Chicago HQ + Lake County operations; 8,000+ Illinois employees per company fact sheet; strong IMWL exposure.\""
    ],
    gaps: [
      "<strong>Named worker:</strong> non-exempt manufacturing, operations, warehouse, lab support, or facilities worker in Illinois.",
      "<strong>Paystub proof:</strong> at least two pay periods with overtime and differential pay.",
      "<strong>Formula proof:</strong> whether overtime was calculated from base rate only or from an all-in regular rate.",
      "<strong>Policy proof:</strong> job posting, offer letter, handbook, or payroll label showing the premium was nondiscretionary.",
      "<strong>CBA / LMRA:</strong> confirm whether the named worker is union or non-union and whether the regular-rate formula is bargained."
    ],
    intake: [
      "What AbbVie site did you work at?",
      "What was your job title and were you hourly?",
      "Did you receive shift differential, weekend premium, production bonus, attendance bonus, or similar non-discretionary pay?",
      "Did you work overtime in weeks when you received that extra pay?",
      "Did your overtime rate change based on that extra pay, or did it look like overtime was based only on your base hourly rate?",
      "Do your paystubs show separate line items for base pay, differential pay, and overtime?",
      "Were you covered by a union contract or individual arbitration agreement?"
    ],
    redteam: {
      issue: "CBA / LMRA if manufacturing roles are unionized; proof of exclusion from the regular-rate denominator.",
      neutralize: "Prefer non-union operational workers first; verify paystub math before full pitch."
    },
    hook: "The clean second math case. Northwestern is the Anstead parallel; AbbVie is a high-value Illinois manufacturing case that is easier to underwrite than a union-heavy alternative."
  },

  {
    id: "cvs",
    rank: 3,
    name: "CVS Health / Aetna — UM &amp; UR Nurses",
    shelf: "Reclassification",
    why: "Corporate reclassification event alleged in public litigation. Salary-to-hourly transition theory. Berger's stated UR / HEDIS shelf.",
    exposure: "$20M – $75M+",
    bmFit: "UR / HEDIS shelf",
    posture: "Carveout architected",
    postureKind: "staged",
    classSize: "Carveout-dependent",
    state: "Multi-state",
    payroll: "—",
    targetScore: "Public-record anchored",
    modeled: "Carveout-dependent",
    estimateNote: "Reclassification lead. Benton is a filed related case; the actionable matter is the carveout architecture: state-law overlays, non-overlapping titles, post-reclassification hourly claims, and Aetna affiliate cohorts. Paid PACER release-scope review remains required before any filing.",
    carveoutHtml: `
      <p class="d-note"><strong>Carveout map</strong> Benton &amp; Lewis v. CVS Health Corporation, No. 1:23-cv-00394-UNA (D. Del., filed Apr. 6, 2023), names CVS Health Corporation only and pleads a national FLSA UM-nurse cohort ending around the April 15, 2023 reclassification. It does not plead state-law classes, post-reclassification off-the-clock claims, or Aetna operating-entity cohorts.</p>
      <table class="d-table">
        <thead><tr><th>Whitespace axis</th><th>Best carveout</th><th>Confidence</th></tr></thead>
        <tbody>
          <tr><td>State-law overlay</td><td>NY, CA, MA, NJ, IL, WA, MN, CO, PA layered on pre-April-2023 facts</td><td>Medium-high</td></tr>
          <tr><td>Untouched affiliates</td><td>Aetna Life, Aetna Health state HMOs, Aetna Better Health Medicaid plans, Coventry, Meritain</td><td>Medium-high</td></tr>
          <tr><td>Non-overlapping titles</td><td>Behavioral-health UM, HEDIS/quality nurses, LTSS/LTC case managers, concurrent-review nurses</td><td>Medium</td></tr>
          <tr><td>Post-reclassification period</td><td>Off-the-clock, productivity-pressure, and regular-rate theories after hourly conversion</td><td>Medium-high</td></tr>
          <tr><td>Defense boundary</td><td>Avoid appeals nurses with final approval authority because Isett v. Aetna is defense-friendly</td><td>High</td></tr>
        </tbody>
      </table>
    `,
    thesis: [
      "CVS Health / Aetna is the strongest reclassification lead because the public record already contains the most important admission-style fact: a lawsuit alleges CVS reclassified utilization-management and review nurses as hourly, non-exempt in <strong>April 2023</strong>, while failing to compensate them for pre-reclassification overtime.",
      "<em>Benton et al. v. CVS Health Corporation</em>, No. 1:23-cv-00394 (D. Del., filed April 6, 2023), alleges that CVS Health misclassified UM/UR nurses as exempt from overtime, that the workers reviewed coverage requests against online criteria, and that CVS reclassified them as non-overtime-exempt in April 2023. This is a high-intrigue lead because it carries the \"then why were they reclassified?\" fact that makes a reclassification case easy to explain to a judge, mediator, and claims administrator.",
      "The caveat is that the active filed case must be red-teamed before disclosure. The sellable matter is a <strong>carveout</strong>: uncovered states, non-overlapping job titles, later time periods, Aetna affiliate cohorts, or sister operational groups."
    ],
    bmCare: [
      "Berger publicly investigates UR and HEDIS nurses, stating that workers whose primary job involves reviewing coverage requests against standardized criteria may be misclassified as overtime exempt. CVS / Aetna fits that public theory: clinical-background workers reviewing coverage or medical-necessity requests against standardized criteria, paid a salary, treated as exempt — until a reclassification event.",
      "Fisher Phillips, writing from the defense side, summarized Baker v. Anthem as a pending utilization-review nurse case and noted the core dispute is whether nurses reviewing medical authorization requests against predetermined guidelines are doing exempt professional work or non-exempt review work. That defense-side concern supports market validation."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA exempt-misclassification claim, with state-law add-ons in high-leverage states if the carveout supports it.",
      "<strong>Worker cohort:</strong> utilization-management nurse consultants, utilization-review nurses, nurse reviewers, nurse reviewer associates, HEDIS reviewers, medical-management nurses, similar titles.",
      "<strong>Theory:</strong> workers were paid salary and treated as exempt despite performing production-style coverage review against predetermined guidelines, with limited authority to deviate from system criteria.",
      "<strong>Best fact:</strong> alleged corporate reclassification to hourly / non-exempt status in April 2023.",
      "<strong>Filing posture:</strong> not a duplicate of the filed CVS case — positioned as a carveout or expansion after conflict and docket review."
    ],
    has: [
      "<strong>Public validation:</strong> ClassAction.org summary of filed CVS UM / UR nurse suit.",
      "<strong>Category validation:</strong> Berger's own public utilization-review / HEDIS investigation page.",
      "<strong>Comparable authority:</strong> Anthem / Baker public discussion and defense-side recognition of the recurring issue.",
      "<strong>Origination path:</strong> target workers whose job title changed from exempt salary to non-exempt hourly but whose duties did not materially change."
    ],
    gaps: [
      "<strong>Filed-case map:</strong> Benton & Lewis v. CVS Health Corporation, No. 1:23-cv-00394-UNA (D. Del., filed Apr. 6, 2023), covers UM Nurse Consultants and similarly titled positions under an FLSA-only theory ending around the April 15, 2023 reclassification.",
      "<strong>Carveout:</strong> state-law overlays, Aetna operating entities, non-overlapping titles, and post-reclassification hourly theories are the cleanest axes.",
      "<strong>Named worker:</strong> one CVS / Aetna worker with salary-to-hourly reclassification, overtime weeks before reclassification, unchanged duties after.",
      "<strong>Arbitration:</strong> CVS / Aetna agreement and class waiver status.",
      "<strong>Evidence:</strong> reclassification notice, paystubs before and after April 2023, job description, productivity metrics, queue screenshots, supervisor instruction on workload.",
      "<strong>Plaintiffs' counsel of record:</strong> identify counsel in <em>Benton</em> before any conflict, joinder, or carveout outreach. Law360 docket page is paywalled; not yet verified on the public web."
    ],
    intake: [
      "Were you employed by CVS, Aetna, or a CVS Health affiliate?",
      "What was your exact job title?",
      "Were you paid a salary and classified as exempt at any point?",
      "Were you later reclassified to hourly or non-exempt?",
      "Did your day-to-day duties change after reclassification?",
      "Did you review requests against criteria, software prompts, guidelines, or decision trees?",
      "Could you make final clinical decisions, or did you escalate exceptions?",
      "Did you work more than 40 hours in any week before the reclassification?",
      "Do you still have the reclassification notice and paystubs from before and after the change?"
    ],
    redteam: {
      issue: "Existing filed case; learned-professional defense; arbitration.",
      neutralize: "Build only after carveout map; prioritize standardized-criteria workers without final decision authority."
    },
    hook: "The most legible reclassification narrative: \"They reclassified the role, but did not make workers whole for the pre-reclassification period.\" If the carveout is clean, the case can be framed as willful — the reclassification event itself becomes the knowledge fact."
  },

  {
    id: "centene",
    rank: 4,
    name: "Centene — Managed-Care Case Managers",
    shelf: "Reclassification",
    why: "Prior Centene-specific Fifth Circuit authority. Managed-care case-manager category directly matches Berger's public investigation language.",
    exposure: "$10M – $50M+",
    bmFit: "Berger's case-manager shelf",
    posture: "Carveout architected",
    postureKind: "staged",
    classSize: "Affiliate-scoped",
    state: "Sister-state map",
    payroll: "—",
    targetScore: "Doctrinally anchored",
    modeled: "State-scope dependent",
    estimateNote: "Reclassification lead. Centene-specific appellate authority exists; the actionable matter is a sister-plan / state-law expansion. Public sources support the whitespace map, but paid PACER release-scope review remains required before any filing.",
    carveoutHtml: `
      <p class="d-note"><strong>Carveout map</strong> Clark is Texas and 2009-2012; Randolph is Centene Management Company and a 2011-2014 FLSA window; Robertson is Florida LTC case managers at Sunshine Health. The live opportunity is operating-entity precision: state-plan affiliates, WellCare integration-era cohorts, and post-release periods.</p>
      <table class="d-table">
        <thead><tr><th>Whitespace axis</th><th>Best carveout</th><th>Confidence</th></tr></thead>
        <tbody>
          <tr><td>State-plan entities</td><td>Fidelis Care (NY), Health Net (CA), Sunflower (KS), Buckeye (OH), Peach State (GA), Magnolia (MS), Meridian (IL/MI)</td><td>High</td></tr>
          <tr><td>WellCare shelf</td><td>WellCare-branded plans acquired in 2020; case managers, prior-auth nurses, concurrent-review nurses</td><td>High</td></tr>
          <tr><td>Behavioral-health shelf</td><td>Magellan Health behavioral case managers and care coordinators</td><td>Medium</td></tr>
          <tr><td>Non-overlapping titles</td><td>Service coordinators, LTSS coordinators outside Florida, HEDIS/STARS quality nurses, transition coordinators</td><td>Medium-high</td></tr>
          <tr><td>Post-release periods</td><td>Post-2014 and post-Robertson windows, subject to actual release language</td><td>Medium</td></tr>
        </tbody>
      </table>
    `,
    thesis: [
      "Centene is the best doctrinally anchored reclassification lead because the public record already contains Centene-specific appellate authority. In <em>Clark v. Centene</em>, the Fifth Circuit held that Centene failed to establish that case managers satisfied either the learned-professional exemption or the administrative exemption. The work was guideline-bound utilization review, not final discretionary decision-making.",
      "The sellable matter is not \"file Clark again.\" It is a <strong>sister-plan / state-law expansion</strong> built from the Clark holding, later Centene affiliate litigation, and current managed-care job architecture. The target is not merely Centene corporate — it is Centene's state-plan ecosystem, including local health-plan affiliates and long-term-care / Medicaid case-manager roles where the job remains standardized, quota-driven, and guideline-bound."
    ],
    bmCare: [
      "Berger publicly says healthcare case managers may be entitled to overtime where they review medical authorization requests to verify medical necessity and appropriateness for coverage and payment, rather than exercising exempt discretion. That is the exact managed-care theory.",
      "The Fifth Circuit's Clark opinion held that case managers failed the learned-professional exemption because the role did not require a prolonged course of specialized intellectual instruction, and failed the administrative exemption because the work did not involve discretion and independent judgment on matters of significance. The opportunity here lets Berger draw on its existing public intake funnel and doctrinal comfort while Sunlight supplies a sharper target map: which Centene affiliates, which states, which job titles, which intake questions produce the fastest named plaintiff."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA exempt-misclassification plus state-law claims where state wage law improves leverage.",
      "<strong>Worker cohort:</strong> case managers, long-term-care case managers, care coordinators, service coordinators, utilization-review case managers, Medicaid / Medicare plan coordinators.",
      "<strong>Theory:</strong> workers were classified as exempt despite primarily applying guidelines, collecting information, coordinating services, and escalating exceptions rather than exercising exempt discretion.",
      "<strong>Anchor authority:</strong> Clark v. Centene and related managed-care case-manager authority.",
      "<strong>Best filing posture:</strong> sister-state or affiliate-focused case that avoids released claims and stale time periods."
    ],
    has: [
      "<strong>Public validation:</strong> Berger's own case-manager investigation page.",
      "<strong>Centene-specific authority:</strong> Fifth Circuit / Clark public materials.",
      "<strong>Related affiliate signal:</strong> public law-firm materials identify Centene Management Company and Sunshine Health litigation alleging LTC case managers were misclassified as exempt.",
      "<strong>Origination path:</strong> target local-plan case managers in states not released by prior settlements, prioritizing workers with overtime weeks and no meaningful discretion."
    ],
    gaps: [
      "<strong>Release map:</strong> Clark, Randolph, and Robertson settlement or release scope, defendant scope, opt-in coverage, state coverage, and release period.",
      "<strong>Current classification:</strong> whether target roles are still salaried exempt or were later reclassified.",
      "<strong>State prioritization:</strong> prioritize Fidelis Care (NY), Health Net (CA), Meridian (IL/MI), Buckeye (OH), Sunflower (KS), and WellCare-branded post-2020 cohorts based on lookback, wage-law leverage, and employee density.",
      "<strong>Named worker:</strong> current or former Centene affiliate case manager with overtime weeks and salary-exempt treatment.",
      "<strong>Arbitration:</strong> current affiliate onboarding and dispute-resolution terms."
    ],
    intake: [
      "Which Centene affiliate or local health plan employed you?",
      "What was your exact job title?",
      "Were you classified as exempt or paid salary without overtime?",
      "Did you work more than 40 hours in any week?",
      "Did your work involve applying guidelines, checklists, authorization criteria, or care-plan templates?",
      "Could you approve exceptions on your own, or did a supervisor / medical director make those decisions?",
      "Were you measured by caseload, queue, turnaround time, or productivity metrics?",
      "Did you receive any notice that your role was being reclassified?",
      "Do you have paystubs, offer letters, job descriptions, or performance metrics?"
    ],
    redteam: {
      issue: "Prior releases; administrative / professional exemption defense; arbitration.",
      neutralize: "Build release map; target guideline-bound workers; rely on Clark-style lack-of-discretion facts."
    },
    hook: "A \"known defendant, known theory, new carveout\" lead. Berger already speaks this language publicly. Sunlight's value is turning that public category into a prioritized affiliate-by-affiliate plaintiff origination plan."
  }
];

/* ----- Render cards ----- */
function renderCards() {
  const container = document.getElementById("cards");
  if (!container) return;

  const html = LEADS.map((l) => {
    const postureBadge =
      l.postureKind === "priority"
        ? `<span class="badge badge--priority">${l.posture}</span>`
        : `<span class="badge badge--staged">${l.posture}</span>`;
    return `
      <button class="card" type="button" data-lead="${l.id}" aria-label="Open dossier for ${stripTags(l.name)}">
        <span class="card__rank">No. ${String(l.rank).padStart(2, "0")}</span>
        <header class="card__head">
          <span class="card__shelf">${l.shelf} shelf</span>
          <h3 class="card__name">${l.name}</h3>
          <p class="card__why">${l.why}</p>
        </header>
        <div class="card__meta">
          <div>
            <div class="meta__k">Exposure band</div>
            <div class="meta__v meta__v--num">${l.exposure}</div>
          </div>
          <div>
            <div class="meta__k">BM fit</div>
            <div class="meta__v">${l.bmFit}</div>
          </div>
          <div>
            <div class="meta__k">Class est.</div>
            <div class="meta__v">${l.classSize}</div>
          </div>
          <div>
            <div class="meta__k">Filing state</div>
            <div class="meta__v">${l.state}</div>
          </div>
        </div>
        <div class="card__badges">
          ${postureBadge}
          <span class="badge">${l.shelf}</span>
        </div>
        <div class="card__cta">
          <span>Open dossier</span>
          <span class="card__cta-arrow" aria-hidden="true">→</span>
        </div>
      </button>
    `;
  }).join("");

  container.innerHTML = html;

  container.querySelectorAll("[data-lead]").forEach((el) => {
    el.addEventListener("click", () => openDrawer(el.getAttribute("data-lead")));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDrawer(el.getAttribute("data-lead"));
      }
    });
  });
}

function stripTags(s) {
  const d = document.createElement("div"); d.innerHTML = s; return d.textContent || d.innerText || "";
}

/* ----- Drawer ----- */
const drawer = document.getElementById("drawer");
const drawerTitle = document.getElementById("drawerTitle");
const drawerEyebrow = document.getElementById("drawerEyebrow");
const drawerBody = document.getElementById("drawerBody");
let lastFocus = null;

function openDrawer(id) {
  const lead = LEADS.find((l) => l.id === id);
  if (!lead) return;

  lastFocus = document.activeElement;
  drawerTitle.innerHTML = lead.name;
  drawerEyebrow.textContent = `${lead.shelf} shelf · Dossier ${String(lead.rank).padStart(2, "0")} · ${lead.posture}`;

  const estimateBlock = lead.estimateNote
    ? `<p class="d-note"><strong>Note —</strong> ${lead.estimateNote}</p>`
    : "";

  drawerBody.innerHTML = `
    <dl class="d-grid">
      <div><dt>Exposure band</dt><dd>${lead.exposure}</dd></div>
      <div><dt>Class estimate</dt><dd>${lead.classSize}</dd></div>
      <div><dt>Filing state</dt><dd>${lead.state}</dd></div>
      <div><dt>Internal score</dt><dd>${lead.targetScore}</dd></div>
      <div><dt>Modeled gross</dt><dd>${lead.modeled}</dd></div>
      <div><dt>Payroll signal</dt><dd>${lead.payroll || "—"}</dd></div>
    </dl>

    ${estimateBlock}

    <section class="d-section">
      <h3>Case thesis</h3>
      ${lead.thesis.map((p) => `<p>${p}</p>`).join("")}
    </section>

    <section class="d-section">
      <h3>Doctrinal anchors</h3>
      ${lead.bmCare.map((p) => `<p>${p}</p>`).join("")}
    </section>

    <section class="d-section">
      <h3>Proof path</h3>
      <ul class="d-list">${lead.proof.map((p) => `<li>${p}</li>`).join("")}</ul>
    </section>

    <section class="d-section">
      <h3>Evidence layers</h3>
      <ul class="d-list">${lead.has.map((p) => `<li>${p}</li>`).join("")}</ul>
    </section>

    ${lead.damagesHtml ? `
    <section class="d-section">
      <h3>Damages sensitivity</h3>
      ${lead.damagesHtml}
    </section>` : ""}

    ${lead.carveoutHtml ? `
    <section class="d-section">
      <h3>Carveout architecture</h3>
      ${lead.carveoutHtml}
    </section>` : ""}

    <section class="d-section">
      <h3>Verification required</h3>
      <ul class="d-list">${lead.gaps.map((p) => `<li>${p}</li>`).join("")}</ul>
    </section>

    <section class="d-section">
      <h3>Intake script</h3>
      <ol class="d-ol">${lead.intake.map((p) => `<li>${p}</li>`).join("")}</ol>
    </section>

    <section class="d-section">
      <h3>Defense considerations</h3>
      <dl class="redteam">
        <div>
          <dt>Biggest issue</dt>
          <dd>${lead.redteam.issue}</dd>
        </div>
        <div>
          <dt>How to neutralize</dt>
          <dd>${lead.redteam.neutralize}</dd>
        </div>
      </dl>
    </section>

    <section class="d-section">
      <h3>Why this matters</h3>
      <p>${lead.hook}</p>
    </section>
  `;

  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  // Focus the close button after the transition begins
  requestAnimationFrame(() => {
    const closeBtn = drawer.querySelector(".drawer__close");
    if (closeBtn) closeBtn.focus();
  });
}

function closeDrawer() {
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

if (drawer) {
  drawer.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeDrawer();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer && drawer.getAttribute("aria-hidden") === "false") closeDrawer();
});

/* ----- Access gate ----- */
const ACCESS_PHRASE = "Oathkeepr";
const accessGate = document.getElementById("accessGate");
const accessForm = document.getElementById("accessForm");
const accessPhrase = document.getElementById("accessPhrase");
const accessError = document.getElementById("accessError");

function unlockSite() {
  document.body.classList.remove("locked");
  if (accessPhrase) accessPhrase.value = "";
  const firstDossier = document.querySelector("[data-lead]");
  if (firstDossier) firstDossier.focus({ preventScroll: true });
}

function showAccessError() {
  if (!accessError || !accessPhrase) return;
  accessError.textContent = "Access phrase not recognized.";
  accessPhrase.setAttribute("aria-invalid", "true");
  accessPhrase.focus();
}

if (accessGate && accessPhrase) {
  requestAnimationFrame(() => accessPhrase.focus());
}

if (accessForm) {
  accessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const submittedPhrase = (accessPhrase?.value || "").trim();
    if (submittedPhrase === ACCESS_PHRASE) {
      if (accessError) accessError.textContent = "";
      if (accessPhrase) accessPhrase.removeAttribute("aria-invalid");
      unlockSite();
    } else {
      showAccessError();
    }
  });
}

/* ----- Init ----- */
renderCards();
