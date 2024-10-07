import React from "react";
import { User } from "../../types/User";
import styles from './UserCard.module.scss';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className={styles.card}>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Website: <a href={`http://${user.website}`}>{user.website}</a></p>
    <p>Address: {user.address.street}, {user.address.city}</p>
  </div>
);

export default UserCard;