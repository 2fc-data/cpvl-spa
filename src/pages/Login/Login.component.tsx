import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { API, getURI } from '../../services';
import { useFetch } from '../../hooks';

import { useForm } from "react-hook-form";
import { LoginWrap } from "./Login.styles";
import { Link } from "react-router-dom";

interface ILoginBody {
  username: string;
  password: string;
}

interface IApiResponse {
  status: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useLocalStorage(
    process.env.REACT_APP_LOGGED_KEY,
    false
  );
  const [loginBody, setLoginBody] = useState<ILoginBody>({
    username: '',
    password: ''
  });

  const {
    doFetch: doLogin,
    data,
    error
  } = useFetch<IApiResponse>({ method: 'POST' });

  const [formError, setFormError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  const clearErrorMessage = useCallback(() => setFormError(undefined), []);

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = target;
      setLoginBody((prevState) => ({
        ...prevState,
        [name]: value.trim()
      }));
      clearErrorMessage();
    },
    [clearErrorMessage]
  );

  const handleLogin = useCallback(() => {
    if (!loginBody.username || !loginBody.password) {
      return setFormError('Preencha os campos corretamente');
    }
    setIsLoading(true);
    doLogin({ url: getURI(API.login), body: loginBody });
  }, [doLogin, loginBody]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
      setFormError(
        error.message === 'Unauthorized'
          ? 'Usuário ou senha incorretos'
          : error.message
      );
    }
    if (data?.status === 'ok') {
      setTimeout(() => {
        setIsLogged(true);
      }, 1000);
    }
  }, [error, data, setIsLogged]);


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const onSubmit = (data: unknown) => {
  //   console.log(data);
  // };

  return (
    <LoginWrap>
      <div className="login-form-container">
        <div className="login-title">Login</div>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="text"
            placeholder="Seu e-mail"
            {...register('email', { required: true })}
          />
          {errors?.email && <span>E-mail é obrigatório</span>}
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Mínimo 6 caracteres"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors?.password && <span>Senha é obrigatória</span>}
        </div>

        <div className="form-group" >
          <button
            disabled={isLoading}
            // onClick={() => handleSubmit(onSubmit)()}
            onClick={() => handleSubmit(handleLogin)()  }
          >
            Entrar
          </button>
          {formError && (
            <div>{formError}</div>
          )}
        </div>


        <div className="redirect-register">
          <p>Ainda não se cadastrou? </p>
          <Link to="/register"><u>Clique aqui</u></Link>
        </div>
      </div>
    </LoginWrap>
  );
};
