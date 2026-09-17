---
category: Data + ML
title: Ride-App Analysis
name: ride-app
summary: A product and operations analysis of a ride-booking app, combining funnel analysis with a machine learning model.
description: A product and operations analysis exploring ride requests, cancellations, demand patterns, and the factors associated with different outcomes across a fictional ride-booking service.
tools: Python, Pandas, Scikit-Learn, Funnel Analysis
featured: false
featured_order: 3
repository: https://github.com/thesamhith/ride-app-analysis
dashboard: https://ride-app-analysis-hosting-service.onrender.com/under-the-hood
thumbnail: /assets/img/ride-app-thumbnail.svg
metrics:
  - label: Dataset
    value: "6,745 rides"
  - label: Features
    value: "11 variables"
  - label: Outcomes
    value: "3 classes"
demonstrates:
  - Funnel and reliability analysis across a ride-booking experience
  - Feature engineering using time, location, and weather signals
  - Applying classification to a practical product question
role: Data preparation, exploratory analysis, SQL analysis, feature engineering, model development, and product-facing storytelling.
lessons: Product analytics is really useful when descriptive analysis and predictive modelling are connected to the decisions a product/operations team could actually make.
---

## The question

What is happening across the ride-booking funnel, what factors are associated with different ride outcomes, and where could the product or operations team improve the experience?

## What I investigated

- Measuring the journey from ride request to completed trip
- Examining cancellations and unmet demand across different conditions
- Identifying patterns by time, location, and weather
- Engineering features that could help explain ride outcomes
- Building a classification model to investigate the factors behind ride outcomes
- Translating the analysis and model into an interactive product experience

## The analysis

The project begins with the ride-booking funnel: requests are examined across their possible outcomes to understand where the experience breaks down.

From there, I look at how outcomes vary across time, location, and other available conditions. The goal is not simply to count cancellations, but to identify patterns that could point towards operational or product-level questions worth investigating further.

Feature engineering brings together variables such as request timing, location, and weather conditions. These features are then used in a classification model to explore whether the available information can help distinguish between the three observed ride outcomes.

## The model

The classification model treats the ride outcome as a three-class prediction problem.

The model is used primarily as an analytical tool: understanding which available features contribute to distinguishing outcomes and whether those patterns reinforce or challenge what was observed during the exploratory analysis.

The model should not be interpreted as proof that a particular factor causes a ride to succeed or fail. As with the rest of the project, the results describe patterns in the available dataset.

## Key findings

- Ride outcomes vary meaningfully across different parts of the booking experience, with cancellations and incomplete journeys providing useful signals about where reliability can be investigated further.

- Time, location, and environmental conditions reveal additional variation in ride outcomes, suggesting that the experience is not uniform across all requests.

- The modelling exercise adds another layer to the analysis by testing whether these patterns can be used to distinguish between the observed outcomes.

- The practical value of the project therefore comes less from the model's prediction alone and more from connecting the observed patterns to questions that a product or operations team could investigate.

## Project notes

The project combines SQL and Excel for data exploration, Python and Pandas for preparation and analysis, feature engineering and machine learning for the modelling component, and an interactive application for presenting the results.

The application provides a product-facing layer over the analysis, allowing the underlying data and model to be explored rather than treating the final output as a standalone prediction.
