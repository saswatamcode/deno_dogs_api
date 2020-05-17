[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![GitHub forks](https://img.shields.io/github/forks/saswatamcode/deno_dogs_api?style=social)](https://GitHub.com/saswatamcode/deno_dogs_api/network/)
[![GitHub stars](https://img.shields.io/github/stars/saswatamcode/deno_dogs_api?style=social)](https://GitHub.com/saswatamcode/deno_dogs_api/stargazers/)
[![GitHub issues](https://img.shields.io/github/issues/saswatamcode/deno_dogs_api.svg)](https://GitHub.com/saswatamcode/deno_dogs_api/issues/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript-125x28.png?v=101)](https://github.com/ellerbrock/typescript-badges/)

# Deno Dogs API
A simple API built with [Deno](https://deno.land/) which lets you perform CRUD operations on a database of dogs.
Uses [Abc](https://deno.land/x/abc), [MongoDB](https://deno.land/x/mongo) and [Denv](https://deno.land/x/denv).

## To Run
- Install [Deno](https://deno.land/manual/getting_started/installation)
- Clone into repo
- Run `deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable server.ts `
- Visit `localhost:8000`

## Routes
- GET `/dogs` : Fetches list of all dogs
- POST `/dogs` : Let's you create a dog
```
{
  "name": "Cheddar",
  "breed": "Corgi",
  "age": 11
}
```
- GET `/dogs/:id` : Fetch a single dog
- PUT `/dogs/:id` : Update details of a dog
- DELETE `/dogs/:id` : Delete a dog
