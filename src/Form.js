import React from 'react';
import InputField from './input-field';

function Form() {
  return (
    <form className='form' action='#'>
      <h1 className='form__header'>Создание анкеты</h1>

      <div className='form__block block'>
        <InputField name='name' placeholder='Имя' type='text' id='name' />
        <InputField
          name='surname'
          placeholder='Фамилия'
          type='text'
          id='surname'
        />
      </div>

      <div className='form__block block'>
        <InputField name='phone' placeholder='Телефон' type='tel' id='phone' />
        <InputField
          name='birthday'
          placeholder='Дата рождения'
          type='date'
          id='birthday'
        />
      </div>

      <InputField name='website' placeholder='Сайт' type='url' id='website' />

      <div className='form__field'>
        <label htmlFor='about'>О себе:</label>
        <textarea
          name='about'
          id='about'
          rows='7'
          placeholder='О себе'
        ></textarea>
      </div>

      <div className='form__field'>
        <label htmlFor='stack'>Стек технологий:</label>
        <textarea
          name='stack'
          id='stack'
          rows='7'
          placeholder='Стек технологий'
        ></textarea>
      </div>

      <div className='form__field'>
        <label htmlFor='last-project'>Описание последнего проекта:</label>
        <textarea
          name='last-project'
          id='last-project'
          rows='7'
          placeholder='Описание последнего проекта'
        ></textarea>
      </div>

      <div className='form__footer'>
        <button type='reset' className='button button_clear'>
          Очистить
        </button>
        <button
          type='button'
          className='button'
          onClick={() => {
            console.log(1);
          }}
        >
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Form;
