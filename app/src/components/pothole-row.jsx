import React from 'react';

class PotholeRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td><strong>{this.props.address}</strong></td>
        <td>{this.props.number_patched}</td>
      </tr>
    )
  }
};

export default PotholeRow;
