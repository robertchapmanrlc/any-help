
import { Place } from "../../../types/Place.ts";
import FacilityList from "./FacilityList";
import Map from "./Map.tsx";
import { facilities as places } from "../../../../template.ts";
import { useEffect, useState } from "react";
import { getFacilities } from '../../../api/fetchFacilities.ts';

type Coordinates = {
  lat: number,
  lng: number
}

function MainContent() {

  const [coordinates, setCoordinates] = useState<Coordinates | undefined>(undefined);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const initialCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCoordinates(initialCoords);
    });
  } ,[]);

  // useEffect(() => {
  //   if(coordinates !== undefined)
  //     getFacilities(coordinates);
  // },[coordinates]);

  const facilities: Place[] = [];
  const unfiltered_results = places.local_results;
  unfiltered_results.forEach((result) => {
    facilities.push({
      id: result.position,
      title: result.title,
      coords: {
        lat: result.gps_coordinates.latitude,
        lng: result.gps_coordinates.longitude,
      },
      address: result.address,
      phone_number: result.phone,
      website: result.website,
      open_state: result.open_state,
      img_url: result.thumbnail
    });
  });

  return (
    <div className="w-full h-[calc(100%-6rem)] md:h-[calc(100%-7.5rem)] md:mt-14 flex md:flex-row flex-col-reverse justify-end md:justify-start items-center">
      <FacilityList facilities={facilities} />
      <Map facilities={facilities} />
    </div>
  );
}

export default MainContent