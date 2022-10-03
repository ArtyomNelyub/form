import { useState } from 'react';
import ErrorBlock from './error-block';

const regExLetters = /[a-zA-Zа-яА-ЯёЁ]/;

export default function InputFieldName(props) {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const { name, placeholder, type } = props;

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${placeholder}:`}
        {isError && <ErrorBlock message={'Поле незаполнено!'} />}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          let lng = e.target.value.length;
          if (!regExLetters.test(e.target.value[lng - 1])) {
            return;
          }
          setValue(e.target.value);
        }}
        onBlur={(e) => {
          if (value) {
            setValue(
              value.trim()[0].toUpperCase() + value.slice(1).toLowerCase()
            );
          }
          !value ? setIsError(true) : setIsError(false);
        }}
        className={isError && !value ? 'error' : ''}
      />
    </div>
  );
}
