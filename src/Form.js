import React, { useState } from 'react';
import InputFieldBirthday from './input-field-birthday';
import InputFieldName from './input-field-name';
import InputFieldPhone from './input-field-phone';
import InputFieldWebsite from './input-field-website';
import TextareaField from './textarea-field';

function Form() {
  const fieldData = { value: '', isCorrect: true, isEmpty: false };
  const [name, setName] = useState({ ...fieldData });
  const [surName, setSurName] = useState({ ...fieldData });
  const [phone, setPhone] = useState({ ...fieldData });
  const [birthday, setBirthday] = useState({ ...fieldData });
  const [website, setWebsite] = useState({ ...fieldData });
  const [about, setAbout] = useState({ ...fieldData });
  const [stack, setStack] = useState({ ...fieldData });
  const [lastProject, setLastProject] = useState({ ...fieldData });

  return (
    <form className='form' action='#'>
      <h1 className='form__header'>Создание анкеты</h1>

      <div className='form__block block'>
        <InputFieldName
          name='name'
          placeholder='Имя'
          type='text'
          values={name}
          setValues={setName}
        />
        <InputFieldName
          name='surName'
          placeholder='Фамилия'
          type='text'
          values={surName}
          setValues={setSurName}
        />
      </div>

      <div className='form__block block'>
        <InputFieldPhone
          name='phone'
          placeholder='x-xxxx-xx-xx'
          label = 'Телефон'
          type='tel'
          values={phone}
          setValues={setPhone}
        />
        <InputFieldBirthday
          name='birthday'
          placeholder='Дата рождения'
          type='date'
          values={birthday}
          setValues={setBirthday}
        />
      </div>

      <InputFieldWebsite
        name='website'
        placeholder='Сайт'
        type='url'
        values={website}
        setValues={setWebsite}
      />
      
      {/* <TextareaField placeholder='О себе' name='about' />
      <TextareaField placeholder='Стек технологий' name='stack' />
      <TextareaField
        placeholder='Описание последнего проекта'
        name='last-project'
      /> */}

      <div className='form__footer'>
        <button
          type='reset'
          className='button button_clear'
          onClick={() => console.log(1)}
        >
          Очистить
        </button>
        <button
          type='button'
          className='button'
          onClick={() => {
            console.log(name);
          }}
        >
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Form;
