import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';

import { HeaderComponent } from './components/pages/includes/header.component';
import { FooterComponent } from './components/pages/includes/footer.component';

import { logo } from '../../public/img/image-files';

// code splitting with react-loadable
const LoadableHomeComponent = Loadable({
    loader: () => import('./components/pages/home/home.component'),
    loading: () => <div>Loading...</div>, // loading can be a class component or a function
});

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <HeaderComponent appLogo={ logo } brandName={ 'Webpack-4' } />

                <main role="main">
                    <LoadableHomeComponent />
                </main>

                <FooterComponent />
            </Fragment>
        );
    }
}