import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../link';

export class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // destructuring props
        const { appLogo, brandName } = this.props;

        // nav links
        const links = [
            {
                aHref: '/',
                name: 'Home',
            },
            {
                aHref: '#',
                name: 'Portfolio',
            },
            {
                aHref: '#',
                name: 'Services',
            },
            {
                aHref: '#',
                name: 'Contact',
            },
        ];

        /* jshint ignore:start */
        return (
            <header>
                <nav className={ 'nav' }>
                    <ul className={ 'nav-ul' }>
                        <li><img src={ appLogo } alt="react logo" id="appLogo" height="75px" width="75px" /></li>
                        <li id={ 'brand' } className={ 'text-center' }>
                            <strong>{ brandName }</strong> <br />
                            *** with *** <br />
                            <strong>REACT</strong>
                        </li>
                    </ul>
                    <ul className={ 'nav-ul' }>
                        {
                            links.map(link => <li key={ link.name } className={ 'active' }><Link linkHref={ link.aHref }>{ link.name }</Link></li>)
                        }
                    </ul>

                    <ul className={ 'nav-ul push-right' }>
                        <li>
                            <Link linkHref={ '#' }>Signup</Link>
                        </li>
                        <li>
                            <Link linkHref={ '#' }>Signout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
        /* jshint ignore:end */
    }
}

// props validation
HeaderComponent.propTypes = {
    appLogo: PropTypes.any,
    brandName: PropTypes.string.isRequired,
};

// default props
HeaderComponent.defaultProps = {
    appLogo: '',
};