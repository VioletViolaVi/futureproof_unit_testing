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

- `npm run test`: to run tests in terminal

- `"test": "jest --verbose"`:
  - to add more detail for test results add `--verbose`
  - Other ways:
    - `"jest":{"verbose": true}`
    - `const config = {verbose: true}; module.exports = config;`
      - this is the most ideal way as it maintains separation of concerns
