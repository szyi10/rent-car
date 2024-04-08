import { cars } from "../../lib/cars"

const Cars = () => {
  return (
    <main className="max-container pt-10">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
        Our Cars
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car.model}
            className="flex flex-col border rounded px-4 py-6"
          >
            <img src={`/cars/${car.image}`} alt={car.model} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                {car.brand} {car.model}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Cars
