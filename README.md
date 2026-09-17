# Portfolio website

Personal portfolio site built with Jekyll and hosted on GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open `http://localhost:4000`.

## Before publishing

1. Replace the placeholder identity, social links, and domain in `_config.yml`.
2. Update the content in `about.md`, `experience.md`, `skills.md`, and `resume.md`.
3. Replace the KMac and Ride-App project placeholders in `_projects/`.
4. Add `resume.pdf` to the repository root if you want the Resume page to link to a downloadable file.
5. Create two separate GitHub repositories named `KMac` and `Ride-App`, then update the project links.
6. Add your headshot under `assets/img/` and set `author.profile_image` in `_config.yml`.
7. Add your finished `resume.pdf` to the repository root so the inline preview and download button work.

## Privacy-friendly analytics

The site includes an optional GoatCounter integration. Create a GoatCounter site for `thesamhith.github.io`, then paste the full count endpoint into `_config.yml`:

```yaml
analytics:
  goatcounter_endpoint: "https://YOURCODE.goatcounter.com/count"
```

Leave it blank to keep analytics disabled.

## GitHub setup

Create a repository named `thesamhith.github.io`, copy these files into it, and push to the `main` branch. In the repository settings, open **Pages** and set the source to **GitHub Actions**. The included workflow will build and deploy the site after each push.
