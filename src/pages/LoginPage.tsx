
import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { user, isEmailVerified } = useAuth();

  if (user && !isEmailVerified) {
    return <Navigate to="/verify" replace />;
  }

  if (user && isEmailVerified) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md px-4">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
          Welcome Back
        </h1>
        <div className="backdrop-blur-xl bg-black/40 rounded-2xl shadow-lg p-8 border border-metadesk-purple/30 shadow-[0_4px_20px_-2px_rgba(155,135,245,0.3)]">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
