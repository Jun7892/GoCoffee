
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'coffee' | 'dessert' | 'special';
}

export interface CafeInfo {
  name: string;
  taglines: string[];
  location: string;
  phone: string;
  email: string;
  hours: string;
  rentalInfo: string;
  instagramUrl: string;
  naverMapUrl?: string;
  googleMapUrl?: string;
}
