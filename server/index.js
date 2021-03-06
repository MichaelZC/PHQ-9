import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import webpackConfig from '../webpack.config';
import config from './service-config';
import App from '../core/app';
import getStore from '../core/store/getStore';

const {
  APP_PORT,
} = config;

const app = new Express();

// WEBPACK STUFF STARTS --------->
// 1. configuration, 2. dev env 3. hot reload
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(
  compiler,
  { noInfo: true, publicPath: webpackConfig.output.publicPath }
));
app.use(webpackHotMiddleware(compiler));
// <------- WEBPACK STUFF ENDS

// We want to render a version of our app on the initial request.
// we'll pre-render our app on the server with an initial state, then send both down
function intialHTML(appHTML, state) {
  return `
    <!doctype html>
    <html>
      <head>
      </head>
      <body style="background-color: #E0F7FA">
        <div>
          <div id="root">${appHTML}</div>
          <script>
            window.initState = ${JSON.stringify(state).replace(/</g, '\\x3c')}
          </script>
          <script src="/static/bundle.js"></script>
        </div>
      </body>
    </html>
    `;
}

function entry(req, res) {
  const store = getStore();

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  res.send(intialHTML(html, store.getState()));
}

// Main entry, we'll serve the app through here.
app.use(entry);

app.listen(APP_PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`SERVING FROM ${APP_PORT}`);
  }
});
