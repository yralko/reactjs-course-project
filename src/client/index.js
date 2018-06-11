import React from 'react';
import { Router } from 'react-router-dom';
import { hydrate } from 'react-dom';
import Root from '../app/Root';

hydrate(<Root Router={Router} />, document.getElementById('root'));
