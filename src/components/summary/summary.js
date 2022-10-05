export default function Summary({ values, summaryOpenHandler }) {
  const [name, surName, phone, birthday, website, about, stack, lastProject] =
    values;

  function onClickHandler() {
    summaryOpenHandler(false);
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
      <div className='summary__footer'>
        <button className='button' onClick={onClickHandler}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
