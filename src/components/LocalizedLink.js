import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const LocalizedLink = ({ to, intl: { locale, defaultLocale }, ...props }) => {
    const path = locale === defaultLocale ? to : `/${locale}${to}`;
    return <Link {...props} to={path} />;
};

LocalizedLink.propTypes = {
    to: PropTypes.string.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(LocalizedLink);
