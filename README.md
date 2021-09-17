# 📊 data.octoprint.org

Visualizations created from [data exports](https://data.octoprint.org/export/) from the
[Anonymous Usage Tracking plugin](https://tracking.octoprint.org).

Updated hourly.

## Development

Install dependencies:

    $ npm install

Start development server:

    $ npm start 

Create production build:

    $npm build

## Deployment

A GitHub Action workflow is in place to deploy a new production build to the `gh-pages` branch
upon push to the `react` branch.
