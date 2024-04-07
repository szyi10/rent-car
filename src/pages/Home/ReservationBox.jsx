import { useState } from "react"
import {
  location,
  startDate as startIcon,
  endDate as endIcon,
} from "../../assets/icons"

const ReservationBox = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const today = new Date()
  const todayFormatted = today.toISOString().split("T")[0]

  return (
    <section className="max-container mt-12">
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          Drive now!
        </h2>
        <p className="text-gray-500 mb-8 leading-7">
          Check the available options in your location.
        </p>
      </div>
      <div className="bg-red-500 w-3/4 mx-auto rounded flex items-center justify-between px-6 py-5">
        {/* LOCATION */}
        <div className="w-1/4 flex flex-col items-start gap-1.5">
          <div className="flex items-center gap-1">
            <img src={location} alt="Location icon" height={18} width={18} />
            <span className="uppercase font-medium tracking-wider text-red-950">
              Location
            </span>
          </div>
          <select className="bg-transparent border-none font-semibold text-white text-lg rounded-lg focus:outline-none w-full">
            <option value="" hidden>
              Choose location
            </option>
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Canada">Canada</option>
            <option value="Croatia">Croatia</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Spain">Spain</option>
            <option value="United States">United States</option>
          </select>
        </div>
        {/* CHECK IN */}
        <div className="w-1/4 border-l border-l-red-800 flex flex-col items-start pl-6 gap-1.5">
          <div className="flex items-center gap-1">
            <img src={startIcon} alt="Calendar icon" height={18} width={14} />
            <span className="uppercase font-medium tracking-wider text-red-950">
              Check in
            </span>
          </div>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            min={todayFormatted}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-transparent border-none font-semibold text-white text-lg rounded-lg focus:outline-none w-full"
          />
        </div>
        {/* CHECK OUT */}
        <div className="w-1/4 border-l border-l-red-800 flex flex-col items-start pl-6 gap-1.5">
          <div className="flex items-center gap-1">
            <img src={endIcon} alt="Calendar icon" height={18} width={18} />
            <span className="uppercase font-medium tracking-wider text-red-950">
              Check out
            </span>
          </div>
          <input
            type="date"
            id="endDate"
            value={endDate}
            min={startDate}
            max="2025-01-31"
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-transparent border-none font-semibold text-white text-lg rounded-lg focus:outline-none w-full "
          />
        </div>
        {/* BUTTON */}
        <button className="button">Search offers</button>
      </div>
    </section>
  )
}

export default ReservationBox
