export default function NewsLetterSignUp() {
  return (
    <div className='flex flex-col items-center justify-between gap-5 bg-cozey-Sky-Bold px-4 py-8 lg:flex-row lg:gap-4 lg:px-20 lg:py-12'>
      <p className='text-base font-medium text-cozey-Fog-Soft lg:w-[480px] lg:text-md'>
        Join the Cozey Family to stay ahead on product launches and exclusive
        content.
      </p>
      <div className='flex w-full items-center justify-between rounded-full bg-white p-4 px-2 py-2 shadow-sm lg:w-[700px] lg:py-3 lg:pl-8 lg:pr-3'>
        <input
          type='email'
          placeholder='Enter your email address'
          className='flex-1 p-2 text-sm text-gray-700 lg:text-base'
        />
        <button className='ml-2 rounded-3xl bg-cozey-Midnight-Bold px-3 py-2 text-white hover:bg-cozey-Midnight-Balanced lg:ml-4 lg:rounded-full lg:px-8 lg:py-4'>
          Sign up
        </button>
      </div>
    </div>
  );
}
