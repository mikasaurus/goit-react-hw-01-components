import css from './Friends.module.css';

export const FriendListItem = ({ isOnline, avatar, name = true }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
