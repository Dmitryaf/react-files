import React from 'react';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { registration } from '../../actions/user';
import { useInput } from '../../hooks/useInput';

function Registration() {
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 5 });

  const submitHandler = (e) => {
    e.preventDefault();
    registration(email.value, password.value);
    email.resetValue();
    password.resetValue();
  };

  return (
    <div className='auth-container'>
      <form className='form' onSubmit={(e) => submitHandler(e)}>
        <h2 className='form__title'>Создайте аккаунт</h2>
        {(!email.inputValid && email.isTouch) ||
        (!password.inputValid && password.isTouch) ? (
          <span className='error'>
            Пожалуйста, укажите действующий адрес электронной почты и пароль.
          </span>
        ) : (
          ''
        )}
        <div className='form__field'>
          <input
            value={email.value}
            onBlur={email.onBlur}
            onChange={(e) => email.onChange(e)}
            type='text'
            name='email'
            className='form__input'
            placeholder='email'
          />
          <span className='form__input-focus'></span>
          <span className='form__input-icon'>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>

        <div className='form__field'>
          <input
            value={password.value}
            onBlur={password.onBlur}
            onChange={(e) => password.onChange(e)}
            type='password'
            name='password'
            className='form__input'
            placeholder='Пароль'
          />
          <span className='form__input-focus'></span>
          <span className='form__input-icon'>
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>

        <button
          type='submit'
          disabled={!email.inputValid || !password.inputValid}
          className='form__btn btn btn_animate'
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Registration;
