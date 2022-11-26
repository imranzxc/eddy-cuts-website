import Link from 'next/link';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { fetchRegister, selectIsAuth } from "../redux/slice/auth";

const Register = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться!')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }

    router.push('/login')
  }

  useEffect(() => {
    if (isAuth) {
      router.push('/')
    }
  }, [])

  const isEmail = (email) => {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i.test(email);
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 pt-24">
        <h1 className="text-lg font-bold">Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
          <input
            type="text"
            name="full-name"
            className="px-4 py-3 w-full rounded-md bg-gray-100 text-sm text-black"
            placeholder="Полное имя"
            {...register('fullName', { required: true })}
          />
          {errors.fullName && "Введите корректное имя"}
          
          <input
            type="email"
            name="email"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 text-sm text-black border"
            placeholder="Электронный адрес"
            {...register('email', { required: true, validate: input => isEmail(input) })}
          />
        {errors.email && "Введите корректную электронную почту"}

          <input
            type="password"
            name="password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 text-sm text-black"
            placeholder="Пароль"
            {...register('password', { required: true, minLength: 6})}
          />
          {errors.password && "Минимальная длина пароля 6 символов"}

          <button
            type="submit"
            disabled={!isValid}
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent bg-red-700 text-white cursor-pointer inline-flex w-full justify-center items-center font-medium hover:bg-slate-900"
          >
            Зарегистрироваться
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Уже зарегистрированы?
              <Link href={'/login'}>
                <a className="ml-1 font-medium text-white hover:text-red-700">Войти</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
