import { cars } from "../../lib/cars"

const TrendingCars = () => {
  return (
    <section className="bg-gray-300 mt-10 py-10">
      <div className="max-container">
        <div className="w-full flex items-center justify-center flex-col">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
            Trending Cars
          </h2>
          <p className="text-gray-500 mb-8 leading-7">
            Most popular choices on our site.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col border rounded px-4 py-6">
            <img src={`/cars/${cars[3].image}`} alt={cars[3].model} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                {cars[3].brand} {cars[3].model}
              </h3>
            </div>
          </div>
          <div className="flex flex-col border rounded px-4 py-6">
            <img src={`/cars/${cars[14].image}`} alt={cars[14].model} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                {cars[14].brand} {cars[14].model}
              </h3>
            </div>
          </div>
          <div className="flex flex-col border rounded px-4 py-6">
            <img src={`/cars/${cars[16].image}`} alt={cars[16].model} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                {cars[16].brand} {cars[16].model}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingCars
