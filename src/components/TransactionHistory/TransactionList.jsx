import css from './TransactionHistory.module.css';

export const TransactionList = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </tr>
  );
};
