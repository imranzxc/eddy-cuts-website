const Product = ({ products }) => {
  return (
    <div className="relative block main-color">
      <button
        type="button"
        name="wishlist"
        className="absolute p-2 text-white main-color rounded-full right-4 top-4"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button>

      <img
        loading="lazy"
        alt="Гель для душа"
        className="w-full h-56 lg:h-72 main-color"
        src="https://thumb.tildacdn.com/tild3235-6465-4661-b731-653032373462/-/cover/360x320/center/center/-/format/webp/_.jpg"
      />

      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-red-600 text-white">
          Новый
        </span>

        <h5 className="mt-4 text-lg font-bold">{products.title}</h5>

        <p className="mt-2 text-sm font-medium text-gray-600">{products.price}</p>

        <button
          name="add"
          type="button"
          className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-red-600 rounded-sm"
        >
          <span className="text-sm font-medium text-white">Добавить в корзину</span>

          <svg
            className="w-5 h-5 ml-1.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
