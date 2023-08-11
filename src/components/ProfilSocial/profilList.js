export const ProfilList = ({
  stats: { likes, followers, views },
  username,
}) => {
  return (
    <ul className="stats">
      <li key={username}>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li key={username}>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li key={username}>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
  );
};
