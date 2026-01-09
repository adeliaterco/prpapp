import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, isOnboardingComplete } from '@/lib/storage';
import Login from './Login';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      if (isOnboardingComplete()) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    }
  }, [navigate]);

  return <Login />;
};

export default Index;
