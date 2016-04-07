import React from 'react';
import PotholeTable from './components/pothole-table';

class FilterablePotholeTable extends React.Component {

  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      filterText: '',
      inStockOnly: false
    }

  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <PotholeTable potholes={this.props.potholes} />
    )
  }

}

export default FilterablePotholeTable;
