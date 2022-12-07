import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfUser: string;
}

function Followers() {
  const context = useOutletContext<IFollowersContext>();
  return <h1>{context.nameOfUser}의 Followers</h1>;
}
export default Followers;
