import React, { useState } from "react";
import { User } from "../../types/User";
import UserCard from "../UserCard/UserCard";
import styles from './UserList.module.scss';
import { Col, Row } from 'react-bootstrap';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [filter, setFilter] = useState<string>('');
  const [sortField, setSortField] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<boolean>(true); // true: ascending, false: descending

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleSort = (field: string) => {
    setSortField(field);
    setSortOrder(!sortOrder);
  };

  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(filter) || 
      user.email.toLowerCase().includes(filter) ||
      user.phone.toLowerCase().includes(filter) ||
      user.website.toLowerCase().includes(filter)
    )
    .sort((a, b) => {
      const fieldA = a[sortField as keyof User].toString().toLowerCase();
      const fieldB = b[sortField as keyof User].toString().toLowerCase();
      if (fieldA < fieldB) return sortOrder ? -1 : 1;
      if (fieldA > fieldB) return sortOrder ? 1 : -1;
      return 0;
    });

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <input 
          type="text" 
          placeholder="Filter users..." 
          value={filter} 
          onChange={handleFilterChange}
          className="form-control mb-3"
        />
        <div className={styles.sortButtons}>
          <button className="btn btn-primary me-2" onClick={() => handleSort('name')}>Sort by Name</button>
          <button className="btn btn-primary" onClick={() => handleSort('email')}>Sort by Email</button>
          <button className="btn btn-secondary" onClick={() => setSortOrder(!sortOrder)}>
            {sortOrder ? "Descending" : "Ascending"}
          </button>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredUsers.map(user => (
          <Col key={user.id}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserList;