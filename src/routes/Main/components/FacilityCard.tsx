import { CgWebsite } from "react-icons/cg";
import { BsHospitalFill } from "react-icons/bs";

import { Place } from "../../../types/Place";

interface FacilityCardProps {
  facility: Place;
}

function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="w-full md:w-[90%] h-auto bg-white md:rounded-[24px] flex flex-col justify-center items-center md:drop-shadow-[0_15px_10px_rgba(25,25,25,0.15)]">
      <div className="w-full flex justify-center items-center">
        {facility.img_url !== undefined ? (
          <img
            src={facility.img_url}
            alt="Picture of the facility"
            className="w-full rounded-t-lg"
          />
        ) : (
          <BsHospitalFill size={200} />
        )}
      </div>
      <div className="w-full flex flex-col justify-start items-start px-4 py-2">
        <h1 className="text-xl text-left font-lexend text-black mt-2">
          {facility.title}
        </h1>
        <div className="mt-4">
          {facility.open_state && (
            <p className="font-lexend text-gray-600">{facility.open_state}</p>
          )}
          <p className="text-gray-600 text-md font-lexend">
            {facility.address}
          </p>
          <p className="text-gray-600 text-md font-lexend">
            {facility.phone_number}
          </p>
        </div>

        <div className="w-full flex flex-row justify-around items-center mt-2">
          {facility.website && (
            <a href={facility.website} target="_blank">
              <CgWebsite size={30} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FacilityCard;
