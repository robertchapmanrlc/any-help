
import { Place } from "../../../types/Place.ts";
import FacilityList from "./FacilityList";
import Map from "./Map.tsx";
import { data, detail } from "../../../../template.ts";


function MainContent() {


  const facilities = data.results;
  const details = detail.result;

  const results = data.results;
  const places: Place[] = [];
  results.forEach((result) => {
    places.push({
      location: {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
      },
      name: result.name,
      open_now: result.opening_hours?.open_now,
      place_id: result.place_id,
      rating: result.rating,
      formatted_address: detail.result.formatted_address,
      formatted_phone_number: detail.result.formatted_phone_number,
      url: detail.result.url,
      website: detail.result.website,
      wheelchair_accessible_entrance:
        detail.result.wheelchair_accessible_entrance,
      open_time: detail.result.current_opening_hours.periods[0].open.time,
      close_time: detail.result.current_opening_hours.periods[0].close.time,
      img: "../../../../template.jpeg",
    });
  });

  console.log(places);

  return (
    <div className="w-full h-[calc(100%-6rem)] md:h-[calc(100%-7.5rem)] md:mt-14 flex md:flex-row flex-col-reverse justify-end md:justify-start items-center">
      <FacilityList places={places} />
      <Map places={places} />
    </div>
  );
}

export default MainContent