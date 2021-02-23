import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.png';
import styles from './FriendList.module.css';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <ul className={styles.friend_list}>
        <li className={styles.item}>
          <span
            className={isOnline ? styles.statusOnline : styles.statusOffline}
          ></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      </ul>
    </>
  );
};

Friend.defaultProps = {
  avatar: defaultImage,
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
