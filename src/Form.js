import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.websiteInput = React.createRef();
    this.aboutInput = React.createRef();
    this.stackInput = React.createRef();
    this.lastProjectInput = React.createRef();
  }

  render() {
    return (
      <form className='form' action='#'>
        <h1 className='form__header'>Создание анкеты</h1>

        <div className='form__block block'>
          <div className='form__field block__half'>
            <label htmlFor='name'>Имя:</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Имя'
              ref={this.nameInput}
            />
          </div>
          <div className='form__field block__half'>
            <label htmlFor='surname'>Фамилия:</label>
            <input
              type='text'
              name='surname'
              id='surname'
              placeholder='Фамилия'
              ref={this.surnameInput}
            />
          </div>
        </div>

        <div className='form__block block'>
          <div className='form__field block__half'>
            <label htmlFor='phone'>Телефон:</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Телефон'
              ref={this.phoneInput}
            />
          </div>
          <div className='form__field block__half'>
            <label htmlFor='birthday'>Дата рождения:</label>
            <input
              type='date'
              name='birthday'
              id='birthday'
              placeholder='Дата рождения'
              ref={this.birthdayInput}
            />
          </div>
        </div>

        <div className='form__field'>
          <label htmlFor='website'>Сайт:</label>
          <input
            type='url'
            name='website'
            id='website'
            placeholder='Сайт'
            ref={this.websiteInput}
          />
        </div>

        <div className='form__field'>
          <label htmlFor='about'>О себе:</label>
          <textarea
            name='about'
            id='about'
            rows='7'
            placeholder='О себе'
            ref={this.aboutInput}
          ></textarea>
        </div>

        <div className='form__field'>
          <label htmlFor='stack'>Стек технологий:</label>
          <textarea
            name='stack'
            id='stack'
            rows='7'
            placeholder='Стек технологий'
            ref={this.stackInput}
          ></textarea>
        </div>

        <div className='form__field'>
          <label htmlFor='last-project'>Описание последнего проекта:</label>
          <textarea
            name='last-project'
            id='last-project'
            rows='7'
            placeholder='Описание последнего проекта'
            ref={this.lastProjectInput}
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
              const data = {
                name: this.nameInput.current.value,
                surname: this.surnameInput.current.value,
                phone: this.phoneInput.current.value,
                birthday: this.birthdayInput.current.value,
                website: this.websiteInput.current.value,
                about: this.aboutInput.current.value,
                stack: this.stackInput.current.value,
                lastProject: this.lastProjectInput.current.value,
              };
              alert(JSON.stringify(data, null, 2));
            }}
          >
            Отправить
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
