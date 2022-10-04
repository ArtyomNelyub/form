import ErrorBlock from './error-block';

const regExLetters = /[a-zA-Zа-яА-ЯёЁ]/;

export default function InputFieldName(props) {
  const { name, placeholder, type, values, setValues } = props;
  const { value, isEmpty } = values;

  function changeHandler(e) {
    let lng = e.target.value.length;
    if (!regExLetters.test(e.target.value[lng - 1])) {
      return;
    }
    setValues((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  }

  function blurHandler(e) {
    if (value) {
      setValues((prev) => ({
        ...prev,
        value: value.trim()[0].toUpperCase() + value.slice(1).toLowerCase(),
      }));
    }

    setValues((prev) => ({
      ...prev,
      isEmpty: !value,
    }));
  }

  function focusHandler() {
    setValues((prev) => ({
      ...prev,
      isEmpty: false,
    }));
  }

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${placeholder}:`}
        {isEmpty && <ErrorBlock message={'Поле незаполнено!'} />}
      </label>

      <input
        className={isEmpty ? 'error' : ''}
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
    </div>
  );
}
