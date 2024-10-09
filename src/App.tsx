import React from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';
import UserList from './components/UserList/UserList';
import styles from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.app}>
      <h1>
        <FontAwesomeIcon className="me-4" icon={faUsers} />
        User Dashboard
      </h1>
      <UserList users={users} />
    </div>
  );
};

export default App;