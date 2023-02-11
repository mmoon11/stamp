export type Eatery = {
  city: string;
  country: string;
  display_phone: string;
  id: string;
  image_url: string;
  is_closed: boolean;
  name: string;
  price: string;
  rating: number;
  review_count: number;
  state: string;
};

export type OriginalEatery = {
  city: string;
  country: string;
  display_phone: string;
  id: string;
  image_url: string;
  is_closed: boolean;
  name: string;
  price: string;
  rating: number;
  review_count: number;
  state: string;
};

export type Itinerary = {
  dates: string[] | undefined;
  eateries: OriginalEatery[];
  id: string;
  image: string;
  location: string;
  sights: string[];
};

export type obj = {
  location: string;
  eateries: OriginalEatery[];
  sights: string[];
  image: string;
  dates: string[] | undefined;
  id: string;
};

export type idList = obj[];

export type Category = {
  alias: string;
  title: string;
};

type Location = {
  address1: string;
  address2: string | null;
  address3: string | null;
  city: string;
  country: string;
  display_address: string[];
  state: string;
  zip_code: string;
};

export type Result = {
  alias: string;
  categories: Category[];
  coordinates: number[];
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: Location;
  name: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: string[];
  url: string;
};

export type Results = Result[];
