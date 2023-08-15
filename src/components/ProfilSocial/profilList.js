import { ContainerLii, ContainerUl } from './Profil.styled';

export const ProfilList = ({ likes, followers, views }) => {
  return (
    <ContainerUl className="stats">
      <ContainerLii>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </ContainerLii>
      <ContainerLii>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </ContainerLii>
      <ContainerLii>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </ContainerLii>
    </ContainerUl>
  );
};
