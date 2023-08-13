import PropTypes from 'prop-types';
import { TransactionTable, TransactionThf } from './Transaction.styled';
import { TransactionItem } from './transactionItem';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionThf>Type</TransactionThf>
          <TransactionThf>Amount</TransactionThf>
          <TransactionThf>Currency</TransactionThf>
        </tr>
      </thead>

      <tbody>
        {transactions?.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            amount={amount}
            type={type}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
