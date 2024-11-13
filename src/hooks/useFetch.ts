import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useFetch as tsUseFetch } from '.reactQuary';
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
  const [fetchURL, setFetchURL] = useState<string | undefined>(url);
  const postBody = useRef(body);
  const { data, error } = tsUseFetch<T>(fetchURL, {
    method,
    ...(postBody.current ? { body: JSON.stringify(postBody.current) } : {}),
    ...getHeaderOptions(),
    ...options
  });

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
