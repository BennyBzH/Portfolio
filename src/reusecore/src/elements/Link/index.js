import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';
import LinkCustomStyle from './link.style';

const LinkWrapper = styled('a')(
  { textDecoration: 'none' },
  base,
  themed('Link')
);

const Link = ({ children, ...props }) => (
  <LinkWrapper {...props}>{children}</LinkWrapper>
);

const LinkCustom = ({children, ...props}) => (
  <LinkCustomStyle {...props}>{children}</LinkCustomStyle>
);
export default Link;
export { LinkCustom };

Link.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.any.isRequired,
  ...base.propTypes
};

Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};


