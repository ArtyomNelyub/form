import { Link } from 'react-router-dom';
import { useFormData } from '../hook/useFormData';
import { APP_ROUTE } from '../const';

export default function Summary() {
  const { formData } = useFormData();
  const [name, surName, phone, birthday, website, about, stack, lastProject] =
    formData;

  if (formData.length === 0) {
    return (
      <div className='summary'>
        <div className='summary__header'>Нет данных для формы</div>
        <div className='summary__navigation'>
          <Link to={APP_ROUTE.MAIN} className='button__main'>
            На главную
          </Link>
          <Link
            to={APP_ROUTE.CREATE_SUMMARY}
            className='button__main button__main_green'
          >
            Создать анкету
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='summary'>
      <h1 className='summary__header'>{`${name} ${surName}`}</h1>
      <div className='summary__block'>
        <div className='summary__field'>Телефон:</div>
        <div className='summary__value'>{`${phone}`}</div>
      </div>
      <div className='summary__block'>
        <div className='summary__field'>Дата рождения: </div>
        <div className='summary__value'>{`${birthday}`}</div>
      </div>
      <div className='summary__block'>
        <div className='summary__field'>Сайт :</div>
        <div className='summary__value'>{`${website}`}</div>
      </div>
      <div className='summary__block'>
        <div className='summary__field'>Обо мне :</div>
        <div className='summary__value'>{`${about}`}</div>
      </div>
      <div className='summary__block'>
        <div className='summary__field'>Стек:</div>
        <div className='summary__value'>{`${stack}`}</div>
      </div>
      <div className='summary__block'>
        <div className='summary__field'>Последний проект:</div>
        <div className='summary__value'>{`${lastProject}`}</div>
      </div>
      <div className='summary__navigation'>
        <Link to={APP_ROUTE.MAIN} className='button__main'>
          На главную
        </Link>
        <Link
          to={APP_ROUTE.CREATE_SUMMARY}
          className='button__main button__main_green'
        >
          Создать анкету
        </Link>
      </div>
    </div>
  );
}
