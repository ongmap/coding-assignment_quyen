import React, { useState } from "react";
import { User } from "../../types/User";
import UserCard from "../UserCard/UserCard";
import styles from './UserList.module.scss';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userList}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;