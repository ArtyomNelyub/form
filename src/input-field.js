import useInput from './useInput';

export default function InputField(props) {
  const { name, placeholder, type } = props;
  const { value, onChange, onBlur, isError } = useInput('', true);

  return (
    <div className='form__field block__half'>
      <label htmlFor={name} className={isError && !value ? 'warning' : ''}>
        {`${placeholder}:`}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={isError && !value ? 'error' : ''}
      />
    </div>
  );
}
