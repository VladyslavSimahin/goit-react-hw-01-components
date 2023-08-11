import PropTypes from 'prop-types';
import { TransactionTable } from './Transaction.styled';
import { TransactionItem } from './transactionItem';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
