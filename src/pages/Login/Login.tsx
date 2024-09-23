import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginAccount } from 'src/apis/auth.api'
import { ResponseAPI } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'src/components/Input'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm({
    resolver: yupResolver(loginSchema)
  })
  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        // Redirect to home page
        // history.push('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseAPI<FormData>>(error)) {
          const formErrors = error.response?.data.data
          if (formErrors) {
            Object.keys(formErrors).forEach((key) => {
              setError(key as keyof FormData, {
                message: formErrors[key as keyof FormData],
                type: 'server'
              })
            })
          }
        }
      }
    })
    console.log(data)
  })
  const values = watch()
  console.log(values, errors)

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10  rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn đã chưa tài khoản?</span>
                  <Link to='/register' className='text-red-500 ml-1'>
                    Đăng ký
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
