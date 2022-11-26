import NumberCounter from 'number-counter';


const Stats = () => {
  return (
    <section className="about section--nopb">
          <div className="container d-xl-flex justify-content-between">
            <div className="about_header section_header col-xl-6">
              <h2 className="about_header-title section_header-title" data-aos="fade-right">
                профессиональный барбершоп
                <span className="linebreak">для мужчин</span>
              </h2>
              <span
                className="about_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Eddy cuts
              </span>
            </div>
            <div className="about_info col-xl-6">
              <p className="about_info-text text" data-aos="fade-left">
              Мода – вопрос денег. Стиль – вопрос индивидуальности.
              Мы поможем вам сохранить безупречный стиль.
              </p>
              <div className="wrapper d-sm-flex">
                <div className="about_info-fact">
                  <h3 className="about_info-fact_title" data-aos="fade-up">
                    работаем с 2015
                  </h3>
                  <p className="about_info-fact_description" data-aos="fade-up">
                    За этот период мы успели обслужить бесчисленное множество клиентов.
                  </p>
                </div>
                <div className="about_info-fact">
                  <h3 className="about_info-fact_title" data-aos="fade-up" data-aos-delay="50">
                  <NumberCounter end={1000} delay={3} />клиентов
                  </h3>
                  <p className="about_info-fact_description" data-aos="fade-up" data-aos-delay="50">
                    Именитые спортсмены и известные личности доверяют нам.
                  </p>
                </div>
              </div>
              <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <a className="about_info-btn btn theme-element" href="about.html">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Stats;