import { ContainnerDiv } from './Profil.styled';

export const ProfilSocial = ({ avatar, username, tag, location }) => {
  return (
    <ContainnerDiv className="description">
      <img src={avatar} alt={username} className="avatar" width="75" />
      <p className={username}>Petra Marica</p>
      <p className={tag}>@pmarica</p>
      <p className={location}>Salvador, Brasil</p>
    </ContainnerDiv>
  );
};
