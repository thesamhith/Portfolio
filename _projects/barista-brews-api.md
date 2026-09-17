---
category: Technical / API
layout: project
title: Barista Brews API
name: barista-brews-api
summary: A small REST API built with FastAPI to practise backend fundamentals, data modelling, validation, and CRUD lifecycle.
description: A beginner-friendly Python API for managing coffee brews through REST endpoints, with Pydantic models and FastAPI.
tools: Python, FastAPI, Pydantic, Uvicorn
featured: false
featured_order: 5
repository: https://github.com/thesamhith/Barista-Brews-API
thumbnail: /assets/img/barista-brews-thumbnail.svg
metrics:
  - label: CRUD endpoints
    value: "4"
  - label: HTTP methods
    value: "4"
  - label: Data model
    value: "Pydantic"
demonstrates:
  - REST API endpoint design
  - Request validation with Pydantic
  - Create, read, update, and delete operations
  - Python and FastAPI fundamentals
role: API design, data modelling, endpoint development, request validation, and local testing.
lessons: Building a small API made learning the mechanics of exposing, validating, and manipulating data through HTTP much more concrete.
---

## The question

**How do I turn a simple Python data structure into a usable web API?**

I built Barista Brews as a focused exercise in understanding what happens between a client request and the underlying data.

Rather than starting with a database or a complex application, I kept the implementation deliberately small: one data model, an in-memory collection, and a set of REST endpoints covering the full CRUD lifecycle.

## What I built

The API uses **FastAPI** to define the routes and **Pydantic** to model and validate incoming brew data.

Each brew contains an ID, name, and description:

```json
{
  "id": 1,
  "name": "Latte",
  "desc": "Espresso with steamed milk"
}
```

From there, the API exposes four core operations:

| Method | Endpoint           | Purpose                 |
| ------ | ------------------ | ----------------------- |
| GET    | `/Brews`           | Retrieve all brews      |
| POST   | `/Brews`           | Add a new brew          |
| PUT    | `/Brews/{brew_id}` | Update an existing brew |
| DELETE | `/Brews/{brew_id}` | Remove a brew           |
|        |                    |                         |

_The project also uses FastAPI's interactive API documentation during local development, making it possible to test the endpoints directly through the generated interface._

## Under the hood

The implementation is intentionally simple.

A Python list acts as the temporary data store, while the `Coffee` Pydantic model defines the structure expected by the API. FastAPI handles routing the incoming HTTP requests to the corresponding Python functions.

The basic flow is:

**Request → validation → endpoint logic → data operation → response**

This gave me a practical way to understand how REST APIs connect HTTP methods with application logic.

## A deliberate limitation

The API currently stores everything **in memory**.

That keeps the project easy to understand and test, but it also means all brews disappear whenever the server restarts. A production version would replace the in-memory list with persistent database storage and introduce more robust HTTP status codes and error handling.

For this project, that limitation is intentional: the goal was to understand the API fundamentals by building one and not adding infrastructure around them.

## Project notes

The API was built and tested locally using Python, FastAPI, Uvicorn, and Pydantic.

The complete implementation and setup instructions are available in the GitHub repository.
