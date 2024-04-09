import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"

import "swiper/css"
import "swiper/css/scrollbar"

const CATEGORIES = [
  {
    name: "Hypercars",
    image: "/cars/Valykrie.png",
  },
  {
    name: "Supercars",
    image: "/cars/R8-V10-Plus.png",
  },
  {
    name: "Sport cars",
    image: "/cars/M2-2023.png",
  },
  {
    name: "Combi",
    image: "/cars/RS4-Avant.png",
  },
  {
    name: "SUV",
    image: "/cars/Formentor-VZ5.png",
  },
]

const Browse = () => {
  return (
    <section className="max-container">
      <div className="mt-14">
        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-8">
          Browse by car type
        </h2>
      </div>

      <Swiper
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        slidesPerView={1.5}
        spaceBetween={16}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {CATEGORIES.map((category) => (
          <SwiperSlide key={category.name}>
            <div className="group/category flex flex-col px-6 py-5">
              <img
                src={category.image}
                alt={category.name}
                className="group-hover/category:scale-105 transition-all"
              />
              <h3 className="text-2xl font-semibold tracking-tight text-center group-hover/category:text-red-500 transition-colors">
                {category.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Browse
