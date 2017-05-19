/*
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table';
import Select from 'components/Select';
import TextField from 'material-ui/TextField';

import NewEntryModal from './NewEntryModal';
import makeSelectHomePage, {
  makeTableData,
  makeCities,
} from './selectors';
import { tableHeaders, countryFilters } from './constants';
import {
  loadData,
  changeFilter,
  search,
  closeModal,
  openModal,
  addEntry,
} from './actions';
import { Header, StyledButton } from './style';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.openNewEntryModal = ::this.openNewEntryModal;
  }

  componentDidMount() {
    this.props.loadData();
  }

  openNewEntryModal() {
    this.props.openModal('newEntry');
  }

  render() {
    const { tableData, cities } = this.props;
    const { filter, searchQuery, modal } = this.props.homePage;

    return (
      <div>
        <Helmet
          title="Главная"
        />
        <Header>
          <Select
            label="Фильтр по стране"
            options={countryFilters}
            value={filter}
            onChange={this.props.changeFilter}
          />
          <TextField
            floatingLabelText="Поиск по названию"
            value={searchQuery}
            onChange={this.props.search}
          />
          <StyledButton
            label="Добавить новую запись"
            onClick={this.openNewEntryModal}
            primary
          />
        </Header>
        <Table
          sortable
          body={tableData}
          header={tableHeaders}
        />
        <NewEntryModal
          isOpen={modal === 'newEntry'}
          onRequestClose={this.props.closeModal}
          cities={cities}
          countries={countryFilters.slice(1)}
          onSubmit={this.props.addEntry}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  addEntry: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.string),
  changeFilter: PropTypes.func,
  closeModal: PropTypes.func,
  homePage: PropTypes.object,
  loadData: PropTypes.func,
  openModal: PropTypes.func,
  search: PropTypes.func,
  tableData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  tableData: makeTableData(),
  cities: makeCities(),
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (e, ind, value) => dispatch(changeFilter(value)),
  closeModal: () => dispatch(closeModal()),
  loadData: () => dispatch(loadData()),
  openModal: (modal) => dispatch(openModal(modal)),
  search: (e, value) => dispatch(search(value)),
  addEntry: (data) => dispatch(addEntry(data.toJS())),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
