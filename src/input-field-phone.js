import { useState } from 'react';
import ErrorBlock from './error-block';

const regExNumb = /(\d)|(-)/;
const NUMBER_COUNT = 12;

export default function InputFieldPhone(props) {
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const { name, placeholder, type, values, setValues } = props;

  function numberHandler(str) {
    str = str.split('-').join('');
    let mask = 'x-xxxx-xx-xx';
    let count = 0;
    if (str.length >= 2) {
      count = 1;
    }
    if (str.length >= 6) {
      count = 2;
    }
    if (str.length >= 8) {
      count = 3;
    }
    for (let i = 0; i < str.length; i++) {
      mask = mask.replace('x', str[i]);
    }
    mask = mask.slice(0, str.length + count);
    return mask;
  }

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${placeholder}:`}
        {!isCorrect && <ErrorBlock message={'Некорректный номер'} />}
        {isError && <ErrorBlock message={'Поле незаполнено!'} />}
      </label>
      <input
        className={isError || !isCorrect ? 'error' : ''}
        required
        type={type}
        name={name}
        maxLength={NUMBER_COUNT}
        id={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={(e) => {
          if (
            !regExNumb.test(e.target.value[e.target.value.length - 1]) &&
            e.target.value !== ''
          ) {
            return;
          }

          setValues((prev) => ({
            ...prev,
            [name]: numberHandler(e.target.value),
          }));
        }}
        onBlur={(e) => {
          if (values[name]) {
            setIsError(false);
          } else setIsError(true);

          if (values[name].length < NUMBER_COUNT && values[name] !== '') {
            setIsCorrect(false);
          } else setIsCorrect(true);
        }}
        onFocus={() => {
          setIsCorrect(true);
          setIsError(false);
        }}
      />
    </div>
  );
}
