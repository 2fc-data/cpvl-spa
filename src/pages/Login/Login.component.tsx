import { useForm } from "react-hook-form";
import { LoginWrap } from "./Login.styles";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

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

        <div className="form-group">
          <button onClick={() => handleSubmit(onSubmit)()}>Entrar</button>
        </div>


        <div className="redirect-register">
          <p>Ainda não se cadastrou? </p>
          <Link to="/register"><u>Clique aqui</u></Link>
        </div>
      </div>
    </LoginWrap>
  );
};
