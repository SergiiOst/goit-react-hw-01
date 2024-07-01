import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.title}>
        <img className={s.photo} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.text}>Followers</span>
          <span className={s.numbers}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Views</span>
          <span className={s.numbers}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Likes</span>
          <span className={s.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
