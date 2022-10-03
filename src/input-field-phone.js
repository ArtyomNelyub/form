import { useState } from 'react';
import ErrorBlock from './error-block';

const regExNumb = /(\d)|(-)/;
const NUMBER_COUNT = 12;

export default function InputFieldPhone(props) {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const { name, placeholder, type } = props;

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
        required
        type={type}
        name={name}
        maxLength={NUMBER_COUNT}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (
            !regExNumb.test(e.target.value[e.target.value.length - 1]) &&
            e.target.value !== ''
          ) {
            return;
          }

          setValue(numberHandler(e.target.value));
        }}
        onBlur={(e) => {
          console.log(value);
          if (value) {
            setIsError(false);
          } else setIsError(true);

          if (value.length < NUMBER_COUNT && value !== '') {
            setIsCorrect(false);
          } else setIsCorrect(true);
        }}
        className={isError || !isCorrect ? 'error' : ''}
      />
    </div>
  );
}
