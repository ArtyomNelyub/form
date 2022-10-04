import { useEffect } from 'react';
import ErrorBlock from './error-block';

export default function InputFieldWebsite(props) {
  const { name, placeholder, type, values, setValues } = props;
  const { value, isEmpty, isCorrect } = values;
  const regExWebsite =
    /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      value: 'https://',
    }));
  }, [setValues]);

  function onChangeHandler(e) {
    if (/\s$/.test(e.target.value)) {
      return;
    }
    if (/^https:\/\//.test(e.target.value)) {
      setValues((prev) => ({
        ...prev,
        value: e.target.value,
      }));
    }
  }

  function onBlurHandler() {
    setValues({
      value: value,
      isEmpty: !value,
      isCorrect: regExWebsite.test(value),
    });
  }

  function onFocusHandler() {
    if (value === '') {
      setValues((prev) => ({
        ...prev,
        value: 'https://',
      }));
    }
    setValues((prev) => ({
      ...prev,
      isEmpty: false,
      isCorrect: true,
    }));
  }

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${placeholder}:`}
        {isEmpty && <ErrorBlock message={'Поле не заполнено!'} />}
        {!isCorrect && <ErrorBlock message={'Некорректный адрес'} />}
      </label>
      <input
        className={isEmpty || !isCorrect ? 'error' : ''}
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
    </div>
  );
}
