import { best, insurance, fast, experts } from "../../assets/icons"

const WhyUs = () => {
  return (
    <section className="max-container">
      <div className="w-full flex items-center justify-center flex-col mt-14">
        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          Why choose us
        </h2>
        <p className="text-gray-500 mb-8 leading-7 max-w-2xl text-center">
          From our unwavering dedication to customer satisfaction to our
          commitment to providing innovative solutions, we strive to exceed your
          expectations at every turn.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center">
            <img src={best} className="w-16 h-16" />
            <h3 className="text-2xl font-semibold tracking-tight block md:hidden ml-4">
              Best Cars
            </h3>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight hidden md:block">
              Best Cars
            </h3>
            <p className="leading-7 text-gray-500">
              Our extensive selection of top-quality vehicles ensures that
              you&apos;ll find the perfect match for your needs, whether
              you&apos;re seeking luxury, efficiency, or versatility.
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center">
            <img src={fast} className="w-16 h-16" />
            <h3 className="text-2xl font-semibold tracking-tight block md:hidden ml-4">
              Fastest Customer Service
            </h3>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight hidden md:block">
              Fastest Customer Service
            </h3>
            <p className="leading-7 text-gray-500">
              We prioritize your needs and pride ourselves on delivering prompt
              and efficient customer service, ensuring that any questions or
              concerns are addressed swiftly so you can get back to enjoying the
              open road.
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center">
            <img src={insurance} className="w-16 h-16" />
            <h3 className="text-2xl font-semibold tracking-tight block md:hidden ml-4">
              Insurance
            </h3>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight hidden md:block">
              Insurance
            </h3>
            <p className="leading-7 text-gray-500">
              With our comprehensive insurance options, you can drive with
              confidence knowing that you&apos;re protected against unexpected
              events on the road, giving you peace of mind wherever your journey
              takes you.
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center">
            <img src={experts} className="w-16 h-16" />
            <h3 className="text-2xl font-semibold tracking-tight block md:hidden ml-4">
              Professional Crew
            </h3>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight hidden md:block">
              Professional Crew
            </h3>
            <p className="leading-7 text-gray-500">
              Our experienced and dedicated team is here to assist you every
              step of the way, providing expert guidance and personalized
              support to make your car-buying experience smooth and hassle-free.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default WhyUs
