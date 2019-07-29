import React from 'react';

import { injectIntl } from 'react-intl';

{/* TODO: Only for translation purposes, must be refactored */}
const HeaderElement = props => {
    const { intl: { messages } } = props;
    return (
        <h5>{`${messages[props.content]}`}</h5>
    );
};

export default injectIntl(HeaderElement);
