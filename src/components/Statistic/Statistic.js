import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticList.module.css';

const Statistic = ({ label, percentage }) => {
  return (
    <>
      <li className={styles.item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    </>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Statistic;
