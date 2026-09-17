---
layout: default
title: Projects
description: "A focused collection of practical work across data analysis, business intelligence, machine learning, and technical development"
permalink: /projects/
---

<section class="page-intro">
  <p class="eyebrow">Projects</p>
  <h1>A few rabbit holes, explored.</h1>
  <p class="page-intro__lede">
    A focused collection of projects across data analysis, business intelligence,
    nascent machine learning, and technical development.
  </p>
</section>

<section class="project-filter" aria-label="Filter projects">
  <button class="project-filter__button is-active" type="button" data-filter="all">
    All
  </button>

  <button class="project-filter__button" type="button" data-filter="Data Analysis">
    Data Analysis
  </button>

  <button class="project-filter__button" type="button" data-filter="Data + ML">
    Data + ML
  </button>

  <button class="project-filter__button" type="button" data-filter="Business Intelligence">
    Business Intelligence
  </button>

  <button class="project-filter__button" type="button" data-filter="Technical / API">
    Technical / API
  </button>
</section>

<div class="project-list">
  {% assign projects = site.projects | sort: "featured_order" %}

{% for project in projects %}
{% include project-card.html project=project featured=true %}
{% endfor %}

</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-project-category]");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filter = button.dataset.filter;

        buttons.forEach(function (item) {
          item.classList.remove("is-active");
        });

        button.classList.add("is-active");

        cards.forEach(function (card) {
          const category = card.dataset.projectCategory;

          card.hidden = filter !== "all" && category !== filter;
        });
      });
    });
  });
</script>
