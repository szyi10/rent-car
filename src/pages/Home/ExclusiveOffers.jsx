import one from "../../assets/images/exclusives/1.jpg"
import two from "../../assets/images/exclusives/2.jpg"
import three from "../../assets/images/exclusives/3.jpg"

const Offer = ({ title, description, image }) => {
  return (
    <div className="exclusive-offer ">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-4 text-sm leading-5 text-gray-300">{description}</p>
      </div>
      <div className="w-full flex justify-end">
        <button className="button bg-red-500 text-white hover:bg-red-400 text-sm">
          Check offer
        </button>
      </div>
      <img src={image} />
    </div>
  )
}

const ExclusiveOffers = () => {
  return (
    <section className="max-container">
      <div className="w-full flex items-center justify-center flex-col mt-16">
        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          Exclusive Offers
        </h2>
        <p className="text-gray-500 mb-8 leading-7">
          Promotions, deals and special offers for you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Offer
          title="Drive real Aston Martin GT3 car"
          description="Experience real GT3 racing action on legendary Suzuka in Japan.
              Learn advanced racing tips with real life proffesional drivers!"
          image={one}
        />
        <Offer
          title="Win 2 weeeks holiday on Nordschleife"
          description="Experience real GT3 racing action on legendary Suzuka in Japan.
              Learn advanced racing tips with real life proffesional drivers!"
          image={two}
        />
        <Offer
          title="New member of our family"
          description="Experience real GT3 racing action on legendary Suzuka in Japan.
              Learn advanced racing tips with real life proffesional drivers!"
          image={three}
        />
      </div>
    </section>
  )
}

export default ExclusiveOffers
