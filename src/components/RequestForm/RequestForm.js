import React from "react";
import requeststyle from './RequestForm.module.css';



function RequestForm() {
  return (
      <section className={requeststyle.wrapper}>

          <div className={requeststyle.text}>
              <h2>не нашли то, что искали?</h2>
              <h3>свяжитесь с нами, мы вам поможем!</h3>
              <p>Заполните форму и мы свяжемся с Вами в ближайшее время</p>
          </div>
          <div className={requeststyle.form}>
              <form action='/' method='GET'>
                  <input className={requeststyle.userName} type='text' placeholder='Ваше имя'  name='userName' required/>
                  <input className={requeststyle.userPhone} type='tel' placeholder='Ваш телефон' name='userPhone' required/>
                  <input className={requeststyle.submit_form} type='submit' value='Отправить'/>
                  <label className={requeststyle.personal_date}>
                      <input type='checkbox' value='personal_date'/>
                      Согласен на обработку <a href='/'>персональных данных</a>
                  </label>


              </form>
          </div>

      </section>
  );
}

export default RequestForm;
