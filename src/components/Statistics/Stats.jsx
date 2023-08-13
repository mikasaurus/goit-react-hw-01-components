import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats:</h2>

      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <p className={css.label}>{item.label}</p>
            <p className={css.percentage}>{item.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  stats: PropTypes.array,
};
