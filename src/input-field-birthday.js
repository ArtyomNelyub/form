import { useState } from 'react';
import ErrorBlock from './error-block';

export default function InputFieldBirthday(props) {
  const { name, placeholder, type, values, setValues } = props;
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${placeholder}:`}
        {isEmpty && values[name] === '' && (
          <ErrorBlock message={'Поле незаполнено!'} />
        )}
      </label>
      <input
        className={isEmpty ? 'error' : ''}
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            [name]: e.target.value,
          }))
        }
        onBlur={(e) => {
          if (values[name]) {
            setValues((prev) => ({
              ...prev,
              [name]: values[name],
            }));
          }
          !values[name] ? setIsEmpty(true) : setIsEmpty(false);
        }}
        onFocus={() => {
          setIsEmpty(false);
        }}
      />
    </div>
  );
}
