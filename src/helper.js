export const PORT = 3000;

export function htmlMarkup(embeddedApp) {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The HTML5 Herald</title>
    <base href="/" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root">${embeddedApp}</div>
    <script src="bundle.js"></script>
  </body>
  </html>
  `;
}

export function concatQueryParams(store) {
  return Object.entries(store.getState().query)
    .map(v => `${v[0]}=${v[1]}`)
    .join('&');
}
