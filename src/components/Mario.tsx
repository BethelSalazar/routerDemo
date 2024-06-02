import { useNavigate } from 'react-router-dom';
//Se importa useNavigate en ves del uso de <Link>

const Mario: React.FC = () => {
  const navigate = useNavigate();
  //Se hace uso de useNavigate con la ´parte de Mario

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Hi I'm Mario Bros!</h2>
      <button onClick={handleNavigate}>Click here to main page</button>
    </div>
  );
}

export default Mario;




