import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import StatisticList from './components/Statistic/StatisticList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user.json';
import friends from './components/FriendList/friends.json';
import statistics from './components/Statistic/statistical-data.json';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList stats={statistics} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
