import { Statistics } from './StatisticsList/statisticsList';
import statsEl from '../data.json';
import { ProfilSocial } from './ProfilSocial/profilSocial';
import profilItems from '../user.json';
import { FriendList } from './FriendList/friendList.js';
import friendsList from '../friends.json';
import { TransactionHistory } from '../components/TransactionHistory/transactionHistory.js';
import transactionHistory from '../transactions.json';

export const App = () => {
  return (
    <div>
      <ProfilSocial items={profilItems} />
      <Statistics lists={statsEl} />
      <FriendList friends={friendsList} />
      <TransactionHistory transactions={transactionHistory} />
    </div>
  );
};
