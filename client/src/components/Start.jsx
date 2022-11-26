const Start = () => {
  return (
    <section className="promo section">
      <div className="container">
        <div className="promo_content">
          <h2 className="promo_content-header" data-aos="fade-left">
            Готовы к переменам?
          </h2>
          <p className="promo_content-text text mt-2" data-aos="fade-right">
            В барбершоп Eddy Cuts традиционно приходят за классической мужской стрижкой. Если
            помните, раньше в салонах красоты ее называли «модельной» стрижкой. Почему мы любим
            классику? Потому что она всегда в моде, подходит каждому мужчине и уместна к любому
            случаю, от приема у английской королевы до визита к стоматологу. Любая услуга в Eddy
            Cuts выполняется с соблюдением строгих стандартов.
          </p>
          <div className="wrapper mt-3" data-aos="fade-up" >
            <a className="promo_content-btn btn theme-element" href="#">
              Записаться сейчас
            </a>
          </div>
        </div>
      </div>
      <span className="overlay"></span>
    </section>
  );
};

export default Start;
