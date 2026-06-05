# E-Commerce Automation Framework

A scalable end to end UI automation framework built using Playwright, Typescript, Page Object Model(POM), Fixtures, Allure Reporting, and Github Actions.

---

## Tech Stack
- Playwright
- Typescript
- Page Object Model(POM)
- Fixtures
- Allure Reporting
- Github Actions
- Faker
- Node.js

---

## Project Structure
```text
project-root
|
|--pages/
|   |--LoginPage.ts
|   |--ProductPage.ts
|   |--CartPage.ts
|   |--CheckoutPage.ts
|
|--tests/
|   |--login.spec.ts
|   |--product.spec.ts
|   |--cart.spec.ts
|   |--checkout.spec.ts
|
|--test-data/
|   |--loginData.ts
|   |--signUpData.ts
|
|--fixtures/
|   |--loginFixture.ts
|   |--paymentFixture.ts
|
|--utils/
|   |--userDataGenrator.ts
|   |--rolesGenerator.ts
|
|--allure-results/
|--allure-reports/
|
|--playwright.config.ts
|--package.json
|--README.md
```

---

## Framework Features

### Page Object Model
All page-specific locators and mehtods are maintained separtely to improve maintainbility and resuability.

### Test Data Managment
Test data is separated from test-scripts.

### Custom Fixturs
Resusable setup and login workflows.

### Allure Reporting

Rich execution reports with:
 - Test Steps
 - Severity
 - Features
 - Stories
 - Screenshots
 - Failure Details

### Github Actions
Automated execution on code changes

### Screnshots and Videos
Captured automatically on failures


## Installation

Clone the repo:
```bash
git clone <repo-url>
```

Install Dependencies:
```bash
npm install or npm i
```

Install Playwright Browsers:
```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test 
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

Run tests in UI mode:
```bash
npx playwright test --ui
```

## Playwright HTML Report
Generated automaticaly after execution

Open report:
```bash
npx playwright show-report
```

## Allure Reports

Generate report:
```bash
allure generate allure-results --clean -o allure-report
```

Open Report:
```bash
allure open
```
