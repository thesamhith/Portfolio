---
category: Data Analysis
title: Home Alone Grocery-Run Analysis
name: Home Alone Grocery Analysis
summary: An inflation analysis that uses a familiar grocery haul to explore how household costs have changed over time.
description: A data-driven look at the cost evolution of the famous grocery basket from 1990's holiday-movie 'Home Alone'. The analysis tracks cost changes, key price drivers, and implications for household purchasing power.
tools: SQL, Python, Pandas, Data Visualisation
featured: true
featured_order: 2
repository: https://github.com/thesamhith/Home-Alone-Grocery-Run-Analysis
dashboard: https://home-alone-grocery-run-analysis-kmac.streamlit.app/
thumbnail: /assets/img/kmac-thumbnail.svg
metrics:
  - label: Base cart
    value: "$19.83"
  - label: Analysis window
    value: "1990 → 2026"
  - label: Focus
    value: "Grocery inflation"
demonstrates:
  - Framing a familiar story as a measurable analytical question
  - Comparing product-level price movement across time
  - Translating inflation into an accessible household-cost narrative
role: Data cleaning, exploratory analysis, SQL analysis, visualisation, and analytical storytelling.
lessons: A familiar pop-culture reference can tie into a more meaningful look how affordability and purhcasing power have behaved over time, given their combination with historical prices, inflation, and wage data.
---

## The question

How has the cost of a familiar grocery basket changed since 1990, and which products contribute most to the increase?

## What I investigated

- Reconstructing the original grocery basket and validating the underlying data
- Comparing estimated product prices across multiple points in time
- Measuring changes at both product and category level
- Identifying which items experienced the largest increases
- Comparing the changing cost of the basket with changes in wages and purchasing power
- Turning the results into an interactive Streamlit application

## The analysis

The analysis starts with the original 1990 grocery haul depicted in the movie and tracks how the cost of the same basket changes over time.

Rather than looking only at the total basket cost, I break the change down by product and category to understand where the increase comes from. This makes it possible to distinguish broad inflationary movement from products whose prices have changed more substantially than the overall basket.

I also compare the basket cost with historical wage levels to put the price increase into a more practical measure: how much working time would be required to afford the same basket at different points in time?

## Key findings

- The overall cost of the basket increases substantially across the analysis period, with the pace of change becoming particularly pronounced in the later years.

- The increase is not evenly distributed across products. Some items contribute considerably more to the change in basket cost than others, making the product-level view more informative than the headline total alone.

- Comparing basket costs with wages adds another perspective: price inflation and purchasing power do not necessarily move at the same rate.

- These comparisons are intended to illustrate changes in the cost of a fixed basket, rather than represent a complete measure of household inflation or living standards.

## Project notes

The project combines PostgreSQL and SQL for data storage and analysis, Python and Pandas for data preparation and exploration, and visualisation tools for communicating the results.

The final analysis is presented through an interactive Streamlit application, allowing the underlying price changes and comparisons to be explored rather than presented as a single static conclusion.
