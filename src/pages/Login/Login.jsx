import LoginForm from '../Login/components/form/Form'
import LogHeader from './components/LogHeader';
import { useAuth } from "../../context/AuthContext"
import { Navigate } from "react-router-dom"

export default function Login() {
  const { user } = useAuth();

  if (user) return <Navigate to={"/"} />
  return <div>
    <LogHeader />
    <LoginForm />
  </div>;
}
