import { useEffect } from 'react';

const useRefresh = (callback: any, depsArray: any) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, 15000);
    return () => clearInterval(interval);
  }, [depsArray, callback]);
};

export default useRefresh;
