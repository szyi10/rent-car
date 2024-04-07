import { Link } from "react-router-dom"
import homeImage from "../../assets/images/cars/ferrari-296-gtb.png"

const Hero = () => {
  return (
    <section className="max-container flex items-center justify-between">
      <div className="w-full lg:w-[45%]">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Dream. Learn. Drive. <span className="text-red-500">Enjoy!</span>
        </h2>
        <p className="text-gray-500 mb-8 text-lg leading-7">
          Turn Dreams into Reality, Learn from Experts, Drive with Confidence,
          and Embrace Every Moment of the Ride!
        </p>
        <div className="flex items-center gap-3">
          <Link to="/cars" className="button bg-red-500 hover:bg-red-400">
            Explore Options
          </Link>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </div>
      </div>
      <div className="relative hidden lg:block w-[55%]">
        <img src={homeImage} alt="Ferrari 296 GTB" className="scale-x-[-1]" />
        <div className="dots opacity-20 -z-10 absolute top-0 h-full w-full [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_95%)]"></div>
      </div>
    </section>
  )
}

export default Hero
