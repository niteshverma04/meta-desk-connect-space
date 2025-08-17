
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-8 md:py-16">
      <div className="w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
          Welcome Back
        </h1>
        <div className="backdrop-blur-xl bg-card/50 rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
