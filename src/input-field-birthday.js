import ErrorBlock from './error-block';

export default function InputFieldBirthday(props) {
  const { name, placeholder, type, values, setValues } = props;
  const { value, isEmpty } = values;

  function onChangeHandler(e) {
    setValues((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  }

  function onBlurHandler(e) {
    setValues((prev) => ({
      ...prev,
      value: value,
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
        {isEmpty && <ErrorBlock message={'Поле не заполнено!'} />}
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
