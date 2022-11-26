import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsAuth } from "../redux/slice/auth";

const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))

    if (!data.payload) {
      return alert('Не удалось авторизоваться!')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }

    router.push('/admin')
  }

  useEffect(() => {
    if (isAuth) {
      router.push('/')
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 pt-24">
        <h1 className="text-lg font-bold">Вход</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
          <input
            type="email"
            name="email"
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent text-sm text-black"
            placeholder="Электронный адрес"
            {...register('email', { required: true,  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
          />
         {errors.email && "Введите корректную электронную почту"}

          <input
            type="password"
            name="password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent text-sm text-black"
            placeholder="Пароль"
            {...register('password', { required: true })}
          />
          <button
            type="submit"
            disabled={!isValid}
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white bg-red-600 hover:text-white cursor-pointer inline-flex w-full justify-center items-center font-medium hover:bg-slate-900"
          >
            Войти
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Нет аккаунта?
              <Link href={'/register'}>
                <a className="ml-1 font-medium text-white hover:text-red-700">Зарегистрироваться</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
