export default function NewsLetterSignUp() {
  return (
    <div className="bg-cozey-Sky-Bold px-4 py-8 lg:px-20 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-4">
      <p className="text-cozey-Fog-Soft text-base lg:text-md font-medium lg:w-[480px]">
        Join the Cozey Family to stay ahead on product launches and exclusive
        content.
      </p>
      <div className="bg-white rounded-full shadow-sm p-4 flex items-center justify-between w-full py-2 px-2 lg:pl-8 lg:py-3 lg:pr-3 lg:w-[700px]">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 p-2 text-sm lg:text-base text-gray-700"
        />
        <button className="bg-cozey-Midnight-Bold hover:bg-cozey-Midnight-Balanced text-white rounded-3xl lg:rounded-full py-2 px-3 ml-2 lg:py-4 lg:px-8 lg:ml-4">
          Sign up
        </button>
      </div>
    </div>
  );
}
