# Local Events

## Explanations

`npm run prototype` sets env variable PROTOTYPE which is used in webpack.dev.js to tell devServer open page "prototype.html" instead of "/". Use this to play around with prototyping with templates/prototype.html and js/prototype.js.

`npm run dev` builds app from js/index.js and templates/index.js and start webpack-dev-server with HRM (also for template files!).

`npm run server` builds app from js/index.js and templates/index.js but starts an Express server with webpack-dev-middle. HRM for templates does not work in this case. Use this if you need to run both a dev server and an Express server.

config/webpack.common.js resolves 'src' to src folder. eslint-import-resolver-webpack is used to resolve connrectly by eslint. See import/resolver settings in .eslintrc.json file.

public folder is copied to dist/public to handle static files.

## Deployment

https://hstream71.github.io/local-events/

https://hstream71.github.io/local-events/prototype.html

## Possible improvements

- webpack-cache-loader
