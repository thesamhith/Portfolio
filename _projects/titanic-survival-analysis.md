---
category: Data + ML
title: Titanic Survival Analysis
name: titanic-survival-analysis
summary: An exploratory analysis of passenger survival patterns, followed by a beginner-friendly machine learning model and Dash app.
description: A data analysis and machine learning project exploring which passenger characteristics were most strongly associated with survival aboard the RMS Titanic.
tools: Python, Pandas, Plotly-Dash, Scikit-Learn
repository: https://github.com/thesamhith/Titanic-Survival-Analysis
dashboard: https://p01--titanic-survival-analysis--4nyffjztzxnx.code.run
thumbnail: /assets/img/titanic-thumbnail.svg
featured: true
featured_order: 1
metrics:
  - label: Dataset
    value: "891 passengers"
  - label: Model
    value: "Logistic regression"
  - label: Test accuracy
    value: "79%"
demonstrates:
  - Exploratory analysis of survival patterns across passenger groups
  - Feature engineering and preprocessing for a classification model
  - Turning a machine learning model into an interactive user experience
role: Data cleaning, exploratory analysis, feature engineering, model development, visualisation, and Dash application development.
lessons: A useful model is only one part of an analytical solution; understanding the patterns, communicating their limitations, and giving people a way to interact with the results matter just as much.
---

## The question

Which passenger characteristics were most evidently associated with survival?

## What I investigated

- Comparing survival rates across passenger class and sex
- Exploring the interaction between sex and passenger class
- Examining how age and family size relate to survival
- Creating derived features such as family size and travelling alone
- Building and evaluating a logistic regression model
- Turning the analysis into an interactive Dash application

## The model

The model uses passenger class, sex, age, port of embarkation, family size, and whether the passenger was travelling alone.

Family size is derived from `SibSp + Parch + 1`, while travelling alone is derived from whether family size equals one.

The model achieved approximately 79% accuracy on held-out test data. This is intended as an auxilary (machine learning) demonstration rather than a historically accurate prediction.

## Key findings

- Sex showed the strongest association with observed survival, while passenger class also revealed substantial differences. Looking at sex and class together exposed an important interaction between the two.

- Age and family size showed more nuanced patterns, with family size appearing to have a non-linear relationship with survival.

- These are associations observed in the dataset, not claims of causation.

## Project notes

The project combines a Jupyter-based analysis, Python data preparation, logistic regression, and a multi-page Dash application for interactive exploration and prediction.
