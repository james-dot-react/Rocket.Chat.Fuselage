import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

export function Callout({
  children,
  title,
  type = 'info',
  ...props
}) {
  const iconName = (type === 'info' && 'info-circled')
    || (type === 'success' && 'checkmark-circled')
    || (type === 'warning' && 'warning')
    || (type === 'danger' && 'ban');

  return <Box componentClassName='rcx-callout' is='section' mod-type={type} {...props}>
    <Icon name={iconName} size='x20' />
    <Box componentClassName='rcx-callout__wrapper'>
      {title && <Box componentClassName='rcx-callout__title' is='h1'>{title}</Box>}
      <Box componentClassName='rcx-callout__children'>
        {children}
      </Box>
    </Box>
  </Box>;
}

Callout.defaultProps = {
  type: 'info',
};

Callout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
};
