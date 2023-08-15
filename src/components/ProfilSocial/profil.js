import PropTypes from 'prop-types';
import { Container } from './Profil.styled';
import { ProfilList } from './profilList';
import { ProfilSocial } from './profilSocial';

export const Profile = ({
  username,
  location,
  tag,
  avatar,
  stats: { likes, followers, views },
}) => {
  return (
    <Container>
      <ProfilSocial
        username={username}
        location={location}
        tag={tag}
        avatar={avatar}
      />
      <ProfilList likes={likes} views={views} followers={followers} />
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.exact({
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
