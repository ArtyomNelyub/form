import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputFieldBirthday from './input-field-birthday';
import InputFieldName from './input-field-name';
import InputFieldPhone from './input-field-phone';
import InputFieldWebsite from './input-field-website';
import TextareaField from './textarea-field';
import { useFormData } from '../hook/useFormData';
import { APP_ROUTE } from '../const';

function Form() {
  const { setFormData } = useFormData();
  const navigate = useNavigate();

  const fieldData = { value: '', isCorrect: true, isEmpty: false };
  const [name, setName] = useState({ ...fieldData });
  const [surName, setSurName] = useState({ ...fieldData });
  const [phone, setPhone] = useState({ ...fieldData });
  const [birthday, setBirthday] = useState({ ...fieldData });
  const [website, setWebsite] = useState({ ...fieldData });
  const [about, setAbout] = useState({ ...fieldData });
  const [stack, setStack] = useState({ ...fieldData });
  const [lastProject, setLastProject] = useState({ ...fieldData });

  const allSetters = [
    setName,
    setSurName,
    setPhone,
    setBirthday,
    setWebsite,
    setAbout,
    setStack,
    setLastProject,
  ];
  const allValues = [
    name,
    surName,
    phone,
    birthday,
    website,
    about,
    stack,
    lastProject,
  ];

  function clearHandler() {
    allSetters.forEach((setter) => setter({ ...fieldData }));
  }

  function submitHandler() {
    let values = allValues.map((value) => value.value);
    let isEmptyErrors = allValues.map((value) => value.isEmpty);
    let isCorrectErrors = allValues.map((value) => value.isCorrect);

    if (
      values.includes('') ||
      isEmptyErrors.includes(true) ||
      isCorrectErrors.includes(false)
    ) {
      for (let i = 0; i < values.length; i++) {
        if (values[i] === '') {
          allSetters[i]((prev) => ({
            ...prev,
            isEmpty: true,
          }));
        }
      }
    } else {
      setFormData(values);
      navigate(APP_ROUTE.SUMMARY);
    }
  }

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
          label='Телефон'
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

      <TextareaField
        placeholder='О себе'
        name='about'
        values={about}
        setValues={setAbout}
      />
      <TextareaField
        placeholder='Стек технологий'
        name='stack'
        values={stack}
        setValues={setStack}
      />
      <TextareaField
        placeholder='Описание последнего проекта'
        name='last-project'
        values={lastProject}
        setValues={setLastProject}
      />

      <div className='form__footer'>
        <Link to={APP_ROUTE.MAIN} type='reset' className='button__main'>
          На главную
        </Link>
        <button
          type='reset'
          className='form__button form__button_clear'
          onClick={clearHandler}
        >
          Очистить
        </button>
        <button
          type='form__button'
          className='form__button'
          onClick={submitHandler}
        >
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Form;
