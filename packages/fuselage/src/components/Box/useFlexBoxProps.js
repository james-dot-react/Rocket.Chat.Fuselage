import { css } from '@rocket.chat/css-in-js';

import { useCss } from './useCss';

export const useFlexBoxProps = ({
  className,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  ...props
}) => {
  const flexBoxClassName = useCss([
    alignItems !== undefined && css`align-items: ${ alignItems } !important;`,
    alignContent !== undefined && css`align-content: ${ alignContent } !important;`,
    justifyItems !== undefined && css`justify-items: ${ justifyItems } !important;`,
    justifyContent !== undefined && css`justify-content: ${ justifyContent } !important;`,
    flexWrap !== undefined && css`flex-wrap: ${ flexWrap } !important;`,
    flexDirection !== undefined && css`flex-direction: ${ flexDirection } !important;`,
    flexGrow !== undefined && css`flex-grow: ${ flexGrow } !important;`,
    flexShrink !== undefined && css`flex-shrink: ${ flexShrink } !important;`,
    flexBasis !== undefined && css`flex-basis: ${ flexBasis } !important;`,
    justifySelf !== undefined && css`justify-self: ${ justifySelf } !important;`,
    alignSelf !== undefined && css`align-self: ${ alignSelf } !important;`,
    order !== undefined && css`order: ${ order } !important;`,
  ], [
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    flexWrap,
    flexDirection,
    flexGrow,
    flexShrink,
    flexBasis,
    justifySelf,
    alignSelf,
    order,
  ]);

  return {
    className: [
      ...className,
      flexBoxClassName,
    ],
    ...props,
  };
};
