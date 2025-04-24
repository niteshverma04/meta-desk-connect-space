
import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <h1 className="text-4xl font-bold mb-8 text-metadesk-purple text-center">
          Welcome Back
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
