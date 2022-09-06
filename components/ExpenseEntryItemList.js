import React from 'react';
import ReactDom from 'react-dom';
import '../style.css';

export default class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const lists = this.props.lists.map((item) => (
      <tr key={item.key}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.spendDate}</td>
        <td>{item.category}</td>
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{lists}</tbody>
        </table>
      </div>
    );
  }
}
