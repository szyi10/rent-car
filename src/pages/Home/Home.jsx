import Browse from "./Browse"
import ExclusiveOffers from "./ExclusiveOffers"
import Hero from "./Hero"
import ReservationBox from "./ReservationBox"
import WhyUs from "./WhyUs"
import TrendingCars from "./TrendingCars"
import Newsletter from "./Newsletter"

const Home = () => {
  return (
    <main className="mb-96">
      <Hero />
      <ReservationBox />
      <ExclusiveOffers />
      <Browse />
      <TrendingCars />
      <WhyUs />
      <Newsletter />
    </main>
  )
}

export default Home
