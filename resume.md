---
layout: default
title: Resume
permalink: /resume/
---

<section class="page-intro">
  <p class="eyebrow">Resume</p>
  <h1>A decade of learning and building, distilled.</h1>
  <p class="page-intro__lede">
    A snapshot of my experience across technology, communication, business requirements,
    data — and the skills I bring to the table.
  </p>
  <a class="button button--primary" href="{{ '/resume.pdf' | relative_url }}" download>
    Download my resume <span aria-hidden="true">↓</span>
  </a>
</section>

<section class="resume-viewer" aria-label="Resume preview">
  <div class="resume-viewer__header">
    <div>
      <p class="eyebrow">Resume</p>
      <h2>Prefer to read it here?</h2>
    </div>
    <p class="muted">You can preview the complete PDF below.</p>
  </div>

<object
    data="{{ '/resume.pdf' | relative_url }}"
    type="application/pdf"
    width="100%"
    height="720"
    aria-label="Resume PDF preview">

<p class="resume-viewer__fallback">
Your browser cannot display the preview.
<a class="text-link" href="{{ '/resume.pdf' | relative_url }}" download>
Download the resume instead <span aria-hidden="true">↓</span>
</a>
</p>
</object>

</section>
<div class="resume-summary">
  <div>
    <p class="eyebrow">Profile</p>
    <p>
      Business and data analyst with a technical communication background, combining data, business, and systems acumen.
    </p>
  </div>

  <div>
    <p class="eyebrow">Core skills</p>
    <p>SQL · Python · Data Analysis · Data Visualisation · Tableau · Business Analysis · Technical Communication · Stakeholder Management</p>
  </div>
</div>
