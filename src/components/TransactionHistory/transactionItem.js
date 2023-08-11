import PropTypes from 'prop-types';
import { TransactionTd } from './Transaction.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TransactionTd>{type}</TransactionTd>
      <TransactionTd>{amount}</TransactionTd>
      <TransactionTd>{currency}</TransactionTd>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
