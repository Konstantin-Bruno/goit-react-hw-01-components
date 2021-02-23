import React from 'react';
import Statistic from './Statistic';
import styles from './StatisticList.module.css';

const StatisticList = ({ stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <Statistic key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

export default StatisticList;
