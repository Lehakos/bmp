/**
*
* Loading
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Subheader from 'material-ui/Subheader';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const progressStyle = {
  verticalAlign: 'middle',
};

const subheaderStyle = {
  display: 'inline-block',
  width: 'auto',
  verticalAlign: 'middle',
};

function Loading({ text }) {
  return (
    <Wrapper>
      <CircularProgress style={progressStyle} size={20} />
      {' '}
      <Subheader style={subheaderStyle}>
        {text}
      </Subheader>
    </Wrapper>
  );
}

Loading.defaultProps = {
  text: 'Загрузка',
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
