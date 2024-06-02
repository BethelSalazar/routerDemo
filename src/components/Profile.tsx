import { useParams } from 'react-router-dom';
import Luigi from './Luigi';
import DefaultProfile from './DefaultProfile';
import Mario from './Mario';

const Profile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <h1>Profile Page!!</h1>
      <p>Something else..</p>
      {name === 'Mario' ? <Mario /> : name === 'Luigi' ? <Luigi /> : <DefaultProfile />}
    </div>
  );
}

export default Profile;

