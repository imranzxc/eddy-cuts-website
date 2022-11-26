import { useRouter } from 'next/router'
import { selectIsAuth } from "../redux/slice/auth";
import { addNews } from "../redux/slice/news";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from '../pages/api/axios'
import RUG from 'react-upload-gallery'
import 'react-upload-gallery/dist/style.css' // or scss

const Admin = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const user = useSelector((state) => state.auth)
  const [openTab, setOpenTab] = useState(1);
  const [image, setImageUrl] = useState('');

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      setImageUrl(data.url)
    } catch (e) {
      console.warn(e);
    }
  };

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      title: '',
      text: '',
    },
    mode: 'onChange'
  })
  const onSubmit = async (values) => {
    const data = await dispatch(addNews({ values, image }))
    router.push('/blog')
    return data
  }

  useEffect(() => {
    if (!isAuth && user === false) {
      router.push('/error')
    }
  }, [])

  return (
    <section>
      <div className="pt-36 text-center">
        <h2>Админ панель</h2>
        <hr className="w-2/4 m-auto mt-2 border-2" />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-2/4 m-auto justify-center"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Новости
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Магазин
              </a>
            </li>
            <li className="-mb-px !mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Галлерея
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-3/4 m-auto mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white">Фото</label>
                        <div className="mt-1 pt-2">
                          <input {...register('ImageUrl', { required: true })} type="file" onChange={handleChangeFile} />
                          {image && (
                            <>
                              <img className="h-32 w-32" src={`http://localhost:4444${image}`} alt="Uploaded" />
                            </>
                          )}
                        </div>
                      </div>
                      <div className='flex-1'>
                        <label htmlFor="header" className="block text-sm font-medium text-white">
                          Заголовок
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="header"
                            name="header"
                            rows={3}
                            className="shadow-sm mt-1 block w-full sm:text-sm rounded-sm bg-white pl-1 pt-1 text-black"
                            placeholder="Ваш текст"
                            {...register('title', { required: true })}
                            defaultValue={''}
                          />
                          {errors.title && "Введите название новости"}

                        </div>
                        <label htmlFor="about" className="block text-sm font-medium text-white">
                          Текст
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm mt-1 block w-full sm:text-sm rounded-sm bg-white pl-1 pt-1 text-black"
                            placeholder="Ваш текст"
                            {...register('text', { required: true })}
                            defaultValue={''}
                          />
                          {errors.text && "Минимальная длина текста 50 символов"}

                        </div>
                        <button
                          disabled={!isValid}
                          className='px-4 py-3 bg-white hover:bg-red-700 rounded-md mt-3 hover:text-white text-red-700 text-xs font-bold uppercase '
                        >
                          Создать
                        </button>

                      </div>
                    </div>
                  </form>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white">Фото</label>
                        <div className="mt-1 pt-2">
                          <input type="file" onChange={handleChangeFile} />
                          {image && (
                            <>
                              <img className="h-32 w-32" src={`http://localhost:4444${image}`} alt="Uploaded" />
                            </>
                          )}
                        </div>
                      </div>
                      <div className='flex-1'>
                        <label htmlFor="header" className="block text-sm font-medium text-white mt-3 mb-2">
                          Название товара
                        </label>
                        <div>
                          <textarea
                            id="header"
                            name="header"
                            rows={3}
                            className="shadow-sm mt-1 block w-full sm:text-sm rounded-sm bg-white pl-1 pt-1 text-black"
                            placeholder="Ваш текст"
                          />

                        </div>
                        <label htmlFor="price" className="block text-sm font-medium text-white mt-3 mb-2">
                          Цена товара
                        </label>
                        <div>
                          <textarea
                            id="price"
                            name="price"
                            className="shadow-sm mt-1 block w-full sm:text-sm rounded-sm bg-white pl-1 pt-1 text-black "
                            placeholder="Ваше числовое значение"
                            defaultValue={''}
                          />
                        </div>
                        <label class="block text-sm font-medium text-white mt-3 mb-2" for="grid-state">
                          Категория товара
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Учебный набор</option>
                            <option>Учебные головы</option>
                            <option>Техника</option>
                            <option>Инструменты</option>
                            <option>Принадлежности</option>
                            <option>Сумка и одежда</option>
                            <option>Барбершоп</option>
                            <option>Лицо и тело</option>
                            <option>Косметика для волос</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        <button
                          disabled={!isValid}
                          className='px-4 py-3 bg-white hover:bg-red-700 rounded-md mt-3 hover:text-white text-red-700 text-xs font-bold uppercase '
                        >
                          Добавить
                        </button>

                      </div>
                    </div>
                  </form>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <RUG
                    action="/upload"
                    source={response => response.source}
                    rules={{
                      limit: 10,
                      size: 20,
                    }}
                    accept={['jpg', 'jpeg', 'png']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin;
