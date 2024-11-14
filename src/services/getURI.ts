const BASE_URI = import.meta.env.VITE_REACT_APP_API_URI;

export const API = {
  address: 'address',
  login: 'login',
  pilots: 'pilots',
  profile: 'profile'
} as const;

export const getURI = (api: string) => `${BASE_URI}/${api}`;