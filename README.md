# Resume

Resume built with React and Typescript and hosted in Netlify.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the template for `Typescript`.

## Run locally

To run the code locally, first clone the repo, the execute `yarn install` and finally `yarn start`.

Another option is executing `yarn build:serve`, which will first build the project and the serve it.

## Interesting scripts

- `yarn build:serve`: Builds the app and serves it. The final URLs where the website is accesible will be printed in the terminal.
- `yarn dev`: In case you have a Netlify account, you can connect it and then deploy it using Netlify.
- `yarn lint:fix`: Checks all the linting errors and tries to fix all of them.
- `yarn prettier:fix`: Similar, but in this case it fixes all the prettier format errors found.
- `yarn check:full`: Simulates the pipeline executed on every commit. It checks the typing, the linting and the code format.
