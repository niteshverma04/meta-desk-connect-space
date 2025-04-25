
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-metadesk-purple/20 to-metadesk-light-blue/30">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mb-4 mx-auto border-4 border-metadesk-purple rounded-full border-t-transparent"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple"
          >
            MetaDesk
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-metadesk-purple/20 to-metadesk-light-blue/30 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple mb-4">
          MetaDesk
        </h1>
        <p className="text-xl text-gray-700 max-w-md mx-auto mb-8">
          Transform your remote work experience with our innovative virtual collaboration platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/login')}
            className="bg-metadesk-purple hover:bg-metadesk-dark-purple text-white px-8 py-6 h-auto text-lg"
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate('/login')}
            variant="outline"
            className="border-metadesk-purple text-metadesk-purple hover:bg-metadesk-purple/10 px-8 py-6 h-auto text-lg"
          >
            Sign Up
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;

