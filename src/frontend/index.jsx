import React from 'react';
import { render } from 'react-dom';
// import App from './app';
// import css
// import './public/css/app.style.css';

// import sass
import '../../public/scss/main.style.scss';

// render(<App />, document.getElementById('app-root'));

// code splitting: dynamic import
import(/* webpackChunkName: "app" */ './app').then(({ default: App }) => render(<App />, document.getElementById('app-root')));

if (module.hot) {
    module.hot.accept();
}