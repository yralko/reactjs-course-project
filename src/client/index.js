import React from 'react';
import { hydrate } from 'react-dom';
import Test from '../server/Test';

hydrate(<Test />, document.getElementById('root'));
