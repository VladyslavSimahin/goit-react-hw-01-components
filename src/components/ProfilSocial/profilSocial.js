export const ProfilSocial = ({
  items: { avatar, username, tag, location },
}) => {
  return (
    <div class="description">
      <img src={avatar} alt={username} class="avatar" width="75" />
      <p class={username}>Petra Marica</p>
      <p class={tag}>@pmarica</p>
      <p class={location}>Salvador, Brasil</p>
    </div>
  );
};
