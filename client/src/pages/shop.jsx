import Product from '@/components/Product';
import { fetchProducts } from '@/redux/slice/products';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.loading);
  const [sort, setSort] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      const desktopScreen = window.innerWidth < 768;

      document.querySelector('details').open = !desktopScreen;
    });
  }

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const collatore = new Intl.Collator('ru-RU');

  const sortProducts = () => {
    switch (sort) {
      case 'title-asc':
        return products.slice().sort((a, b) => collatore.compare(a.title, b.title));
      case 'price-asc':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.slice().sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:sticky lg:top-4">
            <details open className="overflow-hidden border border-red-600 rounded">
              <summary className="flex items-center justify-between px-5 py-3 main-color lg:hidden">
                <span className="text-sm font-medium text-white">Фильтр</span>

                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <form action="" className="border-t border-red-600 lg:border-t-0">
                <fieldset>
                  <legend className="block w-full px-5 py-3 text-xm font-medium bg-red-600 text-white">
                    Фильтр
                  </legend>

                  <div className="px-5 py-6 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="toy" className="ml-3 text-sm font-medium">
                        Учебный набор
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Учебные головы
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="outdoor"
                        type="checkbox"
                        name="type[outdoor]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="outdoor" className="ml-3 text-sm font-medium">
                        Техника
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Инструменты
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Принадлежности
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Сумка и одежда
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Барбершоп
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Лицо и тело
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label htmlFor="game" className="ml-3 text-sm font-medium">
                        Косметика для волос
                      </label>
                    </div>

                    <div className="pt-2">
                      <button type="button" className="text-xs text-gray-500 underline">
                        Сбросить
                      </button>
                    </div>
                  </div>
                </fieldset>

                <div>{/* Тут может быть новый фильтр */}</div>
              </form>
            </details>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Показывается 6 из 24</p>

              <div className="ml-4">
                <label htmlFor="SortBy" className="sr-only">
                  Сортировка
                </label>

                <select
                  id="SortBy"
                  name="sort_by"
                  onChange={(e) => handleSort(e)}
                  value={sort}
                  className="text-sm border-gray-100 rounded p-2"
                >
                  <option readOnly>Сортировка</option>
                  <option value="title-asc">Название, А-Я</option>
                  <option value="price-asc">Цена, Низкая-Высокая</option>
                  <option value="price-desc">Цена, Высокая-Низкая</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {sortProducts().map((products) => {
                return <Product products={products} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
