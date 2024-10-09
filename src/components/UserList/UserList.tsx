import React, { useState } from "react";
import { User } from "../../types/User";
import UserCard from "../UserCard/UserCard";
import styles from './UserList.module.scss';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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

  const handleSort = (eventKey: string | null) => {
    if (eventKey) {
      setSortField(eventKey);
    }
  };

  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(filter) ||
      user.email.toLowerCase().includes(filter) ||
      user.phone.toLowerCase().includes(filter) ||
      user.website.toLowerCase().includes(filter) ||
      `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`.toLowerCase().includes(filter)
    )
    .sort((a, b) => {
      const fieldA = a[sortField as keyof User].toString().toLowerCase();
      const fieldB = b[sortField as keyof User].toString().toLowerCase();
      if (fieldA < fieldB) return sortOrder ? -1 : 1;
      if (fieldA > fieldB) return sortOrder ? 1 : -1;
      return 0;
    });

  return (
    <Container>
      
        <Row xs={1} md={1} lg={2} className="mb-4">
          <Col>
            <Form.Control
              type="text"
              placeholder="Filter user ..."
              value={filter} 
              onChange={handleFilterChange}
              size="lg"
            />
          </Col>
          <Col>
            <div className="d-flex justify-content-end mt-4 mt-lg-0">
              
              <Dropdown onSelect={handleSort} className="me-2" data-bs-theme="dark">
                <Dropdown.Toggle variant="primary" id="dropdown-sortBy" size="lg" className={styles.btnSortBy}>
                  Sort by {sortField === 'name' ? 'name' : 'email'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="name">Sort by name</Dropdown.Item>
                  <Dropdown.Item eventKey="email">Sort by email</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <button className={`btn btn-light btn-lg ${styles.btnSortOrder}`} onClick={() => setSortOrder(!sortOrder)}>
                {sortOrder 
                  ? (<>Descending <FontAwesomeIcon icon={faArrowDown} /></>)
                  : (<>Ascending <FontAwesomeIcon icon={faArrowUp} /></>)
                }
              </button>
            </div>
          </Col>
        </Row>

        <hr />

        {filteredUsers.length === 0 ? (
          <p className={styles.noUsersFound}>No users found!</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {filteredUsers.map(user => (
              <Col key={user.id}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        )}
    </Container>
  );
};

export default UserList;