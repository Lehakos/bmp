import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Divider from 'material-ui/Divider';
import { ifProp, prop } from 'styled-tools';

const Wrapper = styled.div`
  ${ifProp('horizontal', css`
    display: flex;

    > * {
      margin-right: ${prop('columnGutter', '10px')};
      margin-left: ${prop('columnGutter', '10px')};

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  `)}

  ${ifProp('center', 'justify-content: center;')}

  > * {
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: ${({ marginBottom }) => marginBottom || '15px'};

    ${ifProp('noGap', 'margin-bottom: 0;')}
    ${ifProp('sm', 'margin-bottom: 10px;')}
    ${ifProp('md', 'margin-bottom: 20px;')}
    ${ifProp('l', 'margin-bottom: 25px;')}
    ${ifProp('xl', 'margin-bottom: 30px;')}
  }
`;

const Group = ({ divider, children, ...props }) => (
  <Wrapper
    {...props}
  >
    {Children.toArray(children)}
    {
      divider &&
      <Divider />
    }
  </Wrapper>
);

Group.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
};

export default Group;
