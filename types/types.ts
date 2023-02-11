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

type OriginalEatery = {
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
  dates: string[] | undefined | null;
  eateries: OriginalEatery[] | undefined | null;
  id: string | undefined | null;
  image: string | undefined | null;
  location: string | undefined | null;
  sights: string[] | undefined | null;
};

export type obj = {
  location: string;
  eateries: any;
  sights: any;
  image: string;
  dates: any;
};

export type idList = obj[];
