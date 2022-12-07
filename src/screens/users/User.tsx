import { useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  /*
    const params = useParams();
  const userId = params.userId;
 ===
  */
  const { userId } = useParams();

  return (
    <h1>
      User ID : {userId}. <br /> Name : {users[Number(userId) - 1].name}
    </h1>
  );
}

export default User;
