import React from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';
import UserList from './components/UserList/UserList';
import styles from './App.module.scss';

const App: React.FC = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.app}>
      <h1>User Dashboard</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;