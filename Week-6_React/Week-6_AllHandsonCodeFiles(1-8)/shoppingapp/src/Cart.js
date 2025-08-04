import React from 'react';

export class Cart extends React.Component {
  render() {
    return (
      <table className="green-text" border="1" style={{ width: "60%", margin: "auto", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.item.map((item, index) =>
              <tr key={index}>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}
