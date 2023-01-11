import { useUserContext } from './useUserContext';
import { useNavigate } from 'react-router-dom'; 

export const useLogout = () => {
  const { dispatch: userDispatch } = useUserContext()
  const navigate = useNavigate();

  const logout = () => {
    // Remove user from storage
    localStorage.removeItem('user'); 

    // Dispatch logout action on user context
    userDispatch({ type: 'LOGOUT' }); 

    navigate("/"); 
  }

  return { logout }
}
