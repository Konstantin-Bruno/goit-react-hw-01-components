import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <li key={friend.id}>
        <Friend
          avatar={friend.avatar}
          name={friend.name}
          tag={friend.tag}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      </li>
    ))}
  </ul>
);

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
