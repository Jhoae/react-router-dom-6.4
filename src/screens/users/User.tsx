import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  /*
    const params = useParams();
  const userId = params.userId;
 ===
  */
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User ID : {userId}. <br /> Name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet />
    </div>
  );
}

export default User;
