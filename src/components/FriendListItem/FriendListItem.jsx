import css from "./FriendListItem.module.css"
import clsx from "clsx";

export default function FriendListItem({avatar, name, isOnline}) {
    const statusUser = isOnline ? "Online" : "Offline";
    const statusCss = clsx(isOnline == true ? css.textOnline : css.textOfline);

    return (
        <div className={css.friendsList}>
        <img className={css.friendsImg} src={avatar} alt="{name}" width="48" />
        <p className={css.friendsName}>{name}</p>
        <p className={statusCss}>{statusUser}</p>
        </div>
    )
  } 