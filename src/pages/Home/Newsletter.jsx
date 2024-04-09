const Newsletter = () => {
  return (
    <section className="max-container mt-16 flex justify-center">
      <div className="bg-black text-white rounded w-full md:w-3/4 xl:w-2/4 px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="text-xl font-semibold tracking-tight">
            Sign up to our Newsletter
          </h4>
          <p className="text-sm leading-none text-gray-300">
            and stay up to date with our latest news
          </p>
        </div>
        <div className="flex flex-1 gap-2">
          <input
            type="email"
            inputMode="email"
            placeholder="Enter your email here..."
            className="py-3 px-7 text-black text-sm font-medium rounded focus:outline-none hover:bg-neutral-300 transition-colors w-full flex-1 placeholder:text-gray-400"
          />
          <button className="button bg-white text-black text-sm hover:bg-neutral-300">
            Sign up
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
