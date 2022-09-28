import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(1);
  }

  render() {
    return (
      <form className='form' action='#'>
        <h1 className='form__header'>Создание анкеты</h1>

        <div className='form__block block'>
          <div className='form__field block__half'>
            <label htmlFor='name'>Имя:</label>
            <input type='text' name='name' id='name' placeholder='Имя' />
          </div>
          <div className='form__field block__half'>
            <label htmlFor='surname'>Фамилия:</label>
            <input
              type='text'
              name='surname'
              id='surname'
              placeholder='Фамилия'
            />
          </div>
        </div>

        <div className='form__block block'>
          <div className='form__field block__half'>
            <label htmlFor='phone'>Телефон:</label>
            <input type='tel' name='phone' id='phone' placeholder='Телефон' />
          </div>
          <div className='form__field block__half'>
            <label htmlFor='birthday'>Дата рождения:</label>
            <input
              type='date'
              name='birthday'
              id='birthday'
              placeholder='Дата рождения'
            />
          </div>
        </div>

        <div className='form__field'>
          <label htmlFor='website'>Сайт:</label>
          <input type='url' name='website' id='website' placeholder='Сайт' />
        </div>

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
          <button type='button' className='button' onClick={this.clickHandler}>
            Отправить
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
