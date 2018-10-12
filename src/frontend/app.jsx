import React, { Component, Fragment } from 'react';

import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/pages/includes/header.component';
import { FooterComponent } from './components/pages/includes/footer.component';

import { logo } from '../../public/img/image-files';

export default class App extends Component {
    render() {
        /* jshint ignore:start */
        return (
            <Fragment>
                {/* -- Header component -- */ }
                <HeaderComponent appLogo={ logo } brandName={ 'Webpack-4' } />

                <main role="main">
                    <HomeComponent />
                </main>

                {/* -- Footer component -- */ }
                <FooterComponent />
            </Fragment>
        );
        /* jshint ignore:end */
    }
}