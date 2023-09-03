import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ children }) {
    const data = Cookies.get();
    if (!data.UserName) {
        return <Navigate to='/login' />
    }
    return children
}