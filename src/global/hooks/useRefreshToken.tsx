import { useEffect } from 'react';

const useRefreshToken = (callback: any, depsArray: any) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, 600000);
    return () => clearInterval(interval);
  }, [depsArray, callback]);
};

export default useRefreshToken;
