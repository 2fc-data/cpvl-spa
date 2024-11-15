import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
import { getHeaderOptions } from '../services';
import { useNavigate } from 'react-router-dom';

interface IProps {
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url?: string;
  body?: unknown;
  options?: RequestInit;
} 

const useFetch = <T>({ method = 'GET', url, body, options }: IProps) => {
  const [, setIsLogged] = useLocalStorage(
    import.meta.env.VITE_REACT_APP_LOGGED_KEY,
    false
  );
  const navigate = useNavigate();
  const [fetchURL, setFetchURL] = useState<string>(url || '');
  const postBody = useRef(body);
  
  // eslint-disable-next-line no-empty-pattern
  const {data, error} = useQuery({
    queryKey: [fetchURL],
    queryFn: async () => {
      return fetch(fetchURL, {
        method,
        ...(postBody.current ? { body: JSON.stringify(postBody.current) } : {}),
        ...getHeaderOptions(),
        ...options
      }).then((res) => res.json());
    }
  })
  

  const doFetch = ({ url, body }: { url: string; body: unknown }) => {
    if (body) {
      postBody.current = body;
    }
    setFetchURL(url);
  };

  useEffect(() => {
    if (error) {
      if (error.message === 'Unauthorized') {
        setIsLogged(false);
      }
      if (error.message === 'Forbidden resource') {
        navigate('/');
      }
      setFetchURL(undefined);
    }
  }, [error, navigate, setIsLogged]);

  return { doFetch, data, error };
};

export default useFetch;
