import { Place } from "../types/Place";
import { getDetails } from "./getFacilityDetails";

export const getFacilities = async (location: { lat: number, lng: number }) => {
    
    let places: Place[] = [];

    try {
        const url = `https://wsch3q22acd5vlytpjss7dtq3m0unjjl.lambda-url.us-east-2.on.aws?lat=${location.lat}&lng=${location.lng}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('fetch response not ok');
        const result = await response.json();
        result.results.forEach((facility) => {
            places.push({
            location: {
                lat: facility.geometry.location.lat,
                lng: facility.geometry.location.lng,
            },
            name: facility.name,
            open_now: facility.opening_hours?.open_now,
            place_id: facility.place_id,
            rating: facility.rating,
            formatted_address: "",
            formatted_phone_number: "",
            url: "",
            website: "",
            wheelchair_accessible_entrance: false,
            open_time: "",
            close_time: "",
            img: "",
            });
        });
        places.forEach( async (facility) => {
            const detail = await getDetails(facility);
            facility.formatted_address = detail.result.formatted_address;
            facility.formatted_phone_number = detail.result.formatted_phone_number;
            facility.url = detail.result.url;
            facility.website = detail.result.website;
            facility.open_time = detail.result.current_opening_hours?.periods[0].open.time;
            facility.close_time = detail.result.current_opening_hours?.periods[0].close.time;
        });
        console.log(places);
        

        return result;
    } catch (error) {
        console.log(error);
    }
}
