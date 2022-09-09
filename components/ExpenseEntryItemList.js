import React from 'react';
import ReactDom from 'react-dom';
import '../style.css';

export default class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { info: 'test ok' };
  }

  render() {
    //this.setState({ info: 'test ok1' });

    this.setState((state, props) => ({
      info: 'ok test 22222'
    }));

    const lists = this.props.lists.map((item) => (
      <tr key={item.key}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.spendDate}</td>
        <td>{item.category}</td>
        <td>
          <a href="#">{this.state.info}</a>
        </td>
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{lists}</tbody>
        </table>
      </div>
    );
  }
}
