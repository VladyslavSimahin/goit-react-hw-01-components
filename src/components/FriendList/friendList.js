import { FriendItem } from './friendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends?.map(({ avatar, id, name, isOnline }) => {
        return (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
