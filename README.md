# Jones Software Automation Exercise

**Latest test report:** [GitHub Pages deploy](https://yaniv-simmer.github.io/jones-software-automation-exercise/)

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+

```bash
git clone https://github.com/yaniv-simmer/jones-software-automation-exercise.git
cd jones-software-automation-exercise
npm install
npx playwright install
```

Run the tests:

```bash
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

After a run, open the HTML report locally:

```bash
npx playwright show-report
```

## Part 1 — Automation

The test in [tests/request-callback-form.spec.ts](./tests/request-callback-form.spec.ts) automates the full callback flow:

1. Fills Name, Email, Phone, Company, and Website
2. Changes Number of Employees from 1–10 to **51–500** (bonus)
3. Captures a full-page screenshot before submit — saved in [playwright-report/data](./playwright-report/data), viewable in the local report [playwright-report/index.html](./playwright-report/index.html) or the [live report](https://yaniv-simmer.github.io/jones-software-automation-exercise/)
4. Clicks **Request a call back**
5. Verifies the thank-you page URL and heading
6. Logs success to the console

Tests run against Chromium, Firefox, and WebKit (configured in `playwright.config.ts`).

### CI

On every push or pull request to `main` or `dev`, GitHub Actions installs dependencies, runs the Playwright suite, and uploads the HTML report as an artifact.

On pushes to `main`, the latest report is also published to [GitHub Pages](https://yaniv-simmer.github.io/jones-software-automation-exercise/).

## Part 2 — Written Answers

See [Exercise-Part2-Answers.pdf](./Exercise-Part2-Answers.pdf) for the billing widget UI review, sample test cases, and product suggestions.
