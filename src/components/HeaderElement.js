import React from 'react';

import { injectIntl } from 'react-intl';

{/* TODO: Only for translation purposes, must be refactored */
}
const HeaderElement = props => {
    const { intl: { messages } } = props;
    return (
        React.createElement(props.tag, {}, messages[props.content])
    );
};

export default injectIntl(HeaderElement);
