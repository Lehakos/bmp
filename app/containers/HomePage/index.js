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

import makeSelectHomePage, { makeTableData } from './selectors';
import { tableHeaders, countryFilters } from './constants';
import { loadData, changeFilter, search } from './actions';
import { Header } from './style';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { tableData } = this.props;
    const { filter, searchQuery } = this.props.homePage;

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
        </Header>
        <Table
          sortable
          body={tableData}
          header={tableHeaders}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  homePage: PropTypes.object,
  loadData: PropTypes.func,
  changeFilter: PropTypes.func,
  search: PropTypes.func,
  tableData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  tableData: makeTableData(),
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
  changeFilter: (e, ind, value) => dispatch(changeFilter(value)),
  search: (e, value) => dispatch(search(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
