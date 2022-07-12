# Futureproof Unit Testing

This repository contains example code for unit testing with JavaScript.

## Installation

- Install all necessary development packages with `npm install --save-dev`

## Development

All testing in this project is done using [Jest](https://jestjs.io/)

- Run tests with `npm run test`

## Extra

- Use `Powershell npm ...` if needed

  - `npm init`: leads to package.json file

  - `npm install`: used to install stuff

  - `npm install --save-dev jest`: to focus on building projects with jest as supposed to just using it

  - `npm install --save-dev coverage`: to focus on building projects with coverage as supposed to just using it

    - add to `.gitignore` once installed

  - `npm run test`: to run tests in terminal

- To add more detail for test results add `--verbose`

  - `"test": "jest --verbose"`:
  - Other ways:

    - `"jest":{"verbose": true}`
    - `const config = {verbose: true}; module.exports = config;`
      - this is the most ideal way as it maintains separation of concerns

- `Powershell npm run coverage`: to run coverage

- `"coverage": "jest --coverage"`: how much of our code is being tested
  - needs to put in `.gitignore`
