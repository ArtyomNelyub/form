import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='main'>
      <h1 className='main__header'>
        <span>Ты</span> тот, кто <span>Ты</span> есть!!!
      </h1>
      <p className='main__title'>
        Прими себя таким, какой ты есть и{' '}
        <Link to='/create-summary' className='main__button'>
          расскажи о себе
        </Link>
      </p>
    </div>
  );
}
