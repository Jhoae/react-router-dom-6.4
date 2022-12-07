import {
  Link,
  Outlet,
  useOutlet,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { users } from '../../db';

function User() {
  /*
    const params = useParams();
  const userId = params.userId;
 ===
  */
  //  const { userId } = useParams();
  const { userId } = useParams();

  console.log('afffsfffd', useOutletContext());

  return (
    <div>
      <h1>
        User ID : {userId}. <br /> Name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet
        context={{
          nameOfUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}

export default User;
