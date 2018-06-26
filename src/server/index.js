import express from 'express';
import { matchRoutes } from 'react-router-config';
import { PORT, routesHandler } from '../helper';
import renderer from './renderer/renderer';
import HeaderRoutes from '../app/components/Header/Routes';
import MainRoutes from '../app/containers/Main/Routes';
import createStore from './store';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {

  const store = createStore();

  console.log('ACTUAL STORE',  store.getState())

  const promises = matchRoutes(MainRoutes, req.path)
    .map((res) => {
      return res.route.loadData ? res.route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        res.send(content);
      });
});

app.listen(PORT, () => {
  console.log(`Listening to server on port ${PORT}`);
});
