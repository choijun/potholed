import React from 'react';
import PotholeTable from './components/pothole-table';

class FilterablePotholeTable extends React.Component {

  componentWillMount: function () {
    $.get(this.props.url, function (data) {
      this.setState(data);
    }.bind(this));
  },


  render() {
    return (
      <PotholeTable potholes={potholes} />
    );
  }
}

export default FilterablePotholeTable;
