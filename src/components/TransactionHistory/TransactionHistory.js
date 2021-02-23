import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead>
      <tr>
        <th className={styles.type}>Type</th>
        <th className={styles.amount}>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(item => (
      <Transaction
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
      />
    ))}
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
