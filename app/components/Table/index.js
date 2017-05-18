/**
*
* Table
*
*/

import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import {
  Table as MaterialTable,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const StyledArrowIcon = styled(ArrowIcon)`
  transform: ${({ direction }) => direction === 'down' ? 'rotate(0)' : 'rotate(-180deg)'};
`;

const SortButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  opacity: 0;
  cursor: pointer;
`;

class Table extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      sort: {
        index: props.sortIndex || null,
        direction: props.sortDirection || null,
      },
      data: props.body || [],
    };

    this.renderRow = this.renderRow.bind(this);
    this.renderRowColumn = this.renderRowColumn.bind(this);
    this.renderHeaderColumn = this.renderHeaderColumn.bind(this);
    this.onHeaderColumnClick = this.onHeaderColumnClick.bind(this);
    this.sortTable = this.sortTable.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.body === this.props.body) {
      return;
    }

    this.sortTable(newProps.body);
  }

  onHeaderColumnClick(e, index) {
    if (!this.props.sortable) {
      return;
    }

    e.preventDefault();

    if (this.state.sort.index === index) {
      this.toggleSortDirection();
    } else {
      this.changeSortIndex(index);
    }
  }

  sortTable(data = this.state.data, cb) {
    const { sort: { index, direction } } = this.state;
    const newData = [...data].sort((row1, row2) => {
      const toDown = direction === 'down';
      const a = row1[index] === null ? '' : row1[index];
      const b = row2[index] === null ? '' : row2[index];

      if (a > b) {
        return toDown ? -1 : 1;
      } else if (a < b) {
        return toDown ? 1 : -1;
      }

      return 0;
    });

    if (this.props.onSort) {
      this.props.onSort({
        sortDirection: this.state.sort.direction,
        sortIndex: this.state.sort.index,
      });
    }

    this.setState({
      data: newData,
    }, cb);
  }

  changeSortIndex(index) {
    this.setState({
      sort: {
        ...this.state.sort,
        index,
      },
    }, this.sortTable);
  }

  toggleSortDirection() {
    const newDirection = this.state.sort.direction === 'down' ? 'up' : 'down';

    this.setState({
      sort: {
        ...this.state.sort,
        direction: newDirection,
      },
    }, this.sortTable);
  }

  renderHeaderColumn(data, ind) {
    const { sort } = this.state;
    const style = {
      position: 'relative',
    };

    return (
      <TableHeaderColumn
        style={style}
        role="button"
        key={uniqueId()}
      >
        <SortButton onClick={(e) => this.onHeaderColumnClick(e, ind)} />
        {data}
        {' '}
        {
          ind === sort.index &&
          <StyledArrowIcon
            style={{ color: 'inherit' }}
            color="currentColor"
            direction={sort.direction}
          />
        }
      </TableHeaderColumn>
    );
  }

  renderHeader(data) {
    return (
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          {data.map(this.renderHeaderColumn)}
        </TableRow>
      </TableHeader>
    );
  }

  renderRowColumn(content) {
    return <TableRowColumn key={uniqueId()}>{content}</TableRowColumn>;
  }

  renderRow(data) {
    return (
      <TableRow key={uniqueId()}>
        {data.map(this.renderRowColumn)}
      </TableRow>
    );
  }

  renderBody() {
    return (
      <TableBody displayRowCheckbox={false}>
        {this.state.data.map(this.renderRow)}
      </TableBody>
    );
  }

  render() {
    const { children, header, ...props } = this.props;
    return (
      <MaterialTable {...props}>
        {
          !!children &&
          Children.toArray(children)
        }
        {
          !children && !!header &&
          this.renderHeader(header)
        }
        {
          !children &&
          this.renderBody()
        }
      </MaterialTable>
    );
  }
}

Table.propTypes = {
  children: PropTypes.node,
  header: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  body: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  sortIndex: PropTypes.number,
  sortDirection: PropTypes.oneOf(['up', 'down']),
  sortable: PropTypes.bool,
  onSort: PropTypes.func,
};

export default Table;
