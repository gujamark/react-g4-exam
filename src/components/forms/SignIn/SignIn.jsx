import classNames from 'classnames';
import styles from './SignInForm.module.css';
import { useForm } from 'react-hook-form';
import { login } from '../../../services/';
import { useHistory } from 'react-router';

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (data) => {
    const userData = await login(data);
    localStorage.setItem('auth.token', JSON.stringify(userData.token));
    history.replace('/');
  };

  return (
    <form
      className={classNames(styles.SignInFormWrapper, 'form-signin')}
      onSubmit={handleSubmit(onSubmit)}>
      <img
        className="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        value="eve.holt@reqres.in"
        {...register('email', { required: true })}
      />
      {errors.email && (
        <p className="text-danger">
          {errors.email.type === 'required' && 'Email is required'}
        </p>
      )}
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        value="cityslicka"
        {...register('password', { required: true })}
      />
      {errors.password && (
        <p className="text-danger">
          {errors.password.type === 'required' && 'Password is required'}
        </p>
      )}
      <br />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default SignInForm;
