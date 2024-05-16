import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats:{followers, views, likes}}) {
    return (
        <div className={css.profileContainer}>
            <div className={css.profileHead}>
                <img className={css.profileImg}
                src={image}
                alt={name}
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>

            <ul className={css.profileInfo}>
                <li className={css.profileInfoItem}>
                <span>Followers</span>
                <span className={css.info}>{followers}</span>
                </li>
                <li className={css.profileInfoItem}>
                <span>Views</span>
                <span className={css.info}>{views}</span>
                </li>
                <li className={css.profileInfoItem}>
                <span>Likes</span>
                <span className={css.info}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}