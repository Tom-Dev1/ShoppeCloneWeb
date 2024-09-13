import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from 'src/utils/rules'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:gird-cols-5 lg:py-32 py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10  rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8 w-full lg:w-96 '>
                <input
                  type='email'
                  className='p-3 w-full outline-none border border-gray-300 rounded-sm
                  focus:shadow-sm focus:border-gray-500'
                  placeholder='Email'
                  // {...register('email', { ...getRules., deps: 'email' })}
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='p-3 w-full outline-none border border-gray-300 rounded-sm
                  focus:shadow-sm focus:border-gray-500 '
                  placeholder='Password'
                  autoComplete='on'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
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
