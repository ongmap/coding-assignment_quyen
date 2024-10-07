import React, { useState } from "react";
import { User } from "../../types/User";
import styles from './UserList.module.scss';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userList}>
        {users.map(user => (
          <>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserList;