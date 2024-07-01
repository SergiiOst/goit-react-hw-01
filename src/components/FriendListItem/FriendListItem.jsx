import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img src={avatar} className={s.img} alt="Avatar" width="92" />
      <p className={s.name}>{name}</p>
      <p className={isOnline ? `${s.online}` : `${s.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
