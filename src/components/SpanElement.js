import React from 'react';

import { injectIntl } from 'react-intl';

{
    /* TODO: Only for translation purposes, must be refactored */
}
const SpanElement = props => {
    const {
        intl: { messages }
    } = props;
    return <span {...props}>{`${messages[props.text]}`}</span>;
};

export default injectIntl(SpanElement);
