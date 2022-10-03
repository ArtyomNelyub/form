import useInput from './useInput';

const COUNT_SYMBOLS = 600;

export default function TextareaField(props) {
  const { name, placeholder } = props;
  const { value, onChange, onBlur, isError, setValue } = useInput('', true);

  return (
    <div className='form__field'>
      <label
        htmlFor='stack'
        className={isError && !value ? 'warning' : ''}
      >{`${placeholder}:`}</label>
      <textarea
        maxLength={COUNT_SYMBOLS}
        required
        name={name}
        id={name}
        rows='7'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          setValue(value.trim());
          onBlur(e);
        }}
        className={isError && !value ? 'error' : ''}
      ></textarea>

      <div className='form__count-symbols'>
        Доступно {`${COUNT_SYMBOLS - value.length}`} символов из{' '}
        {`${COUNT_SYMBOLS}`}
      </div>
    </div>
  );
}
