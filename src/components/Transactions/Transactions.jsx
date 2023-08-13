import PropTypes from 'prop-types';
import css from 'components/Transactions/Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

const Transactions = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>Type</td>
      <td>Amount</td>
      <td>Currency</td>
    </tr>
  );
};

TransactionHistory.PropTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
