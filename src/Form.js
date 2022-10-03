import React from 'react';
import InputField from './input-field';
import InputFieldName from './input-field-name';
import TextareaField from './textarea-field';

function Form() {
  return (
    <form className='form' action='#'>
      <h1 className='form__header'>Создание анкеты</h1>

      <div className='form__block block'>
        <InputFieldName name='name' placeholder='Имя' type='text' />
        <InputFieldName name='surname' placeholder='Фамилия' type='text' />
      </div>

      <div className='form__block block'>
        <InputField name='phone' placeholder='Телефон' type='tel' />
        <InputField name='birthday' placeholder='Дата рождения' type='date' />
      </div>

      <InputField name='website' placeholder='Сайт' type='url' />
      <TextareaField placeholder='О себе' name='about' />
      <TextareaField placeholder='Стек технологий' name='stack' />
      <TextareaField
        placeholder='Описание последнего проекта'
        name='last-project'
      />

      <div className='form__footer'>
        <button type='reset' className='button button_clear' onClick={()=>{}}>
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
