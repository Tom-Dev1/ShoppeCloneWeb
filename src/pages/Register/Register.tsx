import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import Input from 'src/components/Input'
import { registerAccount } from 'src/apis/auth.api'
import { Omit, omit } from 'lodash'
import { ResponseAPI } from 'src/types/utils.type'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

type FormData = Schema
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  // React Query for registration
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        // Redirect to home page
        // history.push('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseAPI<Omit<FormData, 'confirm_password'>>>(error)) {
          const formErrors = error.response?.data.data
          // Option 2
          if (formErrors) {
            Object.keys(formErrors).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formErrors[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'server'
              })
            })
          }

          // Option 1
          // if (formErrors?.email) {
          //   setError('email', { message: formErrors.email, type: 'server' })
          // }
          // if (formErrors?.password) {
          //   setError('password', { message: formErrors.password, type: 'server' })
          // }
        }
      }
    })
    console.log(data)
  })
  // console.log('errors', errors)
  // const value = watch()
  // console.log('value', value)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
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
              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Password'
                autoComplete='on'
              />

              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  Đăng Ký
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn đã có tài khoản?</span>
                  <Link to='/login' className='text-red-500 ml-1'>
                    Đăng nhập
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
