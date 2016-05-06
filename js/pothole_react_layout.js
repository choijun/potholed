let ZipcodeForm = React.createClass({});
let ZipcodeInput = React.createClass({});



let PotholeZipcode = React.createClass({
  render: function() {
    return (
      <tr><th>{zipcode}</th></tr>
    )
  }
});

let PotholeAddress = React.createClass({
  render: function() {
    return (
      {address}
    )
  }
});

let PotholeRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td><PotholeAddress address={address} /></td>
        <td>--</td>
        <td>{number_patched}</td>
      </tr>
    )
  }
});

let PotholeTable = React.createClass({
  render: function() {
    var rows = [];
    potholes.forEach(function(product) {
      if (pothole.status === 'Completed') {
        rows.push(<PotholeRow address={pothole.address} date_open={pothole.creation_date} date_closed={pothole.completion_date} number_patched={pothole.number_of_potholes_filled_on_block} />);
      }
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Time Open</th>
            <th># of Holes Patched</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});


let FilterablePotholeTable = React.createClass({
  render: function() {
    return (
      <PotholeTable potholes={potholes} />
    );
  }
});
