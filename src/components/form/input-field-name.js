const regExLetters = /[a-zA-Zа-яА-ЯёЁ]/;

export default function InputFieldName(props) {
  const { name, placeholder, type, values, setValues } = props;
  const { value, isEmpty } = values;

  function onChangeHandler(e) {
    let lng = e.target.value.length;
    if (!regExLetters.test(e.target.value[lng - 1])) {
      return;
    }
    setValues((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  }

  function onBlurHandler(e) {
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

  function onFocusHandler() {
    setValues((prev) => ({
      ...prev,
      isEmpty: false,
    }));
  }

  return (
    <div className='form__field block__half'>
      <label htmlFor={name}>
        {`${placeholder}:`}
        {isEmpty && <div className='incorrect'>Поле не заполнено!</div>}
      </label>

      <input
        className={isEmpty ? 'error' : ''}
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
