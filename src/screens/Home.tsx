import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log('has', readSearchParams.has('geo'));
  console.log('get', readSearchParams.get('geo'));

  setTimeout(() => {
    setSearchParams({
      day: 'today',
      geo: '123',
    });
  }, 3000);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
