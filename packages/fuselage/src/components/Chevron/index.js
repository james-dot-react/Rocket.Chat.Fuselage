import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { sizePropType } from '../../propTypes/sizes';
import { Box } from '../Box';
import { Icon } from '../Icon';

export function Chevron({
  up,
  right,
  down,
  left,
  size,
  ...props
}) {
  const children = useMemo(() => <Icon name='chevron-down' size={size} />, [size]);

  return <Box
    componentClassName='rcx-chevron'
    is='span'
    children={children}
    mod-up={up}
    mod-right={right}
    mod-down={down}
    mod-left={left}
    {...props}
  />;
}

Chevron.propTypes = {
  up: PropTypes.bool,
  right: PropTypes.bool,
  down: PropTypes.bool,
  left: PropTypes.bool,
  size: sizePropType,
};
