const COUNT_SYMBOLS = 600;

export default function TextareaField(props) {
  const { name, placeholder, values, setValues } = props;
  const { value, isEmpty } = values;

  function CountSymbolsField() {
    return (
      <div className='form__count-symbols'>
        Доступно {`${COUNT_SYMBOLS - value.length}`} символов из
        {` ${COUNT_SYMBOLS}`}
      </div>
    );
  }

  function OutOfLimit() {
    return (
      <div className='form__count-symbols' style={{ color: 'red' }}>
        Превышено допустимое количество символов!
      </div>
    );
  }

  function onChangeHandler(e) {
    setValues((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  }

  function onBlurHandler(e) {
    setValues({
      value: value.trim(),
      isEmpty: !value,
      isCorrect: value.length <= COUNT_SYMBOLS,
    });
  }

  function onFocusHandler() {
    setValues((prev) => ({
      ...prev,
      isEmpty: false,
      isCorrect: true,
    }));
  }

  return (
    <div className='form__field'>
      <label htmlFor='stack'>
        {`${placeholder}:`}
        {isEmpty && <div className='incorrect'>Поле не заполнено!</div>}
        {value.length > COUNT_SYMBOLS && (
          <div className='incorrect'>Превышен лимит символов!</div>
        )}
      </label>
      <textarea
        className={isEmpty || value.length > COUNT_SYMBOLS ? 'error' : ''}
        required
        name={name}
        id={name}
        rows='7'
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      ></textarea>

      {value.length <= COUNT_SYMBOLS ? <CountSymbolsField /> : <OutOfLimit />}
    </div>
  );
}
