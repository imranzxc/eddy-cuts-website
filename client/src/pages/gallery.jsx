const Gallery = () => {
  return (
    <>
      <main>
        <section className="gallery section">
          <div className="container">
            <div className="gallery_header section_header">
              <h2 className="gallery_header-title section_header-title" data-aos="fade-right">
                Наши клиенты
              </h2>
              <span
                className="gallery_header-subtitle section_header-subtitle"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Галлерея
              </span>
            </div>
            <div className="gallery_content">
              <ul className="gallery_content-filters d-flex flex-wrap">
                <li className="list-item">
                  <a data-target="all" className="gallery_content-filters_filter current" href="#">
                    Все
                  </a>
                </li>
                <li className="list-item">
                  <a data-target="haircut" className="gallery_content-filters_filter" href="#">
                    Стрижка волос
                  </a>
                </li>
                <li className="list-item">
                  <a data-target="beard" className="gallery_content-filters_filter" href="#">
                    Борода и усы
                  </a>
                </li>
              </ul>
              <div className="gallery_content-media">
                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["haircut"]'
                  data-order="1"
                >
                  <a
                    className="aspect"
                    href="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                    data-caption="Image caption"
                  >
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          srcSet="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["beard"]'
                  data-order="2"
                >
                  <a
                    className="aspect"
                    href="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                    data-caption="Image caption"
                  >
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          srcSet="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["beard", "haircut"]'
                  data-order="3"
                >
                  <a
                    className="aspect"
                    href="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                    data-caption="Image caption"
                  >
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          srcSet="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["beard", "haircut"]'
                  data-order="4"
                >
                  <a
                    className="aspect"
                    href="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                    data-caption="Image caption"
                  >
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          srcSet="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["haircut"]'
                  data-order="5"
                >
                  <a
                    className="aspect"
                    href="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                    data-caption="Image caption"
                  >
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          srcSet="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>

                <figure
                  className="gallery_content-media_item col-md-6"
                  data-groups='["haircut"]'
                  data-order="5"
                >
                  <a
                    className="aspect"
                    href="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                    data-caption="Image caption"
                  >
                    <div className="aspect_inner">
                      <picture>
                        <source
                          data-srcset="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          srcSet="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          type="image/webp"
                        />
                        <img
                          className="gallery-img lazy"
                          data-src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          src="https://i3.photo.2gis.com/images/branch/0/30258560055648549_e8a2.jpg"
                          alt="media"
                        />
                      </picture>
                    </div>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="pagination gallery_pagination d-flex justify-content-center align-items-center !p-16 w-full">
        <a className="pagination_control btn btn--revert theme-element" href="#">
          Обратно
        </a>
        <ul className="pagination_pages d-flex">
          <li className="pagination_pages-page">
            <a className="theme-element btn btn--revert" href="#">
              1
            </a>
          </li>
          <li className="pagination_pages-page">
            <a className="theme-element btn btn--revert current" href="#">
              2
            </a>
          </li>
          <li className="pagination_pages-page">
            <a className="theme-element btn btn--revert" href="#">
              3
            </a>
          </li>
        </ul>
        <a className="pagination_control btn btn--revert theme-element" href="#">
          Следующий
        </a>
      </div>
    </>
  );
};

export default Gallery;
