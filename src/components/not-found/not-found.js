import {Link} from 'react-router-dom'
import { APP_ROUTE } from '../const';
export default function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found__header'>404!</h1>
      <p className='not-found__footer'>Страница не найдена! </p>
      <Link className='button__main' to={APP_ROUTE.MAIN}>На главную</Link>
    </div>
  );
}
