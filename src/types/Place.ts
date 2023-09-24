
export type Place = {
  id: number,
  title: string,
  coords: {
    lat: number,
    lng: number
  },
  address?: string,
  phone_number?: string,
  website?: string,
  open_state?: string,
  img_url?: string
};