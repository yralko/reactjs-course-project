export const PORT = 4001;

export function concatQueryParams(query) {
  return Object.entries(query)
    .map(v => `${v[0]}=${v[1]}`)
    .join('&');
}

export function routesHandler(routes, req, store, matchRoutes) {
  return matchRoutes(routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if ('PROMISE',promise) {
        console.log(promise);
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    })
}
