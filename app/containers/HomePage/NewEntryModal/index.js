import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import { CloseButton } from './style';
import NewEntryForm from './NewEntryForm';

const NewEntryModal = ({
  isOpen,
  onRequestClose,
  cities,
  countries,
  onSubmit,
}) => (
  <Dialog
    title="Добавить новую запись"
    open={isOpen}
    onRequestClose={onRequestClose}
    autoScrollBodyContent
  >
    <CloseButton title="Закрыть" onClick={onRequestClose}>
      <CloseIcon />
    </CloseButton>
    <NewEntryForm
      cities={cities}
      countries={countries}
      onSubmit={onSubmit}
      onCancel={onRequestClose}
    />
  </Dialog>
);

NewEntryModal.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  countries: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default NewEntryModal;
