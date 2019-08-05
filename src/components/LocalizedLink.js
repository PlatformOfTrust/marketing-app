import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const pathMap = {
    cases: 'kayttotapaukset',
    news: 'ajankohtaiset',
    events: 'tapahtumat',
    about: 'tietoameista',
    contact: 'yhteystiedot'
};

const LocalizedLink = ({ to, intl: { locale, defaultLocale }, ...props }) => {
    let path = to;

    if (locale !== defaultLocale) {
        path = `/${locale}${to}`;
        Object.keys(pathMap).map(key => {
            path = path.replace(key, pathMap[key]);
        });
    }

    return <Link {...props} to={path} />;
};

LocalizedLink.propTypes = {
    to: PropTypes.string.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(LocalizedLink);
