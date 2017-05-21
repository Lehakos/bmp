/**
*
* Message
*
*/

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import { colors } from './constants';

const Message = ({ children, error }) => {
  const style = {
    textAlign: 'center',
  };

  if (error) {
    style.color = colors.error;
  }

  return (
    <Subheader style={style}>
      {
        error &&
        <ErrorIcon color={colors.error} />
      }
      {Children.toArray(children)}
    </Subheader>
  );
};

Message.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node,
};

export default Message;
