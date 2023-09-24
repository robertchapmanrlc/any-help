import { Place } from "../types/Place";

export const getDetails = async (place: Place) => {
    try {
        const url = `https://cdffxp2q5yhztok3dwzwo2mjya0flpfw.lambda-url.us-east-2.on.aws?place_id=${place.place_id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}