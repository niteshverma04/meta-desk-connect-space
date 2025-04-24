
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const VerificationPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleResendEmail = async () => {
    if (!user?.email) return;
    
    setIsResending(true);
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: user.email,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    } else {
      toast({
        title: "Email Sent",
        description: "Please check your inbox for the verification link."
      });
    }
    setIsResending(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <Alert>
          <AlertDescription>
            Please verify your email address. Check your inbox for a verification link.
          </AlertDescription>
        </Alert>
        
        <div className="flex justify-center">
          <Button
            onClick={handleResendEmail}
            disabled={isResending}
            variant="outline"
          >
            {isResending ? "Sending..." : "Resend Verification Email"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
