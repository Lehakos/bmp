/**
*
* Select
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function renderOption(option) {
  return (
    <MenuItem
      key={option.value}
      value={option.value}
      primaryText={option.label}
    />
  );
}

function Select({ options, value, onChange, label }) {
  return (
    <SelectField
      floatingLabelText={label}
      value={value}
      onChange={onChange}
    >
      {options.map(renderOption)}
    </SelectField>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default Select;
