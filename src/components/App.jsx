import { Statistics } from './StatisticsList/statisticsList';
import statsEl from '../data.json';
import profilItems from '../user.json';
import { FriendList } from './FriendList/friendList.js';
import friendsList from '../friends.json';
import { TransactionHistory } from '../components/TransactionHistory/transactionHistory.js';
import transactionHistory from '../transactions.json';
import { Profile } from './ProfilSocial/profil.js';

const { username, tag, location, avatar, stats: userStats } = profilItems;

export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={userStats}
      />
      <Statistics title="" lists={statsEl} />
      <FriendList friends={friendsList} />
      <TransactionHistory transactions={transactionHistory} />
    </div>
  );
};
