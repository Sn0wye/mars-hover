export function Loading() {
  return (
    <div className='flex h-screen w-screen items-center justify-center overflow-hidden'>
      <svg
        className='animate-spin w-12 h-12'
        xmlns='http://www.w3.org/2000/svg'
        width='192'
        height='192'
        fill='#000000'
        viewBox='0 0 256 256'
      >
        <rect width='256' height='256' fill='none'></rect>
        <path
          d='M168,40.7a96,96,0,1,1-80,0'
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></path>
      </svg>
    </div>
  );
}
