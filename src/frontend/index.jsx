import React from 'react';
import { render } from 'react-dom';
import App from './app';

// import css
// import './public/css/app.style.css';

// import sass
import '../../public/scss/main.style.scss';

render(
    /* jshint ignore:start */
    <App />, document.getElementById('app-root'),
    /* jshint ignore:end */
);

if (module.hot) {
    module.hot.accept();
}