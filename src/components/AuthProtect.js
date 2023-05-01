import { useAuth } from "../utils/Auth"
import { Navigate,useLocation } from 'react-router-dom';


// -- container for protected routes
const AuthProtect = ({children}) => {

    const auth = useAuth();
    const location = useLocation();

    if(!auth.user){
        return <Navigate to="/login" state={{ path: location.pathname }}/>
    }

  return (
    <>{children}</>
  )
}

export default AuthProtect