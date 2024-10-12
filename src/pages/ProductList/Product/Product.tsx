import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.04rem] hover:shadow-sm duration-100 transition-transform overflow-hidden'>
        <div className='w-full pt-[100%] relative '>
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1550ufu3q0qa7_tn.webp'
            alt=''
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs '>
            [TẶNG QUÀ] Sữa tắm nam 3 in 1 ACEMAN 320ML sữa tắm gội toàn thân hương nước hoa nam lôi cuốn
          </div>
          <div className='flex items-center mt-3'>
            <div className='lint-through max-w-[50%] text-gray-500 truncate'>
              <span className='text-xs'>đ</span>
              <span>10.000</span>
            </div>
            <div className='text-orange truncate ml-1'>
              <span className='text-xs'>đ</span>
              <span>5.999</span>
            </div>
          </div>

          {/* rating star */}
          <div className='mt-3 flex items-center justify-end '>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden ' style={{ width: '50%' }}>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    role='img'
                    className='w-3 h-3 fill-yellow-300'
                  >
                    <path
                      d='m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='ml-2 text-sm'>
              <span>6.9k</span>
              <span className='ml-1 '>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
