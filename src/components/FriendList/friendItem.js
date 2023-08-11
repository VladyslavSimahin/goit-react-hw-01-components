import PropTypes from 'prop-types';

import { FriendCard, OnlineStatus } from './FriendItem.styled';
export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <OnlineStatus isOnline={isOnline} theme={theme} />
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendCard>
  );
};

const theme = {
  colors: {
    green: '#228B22',
    red: '#B22222',
  },
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
