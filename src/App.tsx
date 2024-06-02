import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>Main page</h1>
      <h2>Navigation..</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile/Mario">Mario Profile</Link>
          </li>
          <li>
            <Link to="profile/Luigi">Luigi Profile</Link>
          </li>
          <li>
            <Link to="profile/Default">Default Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;




