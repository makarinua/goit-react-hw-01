import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({friends}) {
    return (
        <ul className={css.list}>
        {friends.map((friend) => (
            <li className={css.listContainer} key={friend.id}>
            <FriendListItem {...friend} />
            </li>
        ))}
        </ul>
    )
  }