import React from 'react';
import PotholeDuration from './pothole-duration';

class PotholeRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td><strong>{this.props.address}</strong></td>
        <td><PotholeDuration start="{this.props.date_open}" end="{this.props.date_closed}" /></td>
        <td>{this.props.number_patched}</td>
      </tr>
    )
  }
};

export default PotholeRow;
