// -- profile page

import { useAuth } from "../utils/Auth";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout({});
    navigate('/');

  };
  return (
    <>
      <div>
        <h3>Welcome {auth.user}</h3>
        <button onClick={handleLogout}>logout</button>
      </div>
    </>
  );
};

export default Profile;
