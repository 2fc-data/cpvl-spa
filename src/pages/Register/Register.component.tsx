import { useForm } from "react-hook-form";
import { RegisterWrap } from "./Register.styles";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <RegisterWrap>
      <div className="register-form-container">
        <div className="register-title">Cadastre-se</div>

        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Nome completo"
            {...register('name', { 
              required: true, 
              minLength: 10, 
              maxLength: 45, 
              pattern: /^[A-Za-z\s]+$/ 
            })}
          />
          {errors?.name?.type === 'required' && <span>Nome obrigatório</span>}
          {errors?.name?.type === 'minLength' && <span>Nome deve ter no mínimo 10 letras</span>}
          {errors?.name?.type === 'maxLength' && <span>Nome deve ter no máximo 45 letras</span>}
          {errors?.name?.type === 'pattern' && <span>Há algum caracter inválido</span>}
        </div>

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
          <label>Fone:</label>
          <input
            type="text"
            placeholder="(33) 93333-3333"
            {...register('phone', { required: true })}
          />
          {errors?.phone && <span>Telefone é obrigatório</span>}
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
          <label>Confirmar Senha:</label>
          <input
            type="password"
            placeholder="Confirme a senha"
            {...register('confirmPassword', { required: true })}
          />
          {errors?.confirmPassword && <span>Confirmação de senha é obrigatória</span>}
        </div>

        <div className="form-group">
          <input type="checkbox" {...register('agreeStatute', { required: true })} />
          <label>Li, concordo e aceito o ESTATUTO do CPVL:</label>
          {errors?.agreeStatute && <span>Aceitar o Estatuto é obrigatório</span>}
        </div>

        <div className="form-group">
          <input type="checkbox" {...register('agreeRegimentoInterno', { required: true })} />
          <label>Li, concordo e aceito o REGIMENTO INTERNO do CPVL:</label>
          {errors?.agreeRegimentoInterno && <span>Aceitar o REGIMENTO INTERNO é obrigatório</span>}
        </div>

        <div className="form-group">
          <button onClick={() => handleSubmit(onSubmit)()}>Cadastrar</button>
        </div>
      </div>
    </RegisterWrap>
  );
};
