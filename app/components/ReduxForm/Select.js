import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select';

const SelectRedux = ({
  input,
  meta: {
    error,
    touched,
  },
  ...props
}) => (
  <Select
    value={input.value}
    onChange={(e, ind, value) => input.onChange(value)}
    errorText={touched && error ? error : null}
    {...props}
  />
);

SelectRedux.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default SelectRedux;
