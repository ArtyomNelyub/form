export default function ErrorBlock(props) {
  const {message} = props;
  return <div className='incorrect'>{message}</div>;
}
