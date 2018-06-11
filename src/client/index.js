import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import Root from '../app/Root';

hydrate(<Root Router={BrowserRouter} />, document.getElementById('root'));
