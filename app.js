/* Berger Montague — W&H Lead Packet
   Static prototype: lead data, card rendering, drawer, email cover toggles. */

const LEADS = [
  {
    id: "northwestern",
    rank: 1,
    name: "Northwestern Medicine",
    shelf: "Regular-rate",
    why: "Clean Illinois hospital-system twin to Ascension / Sacred Heart. Epic + Kronos signal. IL treble plus 5% monthly penalty overlay.",
    exposure: "$50M – $90M+",
    bmFit: "Anstead twin",
    posture: "Priority reserve",
    postureKind: "priority",
    classSize: "~25,000",
    state: "Illinois",
    payroll: "Epic + Kronos",
    targetScore: "69 (CLEAR)",
    modeled: "~$91.4M gross",
    thesis: [
      "Northwestern Medicine is the cleanest healthcare regular-rate target in the Sunlight shelf. It carries the fact-pattern Berger has already monetized: hospital-system non-exempt workers, critical-staffing / shift-differential / weekend-premium remuneration, and regular-rate undercalculation risk.",
      "The internal Sunlight wage-hour prototype scores Northwestern as a CLEAR Illinois Sig#1 hospital candidate, with approximately 40,000 U.S. employees, an estimated 25,000-person class headcount, Epic + Kronos payroll/timekeeping signal, and modeled exposure of approximately <strong>$91.4M</strong> before case-specific haircuts."
    ],
    bmCare: [
      "Berger's Anstead page describes the Ascension settlement: non-exempt healthcare professionals alleging that critical staffing bonuses were excluded from the regular rate when overtime was calculated. Northwestern is a straight-line \"show me the next Ascension\" lead — same industry, same compensation architecture, same regular-rate doctrine.",
      "Berger's public miscalculated-overtime page identifies nondiscretionary bonuses and shift differentials as compensation that must be considered when calculating overtime. That is exactly the fact-pattern hypothesis: RNs, CNAs, techs, and other non-exempt clinical workers receiving shift differentials, weekend warrior premiums, and critical-staffing or incentive pay that may not have been included in the regular rate."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA regular-rate underpayment plus Illinois Minimum Wage Law claims.",
      "<strong>Twin signature:</strong> Sig#1 hospital.",
      "<strong>Pay-practice signal:</strong> shift differentials, weekend premiums, charge / coverage premiums, critical-staffing incentives.",
      "<strong>State-law leverage:</strong> Illinois — IMWL stronger than a federal-only case.",
      "<strong>Operational proof path:</strong> named worker paystubs plus corresponding time records, job posting / policy support for differential categories, Kronos / Epic payroll logic."
    ],
    has: [
      "Internal target score: <strong>69</strong> in the prototype despite a conservative defensibility placeholder.",
      "Exclusion status: <strong>CLEAR</strong>.",
      "Class estimate: ~25,000 potentially in-scope workers.",
      "Modeled gross exposure: ~$91.4M before final realization and settlement haircut.",
      "Payroll signal: Epic + Kronos.",
      "Dossier note: \"IL-only system; clean Anstead-twin candidate under IMWL; primary IL Sig#1 anchor.\""
    ],
    gaps: [
      "<strong>Named worker:</strong> at least one current or former non-exempt RN, CNA, tech, or similar with overtime weeks.",
      "<strong>Paystub proof:</strong> paystub showing overtime week plus premium / differential pay.",
      "<strong>Formula proof:</strong> whether overtime rate excluded the premium from the regular-rate denominator.",
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
    hook: "This is the safest headline lead because it lets Berger say: \"This is the same case type we just resolved against Ascension, in a better damages state, with a major hospital system and a repeatable pay-practice signal.\""
  },

  {
    id: "abbvie",
    rank: 2,
    name: "AbbVie",
    shelf: "Regular-rate",
    why: "Illinois pharma manufacturing shift-differential case. Workday signal. Cleaner LMRA profile than Caterpillar.",
    exposure: "$30M – $60M+",
    bmFit: "IL math case · low LMRA",
    posture: "Priority reserve",
    postureKind: "priority",
    classSize: "~12,500",
    state: "Illinois",
    payroll: "Workday",
    targetScore: "70 (CLEAR)",
    modeled: "~$60.3M gross",
    thesis: [
      "AbbVie is the cleaner non-healthcare regular-rate lead: Illinois manufacturing / pharma operations, Workday signal, large in-state workforce, and shift-differential remuneration that fits the regular-rate math problem Berger has said it wants.",
      "The internal Sunlight prototype scores AbbVie at <strong>70</strong>, labels it CLEAR, estimates an in-scope class of roughly 12,500, and models approximately <strong>$60.3M</strong> in gross exposure."
    ],
    bmCare: [
      "Berger's public miscalculated-overtime page frames shift differentials as a regular-rate input — varying pay rates must be included when calculating overtime. AbbVie is not a hospital-system twin, but it is a strong manufacturing shift-differential case in the highest-value Sunlight damages state.",
      "Why AbbVie over Caterpillar as the second regular-rate lead: defense risk. Caterpillar's modeled exposure is larger, but a UAW-heavy plant profile raises a more obvious LMRA §301 preemption issue. AbbVie preserves the Illinois damages upside while reducing the risk that Berger dismisses the lead as a CBA fight."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA regular-rate underpayment plus Illinois Minimum Wage Law.",
      "<strong>Twin signature:</strong> Sig#3 manufacturing shift-differential.",
      "<strong>Pay-practice signal:</strong> second-shift, third-shift, weekend, production, or coverage differentials paid to non-exempt pharma manufacturing / operations workers.",
      "<strong>State-law leverage:</strong> Illinois treble and monthly penalty leverage.",
      "<strong>Operational proof path:</strong> paystub showing overtime week with differential pay, Workday payroll artifact, job posting / policy showing shift-premium structure, worker confirmation of overtime formula."
    ],
    has: [
      "Internal target score: <strong>70</strong>.",
      "Exclusion status: <strong>CLEAR</strong>.",
      "Class estimate: ~12,500 potentially in-scope workers.",
      "Modeled gross exposure: ~$60.3M before final haircut.",
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
      neutralize: "Prefer non-union operational workers first; require paystub math before full pitch."
    },
    hook: "The clean second math case. If Northwestern gives Berger the Ascension twin, AbbVie gives them a high-value Illinois manufacturing case that is easier to underwrite than a union-heavy Caterpillar target."
  },

  {
    id: "cvs",
    rank: 3,
    name: "CVS Health / Aetna — UM &amp; UR Nurses",
    shelf: "Reclassification",
    why: "Corporate reclassification event alleged in public litigation. Salary-to-hourly transition theory. Berger's stated UR/HEDIS shelf.",
    exposure: "$20M – $75M+",
    bmFit: "UR/HEDIS shelf",
    posture: "Reserve after conflict / carveout check",
    postureKind: "staged",
    classSize: "Carveout-dependent",
    state: "Multi-state",
    payroll: "—",
    targetScore: "Public-record anchored",
    modeled: "Carveout-dependent",
    thesis: [
      "CVS Health / Aetna is the strongest reclassification lead because the public record already contains the most important admission-style fact: a lawsuit alleges CVS reclassified utilization-management and review nurses as hourly, non-exempt in <strong>April 2023</strong>, while failing to compensate them for pre-reclassification overtime.",
      "ClassAction.org summarized the suit as alleging that CVS Health misclassified UM/UR nurses as exempt from overtime, that the workers reviewed coverage requests against online criteria, and that CVS reclassified them as non-overtime-exempt in April 2023. This is a high-intrigue lead because it carries the \"then why were they reclassified?\" fact that makes a reclassification case easy to explain to a judge, mediator, and claims administrator.",
      "The caveat is that the active-filed case must be red-teamed before disclosure. The sellable asset is likely a <strong>carveout</strong>: uncovered states, non-overlapping job titles, later time periods, Aetna affiliate cohorts, or sister operational groups."
    ],
    bmCare: [
      "Berger is already publicly investigating UR and HEDIS nurses, stating that workers whose primary job involves reviewing coverage requests against standardized criteria may be misclassified as overtime exempt. CVS/Aetna fits that public theory: clinical-background workers reviewing coverage or medical-necessity requests against standardized criteria, paid a salary, treated as exempt — until a reclassification event.",
      "Fisher Phillips, writing from the defense side, summarized Baker v. Anthem as a pending utilization-review nurse case and noted the core dispute is whether nurses reviewing medical authorization requests against predetermined guidelines are doing exempt professional work or non-exempt review work. That defense-side concern supports market validation: managed-care employers know this is a recurring classification risk."
    ],
    proof: [
      "<strong>Claim architecture:</strong> FLSA exempt-misclassification claim, with state-law add-ons in high-value states if the carveout supports it.",
      "<strong>Worker cohort:</strong> utilization-management nurse consultants, utilization-review nurses, nurse reviewers, nurse reviewer associates, HEDIS reviewers, medical-management nurses, similar titles.",
      "<strong>Theory:</strong> workers were paid salary and treated as exempt despite performing production-style coverage review against predetermined guidelines, with limited authority to deviate from system criteria.",
      "<strong>Best fact:</strong> alleged corporate reclassification to hourly / non-exempt status in April 2023.",
      "<strong>Filing posture:</strong> not a blind duplicate of the filed CVS case — position as a carveout or expansion after conflict and docket review."
    ],
    has: [
      "<strong>Public validation:</strong> ClassAction.org summary of filed CVS UM / UR nurse suit.",
      "<strong>Category validation:</strong> Berger's own public utilization-review / HEDIS investigation page.",
      "<strong>Comparable authority:</strong> Anthem / Baker public discussion and defense-side recognition of the recurring issue.",
      "<strong>Origination path:</strong> target workers whose job title changed from exempt salary to non-exempt hourly but whose duties did not materially change."
    ],
    gaps: [
      "<strong>Filed-case map:</strong> case caption, court, class definition, time period, counsel, settlement posture, release scope.",
      "<strong>Carveout:</strong> determine whether uncovered workers exist by state, affiliate, job title, time period, or duties.",
      "<strong>Named worker:</strong> one CVS / Aetna worker with salary-to-hourly reclassification, overtime weeks before reclassification, unchanged duties after.",
      "<strong>Arbitration:</strong> CVS / Aetna agreement and class waiver status.",
      "<strong>Evidence:</strong> reclassification notice, paystubs before and after April 2023, job description, productivity metrics, queue screenshots, supervisor instruction on workload."
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
      neutralize: "Sell only after carveout map; prioritize standardized-criteria workers without final decision authority."
    },
    hook: "The most sellable reclassification narrative: \"They reclassified the role, but did not make workers whole for the pre-reclassification period.\" If the carveout is clean, the case can be framed as willful — the reclassification event itself becomes the knowledge fact."
  },

  {
    id: "centene",
    rank: 4,
    name: "Centene — Managed-Care Case Managers",
    shelf: "Reclassification",
    why: "Prior Centene-specific Fifth Circuit authority. Managed-care case-manager category directly matches Berger's public investigation language.",
    exposure: "$10M – $50M+",
    bmFit: "Berger's case-manager shelf",
    posture: "Reserve after docket sweep",
    postureKind: "staged",
    classSize: "Affiliate-scoped",
    state: "Sister-state map",
    payroll: "—",
    targetScore: "Doctrinally anchored",
    modeled: "State-scope dependent",
    thesis: [
      "Centene is the best doctrinally anchored reclassification lead because the public record already contains Centene-specific appellate authority. Berger's own public case-manager investigation page states that in <em>Clark v. Centene</em>, the Fifth Circuit held that Centene case managers were not exempt from overtime — they were not required to attend a specialized intellectual institution and lacked meaningful decision-making authority.",
      "The sellable case is not \"file Clark again.\" The sellable case is a <strong>sister-plan / state-law expansion</strong> built from the Clark holding, later Centene affiliate litigation, and current managed-care job architecture. The target is not merely Centene corporate — it is Centene's state-plan ecosystem, including local health-plan affiliates and long-term-care / Medicaid case-manager roles where the job remains standardized, quota-driven, and guideline-bound."
    ],
    bmCare: [
      "Berger publicly says healthcare case managers may be entitled to overtime where they review medical authorization requests to verify medical necessity and appropriateness for coverage and payment, rather than exercising exempt discretion. That is the exact managed-care theory.",
      "The Fifth Circuit's Clark opinion held that Centene failed to establish the case managers met the professional exemption. The opportunity is especially attractive because it lets Berger use its existing public intake funnel and doctrinal comfort while Sunlight supplies a sharper target map: which Centene affiliates, which states, which job titles, which intake questions produce the fastest named plaintiff."
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
      "<strong>Release map:</strong> Clark and later Centene / Sunshine Health resolution, opt-in scope, state coverage, release period.",
      "<strong>Current classification:</strong> whether target roles are still salaried exempt or were later reclassified.",
      "<strong>State prioritization:</strong> highest-value carveouts based on lookback, wage-law multipliers, employee density.",
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
      <button class="card" type="button" data-lead="${l.id}" aria-label="Open detail for ${stripTags(l.name)}">
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
            <div class="meta__k">BM-fit</div>
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
          <span>Open lead detail</span>
          <span class="card__cta-arrow" aria-hidden="true">→</span>
        </div>
      </button>
    `;
  }).join("");

  container.innerHTML = html;

  container.querySelectorAll("[data-lead]").forEach((el) => {
    el.addEventListener("click", () => openDrawer(el.getAttribute("data-lead")));
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
  drawerEyebrow.textContent = `${lead.shelf} shelf · Lead ${String(lead.rank).padStart(2, "0")} · ${lead.posture}`;

  drawerBody.innerHTML = `
    <dl class="d-grid">
      <div><dt>Exposure band</dt><dd>${lead.exposure}</dd></div>
      <div><dt>Class estimate</dt><dd>${lead.classSize}</dd></div>
      <div><dt>Filing state</dt><dd>${lead.state}</dd></div>
      <div><dt>Internal score</dt><dd>${lead.targetScore}</dd></div>
      <div><dt>Modeled gross</dt><dd>${lead.modeled}</dd></div>
      <div><dt>Payroll signal</dt><dd>${lead.payroll || "—"}</dd></div>
    </dl>

    <section class="d-section">
      <h3>Buyer-facing thesis</h3>
      ${lead.thesis.map((p) => `<p>${p}</p>`).join("")}
    </section>

    <section class="d-section">
      <h3>Why Berger should care</h3>
      ${lead.bmCare.map((p) => `<p>${p}</p>`).join("")}
    </section>

    <section class="d-section">
      <h3>Proof path</h3>
      <ul class="d-list">${lead.proof.map((p) => `<li>${p}</li>`).join("")}</ul>
    </section>

    <section class="d-section">
      <h3>What Sunlight has</h3>
      <ul class="d-list">${lead.has.map((p) => `<li>${p}</li>`).join("")}</ul>
    </section>

    <section class="d-section">
      <h3>Diligence gaps</h3>
      <ul class="d-list">${lead.gaps.map((p) => `<li>${p}</li>`).join("")}</ul>
    </section>

    <section class="d-section">
      <h3>Intake script</h3>
      <ol class="d-ol">${lead.intake.map((p) => `<li>${p}</li>`).join("")}</ol>
    </section>

    <section class="d-section">
      <h3>Defense red team</h3>
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
      <h3>Buyer hook</h3>
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

drawer.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeDrawer();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.getAttribute("aria-hidden") === "false") closeDrawer();
});

/* ----- Email cover ----- */
const emailEl = document.querySelector(".email");
const toggleBtn = document.getElementById("toggleEmail");
const copyBtn = document.getElementById("copyEmail");
const emailText = document.getElementById("emailText");

if (toggleBtn && emailEl) {
  toggleBtn.addEventListener("click", () => {
    const collapsed = emailEl.getAttribute("data-collapsed") !== "false";
    const next = !collapsed;
    emailEl.setAttribute("data-collapsed", next ? "true" : "false");
    toggleBtn.setAttribute("aria-expanded", next ? "false" : "true");
    toggleBtn.textContent = next ? "Expand" : "Collapse";
  });
  // start expanded if user prefers
  // leave default collapsed for restraint
}

if (copyBtn && emailText) {
  copyBtn.addEventListener("click", async () => {
    const text = emailText.innerText;
    try {
      await navigator.clipboard.writeText(text);
      const orig = copyBtn.textContent;
      copyBtn.textContent = "Copied";
      setTimeout(() => { copyBtn.textContent = orig; }, 1600);
    } catch (e) {
      // fallback
      const r = document.createRange();
      r.selectNode(emailText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      try { document.execCommand("copy"); copyBtn.textContent = "Copied"; setTimeout(() => copyBtn.textContent = "Copy", 1600); } catch (_) {}
      window.getSelection().removeAllRanges();
    }
  });
}

/* ----- Init ----- */
renderCards();
