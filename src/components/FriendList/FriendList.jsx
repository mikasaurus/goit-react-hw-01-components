import PropTypes from 'prop-types';
import css from 'components/FriendList/Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.mp(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

export const FriendListItem = ({ isOnline, avatar, name = true }) => {
  return (
    <li class="item">
      {isOnline ? <span class="status"></span> : <span class="status"></span>}
      <img class="avatar" src="" alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
  );
};

FriendList.PropTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
