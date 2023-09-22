
import { Rating } from "@mui/material";
import { CgWebsite } from 'react-icons/cg';
import { LiaDirectionsSolid } from 'react-icons/lia';
import { BsX, BsCheck2 } from 'react-icons/bs';

interface FacilityCardProps {
  name: string;
  website: string;
  rating: number;
  address: string;
  phone_number: string;
  maps_url: string;
  img: string;
  open: boolean;
  wheelchair_accessible: boolean;
  open_hours: {
    periods: {
      close: {
        time: string;
      };
      open: {
        time: string;
      };
    }[];
  };
}

const time = (unconverted_time: string) => {
  let hours_str = unconverted_time.substring(0, 2);
  let am_or_pm = Number(hours_str) >= 12 ? ' PM' : ' AM';
  let hours_num = String(Number(hours_str) % 12 || 12);
  return hours_num + ":" + unconverted_time.substring(2) + am_or_pm;
}

function FacilityCard({ name, website, rating, address, phone_number, maps_url, img, open, open_hours, wheelchair_accessible }: FacilityCardProps) {

  const open_hours_message = (open: boolean) => {

    if (open) {
      return "Closes " + time(open_hours.periods[0].close.time);
    }

    return "Opens " + time(open_hours.periods[0].open.time);
  }

  return (
    <div className="w-full md:w-[90%] h-auto bg-white md:rounded-[24px] flex flex-col justify-center items-center p-4 md:drop-shadow-[0_15px_10px_rgba(25,25,25,0.15)]">
      <img
        src={img}
        alt="Picture of the facility"
        className="w-full rounded-lg"
      />
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="text-xl text-left font-lexend text-black mt-2">
          {name}
        </h1>
        <div className="flex flex-row items-center gap-1 -mt-3">
          <p className="text-black/50 text-md font-lexend mt-2">{rating}</p>
          <Rating
            className="mt-2"
            defaultValue={rating}
            precision={0.1}
            size="medium"
            readOnly
          />
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          {open ? (
            <p className="text-green-500 font-lexend">Open</p>
          ) : (
            <p className="text-red-500 font-lexend">Closed</p>
          )}
          <p className="text-black/50">{open_hours_message(open)}</p>
        </div>
        <p className="text-black text-md font-lexend mt-2">{address}</p>
        <p className="text-black text-md font-lexend">{phone_number}</p>

        <p className="text-black text-md font-lexend">
          Wheelchair Accessible:{" "}
          {wheelchair_accessible ? (
            <BsCheck2 className="inline" size={20} />
          ) : (
            <BsX className="inline" size={20} />
          )}
        </p>
        <div className="w-full flex flex-row justify-around items-center mt-2">
          <a href={website}>
            <CgWebsite size={30} />
          </a>
          <a href={maps_url}>
            <LiaDirectionsSolid size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FacilityCard;
