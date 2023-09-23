
export type Place = {
  name: string;
  location: {
    lat: number,
    lng: number
  },
  open_now?: boolean,
  place_id: string,
  rating: number,
  formatted_address: string,
  formatted_phone_number: string,
  url: string,
  website: string,
  wheelchair_accessible_entrance: boolean,
  open_time: string,
  close_time: string,
  img: string
};