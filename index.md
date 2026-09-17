---
layout: default
title: Home
description: "A data analyst portfolio focused on practical, evidence-based decisions."
---

<section class="hero">
  <div class="hero__headline">
    <p class="eyebrow">Data analysis · Business intelligence · Product thinking</p>
    <h1>Good analysis starts with a better question.</h1>
  </div>
  <div class="hero__lower">
    <div class="hero__portrait-wrap">
      <div class="portrait-art" aria-hidden="true"><span class="portrait-art__ring"></span><span class="portrait-art__line"></span><span class="portrait-art__dot"></span><span class="portrait-art__caption">DATA / SIGNAL / 01</span></div>
      <div class="hero__portrait">
        {% if site.author.profile_image %}
          <img src="{{ site.author.profile_image | relative_url }}" alt="Portrait of {{ site.author.name }}">
        {% else %}
          <div class="portrait-placeholder" aria-label="Add a professional portrait to _config.yml">Your<br>photo<br>here</div>
        {% endif %}
      </div>
      <span class="portrait-label">01 / ANALYST</span>
      <span class="portrait-marker" aria-hidden="true"></span>
    </div>
    <div class="hero__content">
    <p class="hero__lede">Hello there! I’m Samhith Konidena, your friendly neighborhood data and business analyst with a background in technical communication. I use data to investigate problems, uncover patterns, ask better questions, and turn findings into clear, actionable insights.</p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/projects/' | relative_url }}">View my projects</a>
      <a class="button button--secondary" href="{{ '/resume/' | relative_url }}">View my resume</a>
    </div>
    </div>
  </div>
</section>

<section class="home-grid" aria-label="Portfolio overview">
  <div>
    <p class="eyebrow">How I work</p>
    <h2>Curious about the problem first.</h2>
    <p>I begin by clarifying the business question, checking the data quality, and choosing an analysis that can lead to action — not just a nice-looking chart.</p>
    <a class="text-link" href="{{ '/about/' | relative_url }}">More about me <span aria-hidden="true">→</span></a>
  </div>
  <div class="signal-card">
    <span class="signal-card__label">Portfolio focus</span>
    <strong>A focused portfolio of practical analysis</strong>
    <span>
    <br> · SQL
    <br> · Python
    <br> · Data Visualization
    <br> · Business Intelligence
    </span>
  </div>
</section>

<section class="featured-projects">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2>Projects that show the thinking.</h2>
    </div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">See all projects <span aria-hidden="true">→</span></a>
  </div>
  <div class="project-grid">
    {% assign featured_projects = site.projects | where: "featured", true | sort: "featured_order" %}
    {% for project in featured_projects limit:2 %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>
