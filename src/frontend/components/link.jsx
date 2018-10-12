import React from 'react';
import PropTypes from 'prop-types';

export class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // destructuring props
        const { linkHref, linkChildrenProps, children } = this.props;

        /* jshint ignore:start */
        return (
            <React.Fragment>
                <a href={ linkHref } { ...linkChildrenProps }>{ children }</a>
            </React.Fragment>
        );
        /* jshint ignore:end */
    }
}

// props validation
Link.propType = {
    linkHref: PropTypes.string.isRequired,
    linkChildrenProps: PropTypes.any,
    children: PropTypes.any,
};