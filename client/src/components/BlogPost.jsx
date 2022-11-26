import dayjs from 'dayjs';

const BlogPost = ({ news }) => {

  return (
    <li className="feed_posts-post col-md-6 col-xl-4 blog_width" data-aos="fade-up">
      <a
        className="feed_posts-post_wrapper d-flex flex-column justify-content-between"
        href="post.html"
      >
        <div className="media">
          <picture>
            <source
              data-srcset={news.ImageUrl ? `http://localhost:4444${news.ImageUrl}` : ''}
              srcSet={news.ImageUrl ? `http://localhost:4444${news.ImageUrl}` : ''}
              type="image/webp"
            />
           
            <img
              className="lazy post-img"
              data-src={news.ImageUrl ? `http://localhost:4444${news.ImageUrl}` : ''}
              src={news.ImageUrl ? `http://localhost:4444${news.ImageUrl}` : ''}
              alt="Лучший барбершоп в Грозном"
            />
          </picture>
        </div>
        <div className="main d-flex flex-column justify-content-between flex-grow-1">
          <h3 className="title break-words">{news.title}</h3>
          <div className="info highlight">
            <span className="info_date">{dayjs(news.createdAt).format('HH:MM - DD.MM.YYYY') }</span>
          </div>
          <p className="preview break-words">{news.text}</p>
        </div>
      </a>
    </li>
  );
};

export default BlogPost;
