import AllCropService from "@/components/AllCropService";

const Services = () => {
  return (
    <>
      <main className="services section">
        <div className="container d-flex flex-column flex-xl-row flex-lg-wrap justify-content-between">
          <div className="services_header col-xl-6 section_header">
            <h2 className="services_header-title section_header-title" data-aos="fade-right">
              МЫ ПРЕДОСТАВЛЯЕМ СЕРВИС ВЫСОКОГО КАЧЕСТВА
            </h2>
            <span
              className="services_header-subtitle section_header-subtitle"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-once="false"
            >
              Услуги
            </span>
          </div>
          <ul className="services_list flex-grow-1 d-md-flex flex-wrap max-w-2xl lg:max-w-6xl">
            <AllCropService />
          </ul>
        </div>
      </main>
    </>
  );
};

export default Services;
