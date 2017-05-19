import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';

const AutoCompleteRedux = ({
  input,
  meta: {
    error,
    touched,
  },
  label,
  ...props
}) => (
  <AutoComplete
    floatingLabelText={label}
    searchText={input.value}
    onUpdateInput={input.onChange}
    errorText={touched && error ? error : null}
    {...props}
  />
);

AutoCompleteRedux.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};

export default AutoCompleteRedux;
