import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forbidden() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='w-screen h-screen flex items-center justify-center text-stone-300 text-2xl'>
      <div className='text-center'>
        <h1>403 Forbidden</h1>
        <p>You do not have permission to access this page.</p>
        <p>Redirecting to the home page in 5 seconds...</p>
      </div>
    </div>
  );
}