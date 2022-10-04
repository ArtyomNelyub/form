import ErrorBlock from './error-block';

const regExNumb = /(\d)|(-)/;
const NUMBER_COUNT = 12;

export default function InputFieldPhone(props) {
  const { name, placeholder, type, values, setValues, label } = props;
  const { value, isCorrect, isError } = values;

  function numberHandler(str) {
    str = str.split('-').join('');
    let mask = 'x-xxxx-xx-xx';
    let count = 0;
    if (str.length >= 2) count = 1;
    if (str.length >= 6) count = 2;
    if (str.length >= 8) count = 3;

    for (let i = 0; i < str.length; i++) {
      mask = mask.replace('x', str[i]);
    }

    mask = mask.slice(0, str.length + count);

    return mask;
  }

  function onChangeHandler(e) {
    if (
      !regExNumb.test(e.target.value[e.target.value.length - 1]) &&
      e.target.value !== ''
    ) {
      return;
    }

    setValues((prev) => ({
      ...prev,
      value: numberHandler(e.target.value),
    }));
  }

  function onBlurHandler(e) {
    setValues((prev) => ({
      ...prev,
      isError: !value,
      isCorrect: !(value.length < NUMBER_COUNT && value !== ''),
    }));
  }

  function onFocusHandler() {
    setValues((prev) => ({
      ...prev,
      isCorrect: true,
      isError: false,
    }));
  }

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${label}:`}
        {!isCorrect && <ErrorBlock message={'Некорректный номер'} />}
        {isError && <ErrorBlock message={'Поле не заполнено!'} />}
      </label>
      <input
        className={isError || !isCorrect ? 'error' : ''}
        required
        type={type}
        name={name}
        maxLength={NUMBER_COUNT}
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
