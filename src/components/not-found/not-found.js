import {Link} from 'react-router-dom'
export default function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found__header'>404!</h1>
      <p className='not-found__footer'>Страница не найдена! </p>
      <Link className='button__main' to='/'>На главную</Link>
    </div>
  );
}
