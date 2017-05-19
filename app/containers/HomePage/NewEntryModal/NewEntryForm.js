import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import { Group } from 'components/Form';
import {
  Select,
  TextField,
  AutoComplete,
} from 'components/ReduxForm';
import { required, minLength } from 'utils/validate-rules';

const NewEntryForm = ({
  handleSubmit,
  cities,
  countries,
  onCancel,
}) => (
  <form onSubmit={handleSubmit}>
    <Group horizontal noGap>
      <Field
        name="name"
        label="Название"
        fullWidth
        component={TextField}
        validate={required}
      />
      <Field
        name="organization"
        label="Организация"
        fullWidth
        component={TextField}
        validate={required}
      />
    </Group>

    <Group horizontal noGap>
      <Field
        name="city"
        label="Город"
        dataSource={cities}
        fullWidth
        component={AutoComplete}
        validate={required}
      />
      <Field
        name="country"
        label="Страна"
        options={countries}
        fullWidth
        component={Select}
        validate={required}
      />
    </Group>

    <Group horizontal xl>
      <Field
        name="description"
        label="Описание"
        multiLine
        fullWidth
        component={TextField}
        validate={[required, minLength(5)]}
      />
    </Group>

    <Group horizontal center columnGutter="5px">
      <RaisedButton
        label="Отменить"
        type="button"
        onClick={onCancel}
      />
      <RaisedButton
        label="Добавить"
        type="submit"
        primary
      />
    </Group>
  </form>
);

NewEntryForm.propTypes = {
  cities: PropTypes.array,
  countries: PropTypes.array,
  handleSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default reduxForm({
  form: 'newEntryForm',
})(NewEntryForm);
